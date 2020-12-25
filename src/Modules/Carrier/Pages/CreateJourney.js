import React from "react";
import Pincode from "../../Consigner/Pages/Pincode";
import { Grid, Typography } from "@material-ui/core";
import FiberManualRecordRoundedIcon from "@material-ui/icons/FiberManualRecordRounded";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FiberManualRecordTwoToneIcon from "@material-ui/icons/FiberManualRecordTwoTone";
import PlayCircleFilledTwoToneIcon from "@material-ui/icons/PlayCircleFilledTwoTone";
import TrainIcon from "../../../images/train.png";
import TimePicker from "../../Consigner/Pages/TimePicker";
import Button from "@material-ui/core/Button";

const CreateJourney = () => {
  const journeyModeSelected = false;
  return (
    <>
      <Typography
        variant={"h5"}
        className={"p-1 weightBold alignLeft mb-2"}
        align={"left"}
      >
        Create journey
      </Typography>
      <Grid container className={"consignmentCard p-1"}>
        <Grid item xs={1} className={"mt-0_5"}>
          <div className={"mt-1"}>
            <FiberManualRecordRoundedIcon
              className={"smallerFont violetColor sourcePointer"}
            />
          </div>

          <div>
            <MoreVertIcon className={"violetColor smallerFont purpleColor"} />
            <MoreVertIcon className={"violetColor smallerFont purpleColor"} />
            <MoreVertIcon className={"violetColor smallerFont purpleColor"} />
            <MoreVertIcon className={"violetColor smallerFont purpleColor"} />
          </div>

          <div>
            <FiberManualRecordTwoToneIcon
              className={"smallerFont violetColor destinationPointer"}
            />
          </div>
        </Grid>

        <Grid item xs={10} className={"ml-1"}>
          <Grid item xs={12}>
            <Pincode standard={true} label={"Origin pincode"} />
          </Grid>
          <div>
            <MoreVertIcon className={"plainColor smallerFont purpleColor"} />
          </div>

          <Grid item xs={12}>
            <Pincode standard={true} label={"Destination pincode"} />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        className={"consignmentCard p-1 mt-1 regularShadow alignItemsCenter"}
      >
        <Grid item xs={11}>
          {journeyModeSelected ? (
            <Typography variant={"body2"} className={""}>
              Pick your Mode of transport
            </Typography>
          ) : (
            <span className={"alignItemsCenter flexDisplay"}>
              <Typography
                variant={"body2"}
                component={"span"}
                className={"mr-3"}
              >
                Mode selected
              </Typography>
              <img
                src={TrainIcon}
                alt={"Train"}
                height={"50px"}
                style={{ objectFit: "contain" }}
                className={"ml-1"}
              />
            </span>
          )}
        </Grid>

        <Grid item xs={1}>
          <PlayCircleFilledTwoToneIcon className={"violetColor "} />
        </Grid>
      </Grid>
      <Grid item xs={12} className={"mt-1 consignmentCard regularShadow p-1"}>
        <TimePicker fullWidth={true} />
      </Grid>
      <Grid item xs={12} className={"mt-1  p-1"}>
        <Button
          variant="contained"
          color="primary"
          className={"violetBG plainColor fullWidth mt-2 capitalise "}
        >
          SAVE
        </Button>
      </Grid>
    </>
  );
};

export default CreateJourney;
