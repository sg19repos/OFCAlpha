import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";
import LocalShippingTwoToneIcon from "@material-ui/icons/LocalShippingTwoTone";
import LocationOnTwoToneIcon from "@material-ui/icons/LocationOnTwoTone";
import WatchLaterTwoToneIcon from "@material-ui/icons/WatchLaterTwoTone";
import SpeedTwoToneIcon from "@material-ui/icons/SpeedTwoTone";
import EventTwoToneIcon from "@material-ui/icons/EventTwoTone";
import { format } from "date-fns";
import { categoryListItems, weightCategories } from "../../../common/constants";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import { useHistory } from "react-router-dom";

const ConsignmentCard = ({
  journeyDetails,
  title,
  category,
  weight,
  pickuptime,
  consignmentDetails,
  closeHandler = () => {}
}) => {
  const { origin, destination } = journeyDetails;
  const history = useHistory();
  // console.log("closeHandler", closeHandler);
  return (
    <Grid
      container
      onClick={() => {
        history.push({
          pathname: "/consignmentDetails",
          search: "?id=" + consignmentDetails.consignment_id,
          state: {
            id: consignmentDetails.consignment_id
            // closeHandler: closeHandler
          }
        });
      }}
    >
      <Grid
        item
        xs={12}
        className={"pl-1_5 pr-1_5 consignmentCard regularShadow"}
      >
        <Grid container>
          <Grid item xs={3} className={"pt-1_5"}>
            <Grid container justify={"center"} className={"alignCenter"}>
              <Grid item xs={12}>
                <span
                  style={{ fontSize: "1.5rem" }}
                  className={`violetColor lnr lnr-${categoryListItems[category].icon}`}
                />
              </Grid>
              <Grid item xs={12} className={"truncateText"}>
                <Typography variant={"caption"} className={"lighterText"}>
                  {categoryListItems[category].categoryName}
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={9} className={"pl-1 shadow1 onlyLeftBorder"}>
            <Typography
              variant={"body1"}
              className={"capitalise truncateText mt-1"}
            >
              {title}
            </Typography>
            <Grid container justify={"space-between"} className={"mt-0_5"}>
              <Grid item xs={1}>
                <SpeedTwoToneIcon
                  className={"smallerFont pt-2px  violetColor"}
                />
              </Grid>

              <Grid item xs={3}>
                <Typography
                  component={"span"}
                  variant={"caption"}
                  className={"capitalise"}
                >
                  {weightCategories[weight].minWeight +
                    "-" +
                    weightCategories[weight].maxWeight +
                    "kg"}
                </Typography>
              </Grid>

              <Grid item xs={8}>
                <Grid container justify={"space-around"}>
                  <Grid item xs={2} className={"alignRight"}>
                    <WatchLaterTwoToneIcon
                      className={"smallerFont pt-2px violetColor"}
                    />
                  </Grid>
                  <Grid item xs={10} className={"pl-0_25"}>
                    <Typography
                      component={"span"}
                      variant={"caption"}
                      className={"capitalise"}
                    >
                      {format(
                        pickuptime ? new Date(pickuptime) : undefined,
                        "MMM dd"
                      ) + ","}
                    </Typography>
                    <Typography
                      component={"span"}
                      variant={"caption"}
                      className={"capitalise pl-0_5"}
                    >
                      {format(
                        pickuptime ? new Date(pickuptime) : undefined,
                        "hh:mm aa"
                      )}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              {/*<Grid item xs={1}>
                <EventTwoToneIcon
                  className={"smallerFont pt-2px violetColor"}
                />
              </Grid>

              <Grid item xs={3}>
                <Typography
                  component={"span"}
                  variant={"caption"}
                  className={"capitalise"}
                >
                  {format(new Date(pickuptime), "MMM dd")}
                </Typography>
              </Grid>*/}
            </Grid>
          </Grid>
        </Grid>
        <Divider className={"mt-1"} color={"primary"} light={false} />
        <Grid
          container
          justify={"space-between"}
          className={"mt-0_5"}
          alignItems={"center"}
        >
          <Grid item xs={5}>
            <Grid container justify={"space-between"} alignItems={"center"}>
              <Grid item xs={4} className={"mt-0_5"}>
                <LocalShippingTwoToneIcon
                  className={"violetColor iconBackground"}
                  fontSize={"small"}
                />
              </Grid>
              <Grid item xs={8}>
                <Typography variant={"caption"} className={"capitalise"}>
                  {origin}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <ArrowForwardRoundedIcon color={"disabled"} />
          </Grid>
          <Grid item xs={5}>
            <Grid container justify={"space-evenly"} alignItems={"center"}>
              <Grid item xs={4} className={"mt-0_5"}>
                <LocationOnTwoToneIcon
                  className={"violetColor iconBackground"}
                  fontSize={"small"}
                />
              </Grid>
              <Grid item xs={8}>
                <Typography variant={"caption"} className={"capitalise"}>
                  {destination}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ConsignmentCard;
