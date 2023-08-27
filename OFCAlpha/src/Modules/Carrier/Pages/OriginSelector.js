/*global google*/
import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import {
  InputAdornment,
  InputLabel,
  ListItem,
  ListItemIcon,
  ListItemText,
  OutlinedInput,
  TextField,
  Typography
} from "@material-ui/core";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import LocationOnTwoToneIcon from "@material-ui/icons/LocationOnTwoTone";
import SampleResponse from "../APIs/GMapsSample.json";
import Divider from "@material-ui/core/Divider";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";

const OriginSelector = ({
  closeHandler,
  type,
  setCarrierState,
  originLocation,
  destinationLocation,
  setOriginLocation,
  setDestinationLocation,
  isConsignment = false
}) => {
  const [address, setAddress] = useState(
    type === "origin"
      ? originLocation
        ? originLocation.mainText
        : ""
      : destinationLocation
      ? destinationLocation.mainText
      : ""
  );
  const [searchOptions, setSearchOptions] = useState({
    componentRestrictions: { country: ["in"] }
  });

  const handleChange = address => {
    setAddress(address);
  };

  const handleSelect = address => {
    geocodeByAddress(address.description)
      /*.then(results => {
        console.log("results are", results);
        // getLatLng(results[0]);
        getLatLng(results);
      })*/

      .then(results => {
        setCarrierState("default");
        type === "origin"
          ? setOriginLocation({
              addressComponents: results[0].address_components,
              formattedSuggestion: address.formattedSuggestion,
              locationName: address.locationName,
              mainText: address?.formattedSuggestion?.mainText,
              description: address.description,
              placeId: address.placeId,
              latLng: {
                lat: results[0].geometry.location.lat(),
                lng: results[0].geometry.location.lng()
              }
            })
          : setDestinationLocation({
              addressComponents: results[0].address_components,
              formattedSuggestion: address.formattedSuggestion,
              locationName: address.locationName,
              mainText: address?.formattedSuggestion?.mainText,
              description: address.description,
              placeId: address.placeId,
              latLng: {
                lat: results[0].geometry.location.lat(),
                lng: results[0].geometry.location.lng()
              }
            });
      })
      .catch(error => console.error("Error", error));
  };

  //TODO - think about using current location
  /*let currentLatitude;
  let currentLongitude;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, fail);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
  function success(position) {
    currentLongitude = position.coords.longitude;
    currentLatitude = position.coords.latitude;
    setSearchOptions({
      location: new google.maps.LatLng(currentLatitude, currentLongitude),
      radius: 2000,
      types: ["address"]
    });
  }

  function fail() {
    console.log("Could not obtain location");
  }*/

  return (
    <Grid container>
      {!isConsignment && (
        <Grid item xs={12} className={"alignLeft"}>
          <ArrowBackRoundedIcon onClick={closeHandler} />
        </Grid>
      )}
      <Grid item xs={12} className={"mt-1"}>
        <PlacesAutocomplete
          value={address}
          onChange={handleChange}
          // onSelect={handleSelect}
          searchOptions={searchOptions}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading
          }) => (
            <div>
              <TextField
                {...getInputProps({
                  className: "location-search-input"
                })}
                fullWidth
                id="outlined-basic"
                label={`Search ${type} point`}
                variant="outlined"
                autoFocus
              />
              <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map(suggestion => {
                  {
                    /*{SampleResponse.map(suggestion => {*/
                  }
                  const className = suggestion.active
                    ? "suggestion-item--active"
                    : "suggestion-item";

                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className
                      })}
                    >
                      <ListItem
                        className={className + " p-0_5"}
                        onClick={() => handleSelect(suggestion)}
                      >
                        <ListItemIcon>
                          <LocationOnTwoToneIcon
                            className={"locationResultsIcon"}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary={suggestion.formattedSuggestion.mainText}
                          primaryTypographyProps={{ className: "75Font" }}
                          secondary={
                            suggestion.formattedSuggestion.secondaryText
                          }
                        />
                      </ListItem>
                      <Divider />
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
      </Grid>
    </Grid>
  );
};

export default OriginSelector;
