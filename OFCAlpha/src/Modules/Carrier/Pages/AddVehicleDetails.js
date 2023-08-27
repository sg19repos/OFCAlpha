import React, { useState } from "react";
import { Grid, Button, Input, TextField } from "@material-ui/core";

const AddVehicleDetails = ({ setVehicleDetails, setCarrierState }) => {
  const [vehicleNumber, setVehicleNumber] = useState();
  const [vehicleDescription, setVehicleModel] = useState();
  return (
    <Grid container className={"p-1"}>
      <Grid item lg={12} className={"vehicleDetailsForm"}>
        <TextField
          size={"medium"}
          fullWidth
          value={vehicleDescription}
          id="outlined-basic"
          label="Vehicle details (optional)"
          variant="outlined"
          onChange={e => {
            setVehicleModel(e.target.value);
            setVehicleDetails(i => {
              return {
                ...i,
                journey_vehicleModal: e.target.value,
                journey_vehicleNumber: vehicleNumber
              };
            });
          }}
        />

        <TextField
          className={"mt-1"}
          fullWidth
          value={vehicleNumber}
          id="outlined-basic"
          label="Vehicle number (optional)"
          variant="outlined"
          onChange={e => {
            setVehicleNumber(e.target.value);
            setVehicleDetails(i => {
              return {
                ...i,
                journey_vehicleModal: vehicleDescription,
                journey_vehicleNumber: e.target.value
              };
            });
          }}
        />
      </Grid>
    </Grid>
  );
};

export default AddVehicleDetails;
