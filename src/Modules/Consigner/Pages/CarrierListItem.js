import React from "react";
import { Grid, Typography } from "@material-ui/core";
import FemaleIcon from "../../../images/femaleIcon.png";
import { TransportModes } from "../../../common/constants";
import OurBtn from "../../Common/Pages/Btn";
import CarrierRating from "../../Common/Rating";
import VerifiedUserRoundedIcon from "@material-ui/icons/VerifiedUserRounded";

const CarrierListItem = ({ locationDetails }) => {
  const OriginDestination = ({ locationDetails }) => {
    const { origin, destination } = locationDetails;

    return (
      <Grid container>
        <Grid item xs={12}>
          <Typography variant={"caption"} className={"lighterText"}>
            From :{" "}
          </Typography>
          <Typography variant={"overline"}>{origin}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant={"caption"} className={"lighterText"}>
            To:{" "}
          </Typography>
          <Typography variant={"overline"}>{destination}</Typography>
        </Grid>
      </Grid>
    );
  };
  return (
    <Grid item xs={12} className={"mt-1 shadow1 p-1 allRoundCorners"}>
      <Grid container>
        <Grid item xs={12} className={"mb-1"}>
          <Grid container>
            <Grid item xs={3}>
              <Typography
                variant={"caption"}
                component={"div"}
                className={"lighterText"}
              >
                Starting on
              </Typography>
              <Typography
                variant={"caption"}
                component={"div"}
                className={"pt-0_5"}
              >
                27th Oct
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography
                variant={"caption"}
                component={"div"}
                className={"lighterText"}
              >
                Time
              </Typography>
              <Typography
                variant={"caption"}
                component={"div"}
                className={"pt-0_5"}
              >
                02:00 PM
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                variant={"caption"}
                component={"div"}
                className={"lighterText"}
              >
                Gender
              </Typography>
              <Typography variant={"caption"} component={"div"}>
                <img
                  src={FemaleIcon}
                  width={"20px"}
                  style={{ objectFit: "contain", padding: "12%" }}
                />
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                variant={"caption"}
                component={"div"}
                className={"lighterText"}
              >
                Vehicle
              </Typography>
              <Typography variant={"caption"} component={"div"}>
                <img src={TransportModes[2].icon} width={"40px"} />
              </Typography>
            </Grid>
            <Grid item xs={2} className={"alignCenter"}>
              <Typography
                variant={"caption"}
                component={"div"}
                className={"lighterText"}
              >
                Verified
              </Typography>
              <VerifiedUserRoundedIcon
                fontSize={"small"}
                className={"greenColor "}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <OriginDestination locationDetails={locationDetails} />
        </Grid>
        <Grid item xs={3}>
          <CarrierRating rating={4} />
        </Grid>

        <Grid item xs={3} className={"mt-1_5"}>
          {/*<Typography variant={"caption"}>Extra details</Typography>*/}
          {/*<Button variant={"contained"} className={"orangeBG plainColor"}>*/}
          {/*  Deal*/}
          {/*</Button>*/}
          <OurBtn
            bgColor={"violetBG"}
            fontColor={"plainColor"}
            label={"Deal"}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CarrierListItem;
