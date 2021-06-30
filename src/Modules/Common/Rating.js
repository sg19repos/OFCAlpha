import React from "react";

import StarHalfRoundedIcon from "@material-ui/icons/StarHalfRounded";
import { Grid, Typography } from "@material-ui/core";

const CarrierRating = ({ rating, linearAligned = false }) => {
  return (
    <Grid
      container
      className={linearAligned ? "" : "mt-0_5"}
      direction={linearAligned ? "row" : "col"}
      alignItems={"center"}
    >
      <Grid
        item
        xs={linearAligned ? 1 : 3}
        className={linearAligned ? "alignLeft" : "alignRight"}
      >
        <Typography variant={"body"}>{rating}</Typography>
      </Grid>
      <Grid item xs={linearAligned ? 3 : 3}>
        <StarHalfRoundedIcon
          fontSize={"small"}
          className={"yellowColor smallerFont mt-1s"}
        />
      </Grid>
      <Grid item xs={linearAligned ? 6 : 12}>
        <Typography variant={"caption"} component={"div"}>
          112 Rides
        </Typography>
      </Grid>
    </Grid>
  );
};

export default CarrierRating;
