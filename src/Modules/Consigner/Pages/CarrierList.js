import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@material-ui/core";
// import LocationSearch_obselete from "../../Common/Pages/LocationSearch_obselete";
import Filter from "../../Common/Pages/Filter";
import CarrierListItem from "./CarrierListItem";
import { callAPIAction } from "../../../common/Store/callAPI/actions";
import { GetMatchingCarriersAPI } from "../APIs";
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
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import ViewCarrier from "../../Carrier/Pages/ViewCarrier";

const CarrierList = () => {
  const history = useHistory();

  const [matchingCarriers, setMatchingCarriers] = useState([]);
  const [originLocation, setOriginLocation] = useState("");
  const [destinationLocation, setDestinationLocation] = useState("All");
  const [selectionState, setSelectionState] = useState("default");
  const [vehicleFilter, setVehicleFilter] = useState(null);
  const [carrierSelected, setCarrierSelected] = useState("");

  const { administrative_area_level_2, carrierId } = history?.location?.state;

  const requestObj = {
    carrierStartLocation: administrative_area_level_2,
    carrierId: carrierId
  };

  const {
    [DataKey]: FetchingCarrierSuccess,
    [FetchingKey]: FetchingCarrierFetching,
    [ErrorKey]: FetchingCarrierError
  } = useSelector(state =>
    SelectFullStateOfThisAPI(state, GetMatchingCarriersAPI)
  );

  const StartingLocationResponse = useSelector(state =>
    SelectDataObjInResponse(state, GetMatchingCarriersAPI)
  );

  useEffect(() => {
    callAPIAction(GetMatchingCarriersAPI, requestObj, null);
  }, []);

  useEffect(() => {
    setOriginLocation(history.location.state.administrative_area_level_2);
    let matchingCarriersTemp;
    if (vehicleFilter !== null) {
      // matchingCarriersTemp = matchingCarriers?.filter(
      matchingCarriersTemp = StartingLocationResponse?.filter(
        carrier =>
          carrier.carrier_journeyMode.journey_vehicleType === vehicleFilter
      );
    }
    setMatchingCarriers(
      matchingCarriersTemp && matchingCarriersTemp.length
        ? matchingCarriersTemp
        : StartingLocationResponse
    );
  }, [FetchingCarrierSuccess, vehicleFilter]);

  useEffect(() => {
    if (StartingLocationResponse) {
      console.log("StartingLocationResponse", StartingLocationResponse);
    }
  }, [StartingLocationResponse]);

  return (
    <Grid container>
      <>
        <Grid item xs={12} style={{ zIndex: 19 }}>
          <ArrowBackRoundedIcon onClick={() => history.goBack()} />
        </Grid>

        {!carrierSelected && (
          <Typography
            variant={"h5"}
            className={"p-1 weightBold alignLeft"}
            align={"left"}
          >
            Carrier List
          </Typography>
        )}
      </>

      {!carrierSelected && FetchingCarrierFetching && (
        <Grid container>
          <Grid xs={12} className={"p-4"}>
            <Typography align={"center"} variant={"h5"}>
              Checking for matching carriers..
            </Typography>
          </Grid>
        </Grid>
      )}
      {matchingCarriers && matchingCarriers?.length ? (
        <>
          {!carrierSelected && administrative_area_level_2 && (
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
          {!carrierSelected && (
            <Grid container className={"carrierListBottomCard p-1 mt-1"}>
              <Grid item xs={12} className={""}>
                <Filter
                  vehicleFilter={vehicleFilter}
                  setVehicleFilter={setVehicleFilter}
                />
              </Grid>
              <Grid item xs={12} className={"mt-1 capitalise"}>
                <Typography variant={"body2"} align={"center"}>
                  {vehicleFilter !== null
                    ? "journey mode : " +
                      TransportModes[vehicleFilter]?.name +
                      "-" +
                      (matchingCarriers?.length ===
                      StartingLocationResponse?.length
                        ? "No matching results"
                        : matchingCarriers?.length)
                    : "No Filter applied"}
                </Typography>
              </Grid>
            </Grid>
          )}

          {/*TODO - Add More filters yet to come*/}

          {!carrierSelected &&
            matchingCarriers.map(carrier => {
              return (
                <CarrierListItem
                  journeyDetails={{
                    origin: carrier.carrier_startingLocationObject?.mainText,
                    destination: carrier.carrier_endLocationObject?.mainText,
                    startingDate: new Date(carrier.carrier_starttime)
                  }}
                  rating={4.5}
                  vehicleType={carrier.carrier_journeyMode.journey_vehicleType}
                  handleViewCarrierClicked={() => setCarrierSelected(carrier)}
                />
              );
            })}
          {carrierSelected && (
            <ViewCarrier
              journeyDetails={{
                journeyStartLocationLatlng:
                  carrierSelected?.carrier_startingLocationObject?.latLng,
                journeyEndLocationLatlng:
                  carrierSelected?.carrier_endLocationObject?.latLng,
                journeyVehicleMode:
                  carrierSelected?.carrier_journeyMode?.journey_vehicleType,
                journeyVehicleModal:
                  carrierSelected?.carrier_journeyMode?.journey_vehicleModal,
                journeyVehicleNumber: carrierSelected?.carrier_journeyMode
                  ?.journey_vehicleNumber
                  ? carrierSelected?.carrier_journeyMode?.journey_vehicleNumber
                  : "NA",
                journeyVerifiedStatus: true,
                journeyStartLocationName:
                  carrierSelected?.carrier_startingLocationObject?.mainText,
                journeyEndLocationName:
                  carrierSelected?.carrier_endLocationObject?.mainText,
                journeyStartTime: carrierSelected?.carrier_starttime,
                journeyCarrierId: carrierSelected?.carrier_id,
                journeyProposals: carrierSelected?.carrier_journeyProposals,
                journeyId: carrierSelected?.carrier_journeyId
              }}
              carrierDetails={{
                carrierFirstName: carrierSelected?.user_firstname,
                carrierLastName: carrierSelected?.user_lastname,
                carrierEmail: carrierSelected?.user_email,
                carrierPhone: carrierSelected?.user_phone
              }}
            />
          )}
        </>
      ) : (
        <Grid xs={12} className={"p-4 alignCenter"}>
          <img width={"50%"} src={noResultsIcon} alt={"Loading results..."} />
          <Typography align={"center"} variant={"h6"}>
            No matching carriers found
          </Typography>
          <Typography align={"center"} variant={"body1"} className={"mt-1"}>
            Don't worry, you can always come back and check for any carriers
            later
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};

//Stay tuned to witness the wave

export default CarrierList;
