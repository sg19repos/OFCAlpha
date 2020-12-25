import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";
import LocalShippingTwoToneIcon from "@material-ui/icons/LocalShippingTwoTone";
import LocationOnTwoToneIcon from "@material-ui/icons/LocationOnTwoTone";
import WatchLaterTwoToneIcon from "@material-ui/icons/WatchLaterTwoTone";
import SpeedTwoToneIcon from "@material-ui/icons/SpeedTwoTone";
import EventTwoToneIcon from "@material-ui/icons/EventTwoTone";
import Weight from "../../../images/scales.png";
import BagPack from "../../../images/backpack.png";

const ConCard = () => {
  return (
    <Grid
      item
      xs={12}
      className={"pl-1_5 pr-1_5 consignmentCard regularShadow"}
    >
      <Grid container className={""}>
        <Grid item xs={3}>
          <img
            src={BagPack}
            alt={"image"}
            width={"80%"}
            className={"consignmentCardIcon"}
          />
        </Grid>
        <Grid item xs={8} className={"ml-0_5"}>
          <Typography variant={"h6"} className={"capitalise weightBold"}>
            Title goes here
          </Typography>
          <Grid container justify={"space-between"} className={"mt-1"}>
            <Grid item xs={1}>
              <SpeedTwoToneIcon
                className={"smallerFont pt-2px  violetColor "}
              />
            </Grid>

            <Grid item xs={2}>
              <Typography
                component={"span"}
                variant={"caption"}
                className={"capitalise"}
              >
                2Kg
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <WatchLaterTwoToneIcon
                className={"smallerFont pt-2px violetColor"}
              />
            </Grid>

            <Grid item xs={3}>
              <Typography
                component={"span"}
                variant={"caption"}
                className={"capitalise"}
              >
                7 am
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <EventTwoToneIcon className={"smallerFont pt-2px violetColor"} />
            </Grid>

            <Grid item xs={3}>
              <Typography
                component={"span"}
                variant={"caption"}
                className={"capitalise"}
              >
                27 Oct
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Divider className={"mt-1"} color={"primary"} light={false} />
      <Grid container justify={"space-between"} className={"mt-1"}>
        <Grid item xs={5}>
          <Grid container justify={"space-between"}>
            <Grid item xs={4}>
              <LocalShippingTwoToneIcon
                className={"violetColor iconBackground"}
              />
            </Grid>
            <Grid item xs={8}>
              <Typography variant={"caption"} className={"capitalise"}>
                Srikakulam
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2}>
          <ArrowForwardRoundedIcon color={"disabled"} />
        </Grid>
        <Grid item xs={5}>
          <Grid container justify={"space-evenly"}>
            <Grid item xs={4}>
              <LocationOnTwoToneIcon className={"violetColor iconBackground"} />
            </Grid>
            <Grid item xs={8}>
              <Typography variant={"caption"} className={"capitalise"}>
                Visakhapatnam
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const Consignments = () => {
  return (
    <Grid container>
      {/*<p>Icon - CategoryName - PickupPlace - DropPlace - Date&Time - Weight</p>*/}
      <ConCard />
    </Grid>
  );
};

export default Consignments;
