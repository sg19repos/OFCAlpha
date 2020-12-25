import React from "react";

import StarHalfRoundedIcon from "@material-ui/icons/StarHalfRounded";
import { Grid, Typography } from "@material-ui/core";

const CarrierRating = ({ rating }) => {
  return (
    <Grid container className={"mt-0_5"}>
      <Grid item xs={3} className={"mt-1s alignRight"}>
        <Typography variant={"body"}>{rating}</Typography>
      </Grid>
      <Grid item xs={3}>
        <StarHalfRoundedIcon
          fontSize={"small"}
          className={"yellowColor smallerFont mt-1s pl-1s"}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography variant={"caption"} component={"div"}>
          112 Rides
        </Typography>
      </Grid>
    </Grid>
  );
};

export default CarrierRating;
