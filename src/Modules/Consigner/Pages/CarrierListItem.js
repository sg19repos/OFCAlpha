import React from "react";
import { Button, Grid, Typography } from "@material-ui/core";
// import FemaleIcon from "../../../images/femaleIcon.png";
import MaleIcon from "../../../images/maleIcon.png";
import { TransportModes } from "../../../common/constants";
import OurBtn from "../../Common/Pages/Btn";
import CarrierRating from "../../Common/Rating";
import VerifiedUserRoundedIcon from "@material-ui/icons/VerifiedUserRounded";
import { format } from "date-fns";

const CarrierListItem = ({
  journeyDetails,
  rating,
  vehicleType,
  handleViewCarrierClicked
}) => {
  const { startingDate } = journeyDetails;

  const OriginDestination = ({ locationDetails }) => {
    const { origin, destination } = locationDetails;

    return (
      <Grid container>
        <Grid item xs={12} className={"truncateText"}>
          <Typography variant={"caption"} className={"lighterText"}>
            Origin :{" "}
          </Typography>
          <Typography variant={"overline"}>{origin}</Typography>
        </Grid>
        <Grid item xs={12} className={"truncateText"}>
          <Typography variant={"caption"} className={"lighterText"}>
            Drop:{" "}
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
                {format(startingDate, "MMM dd, yyyy")}
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
                {format(startingDate, "hh: mm aa")}
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
                  src={MaleIcon}
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
                <img src={TransportModes[vehicleType].icon} width={"40px"} />
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
                className={"greenColor mt-0_5"}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} className={"pr-1"}>
          <OriginDestination locationDetails={journeyDetails} />
        </Grid>
        <Grid item xs={3}>
          <CarrierRating rating={4} />
        </Grid>

        <Grid item xs={3} className={"mt-1_5"}>
          {/*<Typography variant={"caption"}>Extra details</Typography>*/}
          {/*<Button variant={"contained"} className={"orangeBG plainColor"}>*/}
          {/*  Deal*/}
          {/*</Button>*/}
          {/*<OurBtn
            bgColor={"violetBG"}
            fontColor={"plainColor"}
            label={"View"}
          />*/}
          <Button
            className={"violetBG plainColor capitalise"}
            size={"small"}
            fullWidth
            onClick={() => {
              handleViewCarrierClicked();
            }}
          >
            View
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CarrierListItem;
