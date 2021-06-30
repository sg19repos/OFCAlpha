import React, { useState, useEffect } from "react";
import {
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import SearchIcon from "@material-ui/icons/Search";
import { withStyles } from "@material-ui/core/styles";
import { Send } from "@material-ui/icons";
import { locationSearchURL, mapboxAPIKey } from "../../../common/constants";
import { LocationSearchAPI } from "../APIs";
import { SelectDataObjInResponse } from "../../../common/Store/callAPI/selectors";
import { callAPIAction } from "../../../common/Store/callAPI/actions";
import LocationCard from "./Location";
import AddressDialog from "./AddressDialog";
import AddressCard from "./AddressCard";

const styles = {
  multilineColor: {
    color: "#4330A9"
  }
};

function ConsignmentPickUpLocation(props) {
  const {
    standard,
    label,
    setLocationId,
    locationId,
    classes,
    setAddressCards,
    addressCards
  } = props;
  const [searchDisabled, setSearchDisabled] = useState(true);
  const [locationInput, setLocationInput] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [locationResults, setLocationResults] = useState();
  const [addressDialogOpen, setAddressDialogOpen] = useState(false);
  const [completeAddressValue, setCompleteAddressValue] = useState("");
  const [landmarkValue, setLandmarkValue] = useState("");
  const [directionsValue, setDirectionsValue] = useState("");

  const locationAPIData = useSelector(state =>
    SelectDataObjInResponse(state, LocationSearchAPI)
  );

  useEffect(() => {
    // const locationURL =
    // callAPIAction(LocationSearchAPI);
    submitted &&
      callAPIAction({
        url:
          "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
          locationInput +
          ".json?access_token=" +
          mapboxAPIKey,
        method: "GET",
        requestSchema: null,
        queryParamsSchema: null,
        responseSchema: null,
        callErrorPage: false,
        storeKey: "Fetching_location_details"
      });
  }, [locationInput, submitted]);

  useEffect(() => {
    const locationResults = locationAPIData?.features;
    let tempArr = {};
    locationResults?.forEach((element, index) => {
      tempArr[element.id] = {
        place_name: element.place_name,
        text: element.text,
        id: element.id
      };
    });
    setLocationResults(tempArr);
  }, [locationAPIData]);

  const eraseDialogContents = () => {
    setCompleteAddressValue("");
    setLandmarkValue("");
    setDirectionsValue("");
  };

  const handleClickOpen = () => {
    eraseDialogContents();
    setAddressDialogOpen(true);
  };

  const handleClose = () => {
    eraseDialogContents();
    setAddressDialogOpen(false);
  };

  const handleSaveAddressCard = () => {
    setAddressCards(prevAddressCardState => {
      return [
        // ...prevAddressCardState,
        {
          completeAddressValue: completeAddressValue,
          landmarkValue: landmarkValue,
          directionsValue: directionsValue,
          locationId: locationId,
          title: locationResults?.[locationId].place_name
        }
      ];
    });
    setAddressDialogOpen(false);
  };

  const handleOnLocationNameChange = e => {
    setLocationInput(e.target.value);
    setSearchDisabled(e.target.value.length === 0);
    // fetchLocationDetails(e.target.value);
  };

  const handleRemoveAddressCards = () => {
    setAddressCards([]);
  };

  return (
    <Grid container>
      <Grid item xs={12} className={"mb-1"}>
        {addressCards.length > 0 && (
          <>
            <Grid container className={"addressCardContainer"}>
              {addressCards.map(addressCard => {
                return (
                  <Grid
                    item
                    xs={10}
                    style={{
                      minHeight: "inherit",
                      padding: "2px",
                      display: "inline-block",
                      width: "100%"
                    }}
                  >
                    <AddressCard
                      setAddressCard={setAddressCards}
                      addressCard={addressCard}
                      setLocationId={setLocationId}
                      handleClickOpen={handleClickOpen}
                      handleRemoveAddressCards={handleRemoveAddressCards}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </>
        )}
      </Grid>
      <Grid item xs={12} className={"mb-1"}>
        <TextField
          className={"inputBackgroundColor"}
          variant={standard ? "standard" : "outlined"}
          label={standard && label}
          // type={"number"}
          size={"small"}
          placeholder={!standard && "Enter location name"}
          fullWidth={true}
          InputProps={{
            className: classes.multilineColor,
            startAdornment: !standard && (
              <InputAdornment position={"start"}>
                <SearchIcon fontSize={"inherit"} />
              </InputAdornment>
            ),
            endAdornment: (
              <IconButton
                color={"primary"}
                disabled={searchDisabled}
                aria-label="Search"
                onClick={() => setSubmitted(true)}
              >
                <Send className={!searchDisabled && "violetColor"} />
              </IconButton>
            )
          }}
          value={locationInput}
          onChange={e => {
            handleOnLocationNameChange(e);
            setSubmitted(false);
          }}
        />
      </Grid>
      <Grid item xs={12}>
        {locationResults && (
          <LocationCard
            locationResults={locationResults}
            setLocationId={setLocationId}
            locationId={locationId}
            handleClickOpen={handleClickOpen}
            handleClose={handleClose}
          />
        )}
      </Grid>
      <AddressDialog
        locationId={locationId}
        selectedLocation={locationResults?.[locationId]}
        addressDialogOpen={addressDialogOpen}
        // addressDialogOpen={true}
        handleClose={handleClose}
        completeAddressValue={completeAddressValue}
        setCompleteAddressValue={setCompleteAddressValue}
        landmarkValue={landmarkValue}
        setLandmarkValue={setLandmarkValue}
        directionsValue={directionsValue}
        setDirectionsValue={setDirectionsValue}
        saveAddressCard={handleSaveAddressCard}
      />
    </Grid>
  );
}

export default withStyles(styles)(ConsignmentPickUpLocation);
