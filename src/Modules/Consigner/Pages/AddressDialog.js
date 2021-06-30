import React, { useState, forwardRef } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Grid from "@material-ui/core/Grid";
import { TextField, Typography } from "@material-ui/core";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AddressDialog = ({
  addressDialogOpen,
  handleClose,
  locationId,
  selectedLocation,
  completeAddressValue,
  directionsValue,
  landmarkValue,
  setCompleteAddressValue,
  setDirectionsValue,
  setLandmarkValue,
  saveAddressCard
}) => {
  return (
    <Dialog
      open={addressDialogOpen}
      TransitionComponent={Transition}
      keepMounted
      fullWidth={true}
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle id="alert-dialog-slide-title">
        {"Add pickup address"}
        <Typography variant={"h6"} className={"smallerFont violetColor mt-1"}>
          {selectedLocation?.place_name}
        </Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          <Grid container>
            <Grid item xs={12}>
              <TextField
                className={"inputBackgroundColor"}
                label="Complete address"
                multiline
                fullWidth={true}
                rows={2}
                placeholder={"Please add detailed address"}
                variant="outlined"
                value={completeAddressValue}
                onChange={e => setCompleteAddressValue(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} className={"mt-1"}>
              <TextField
                fullWidth
                className={"inputBackgroundColor"}
                size={"small"}
                label={"Landmark"}
                placeholder={"Add a nearby landmark"}
                variant={"outlined"}
                value={landmarkValue}
                onChange={e => setLandmarkValue(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} className={"mt-1"}>
              <TextField
                fullWidth
                className={"inputBackgroundColor"}
                size={"small"}
                label={"Directions (optional)"}
                placeholder={"How to reach (Optional)"}
                variant={"outlined"}
                value={directionsValue}
                onChange={e => setDirectionsValue(e.target.value)}
              />
            </Grid>
          </Grid>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            handleClose();
          }}
          color="primary"
        >
          Cancel
        </Button>
        <Button onClick={() => saveAddressCard()} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddressDialog;
