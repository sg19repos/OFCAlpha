import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  TextField,
  InputAdornment,
  Box,
  Grid
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import LocationCard from "./Location";
import MakeAPICall from "../../../common/service";

const styles = {
  multilineColor: {
    color: "#4330A9"
  }
};

const PickupLocation = props => {
  const [locationResults, setLocationResults] = useState([]);

  const { classes } = props;

  const getLocationResults = locationInput => {
    const locationResultsArray = [
      {
        locationName: "Location 1",
        locationId: "Id1",
        locationAddress: "Location 1 address, state, country"
      },
      {
        locationName: "Location 2",
        locationId: "Id2",
        locationAddress: "Location 2 address, state, country"
      },
      {
        locationName: "Location 3",
        locationId: "Id3",
        locationAddress: "Location 3 address, state, country"
      }
    ];
    setLocationResults(locationResultsArray);
  };

  useEffect(() => {
    getLocationResults("testInput");
  }, []);

  return (
    <Container maxWidth={"sm"}>
      <Box my={2} mx={3}>
        <Typography variant={"subtitle2"} className={"weightBold violetColor"}>
          Pick Up Location
        </Typography>
        <TextField
          style={{ backgroundColor: "#F9F9FC" }}
          variant={"outlined"}
          size={"medium"}
          placeholder={"Please select your location"}
          fullWidth={true}
          InputProps={{
            className: classes.multilineColor,
            startAdornment: (
              <InputAdornment position={"start"}>
                <SearchIcon
                  fontSize={"medium"}
                  // onClick={() => MakeAPICall(532185)}
                />
              </InputAdornment>
            )
          }}
        />
        <Grid item xs={12}>
          {console.log(
            "locationResults1",
            locationResults ? locationResults : []
          )}
          <LocationCard
            locationResults={locationResults ? locationResults : []}
          />
        </Grid>
      </Box>
    </Container>
  );
};

export default withStyles(styles)(PickupLocation);
