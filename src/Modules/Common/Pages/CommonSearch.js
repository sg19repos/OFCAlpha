import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import FiberManualRecordTwoToneIcon from "@material-ui/icons/FiberManualRecordTwoTone";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import RoomTwoToneIcon from "@material-ui/icons/RoomTwoTone";
import Divider from "@material-ui/core/Divider";
import OriginSelector from "../../Carrier/Pages/OriginSelector";
import Filter from "./Filter";
import { TransportModes } from "../../../common/constants";
import ConsignmentCard from "../../Carrier/Pages/ConsignmentCard";
import noResultsIcon from "../../../images/noResults.png";
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
import { GetMatchingConsignmentsAPI } from "../../Carrier/APIs";
import { callAPIAction } from "../../../common/Store/callAPI/actions";
import { GetMatchingCarriersAPI } from "../../Consigner/APIs";
import CarrierListItem from "../../Consigner/Pages/CarrierListItem";
import mockCarrier from "./MockCarrier";
import ViewCarrier from "../../Carrier/Pages/ViewCarrier";

const CommonSearch = () => {
  const [searchType, setSearchType] = useState(1);
  const [filterSelectionState, setFilterSelectionState] = useState("default");
  const [originLocation, setOriginLocation] = useState({});
  const [destinationLocation, setDestinationLocation] = useState({});
  // const [matchingConsignments, setMatchingConsignments] = useState(mockCarrier);
  const [matchingConsignments, setMatchingConsignments] = useState();
  const [weightsFilter, setWeightsFilter] = useState(null);
  const [searchClicked, setSearchClicked] = useState(false);
  const [carriersData, setCarrierData] = useState();
  const [selectedCarrier, setSelectedCarrier] = useState();

  const handleOnClose = () => {
    setFilterSelectionState("default");
  };
  const checkSearchDisabled = () => {
    return (
      (originLocation && Object.keys(originLocation)?.length) ||
      (destinationLocation && Object.keys(destinationLocation)?.length)
    );
  };

  const requestObj = {
    consignmentPickupLocation:
      searchType === 0 ? originLocation?.mainText : undefined,
    carrierStartLocation:
      searchType === 1 ? originLocation?.mainText : undefined
  };

  const {
    [DataKey]: FetchingConsignmentSuccess,
    [FetchingKey]: FetchingConsignmentFetching,
    [ErrorKey]: FetchingConsignmentError
  } = useSelector(state =>
    SelectFullStateOfThisAPI(
      state,
      searchType === 0 ? GetMatchingConsignmentsAPI : GetMatchingCarriersAPI
    )
  );

  const StartingLocationResponse = useSelector(state =>
    SelectDataObjInResponse(
      state,
      searchType === 0 ? GetMatchingConsignmentsAPI : GetMatchingCarriersAPI
    )
  );

  const handleViewCarrier = carrierJourneyId => {
    setFilterSelectionState("carrierSelected");
    setSelectedCarrier(carrierJourneyId);
  };

  /*useEffect(() => {
    callAPIAction(
      searchType === 0 ? GetMatchingConsignmentsAPI : GetMatchingCarriersAPI,
      requestObj,
      null
    );
  }, []);*/

  useEffect(() => {
    if (searchClicked && FetchingConsignmentSuccess) {
      setFilterSelectionState("resultsFetched");
      let matchingConsignmentsTemp;
      /*if (weightsFilter) {
        matchingConsignmentsTemp = matchingConsignments?.filter(
          consignment => consignment.consignment_weight === weightsFilter
        );
      }*/
      if (weightsFilter !== null) {
        matchingConsignmentsTemp = FetchingConsignmentSuccess?.filter(
          item => item.carrier_journeyMode.journey_vehicleType === weightsFilter
        );
      }
      setMatchingConsignments(
        matchingConsignmentsTemp && matchingConsignmentsTemp.length
          ? matchingConsignmentsTemp
          : StartingLocationResponse
      );
      let carriersData = {};
      (searchType !== 0 &&
      matchingConsignmentsTemp &&
      matchingConsignmentsTemp.length
        ? matchingConsignmentsTemp
        : StartingLocationResponse
      ).forEach(item => {
        carriersData[item.carrier_journeyId] = { ...item };
      });
      setSearchClicked(false);
      setCarrierData(carriersData);
    }
  }, [FetchingConsignmentSuccess, weightsFilter]);

  const handleClose = () => setFilterSelectionState("default");

  return (
    <>
      {["default", "resultsFetched"].includes(filterSelectionState) && (
        <Grid
          container
          direction="row"
          justify="center"
          className={"searchTab mt-1"}
        >
          <Grid item xs={6} alignItems={"center"}>
            <Button
              variant={searchType === 0 ? "contained" : "outlined"}
              fullWidth={true}
              color={"primary"}
              className={"btnLeftRadius"}
              onClick={() => {
                setFilterSelectionState("default");
                setMatchingConsignments([]);
                setSearchType(0);
              }}
            >
              Shipments
            </Button>
          </Grid>
          <Grid item xs={6} alignItems={"center"}>
            <Button
              variant={searchType === 1 ? "contained" : "outlined"}
              color={"primary"}
              fullWidth={true}
              className={"btnRightRadius"}
              onClick={() => {
                setFilterSelectionState("default");
                setMatchingConsignments([]);
                setSearchType(1);
              }}
            >
              Carriers
            </Button>
          </Grid>
        </Grid>
      )}

      {["default", "resultsFetched"].includes(filterSelectionState) && (
        <Grid container className={"consignmentCard p-1 mt-1"}>
          <Grid item xs={1} className={"mt-1"}>
            <div>
              <FiberManualRecordTwoToneIcon
                className={"smallerFont violetColor sourcePointer"}
              />
            </div>

            <div>
              <MoreVertIcon className={"violetColor smallerFont purpleColor"} />
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
                setFilterSelectionState("originSelection");
              }}
            >
              <Typography className={"purpleColor 75Font"}>
                {originLocation && Object.keys(originLocation)?.length
                  ? originLocation.mainText
                  : "Starting location"}
              </Typography>
            </Grid>
            <Divider light />
            <Grid
              item
              xs={12}
              className={"pb-0_5 pt-0_5"}
              onClick={() => {
                setFilterSelectionState("destinationSelection");
              }}
            >
              <Typography className={"purpleColor 75Font"}>
                {Object.keys(destinationLocation)?.length
                  ? destinationLocation.mainText
                  : "Destination location"}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} className={"mt-2"}>
            <Button
              variant="contained"
              color={"primary"}
              fullWidth={true}
              onClick={() => {
                setSearchClicked(true);
                callAPIAction(
                  searchType === 0
                    ? GetMatchingConsignmentsAPI
                    : GetMatchingCarriersAPI,
                  requestObj,
                  null
                );
              }}
              disabled={!checkSearchDisabled()}
            >
              Search {searchType === 0 ? "Shipments" : "Carriers"}
            </Button>
          </Grid>
        </Grid>
      )}
      {FetchingConsignmentFetching && searchClicked && (
        <Grid container>
          <Grid xs={12} className={"p-4"}>
            <Typography align={"center"} variant={"h5"}>
              Checking for matching consignments..
            </Typography>
          </Grid>
        </Grid>
      )}
      {["default", "resultsFetched"].includes(filterSelectionState) &&
      matchingConsignments &&
      matchingConsignments?.length ? (
        <>
          <Grid container className={"carrierListBottomCard p-1 mt-1"}>
            <Grid item xs={12} className={""}>
              <Filter
                vehicleFilter={weightsFilter}
                setVehicleFilter={setWeightsFilter}
              />
            </Grid>
            <Grid item xs={12} className={"mt-1 capitalise"}>
              {/*<Typography variant={"body2"} align={"center"}>
                {weightsFilter !== null
                  ? "journey mode : " + TransportModes[weightsFilter]?.name
                  : "No Filter applied"}
              </Typography>*/}
              <Typography variant={"body2"} align={"center"}>
                {weightsFilter !== null
                  ? "journey mode : " +
                    TransportModes[weightsFilter]?.name +
                    "-" +
                    (matchingConsignments?.length ===
                    StartingLocationResponse?.length
                      ? "No matching results"
                      : matchingConsignments?.length)
                  : "No Filter applied"}
              </Typography>
            </Grid>
          </Grid>

          {matchingConsignments.map(consignment => {
            return (
              <Grid item xs={12} className={"mt-1"}>
                {searchType === 0 ? (
                  <ConsignmentCard
                    journeyDetails={{
                      origin: consignment?.consignment_pickupLocationObject?.addressComponents.find(
                        addressElement => {
                          return addressElement?.types.includes(
                            "administrative_area_level_2"
                          );
                        }
                      ).long_name,
                      destination: consignment?.consignment_dropLocationObject?.addressComponents.find(
                        addressElement => {
                          return addressElement?.types.includes(
                            "administrative_area_level_2"
                          );
                        }
                      ).long_name
                    }}
                    title={consignment?.consignment_description?.[0].title}
                    category={consignment?.consignment_category}
                    weight={consignment?.consignment_weight}
                    pickuptime={consignment?.consignment_pickuptime}
                    consignmentDetails={consignment}
                    closeHandler={handleClose}
                  />
                ) : (
                  <CarrierListItem
                    id={consignment?.carrier_journeyId}
                    journeyDetails={{
                      origin:
                        consignment?.carrier_startingLocationObject?.mainText,
                      destination:
                        consignment?.carrier_endLocationObject?.mainText,
                      startingDate: new Date(consignment?.carrier_starttime)
                    }}
                    rating={4.5}
                    vehicleType={
                      consignment?.carrier_journeyMode?.journey_vehicleType
                    }
                    handleViewCarrierClicked={() =>
                      handleViewCarrier(consignment?.carrier_journeyId)
                    }
                  />
                )}
              </Grid>
            );
          })}
        </>
      ) : (
        ["default", "resultsFetched"].includes(filterSelectionState) &&
        searchClicked && (
          <Grid xs={12} className={"p-4 alignCenter"}>
            <img width={"50%"} src={noResultsIcon} alt={"Loading results..."} />
            <Typography align={"center"} variant={"h6"}>
              No matching {searchType === 0 ? "shipments" : "carriers"} found
            </Typography>
          </Grid>
        )
      )}

      {filterSelectionState === "originSelection" && (
        <OriginSelector
          closeHandler={handleOnClose}
          type={"origin"}
          setCarrierState={setFilterSelectionState}
          originLocation={originLocation}
          setOriginLocation={setOriginLocation}
        />
      )}
      {filterSelectionState === "destinationSelection" && (
        <OriginSelector
          closeHandler={handleOnClose}
          type={"destination"}
          setCarrierState={setFilterSelectionState}
          destinationLocation={destinationLocation}
          setDestinationLocation={setDestinationLocation}
        />
      )}

      {filterSelectionState === "carrierSelected" && (
        <ViewCarrier
          // journeyDetails={carriersData?.[selectedCarrier]}
          journeyDetails={{
            journeyStartLocationLatlng:
              carriersData?.[selectedCarrier]?.carrier_startingLocationObject
                ?.latLng,
            journeyEndLocationLatlng:
              carriersData?.[selectedCarrier]?.carrier_endLocationObject
                ?.latLng,
            journeyVehicleMode:
              carriersData?.[selectedCarrier]?.carrier_journeyMode
                ?.journey_vehicleType,
            journeyVehicleModal:
              carriersData?.[selectedCarrier]?.carrier_journeyMode
                ?.journey_vehicleModal,
            journeyVehicleNumber: carriersData?.[selectedCarrier]
              ?.carrier_journeyMode?.journey_vehicleNumber
              ? carriersData?.[selectedCarrier]?.carrier_journeyMode
                  ?.journey_vehicleNumber
              : "NA",
            journeyVerifiedStatus: true,
            journeyStartLocationName:
              carriersData?.[selectedCarrier]?.carrier_startingLocationObject
                ?.mainText,
            journeyEndLocationName:
              carriersData?.[selectedCarrier]?.carrier_endLocationObject
                ?.mainText,
            journeyStartTime:
              carriersData?.[selectedCarrier]?.carrier_starttime,
            journeyCarrierId: carriersData?.[selectedCarrier]?.carrier_id,
            journeyProposals:
              carriersData?.[selectedCarrier]?.carrier_journeyProposals,
            journeyId: carriersData?.[selectedCarrier]?.carrier_journeyId
          }}
          carrierDetails={{
            carrierFirstName: carriersData?.[selectedCarrier]?.user_firstname,
            carrierLastName: carriersData?.[selectedCarrier]?.user_lastname,
            carrierEmail: carriersData?.[selectedCarrier]?.user_email,
            carrierPhone: carriersData?.[selectedCarrier]?.user_phone
          }}
          setFilterSelectionState={setFilterSelectionState}
          showbackArrow={true}
        />
      )}
    </>
  );
};

export default CommonSearch;
