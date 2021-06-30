import React, { useEffect, useState } from "react";
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
import MapWithAMarker from "./StaticMap";
import { TransportModes } from "../../../common/constants";
import { callAPIAction } from "../../../common/Store/callAPI/actions";
import { GetUserDetailsAPI, GetUserDetailsByIdAPI } from "../../Common/APIs";
import { format } from "date-fns";
import AccountCircleTwoToneIcon from "@material-ui/icons/AccountCircleTwoTone";
import { getFullName } from "../../../common/CommonUtils";
import CarrierRating from "../../Common/Rating";
import { useSelector } from "react-redux";
import {
  SelectDataObjInResponse,
  SelectFullStateOfThisAPI
} from "../../../common/Store/callAPI/selectors";
import {
  DataKey,
  ErrorKey,
  FetchingKey
} from "../../../common/Store/callAPI/allAPIs";
import { UpdateCarrierAPI } from "../APIs";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";

const ViewCarrier = ({
  journeyDetails,
  carrierDetails,
  setFilterSelectionState = () => {},
  showbackArrow = false
}) => {
  const {
    journeyStartLocationLatlng,
    journeyEndLocationLatlng,
    journeyVehicleMode,
    journeyVehicleNumber,
    journeyVerifiedStatus = true,
    journeyStartLocationName,
    journeyEndLocationName,
    journeyStartTime,
    journeyEndTime,
    journeyCarrierId,
    journeyId,
    journeyProposals,
    journeyVehicleModal
  } = journeyDetails;

  const {
    carrierFirstName,
    carrierLastName,
    carrierEmail,
    carrierPhone
  } = carrierDetails;

  const [carrierUpdateSubmitted, setCarrierUpdateSubmitted] = useState(false);
  const [carrierUpdated, setCarrierUpdated] = useState(false);

  const {
    [DataKey]: CarrierUpdateSuccess,
    [FetchingKey]: CarrierUpdateFetching,
    [ErrorKey]: CarrierUpdateError
  } = useSelector(state => SelectFullStateOfThisAPI(state, UpdateCarrierAPI));

  let userObj = useSelector(state =>
    SelectDataObjInResponse(state, GetUserDetailsAPI)
  );

  useEffect(() => {
    setCarrierUpdated(journeyDetails?.journeyProposals !== null);

    const requestObj = { id: journeyCarrierId };
    callAPIAction(GetUserDetailsByIdAPI, requestObj);
  }, []);

  useEffect(() => {
    if (CarrierUpdateSuccess && carrierUpdateSubmitted) {
      setCarrierUpdated(!carrierUpdated);
    }
  }, [CarrierUpdateSuccess]);

  const updateCarrierProposal = () => {
    const requestObj = {
      carrier_journeyId: journeyId,
      carrier_proposer: userObj?.user_details?.user_id
        ? userObj?.user_details?.user_id
        : sessionStorage.getItem("OFCLoginId")
    };
    callAPIAction(UpdateCarrierAPI, requestObj);
  };

  return (
    <Grid container>
      {showbackArrow && (
        <Grid item xs={12} style={{ zIndex: 19 }}>
          <ArrowBackRoundedIcon
            onClick={() => setFilterSelectionState("default")}
          />
        </Grid>
      )}
      <Grid item xs={12} style={{ zIndex: 8 }}>
        {/*<img src={LocationMap} alt={"LocationMap"} width={"100%"} />*/}
        {journeyStartLocationLatlng && journeyEndLocationLatlng ? (
          <MapWithAMarker
            props={{
              pathCoordinates: [
                journeyStartLocationLatlng,
                journeyEndLocationLatlng
              ]
            }}
            containerElement={<div style={{ height: `280px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        ) : (
          <Grid
            container
            style={{ height: `300px`, backgroundColor: "#ddd" }}
            alignItems={"center"}
            className={"pb-4"}
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
      <Grid
        item
        xs={12}
        style={{
          position: "absolute",
          bottom: "13%",
          left: 0,
          padding: "0% 5% 0% 5%",
          zIndex: 9
        }}
      >
        <Grid item xs={12} className={"consignmentCard"}>
          <Grid container>
            <Grid item xs={12}>
              <Grid container className={"carrierFromTo"}>
                <Grid item xs={4} className={"pl-1"}>
                  {/*<img src={CarIcon} alt={"vehicle icon"} width={"70%"} />*/}
                  <Typography
                    variant={"caption"}
                    component={"div"}
                    className={"lighterText allCaps"}
                  >
                    Mode: {TransportModes[journeyVehicleMode].name}
                  </Typography>
                  <img
                    alt={TransportModes[journeyVehicleMode].name}
                    className={"carrierVehicleIcon"}
                    src={TransportModes[journeyVehicleMode].icon}
                    width={"50px"}
                  />
                </Grid>
                <Grid item xs={5} className={"truncateText"}>
                  <Typography
                    variant={"caption"}
                    component={"div"}
                    className={"lighterText allCaps alignLeft"}
                  >
                    Vehicle details
                  </Typography>
                  <div className={"mt-0_5 truncateText"}>
                    <Typography
                      variant={"caption"}
                      component={"span"}
                      className={"lighterText alignLeft lighterText mt-0_5"}
                    >
                      No.
                    </Typography>
                    <Typography
                      className={"regularFont alignCenter pl-0_5"}
                      variant={"caption"}
                      align={"center"}
                    >
                      {/*TODO - Write a common masking function*/}
                      {journeyVehicleNumber}
                    </Typography>
                    <br />
                    <Typography
                      variant={"caption"}
                      component={"span"}
                      className={"lighterText alignLeft lighterText"}
                    >
                      Make.
                    </Typography>
                    <Typography
                      className={"alignCenter pl-0_5 truncateText"}
                      variant={"caption"}
                      align={"center"}
                    >
                      {/*TODO - Write a common masking function*/}
                      {journeyVehicleModal}
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs={3} className={"alignCenter"}>
                  <Typography
                    variant={"caption"}
                    component={"div"}
                    className={"lighterText allCaps"}
                  >
                    {journeyVerifiedStatus ? "Verified" : "NA"}
                  </Typography>
                  <VerifiedUserRoundedIcon
                    fontSize={"small"}
                    className={"greenColor mt-1"}
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} className={"pt-0_5 pl-1 pr-1"}>
              <Grid container className={"mt-0_5"}>
                <Grid item xs={6} className={"truncateText"}>
                  <Grid item xs={4}>
                    <Typography
                      variant={"caption"}
                      className={"lighterText allCaps"}
                      component={"span"}
                    >
                      User :
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography
                      variant={"caption"}
                      component={"span"}
                      className={"mtn-1s"}
                    >
                      {getFullName(carrierFirstName, carrierLastName)}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={6} className={"mt-0"}>
                  <Typography
                    variant={"caption"}
                    className={"lighterText allCaps"}
                    component={"span"}
                  >
                    Rating :
                  </Typography>
                  <Grid item xs={12} className={""}>
                    <CarrierRating linearAligned rating={4} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} className={"pt-1"}>
              <Grid container className={"carrierFromTo"}>
                <Grid item xs={6}>
                  <Typography
                    variant={"caption"}
                    className={"lighterText allCaps"}
                    component={"span"}
                  >
                    From :
                  </Typography>
                  <Grid container alignItems={"center"}>
                    <Grid item xs={10}>
                      <Typography variant={"caption"}>
                        {journeyStartLocationName}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    variant={"caption"}
                    className={"lighterText allCaps"}
                    component={"span"}
                  >
                    To :
                  </Typography>
                  <Grid container alignItems={"center"}>
                    <Grid item xs={10}>
                      <Typography variant={"caption"}>
                        {journeyEndLocationName}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container className={"p-1"}>
          <Grid item xs={12}>
            <Typography variant={"caption"} className={"lighterText allCaps"}>
              Estimated Ride timings:
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography
              variant={"caption"}
              className={"lighterText allCaps"}
              component={"span"}
            >
              Date:
            </Typography>
            <Typography
              variant={"caption"}
              className={"pl-0_5"}
              component={"span"}
            >
              {format(new Date(journeyStartTime), "MMM dd, yyyy")}
            </Typography>
          </Grid>
          <Grid item xs={6} className={"alignRight"}>
            <Typography
              variant={"caption"}
              className={"lighterText allCaps"}
              component={"span"}
            >
              Starting:
            </Typography>
            <Typography
              variant={"caption"}
              className={"pl-0_5"}
              component={"span"}
            >
              {/*7:00 PM*/}
              {format(new Date(journeyStartTime), "hh: mm aa")}
            </Typography>
          </Grid>
          <Grid container className={"mt-1"}>
            <Grid item xs={4}>
              <Button
                className={"violetBG plainColor"}
                variant="contained"
                endIcon={<PhoneTwoToneIcon />}
                onClick={() => window.open("tel:" + carrierPhone)}
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
                className={carrierUpdated ? "greenBG plainColor" : ""}
                variant={carrierUpdated ? "contained" : "outlined"}
                endIcon={<ThumbUpAltTwoToneIcon />}
                onClick={() => {
                  setCarrierUpdateSubmitted(true);
                  updateCarrierProposal();
                }}
              >
                {carrierUpdated ? "Drop" : "Deal"}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ViewCarrier;
