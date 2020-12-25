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

export default function Filter() {
  const [alignment, setAlignment] = useState("flight");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton value="bike">
        <MotorcycleRoundedIcon />
      </ToggleButton>
      <ToggleButton value="bus">
        <DirectionsBusRoundedIcon />
      </ToggleButton>
      <ToggleButton value="car">
        <DriveEtaRoundedIcon />
      </ToggleButton>
      <ToggleButton value="flight">
        <FlightRoundedIcon />
      </ToggleButton>
      <ToggleButton value="train">
        <TrainRoundedIcon />
      </ToggleButton>
      <ToggleButton value="truck">
        <LocalShippingRoundedIcon />
      </ToggleButton>
      <ToggleButton value="taxi">
        <LocalTaxiRoundedIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
