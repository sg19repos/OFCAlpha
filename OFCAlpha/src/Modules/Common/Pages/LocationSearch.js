import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Pincode from "../../Consigner/Pages/Pincode";
import { Step, Stepper, StepLabel } from "@material-ui/core";
import FiberManualRecordTwoToneIcon from "@material-ui/icons/FiberManualRecordTwoTone";
import ImportExportRoundedIcon from "@material-ui/icons/ImportExportRounded";

const LocationSearch = () => {
  const StepIcon = () => {
    return (
      <FiberManualRecordTwoToneIcon className={"violetColor smallerFont"} />
    );
  };
  return (
    <Grid container justify={"space-between"} className={"locationInputCard"}>
      <Grid item xs={12}>
        <Grid container className={"mb-1"}>
          <Grid item xs={2}>
            <Grid item xs={1} className={"mt-1_5 mb-0_5 ml-1"}>
              <Stepper activeStep={3} orientation="vertical">
                <Step key={1}>
                  <StepLabel StepIconComponent={StepIcon} />
                </Step>
                <Step key={2}>
                  <StepLabel StepIconComponent={StepIcon} />
                </Step>
              </Stepper>
            </Grid>
          </Grid>
          <Grid item xs={8}>
            <Grid item xs={10} className={"ml-1"}>
              <Grid item xs={12}>
                <Pincode standard={true} label={"Origin pincode"} />
              </Grid>

              <Grid item xs={12} className={"mt-0_5"}>
                <Pincode standard={true} label={"Destination pincode"} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2} className={"mt-3 mb-1"}>
            <ImportExportRoundedIcon
              fontSize={"large"}
              className={"violetColor"}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LocationSearch;
