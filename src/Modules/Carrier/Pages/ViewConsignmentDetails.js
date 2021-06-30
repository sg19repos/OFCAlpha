import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import {
  Divider,
  FormControlLabel,
  Switch,
  Typography,
  withStyles
} from "@material-ui/core";
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
import { useHistory } from "react-router-dom";
import {
  DataKey,
  ErrorKey,
  FetchingKey
} from "../../../common/Store/callAPI/allAPIs";
import { useSelector } from "react-redux";
import {
  SelectDataObjInResponse,
  SelectFullStateOfThisAPI
} from "../../../common/Store/callAPI/selectors";
import { callAPIAction } from "../../../common/Store/callAPI/actions";
import { GetConsignmentDetailsAPI } from "../APIs";
import { categoryListItems } from "../../../common/constants";
import { format } from "date-fns";
import { weightCategories } from "../../../common/constants";
import LocationOnTwoToneIcon from "@material-ui/icons/LocationOnTwoTone";
import MapWithAMarker from "./StaticMap";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import ContactMailRoundedIcon from "@material-ui/icons/ContactMailRounded";
import ContactMailTwoToneIcon from "@material-ui/icons/ContactMailTwoTone";
import ContactMailOutlinedIcon from "@material-ui/icons/ContactMailOutlined";
import { UpdateConsignment } from "../../Consigner/APIs";
import { GetUserDetailsAPI, LoginAPI } from "../../Common/APIs";

const ViewConsignmentDetails = () => {
  const history = useHistory();
  const closeHandler = history?.location?.state?.closeHandler;
  const [userType, setUserType] = useState("");
  const [consignmentUpdateSubmitted, setConsignmentUpdateSubmitted] = useState(
    false
  );
  const [consignmentUpdated, setConsignmentUpdated] = useState(false);

  const requestObj = {
    id: history?.location?.state?.id
  };
  const {
    [DataKey]: FetchingConsignmentDetailsSuccess,
    [FetchingKey]: FetchingConsignmentDetailsFetching,
    [ErrorKey]: FetchingConsignmentDetailsError
  } = useSelector(state =>
    SelectFullStateOfThisAPI(state, GetConsignmentDetailsAPI)
  );

  const {
    [DataKey]: ConsignmentUpdateSuccess,
    [FetchingKey]: ConsignmentUpdateFetching,
    [ErrorKey]: ConsignmentUpdateError
  } = useSelector(state => SelectFullStateOfThisAPI(state, UpdateConsignment));

  let ConsignmentDetailsResponse = useSelector(state =>
    SelectDataObjInResponse(state, GetConsignmentDetailsAPI)
  );

  let userObj = useSelector(state =>
    SelectDataObjInResponse(state, GetUserDetailsAPI)
  );

  ConsignmentDetailsResponse = ConsignmentDetailsResponse?.[0];
  useEffect(() => {
    if (ConsignmentUpdateSuccess && consignmentUpdateSubmitted) {
      setConsignmentUpdated(!consignmentUpdated);
    }
  }, [ConsignmentUpdateSuccess]);
  useEffect(() => {
    setUserType(
      ConsignmentDetailsResponse?.consignment_consigner ===
        userObj?.user_details?.user_id
        ? "consigner"
        : "carrier"
    );
    setConsignmentUpdated(
      ConsignmentDetailsResponse?.consignment_proposals !== null
    );
  }, [ConsignmentDetailsResponse]);

  useEffect(() => {
    callAPIAction(GetConsignmentDetailsAPI, requestObj, null);
  }, []);

  let fromAddress =
    ConsignmentDetailsResponse?.consignment_pickupLocationObject?.mainText +
    ", " +
    ConsignmentDetailsResponse?.consignment_pickupLocationObject?.addressComponents.find(
      addressElement => {
        return (
          addressElement.types.includes("locality") ||
          addressElement.types.includes("administrative_area_level_2")
        );
      }
    ).long_name;
  let toAddress =
    ConsignmentDetailsResponse?.consignment_dropLocationObject?.mainText +
    ", " +
    ConsignmentDetailsResponse?.consignment_dropLocationObject?.addressComponents.find(
      addressElement => {
        return (
          addressElement.types.includes("locality") ||
          addressElement.types.includes("administrative_area_level_2")
        );
      }
    ).long_name;

  const updateConsignmentProposal = () => {
    const requestObj = {
      consignment_id: ConsignmentDetailsResponse?.consignment_id,
      consignment_proposer: userObj?.user_details?.user_id
        ? userObj?.user_details?.user_id
        : sessionStorage.getItem("OFCLoginId")
    };
    callAPIAction(UpdateConsignment, requestObj);
  };

  const IOSSwitch = withStyles(theme => ({
    root: {
      width: 36,
      height: 20,
      padding: 0,
      margin: theme.spacing(0.25)
    },
    switchBase: {
      padding: 1,
      "&$checked": {
        transform: "translateX(16px)",
        color: theme.palette.common.white,
        "& + $track": {
          backgroundColor: "#595a9b",
          opacity: 1,
          border: "none"
        }
      },
      "&$focusVisible $thumb": {
        color: "#595a9b",
        border: "6px solid #fff"
      }
    },
    thumb: {
      width: 18,
      height: 18
    },
    track: {
      borderRadius: 26 / 2,
      border: `0px solid ${theme.palette.grey[400]}`,
      // backgroundColor: theme.palette.grey[50],
      // backgroundColor: "#aca9d6",
      backgroundColor: "#ddd",
      opacity: 1,
      transition: theme.transitions.create(["background-color", "border"])
    },
    checked: {},
    focusVisible: {}
  }))(({ classes, ...props }) => {
    return (
      <Switch
        focusVisibleClassName={classes.focusVisible}
        disableRipple
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked
        }}
        {...props}
      />
    );
  });

  return (
    <>
      <Grid container>
        {/*<Grid item xs={12}>
          <Grid container alignItems={"center"}>
            <Grid item xs={1}>
              <ArrowBackRoundedIcon onClick={() => closeHandler} />
            </Grid>
            <Grid item xs={11}>
              <Typography component={"span"}>
                Consignment details -{" "}
                {ConsignmentDetailsResponse?.consignment_id}
              </Typography>
            </Grid>
          </Grid>
        </Grid>*/}
        <Grid item xs={12} style={{ zIndex: 19 }}>
          <ArrowBackRoundedIcon onClick={() => history.goBack()} />
        </Grid>

        <Grid item xs={12} className={"mt-1"}>
          {/*<img src={LocationMap} width={"100%"} alt={"LocationMap"} />*/}
          {ConsignmentDetailsResponse?.consignment_pickupLocationObject
            ?.latLng ? (
            <MapWithAMarker
              props={{
                pathCoordinates: [
                  ConsignmentDetailsResponse?.consignment_pickupLocationObject
                    ?.latLng,
                  ConsignmentDetailsResponse?.consignment_dropLocationObject
                    ?.latLng
                ]
              }}
              containerElement={<div style={{ height: `300px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          ) : (
            <Grid
              container
              style={{ height: `300px`, backgroundColor: "#ddd" }}
              alignItems={"center"}
            >
              <Grid item xs={12}>
                <Typography variant="h6" align={"center"}>
                  Can't load map
                </Typography>
                <Typography variant="body1" align={"center"}>
                  Map co-ordinates not found.
                </Typography>
              </Grid>
            </Grid>
          )}
        </Grid>
        <Grid item xs={12} className={"consignmentCard mt-0_5"}>
          <Grid container className={"pt-0_5 pl-1 pr-1 pb-0_5"}>
            <Grid item xs={12}>
              <Typography variant={"caption"} className={"allCaps lighterText"}>
                Consigner Details
              </Typography>
            </Grid>
            <Grid item xs={12} className={"mt-0_5"}>
              <Grid container justify={"space-between"}>
                <Grid item xs={1}>
                  <AccountCircleTwoToneIcon className={"violetColor"} />
                </Grid>
                <Grid item xs={4}>
                  <Typography
                    variant={"caption"}
                    component={"span"}
                    className={"mtn-1s"}
                  >
                    {ConsignmentDetailsResponse?.user_firstname +
                      " " +
                      ConsignmentDetailsResponse?.user_lastname}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Grid container direction={"column"}>
                    <Grid item xs={12}>
                      {userType === "carrier" && (
                        <FormControlLabel
                          control={
                            <IOSSwitch
                              checked={consignmentUpdated}
                              onChange={() => {
                                setConsignmentUpdateSubmitted(true);
                                updateConsignmentProposal();
                              }}
                              name="checkedB"
                            />
                          }
                          labelPlacement={"bottom"}
                          label={
                            consignmentUpdated ? (
                              <Typography
                                className={"lighterText"}
                                variant={"caption"}
                              >
                                Withdraw
                              </Typography>
                            ) : (
                              <Typography
                                className={"lighterText"}
                                variant={"caption"}
                              >
                                Interested
                              </Typography>
                            )
                          }
                        />
                      )}
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={1} className={"alignRight"}>
                  <ChatTwoToneIcon className={"violetColor"} />
                </Grid>
                <Grid item xs={2} className={"alignRight"}>
                  {/*<LocalPhoneTwoToneIcon className={"violetColor"} />*/}

                  <LocalPhoneTwoToneIcon
                    className={"violetColor"}
                    onClick={() =>
                      window.open(
                        "tel:" + ConsignmentDetailsResponse?.user_phone
                      )
                    }
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          className={"consignmentCard mt-0_5 locationInputCard"}
        >
          <Grid container className={"pt-0_5 pl-1 pr-1 pb-0_5"}>
            <Grid item xs={12}>
              <Typography variant={"caption"} className={"allCaps lighterText"}>
                Location details
              </Typography>
            </Grid>
            <Grid item xs={9} className={"mt-1"}>
              <Grid container alignItems={"center"}>
                <Grid item xs={2}>
                  <FiberManualRecordRoundedIcon
                    className={"smallerFont violetColor sourcePointer"}
                  />
                </Grid>
                <Grid item xs={10}>
                  <Typography variant={"caption"}>{fromAddress}</Typography>
                </Grid>
              </Grid>
              <Grid container alignItems={"center"} className={"mt-1"}>
                <Grid item xs={2}>
                  <LocationOnTwoToneIcon
                    className={"smallerFont violetColor destinationPointer"}
                  />
                </Grid>
                <Grid item xs={10}>
                  <Typography variant={"caption"}>{toAddress}</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3} className={"mt-1"}>
              <Grid container justify={"center"} alignItems={"center"}>
                <Grid item xs={12} className={"alignCenter"}>
                  <span
                    style={{ fontSize: "2rem" }}
                    className={`alignCenter consignmentCardIcon mt-0 violetColor lnr lnr-${
                      categoryListItems[
                        ConsignmentDetailsResponse?.consignment_category
                      ]?.icon
                    }`}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    align={"center"}
                    component={"div"}
                    variant={"caption"}
                    className={"allCaps lighterText pt-1"}
                  >
                    {
                      categoryListItems[
                        ConsignmentDetailsResponse?.consignment_category
                      ]?.categoryName
                    }
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          className={"consignmentCard mt-0_5 locationInputCard"}
        >
          <Grid container className={"pt-0_5 pl-1 pr-1 pb-0_5"}>
            <Grid item xs={12}>
              <Typography variant={"caption"} className={"allCaps lighterText"}>
                Pickup details
              </Typography>
            </Grid>
            <Grid item xs={12} className={"mt-0_5"}>
              <Grid container justify={"space-between"}>
                <Grid item xs={1} className={"alignRight pr-0_25"}>
                  <EventTwoToneIcon
                    className={"smallerFont pt-2px violetColor"}
                  />
                </Grid>
                <Grid item xs={3}>
                  <Typography variant={"caption"}>
                    {format(
                      new Date(
                        ConsignmentDetailsResponse
                          ? ConsignmentDetailsResponse.consignment_pickuptime
                          : null
                      ),
                      "MMM dd, yyyy"
                    )}
                  </Typography>
                </Grid>
                <Grid item xs={1} className={"alignRight pr-0_25"}>
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
                    {format(
                      new Date(
                        ConsignmentDetailsResponse
                          ? ConsignmentDetailsResponse.consignment_pickuptime
                          : null
                      ),
                      "hh:mm aa"
                    )}
                  </Typography>
                </Grid>
                <Grid item xs={1} className={"alignRight pr-0_25"}>
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
                    {/*2 KGs*/}
                    {weightCategories[
                      ConsignmentDetailsResponse?.consignment_weight
                    ]?.minWeight +
                      "-" +
                      weightCategories[
                        ConsignmentDetailsResponse?.consignment_weight
                      ]?.maxWeight +
                      " Kgs"}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          className={"consignmentCard mt-0_5 locationInputCard"}
        >
          <Grid container className={"pt-0_5 pl-1 pr-1 pb-0_5"}>
            <Grid item xs={12}>
              <Typography variant={"caption"} className={"allCaps lighterText"}>
                Item details
              </Typography>
            </Grid>
            <Grid item xs={12} className={"mt-1"}>
              <Typography variant={"caption"} className={"weightNormal"}>
                {
                  ConsignmentDetailsResponse?.consignment_description?.[0]
                    ?.title
                }
              </Typography>
            </Grid>
            <Grid item xs={12} className={"mt-0_5"}>
              <Typography variant={"body2"} className={"lighterText"}>
                {
                  ConsignmentDetailsResponse?.consignment_description?.[0]
                    ?.description
                }
                {/*Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur unde suscipit, quam beatae rerum inventore
                consectetur, neque doloribus, cupiditate numquam dignissimos
                laborum fugiat deleniti? Eum quasi quidem quibusdam.*/}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/*{userType === "carrier" ? (
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
      )}*/}
    </>
  );
  // return "Consignment details here";
};

export default ViewConsignmentDetails;
