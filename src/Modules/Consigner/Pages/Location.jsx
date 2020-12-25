import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";

const LocationCard = ({ locationResults }) => {
  return locationResults.map((locationElement, index) => {
    return (
      <Grid container xs={12}>
        <Grid item xs={2}>
          <Box
            m={2}
            pt={"5px"}
            pl={"6px"}
            pr={"30px"}
            pb={"5px"}
            border={"1px solid #e6e8f7"}
            borderRadius={"50%"}
            bgcolor={"#e6e8f7"}
            color={"#ACA9d6"}
          >
            <LocationOnOutlinedIcon />
          </Box>
        </Grid>
        <Grid item xs={10}>
          <Box m={2}>
            <Typography variant={"subtitle2"} className={"weightBold"}>
              {locationElement.locationName}
            </Typography>
            <Box color={"#aca9d6"}>
              <Typography variant={"caption"}>
                {locationElement.locationAddress}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    );
  });
};

export default LocationCard;

//https://api.postalpincode.in/pincode/532185
//AIzaSyBLk6Jy9o7hGYSG-2Xxwe82lFjUnhFZty8
