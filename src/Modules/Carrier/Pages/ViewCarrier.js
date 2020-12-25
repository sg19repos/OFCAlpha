import React from "react";
import { Box, Divider, Grid, Typography } from "@material-ui/core";
import LocationMap from "../../../images/locationMap.png";
import FiberManualRecordRoundedIcon from "@material-ui/icons/FiberManualRecordRounded";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import LocationOnTwoToneIcon from "@material-ui/icons/LocationOnTwoTone";
import CarIcon from "../../../images/car.png";
import MaleIcon from "../../../images/maleIcon.png";
import VerifiedUserRoundedIcon from "@material-ui/icons/VerifiedUserRounded";

import PhoneTwoToneIcon from "@material-ui/icons/PhoneTwoTone";
import ForumTwoToneIcon from "@material-ui/icons/ForumTwoTone";
import ThumbUpAltTwoToneIcon from "@material-ui/icons/ThumbUpAltTwoTone";

import { Button } from "@material-ui/core";

const ViewCarrier = () => {
  return (
    <Grid container>
      <Grid item xs={12} style={{ zIndex: 8 }}>
        <img src={LocationMap} alt={"LocationMap"} width={"100%"} />
      </Grid>
      <Grid
        item
        xs={12}
        style={{
          position: "absolute",
          bottom: "15%",
          left: 0,
          padding: "5%",
          zIndex: 9
        }}
      >
        <Grid item xs={12} className={"consignmentCard"}>
          <Grid container>
            <Grid item xs={4} className={"pl-1"}>
              <img src={CarIcon} alt={"vehicle icon"} width={"70%"} />
            </Grid>
            <Grid item xs={6} className={"mt-0_5"}>
              <Typography
                variant={"caption"}
                component={"div"}
                className={"lighterText"}
              >
                Vehicle details
              </Typography>
              <Typography className={"regularFont"} variant={"body"}>
                AP31-XX-XXXX
              </Typography>
            </Grid>
            <Grid item xs={2} className={"alignCenter"}>
              <Typography
                variant={"caption"}
                component={"div"}
                className={"lighterText mt-0_5"}
              >
                Verified
              </Typography>
              <VerifiedUserRoundedIcon
                fontSize={"small"}
                className={"greenColor "}
              />
            </Grid>
            <Grid item xs={12}>
              <Divider variant={"middle"} color={"secondary"} light={false} />
            </Grid>

            <Grid item xs={3} className={"pt-0_5 pl-1 pr-1 "}>
              <img
                src={MaleIcon}
                alt={"user icon"}
                width={"80%"}
                style={{
                  border: "1px solid #ddd",
                  padding: "11%",
                  borderRadius: "50%"
                }}
              />
            </Grid>
            <Grid item xs={9}>
              <Grid container className={"pt-0_5 pl-1 pr-1 pb-0_5"}>
                <Grid item xs={1} className={"mt-0_5"}>
                  <div>
                    <FiberManualRecordRoundedIcon
                      className={"smallerFont violetColor "}
                    />
                  </div>

                  {/*<div>*/}
                  <MoreVertIcon
                    className={"violetColor smallerFont purpleColor"}
                  />
                  {/*</div>*/}

                  <div>
                    <LocationOnTwoToneIcon
                      className={"smallerFont violetColor "}
                    />
                  </div>
                </Grid>
                <Grid item xs={11}>
                  <div className={"mt-1s"}>
                    <Typography variant={"caption"}>
                      Srikakulam, road no.1
                    </Typography>
                  </div>
                  {/*<div>*/}
                  <MoreVertIcon
                    className={"plainColor smallerFont purpleColor"}
                  />
                  {/*</div>*/}

                  <div>
                    <Typography variant={"caption"}>
                      Visakhapatnam, road no.2
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container className={"p-1"}>
          <Grid item xs={12}>
            <Typography variant={"caption"}>Estimated Ride timings:</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography
              variant={"caption"}
              className={"lighterText"}
              component={"span"}
            >
              Date:
            </Typography>
            <Typography
              variant={"caption"}
              className={"pl-0_5"}
              component={"span"}
            >
              27-Oct-2020
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography
              variant={"caption"}
              className={"lighterText"}
              component={"span"}
            >
              Starting:
            </Typography>
            <Typography
              variant={"caption"}
              className={"pl-0_5"}
              component={"span"}
            >
              7:00 PM
            </Typography>
          </Grid>
          <Grid container className={"mt-1"}>
            <Grid item xs={4}>
              <Button
                className={"violetBG plainColor"}
                variant="contained"
                endIcon={<PhoneTwoToneIcon />}
              >
                Call
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                className={"violetBG plainColor"}
                variant="contained"
                endIcon={<ForumTwoToneIcon />}
              >
                Chat
              </Button>
            </Grid>
            <Grid item xs={4} className={"alignRight"}>
              <Button
                className={"greenBG plainColor"}
                variant="contained"
                endIcon={<ThumbUpAltTwoToneIcon />}
              >
                Deal
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ViewCarrier;
