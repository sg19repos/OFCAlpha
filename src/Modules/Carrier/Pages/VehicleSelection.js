import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import { TransportModes } from "../../../common/constants";

const VehicleSelection = () => {
  return (
    <>
      <Typography variant={"h6"} align={"center"}>
        How are you travelling?
      </Typography>
      <Grid container className={"mt-1 fullHeight overflowAuto"}>
        {TransportModes.map((element, index) => {
          return (
            <Grid item xs={5} className={"vehicleSelectorCard ml-1 mb-1"}>
              <Grid container>
                <Grid item xs={12} align={"center"}>
                  <img
                    src={element.icon}
                    alt={element.name}
                    width={"55%"}
                    height={"80px"}
                    style={{ objectFit: "contain", padding: "5%" }}
                    className={"p-0_5"}
                  />
                </Grid>
                <Grid item xs={12} className={"alignCenter mb-1"}>
                  <Typography align={"center"} variant={"button"}>
                    {element.name}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default VehicleSelection;
