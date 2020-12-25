import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import FiberManualRecordRoundedIcon from "@material-ui/icons/FiberManualRecordRounded";
import FiberManualRecordTwoToneIcon from "@material-ui/icons/FiberManualRecordTwoTone";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import EventTwoToneIcon from "@material-ui/icons/EventTwoTone";
import WatchLaterTwoToneIcon from "@material-ui/icons/WatchLaterTwoTone";
import SpeedTwoToneIcon from "@material-ui/icons/SpeedTwoTone";
import AccountCircleTwoToneIcon from "@material-ui/icons/AccountCircleTwoTone";
import ChatTwoToneIcon from "@material-ui/icons/ChatTwoTone";
import LocalPhoneTwoToneIcon from "@material-ui/icons/LocalPhoneTwoTone";
import ThumbUpAltTwoToneIcon from "@material-ui/icons/ThumbUpAltTwoTone";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import LocalShippingTwoToneIcon from "@material-ui/icons/LocalShippingTwoTone";
import LocationMap from "../../../images/locationMap.png";
import BagPack from "../../../images/backpack.png";
import Button from "@material-ui/core/Button";

const ViewConsignmentDetails = () => {
  const userType = "consigner";
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <img src={LocationMap} width={"100%"} alt={"LocationMap"} />
        </Grid>
        <Grid item xs={12} className={"consignmentCard mt-0_5"}>
          <Grid container className={"pt-0_5 pl-1 pr-1 pb-0_5"}>
            <Grid item xs={12}>
              <Typography variant={"caption"} className={"allCaps"}>
                Consigner Details
              </Typography>
            </Grid>
            <Grid item xs={12} className={"mt-0_5"}>
              <Grid container justify={"space-between"}>
                <Grid item xs={1}>
                  <AccountCircleTwoToneIcon className={"violetColor"} />
                </Grid>
                <Grid item xs={6} className={""}>
                  <Typography
                    variant={"caption"}
                    component={"span"}
                    className={"mtn-1s"}
                  >
                    Srinivas Govindu
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <ChatTwoToneIcon className={"violetColor"} />
                </Grid>
                <Grid item xs={1} className={"alignLeft"}>
                  <LocalPhoneTwoToneIcon className={"violetColor"} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} className={"consignmentCard mt-0_5"}>
          <Grid container className={"pt-0_5 pl-1 pr-1 pb-0_5"}>
            <Grid item xs={12}>
              <Typography variant={"caption"} className={"allCaps"}>
                Location details
              </Typography>
            </Grid>
            <Grid item xs={1} className={"mt-0_5"}>
              <div>
                <FiberManualRecordRoundedIcon
                  className={"smallerFont violetColor sourcePointer"}
                />
              </div>

              <div>
                <MoreVertIcon
                  className={"violetColor smallerFont purpleColor"}
                />
              </div>

              <div>
                <FiberManualRecordTwoToneIcon
                  className={"smallerFont violetColor destinationPointer"}
                />
              </div>
            </Grid>
            <Grid item xs={9}>
              <div className={"mt-1s"}>
                <Typography variant={"caption"}>
                  Srikakulam, road no.1
                </Typography>
              </div>
              <div>
                <MoreVertIcon
                  className={"plainColor smallerFont purpleColor"}
                />
              </div>

              <div>
                <Typography variant={"caption"}>
                  Visakhapatnam, road no.2
                </Typography>
              </div>
            </Grid>
            <Grid item xs={2}>
              <img
                src={BagPack}
                alt={"image"}
                width={"60%"}
                className={"consignmentCardIcon ml-1 mt-0"}
              />
              <Typography variant={"caption"} className={"allCaps lighterText"}>
                Category
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} className={"consignmentCard mt-0_5"}>
          <Grid container className={"pt-0_5 pl-1 pr-1 pb-0_5"}>
            <Grid item xs={12}>
              <Typography variant={"caption"} className={"allCaps"}>
                Pickup details
              </Typography>
            </Grid>
            <Grid item xs={12} className={"mt-0_5"}>
              <Grid container>
                <Grid item xs={1}>
                  <EventTwoToneIcon
                    className={"smallerFont pt-2px violetColor"}
                  />
                </Grid>
                <Grid item xs={3}>
                  <Typography variant={"caption"} className={"allCaps"}>
                    27 Oct
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
                    className={"allCaps"}
                  >
                    7 am
                  </Typography>
                </Grid>
                <Grid item xs={1}>
                  <SpeedTwoToneIcon
                    className={"smallerFont pt-2px violetColor"}
                  />
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    component={"span"}
                    variant={"caption"}
                    className={"allCaps"}
                  >
                    2 KGs
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} className={"consignmentCard mt-0_5"}>
          <Grid container className={"pt-0_5 pl-1 pr-1 pb-0_5"}>
            <Grid item xs={12}>
              <Typography variant={"caption"} className={"allCaps"}>
                Item details
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant={"caption"} className={"weightBold"}>
                Books and eatables
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant={"body2"} className={"lighterText"}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur unde suscipit, quam beatae rerum inventore
                consectetur, neque doloribus, cupiditate numquam dignissimos
                laborum fugiat deleniti? Eum quasi quidem quibusdam.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {userType === "carrier" ? (
        <Fab
          variant="extended"
          className={"fabStylesCarrier"}
          color={"primary"}
        >
          <ThumbUpAltTwoToneIcon className={"mr-1"} /> It's a Deal
        </Fab>
      ) : (
        // <Grid item xs={12} className={"p-1"}>
        //   <Button
        //     variant="contained"
        //     color="primary"
        //     size={"large"}
        //     className={"greenBG plainColor fullWidth mt-1 capitalise "}
        //   >
        //     Check matching carriers
        //     <ArrowRightAltIcon className={"ml-1"} />
        //   </Button>
        // </Grid>

        <Grid item xs={12} className={"p-1"}>
          <Fab
            variant="extended"
            className={"fabStylesConsigner"}
            color={"primary"}
          >
            10 - Matching carriers
            <LocalShippingTwoToneIcon className={"ml-1"} />
          </Fab>
        </Grid>
      )}
    </>
  );
  // return "Consignment details here";
};

export default ViewConsignmentDetails;
