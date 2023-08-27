import React from "react";
import {
  Button,
  Divider,
  Grid,
  ListItemText,
  Typography
} from "@material-ui/core";
import { TimerTile } from "../../Consigner/Pages/TimePicker";
import RoomTwoToneIcon from "@material-ui/icons/RoomTwoTone";
import FiberManualRecordTwoToneIcon from "@material-ui/icons/FiberManualRecordTwoTone";
import { TransportModes } from "../../../common/constants";
import pathIcon from "../../../images/path.png";
import { useHistory } from "react-router-dom";

const JourneyCreated = ({ journeyDetails, closeHandler }) => {
  const {
    journeyId,
    journeyDate,
    journeyFrom,
    journeyTo,
    vehicleDetails,
    fromAddressComponents
  } = journeyDetails;
  const history = useHistory();

  let administrative_area_level_2 = fromAddressComponents.find(
    addressElement => {
      return addressElement.types.includes("administrative_area_level_2");
    }
  ).long_name;

  let locality = fromAddressComponents.find(addressElement => {
    return addressElement.types.includes("locality");
  }).long_name;

  return (
    <Grid container>
      {/*<Grid item xs={12} className={"alignLeft"}>
        <ArrowBackRoundedIcon onClick={closeHandler} />
      </Grid>*/}
      <Grid item xs={12} className={"alignCenter"}>
        <ListItemText
          primary={"Journey Created"}
          primaryTypographyProps={{ className: "75Font" }}
          secondary={`ID: ` + journeyId}
        />
      </Grid>
      <Grid item xs={12} className={"mt-2 alignCenter"}>
        <img
          alt={"Path icon"}
          src={pathIcon}
          width={"30%"}
          className={"alignCenter"}
        />
      </Grid>
      <Grid item xs={12} className={"mt-1"}>
        <TimerTile newDate={journeyDate} />
      </Grid>
      <Grid item xs={12} className={"mt-1 inputBackgroundColor pt-1 pl-2 pb-1"}>
        <Grid container>
          <Grid item xs={2} className={"mt-1"}>
            <FiberManualRecordTwoToneIcon
              className={"smallerFont violetColor sourcePointer"}
            />
          </Grid>
          <Grid item xs={10}>
            <Typography variant={"caption"} className={"lighterText"}>
              From
            </Typography>
            <Typography variant={"body2"}>{journeyFrom}</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Divider variant={"inset"} className={"violetBG"} />
      <Grid item xs={12} className={"inputBackgroundColor pb-1 pl-2"}>
        <Grid container>
          <Grid item xs={2} className={"mt-2"}>
            <RoomTwoToneIcon
              className={"smallerFont violetColor destinationPointer"}
            />
          </Grid>
          <Grid item xs={10} className={"mt-1"}>
            <Typography variant={"caption"} className={"lighterText"}>
              To
            </Typography>
            <Typography variant={"body2"}>{journeyTo}</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={4} className={"pl-1 mr-1"}>
        <img
          src={TransportModes[vehicleDetails?.journey_vehicleType]?.icon}
          alt={TransportModes[vehicleDetails?.journey_vehicleType]?.name}
          width={"50%"}
          className={"pl-1 pt-0_5"}
        />
      </Grid>
      <Grid item xs={3} className={"mt-0_5"}>
        <Typography
          variant={"caption"}
          component={"div"}
          className={"lighterText"}
        >
          Journey Mode
        </Typography>
        <Typography className={"regularFont"} variant={"body"}>
          {vehicleDetails?.journey_vehicleType
            ? TransportModes[vehicleDetails?.journey_vehicleType]?.name
            : "NA"}
        </Typography>
      </Grid>

      <Grid item xs={3} className={"mt-0_5 ml-2"}>
        <Typography
          variant={"caption"}
          component={"div"}
          className={"lighterText"}
        >
          Vehicle details
        </Typography>
        <Typography className={"regularFont"} variant={"body"}>
          {vehicleDetails?.journey_vehicleNumber
            ? vehicleDetails?.journey_vehicleNumber
            : "NA"}
        </Typography>
      </Grid>
      <Grid item xs={12} className={"mt-2 alignCenter"}>
        <Button
          variant={"contained"}
          className={"violetBG plainColor"}
          onClick={() => {
            history.push({
              pathname: "/consignments",
              search: "?consignmentStartLocation=" + journeyFrom,
              state: {
                administrative_area_level_2: administrative_area_level_2,
                locality: locality
              }
            });
          }}
        >
          Check matching consignments
        </Button>
      </Grid>
    </Grid>
  );
};

export default JourneyCreated;
