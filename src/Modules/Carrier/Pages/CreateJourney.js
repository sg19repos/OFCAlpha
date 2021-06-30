import React, { useEffect, useState } from "react";
// import Pincode from "../../Consigner/Pages/Pincode_obselete";
import { Grid, Typography } from "@material-ui/core";
import FiberManualRecordRoundedIcon from "@material-ui/icons/FiberManualRecordRounded";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FiberManualRecordTwoToneIcon from "@material-ui/icons/FiberManualRecordTwoTone";
import ArrowDropDownRoundedIcon from "@material-ui/icons/ArrowDropDownRounded";
import RoomTwoToneIcon from "@material-ui/icons/RoomTwoTone";
// import TrainIcon from "../../../images/train.png";
import TimePicker from "../../Consigner/Pages/TimePicker";
import Button from "@material-ui/core/Button";
import VehicleSelection from "./VehicleSelection";
import { TransportModes } from "../../../common/constants";
import { callAPIAction } from "../../../common/Store/callAPI/actions";
import { CreateCarrierAPI } from "../APIs";
import AddVehicleDetails from "./AddVehicleDetails";
import Divider from "@material-ui/core/Divider";
import OriginSelector from "./OriginSelector";
import {
  DataKey,
  FetchingKey,
  ErrorKey
} from "../../../common/Store/callAPI/allAPIs";
import { useSelector } from "react-redux";
import {
  SelectDataObjInResponse,
  SelectFullStateOfThisAPI
} from "../../../common/Store/callAPI/selectors";
import JourneyCreated from "./JourneyCreated";
import { GetUserDetailsAPI } from "../../Common/APIs";

const CreateJourney = () => {
  const [carrierState, setCarrierState] = useState("default");
  const [pickupTime, setPickupTime] = useState([]);
  const [vehicleDetails, setVehicleDetails] = useState({
    journey_vehicleType: -1,
    journey_vehicleModal: "",
    journey_vehicleNumber: ""
  });
  const [originLocation, setOriginLocation] = useState({});
  const [destinationLocation, setDestinationLocation] = useState({});
  const [createCarrierSubmitted, setCreateCarrierSubmitted] = useState(false);
  const userObj = useSelector(state =>
    SelectDataObjInResponse(state, GetUserDetailsAPI)
  );

  const handleSaveCarrier = () => {
    const requestObj = {
      journey_carrierId: userObj?.user_details?.user_id,
      journey_StartLocation: originLocation.description,
      journey_EndLocation: destinationLocation.description,
      journey_StartTime: pickupTime,
      journey_LastUpdatedTime: new Date().toJSON(),
      journey_accepted: false,
      journey_StartLocationObject: { ...originLocation, addressComponents: {} },
      journey_EndLocationObject: {
        ...destinationLocation,
        addressComponents: {}
      },
      journey_Mode: {
        journey_vehicleType: vehicleDetails.journey_vehicleType,
        journey_vehicleModal: vehicleDetails.journey_vehicleModal,
        journey_vehicleNumber: vehicleDetails.journey_vehicleNumber
      }
    };
    callAPIAction(CreateCarrierAPI, requestObj);
    setCreateCarrierSubmitted(true);
  };

  const {
    [DataKey]: CreateCarrierSuccess,
    [FetchingKey]: CreateCarrierFetching,
    [ErrorKey]: CreateCarrierError
  } = useSelector(state => SelectFullStateOfThisAPI(state, CreateCarrierAPI));

  useEffect(() => {
    if (
      CreateCarrierSuccess &&
      Object.keys(CreateCarrierSuccess) &&
      createCarrierSubmitted
    ) {
      // alert("Notification submitted successfully");
      setCarrierState("journeyCreated");
    }
  }, [CreateCarrierSuccess, createCarrierSubmitted]);

  useEffect(() => {
    if (CreateCarrierError && createCarrierSubmitted) {
      alert(
        "There seems to be an error, please try again" + CreateCarrierError
      );
    }
  }, [CreateCarrierError, createCarrierSubmitted]);

  const handleOnClose = () => {
    setCarrierState("default");
  };

  return (
    <>
      {![
        "vehicle",
        "originSelection",
        "destinationSelection",
        "journeyCreated"
      ].includes(carrierState) && (
        <>
          <Typography
            variant={"h5"}
            className={"p-1 weightBold alignLeft mb-2"}
            align={"left"}
          >
            Create journey
          </Typography>
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
                  setCarrierState("originSelection");
                }}
              >
                <Typography className={"purpleColor 75Font"}>
                  {Object.keys(originLocation)?.length
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
                  setCarrierState("destinationSelection");
                }}
              >
                <Typography className={"purpleColor 75Font"}>
                  {Object.keys(destinationLocation)?.length
                    ? destinationLocation.mainText
                    : "Destination location"}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            className={
              "consignmentCard pt-0_5 pb-0_5 pr-1 pl-1 mt-1 regularShadow alignItemsCenter"
            }
            onClick={() => {
              setCarrierState("vehicle");
            }}
          >
            <Grid item xs={11}>
              {carrierState === "default" ? (
                <Typography variant={"body2"} className={""}>
                  Pick your Mode of transport
                </Typography>
              ) : (
                <span className={"alignItemsCenter flexDisplay"}>
                  <Typography
                    variant={"body2"}
                    component={"span"}
                    className={"mr-3"}
                  >
                    Mode selected
                  </Typography>
                  <img
                    src={
                      TransportModes[vehicleDetails?.journey_vehicleType]?.icon
                    }
                    alt={
                      TransportModes[vehicleDetails?.journey_vehicleType]?.name
                    }
                    height={"50px"}
                    style={{ objectFit: "contain" }}
                    className={"ml-1"}
                  />
                </span>
              )}
            </Grid>

            <Grid item xs={1}>
              <ArrowDropDownRoundedIcon
                fontSize={"large"}
                className={"violetColor "}
              />
            </Grid>
          </Grid>
          {carrierState === "vehicleType" && (
            <AddVehicleDetails
              setVehicleDetails={setVehicleDetails}
              setCarrierState={setCarrierState}
            />
          )}
          <Grid
            item
            xs={12}
            className={"mt-1 consignmentCard regularShadow p-1"}
          >
            <TimePicker fullWidth={true} setPickupTime={setPickupTime} />
          </Grid>
          <Grid item xs={12} className={"mt-1  p-1"}>
            {/*TODO -  button enable validations*/}
            <Button
              variant="contained"
              color="primary"
              className={"violetBG plainColor fullWidth mt-1 capitalise "}
              onClick={() => handleSaveCarrier()}
              disabled={
                Object.keys(originLocation)?.length === 0 ||
                Object.keys(destinationLocation)?.length === 0 ||
                pickupTime.length === 0 ||
                vehicleDetails.journey_vehicleType === -1
              }
            >
              SAVE
            </Button>
          </Grid>
        </>
      )}
      {carrierState === "vehicle" && (
        <VehicleSelection
          carrierState={carrierState}
          setCarrierState={setCarrierState}
          vehicleDetails={vehicleDetails}
          setVehicleDetails={setVehicleDetails}
          closeHandler={handleOnClose}
        />
      )}
      {carrierState === "originSelection" && (
        <OriginSelector
          closeHandler={handleOnClose}
          type={"origin"}
          setCarrierState={setCarrierState}
          originLocation={originLocation}
          setOriginLocation={setOriginLocation}
        />
      )}
      {carrierState === "destinationSelection" && (
        <OriginSelector
          closeHandler={handleOnClose}
          type={"destination"}
          setCarrierState={setCarrierState}
          destinationLocation={destinationLocation}
          setDestinationLocation={setDestinationLocation}
        />
      )}
      {carrierState === "journeyCreated" && (
        <JourneyCreated
          journeyDetails={{
            journeyId: new Date().getTime(),
            journeyDate: pickupTime,
            journeyFrom: originLocation?.description,
            journeyTo: destinationLocation?.description,
            vehicleDetails: vehicleDetails,
            fromAddressComponents: originLocation?.addressComponents,
            toAddressComponents: destinationLocation?.addressComponents
          }}
          closeHandler={handleOnClose}
        />
      )}
    </>
  );
};

export default CreateJourney;
