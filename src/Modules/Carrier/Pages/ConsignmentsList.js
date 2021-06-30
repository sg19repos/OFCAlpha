import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import Filter from "../../Common/Pages/Filter";
import { callAPIAction } from "../../../common/Store/callAPI/actions";
import { GetMatchingConsignmentsAPI } from "../APIs";
import { useHistory } from "react-router-dom";
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
import noResultsIcon from "../../../images/noResults.png";
import Divider from "@material-ui/core/Divider";
import FiberManualRecordTwoToneIcon from "@material-ui/icons/FiberManualRecordTwoTone";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import RoomTwoToneIcon from "@material-ui/icons/RoomTwoTone";
import { TransportModes } from "../../../common/constants";
import ConsignmentCard from "./ConsignmentCard";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";

const ConsignmentsList = () => {
  const history = useHistory();

  const [matchingConsignments, setMatchingConsignments] = useState([]);
  const [originLocation, setOriginLocation] = useState("");
  const [destinationLocation, setDestinationLocation] = useState("All");
  const [selectionState, setSelectionState] = useState("default");

  const [weightsFilter, setWeightsFilter] = useState(null);

  const { administrative_area_level_2, consignerId } = history?.location?.state;
  const requestObj = {
    consignmentPickupLocation: administrative_area_level_2,
    consignerId: consignerId
  };

  console.log("reqObj", requestObj);

  const {
    [DataKey]: FetchingConsignmentSuccess,
    [FetchingKey]: FetchingConsignmentFetching,
    [ErrorKey]: FetchingConsignmentError
  } = useSelector(state =>
    SelectFullStateOfThisAPI(state, GetMatchingConsignmentsAPI)
  );

  const StartingLocationResponse = useSelector(state =>
    SelectDataObjInResponse(state, GetMatchingConsignmentsAPI)
  );

  useEffect(() => {
    callAPIAction(GetMatchingConsignmentsAPI, requestObj, null);
  }, []);

  useEffect(() => {
    setOriginLocation(history?.location?.state?.administrative_area_level_2);
    let matchingConsignmentsTemp;
    if (weightsFilter) {
      matchingConsignmentsTemp = matchingConsignments?.filter(
        consignment => consignment.consignment_weight === weightsFilter
      );
    }
    setMatchingConsignments(
      matchingConsignmentsTemp && matchingConsignmentsTemp.length
        ? matchingConsignmentsTemp
        : StartingLocationResponse
    );
  }, [FetchingConsignmentSuccess, weightsFilter]);

  return (
    <Grid container>
      <Grid item xs={12} style={{ zIndex: 19 }}>
        <ArrowBackRoundedIcon onClick={() => history.goBack()} />
      </Grid>
      <Typography
        variant={"h5"}
        className={"p-1 weightBold alignLeft"}
        align={"left"}
      >
        Consignments List
      </Typography>

      {FetchingConsignmentFetching && (
        <Grid container>
          <Grid xs={12} className={"p-4"}>
            <Typography align={"center"} variant={"h5"}>
              Checking for matching consignments..
            </Typography>
          </Grid>
        </Grid>
      )}
      {matchingConsignments && matchingConsignments?.length ? (
        <>
          {administrative_area_level_2 && (
            <Grid item xs={12} className={"ml-1 "}>
              <Grid container className={"consignmentCard p-1"}>
                <Grid item xs={1} className={"mt-1"}>
                  <div>
                    <FiberManualRecordTwoToneIcon
                      className={"smallerFont violetColor sourcePointer"}
                    />
                  </div>

                  <div>
                    <MoreVertIcon
                      className={"violetColor smallerFont purpleColor"}
                    />
                  </div>

                  <div>
                    <RoomTwoToneIcon
                      className={"smallerFont violetColor destinationPointer"}
                    />
                  </div>
                </Grid>

                <Grid item xs={10} className={"ml-1"}>
                  <Grid
                    item
                    xs={12}
                    className={"pb-0_5 pt-0_5"}
                    onClick={() => {
                      setSelectionState("originSelection");
                    }}
                  >
                    <Typography className={"purpleColor 75Font"}>
                      {originLocation}
                    </Typography>
                  </Grid>
                  <Divider light />
                  <Grid
                    item
                    xs={12}
                    className={"pb-0_5 pt-0_5"}
                    onClick={() => {
                      setSelectionState("destinationSelection");
                    }}
                  >
                    <Typography className={"purpleColor 75Font"}>
                      {destinationLocation
                        ? destinationLocation
                        : "Destination location"}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          )}
          {/*<Grid container className={"carrierListBottomCard p-1 mt-1"}>
            <Grid item xs={12} className={""}>
              <Filter
                vehicleFilter={weightsFilter}
                setVehicleFilter={setWeightsFilter}
              />
            </Grid>
            <Grid item xs={12} className={"mt-1 capitalise"}>
              <Typography variant={"body2"} align={"center"}>
                {weightsFilter
                  ? "journey mode : " + TransportModes[weightsFilter]?.name
                  : "No Filter applied"}
              </Typography>
            </Grid>
          </Grid>*/}

          {/*TODO - Add More filters yet to come*/}

          {matchingConsignments.map(consignment => {
            return (
              <Grid item xs={12} className={"mt-1"}>
                <ConsignmentCard
                  journeyDetails={{
                    origin: consignment?.consignment_pickupLocationObject?.addressComponents?.find(
                      addressElement => {
                        return addressElement?.types?.includes(
                          "administrative_area_level_2"
                        );
                      }
                    ).long_name,
                    destination: consignment?.consignment_dropLocationObject?.addressComponents?.find(
                      addressElement => {
                        return addressElement?.types?.includes(
                          "administrative_area_level_2"
                        );
                      }
                    ).long_name
                  }}
                  title={consignment.consignment_description?.[0]?.title}
                  category={consignment.consignment_category}
                  weight={consignment.consignment_weight}
                  pickuptime={
                    consignment?.consignment_pickuptime
                      ? consignment?.consignment_pickuptime
                      : new Date().toJSON()
                  }
                  consignmentDetails={consignment}
                />
              </Grid>
            );
          })}
        </>
      ) : (
        <Grid xs={12} className={"p-4 alignCenter"}>
          <img width={"50%"} src={noResultsIcon} alt={"Loading results..."} />
          <Typography align={"center"} variant={"h6"}>
            No matching consignments found
          </Typography>
          <Typography align={"center"} variant={"body1"} className={"mt-1"}>
            Don't worry, you can always come back and check for any consignments
            later
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};

//Stay tuned to witness the wave

export default ConsignmentsList;
