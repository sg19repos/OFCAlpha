import React from "react";
import {
  Button,
  Divider,
  Grid,
  ListItemText,
  Typography
} from "@material-ui/core";
import { TimerTile } from "./TimePicker";
import RoomTwoToneIcon from "@material-ui/icons/RoomTwoTone";
import FiberManualRecordTwoToneIcon from "@material-ui/icons/FiberManualRecordTwoTone";
import { categoryListItems, weightCategories } from "../../../common/constants";
import pathIcon from "../../../images/path.png";
import shipmentCreatedIcon from "../../../images/shipmentCreated.png";
import { useHistory } from "react-router-dom";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

const ConsignmentCreated = ({ shipmentDetails, closeHandler }) => {
  const {
    shipmentId,
    shipmentDate,
    shipmentFrom,
    shipmentTo,
    shipmentCategory,
    shipmentDimensions,
    fromAddressComponents
  } = shipmentDetails;
  const history = useHistory();

  let administrative_area_level_2 = fromAddressComponents.find(
    addressElement => {
      return addressElement.types.includes("administrative_area_level_2");
    }
  ).long_name;

  let locality = fromAddressComponents.find(addressElement => {
    return (
      addressElement.types.includes("locality") ||
      addressElement.types.includes("administrative_area_level_2")
    );
  }).long_name;

  return (
    <Grid container>
      <Grid item xs={12} className={"alignCenter"}>
        <ListItemText
          primary={"Shipment Created"}
          primaryTypographyProps={{ className: "75Font" }}
          secondary={`ID: ` + shipmentId}
        />
      </Grid>
      <Grid item xs={12} className={"alignCenter"}>
        <img
          alt={"Path icon"}
          src={shipmentCreatedIcon}
          width={"50%"}
          className={"alignCenter"}
        />
      </Grid>
      <Grid item xs={12} className={"mt-1"}>
        <TimerTile newDate={shipmentDate} />
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
            <Typography variant={"body2"}>{shipmentFrom}</Typography>
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
            <Typography variant={"body2"}>{shipmentTo}</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={4} className={"pl-1 mr-1"}>
        <img
          src={weightCategories[shipmentCategory[0]].icon}
          alt={weightCategories[shipmentCategory[0]].title}
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
          Dimensions
        </Typography>
        <Typography className={"regularFont"} variant={"body"}>
          {weightCategories[+shipmentDimensions].title}
        </Typography>
      </Grid>

      <Grid item xs={3} className={"mt-0_5 ml-2"}>
        <Typography
          variant={"caption"}
          component={"div"}
          className={"lighterText"}
        >
          Category
        </Typography>

        <Typography className={"regularFont"} variant={"body"}>
          {categoryListItems[shipmentCategory].categoryName}
        </Typography>
      </Grid>
      <Grid item xs={12} className={"mt-2 alignCenter"}>
        <Button
          variant={"contained"}
          className={"violetBG plainColor"}
          onClick={() => {
            history.push({
              pathname: "/carriers",
              search: "?carrierStartLocation=" + shipmentFrom,
              state: {
                administrative_area_level_2: administrative_area_level_2,
                locality: locality
              }
            });
          }}
        >
          Check matching carriers
        </Button>
      </Grid>
    </Grid>
  );
};

export default ConsignmentCreated;
