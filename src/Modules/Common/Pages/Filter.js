import React, { useState } from "react";
import MotorcycleRoundedIcon from "@material-ui/icons/MotorcycleRounded";
import DirectionsBusRoundedIcon from "@material-ui/icons/DirectionsBusRounded";
import DriveEtaRoundedIcon from "@material-ui/icons/DriveEtaRounded";
import FlightRoundedIcon from "@material-ui/icons/FlightRounded";
import TrainRoundedIcon from "@material-ui/icons/TrainRounded";
import LocalShippingRoundedIcon from "@material-ui/icons/LocalShippingRounded";
import ToggleButton from "@material-ui/lab/ToggleButton";
import LocalTaxiRoundedIcon from "@material-ui/icons/LocalTaxiRounded";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

const Filter = ({ vehicleFilter, setVehicleFilter }) => {
  const [vehicleTabSelected, setVehicleTabSelected] = useState(vehicleFilter);

  const handleAlignment = (event, newAlignment) => {
    setVehicleTabSelected(newAlignment);
    setVehicleFilter(newAlignment);
  };

  return (
    <ToggleButtonGroup
      value={vehicleTabSelected}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton value={0}>
        <MotorcycleRoundedIcon />
      </ToggleButton>
      <ToggleButton value={1}>
        <DirectionsBusRoundedIcon />
      </ToggleButton>
      <ToggleButton value={2}>
        <DriveEtaRoundedIcon />
      </ToggleButton>
      <ToggleButton value={3}>
        <FlightRoundedIcon />
      </ToggleButton>
      <ToggleButton value={4}>
        <TrainRoundedIcon />
      </ToggleButton>
      <ToggleButton value={5}>
        <LocalShippingRoundedIcon />
      </ToggleButton>
      <ToggleButton value={6}>
        <LocalTaxiRoundedIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default Filter;
