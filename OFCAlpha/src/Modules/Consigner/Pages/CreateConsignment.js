import React, { useState } from "react";
import { Button, Chip, Grid, Typography } from "@material-ui/core";
import CartonBox from "../../../images/cartonBox.png";
import createShipment from "../../../images/createShipment.png";
import ChevronRightRoundedIcon from "@material-ui/icons/ChevronRightRounded";
import Divider from "@material-ui/core/Divider";
import mapsPointer from "../../../images/mapsPointer.png";
import WatchRoundedIcon from "@material-ui/icons/WatchRounded";
import PinDropRoundedIcon from "@material-ui/icons/PinDropRounded";
import LocationOnRoundedIcon from "@material-ui/icons/LocationOnRounded";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import { callAPIAction } from "../../../common/Store/callAPI/actions";
import { SaveConsignment } from "../APIs";
import CategoryList from "./CategoryList";
import ConsignmentPhysics from "./ConsignmentPhysics";
import PackageContents from "./PackageContents";
import LocationSearch from "./ConsignmentPickUpLocation";
import TimePicker from "./TimePicker";
import OrderPreview from "./OrderPreview_obselete";
// import CheckRoundedIcon from "@material-ui/icons/CheckRounded";
// import DoneOutlineRoundedIcon from "@material-ui/icons/DoneOutlineRounded";
import CheckCircleOutlineRoundedIcon from "@material-ui/icons/CheckCircleOutlineRounded";
import Btn from "../../Common/Pages/Btn";
import { categoryListItems, weightCategories } from "../../../common/constants";
import OriginSelector from "../../Carrier/Pages/OriginSelector";
import JourneyCreated from "../../Carrier/Pages/JourneyCreated";
import ConsignmentCreated from "./ConsignmentCreated";
import { useSelector } from "react-redux";
import { SelectDataObjInResponse } from "../../../common/Store/callAPI/selectors";
import { GetUserDetailsAPI } from "../../Common/APIs";

const CreateConsignment = () => {
  const [consignmentCreationStep, setConsignmentCreationStep] = useState(-1);
  const [checkedCategories, setCheckedCategories] = useState([]);
  const [weightSelected, setWeightSelected] = useState(-1);
  const [packageContentTitle, setPackageContentTitle] = useState("");
  const [packageDescription, setPackageDescription] = useState("");
  const [packagesAdded, setPackagesAdded] = useState(undefined);
  const [openPackedContentDetails, setOpenPackedContentDetails] = useState();
  const [originLocationId, setOriginLocationId] = useState();
  const [destinationLocationId, setDestinationLocationId] = useState();
  const [addressCards, setAddressCards] = useState([]);
  const [destinationAddressCards, setDestinationAddressCards] = useState([]);
  const [pickupTime, setPickupTime] = useState(null);
  const [carrierState, setCarrierState] = useState("");
  const [originLocation, setOriginLocation] = useState(undefined);
  const [destinationLocation, setDestinationLocation] = useState(undefined);

  const handleCategorySelections = checkedCategories => {
    setCheckedCategories(checkedCategories);
  };

  const handleWeightSelection = weightCardIndex => {
    setWeightSelected(weightCardIndex);
  };

  const removeAddedPackageContent = packageId => {
    delete packagesAdded[packageId];
    setPackagesAdded(i => {
      return {
        ...i
      };
    });
  };

  const userObj = useSelector(state =>
    SelectDataObjInResponse(state, GetUserDetailsAPI)
  );

  const handlePackagesAdded = (packageContentTitle, packageDescription) => {
    setPackagesAdded(i => {
      return {
        ...i,
        [i && Object.keys(i) ? Object.keys(i).length : 0]: {
          id: i && Object.keys(i) ? Object.keys(i).length : 0,
          title: packageContentTitle,
          description: packageDescription
        }
      };
    });
    setPackageContentTitle("");
    setPackageDescription("");
  };

  const saveConsignment = () => {
    const requestObj = {
      consignment_id: new Date().getTime(),
      consignment_consignerid: userObj?.user_details?.user_id,
      consignment_createdtime: new Date().toJSON(),
      consignment_pickuplocation: originLocation?.description,
      consignment_droplocation: destinationLocation?.description,
      consignment_description: packagesAdded,
      consignment_category: [...checkedCategories],
      consignment_weight: weightSelected,
      consignment_pickupLocationObject: originLocation,
      consignment_dropLocationObject: destinationLocation,
      consignment_pickuptime: pickupTime
    };
    callAPIAction(SaveConsignment, requestObj);
  };

  const stepInformationText = () => {
    switch (consignmentCreationStep) {
      case -1:
        return "";
      case 0:
        return "Please select at-least one category to continue";
      case 1:
        return "Make sure you select correct weight to avoid conflict during billing";
      case 2:
        return "Save and add package contents";
      case 3:
        return "Save and select your pickup location";
      case 4:
        return "Save and select your drop location";
      case 5:
        return "Save and chose pickup time";
      default:
        return "";
    }
  };

  const handleOnClose = () => {
    setConsignmentCreationStep(-1);
  };

  const handleReset = () => {
    setCheckedCategories([]);
    setWeightSelected(-1);
    setPackageContentTitle("");
    setPackageDescription("");
    setPackagesAdded(undefined);
    setOpenPackedContentDetails("");
    setPickupTime(null);
    setCarrierState("default");
    setOriginLocation(undefined);
    setDestinationLocation(undefined);
  };

  return (
    <>
      {consignmentCreationStep !== 6 &&
        (![-1].includes(consignmentCreationStep) ? (
          <Grid container justify={"space-between"} alignItems={"center"}>
            <Grid item lg={6}>
              <ArrowBackRoundedIcon onClick={handleOnClose} />
            </Grid>
            <Grid item lg={6} onClick={handleOnClose}>
              {/*<DoneOutlineRoundedIcon onClick={handleOnClose} />*/}
              <Button
                variant={"contained"}
                className={"greenColor inputBackgroundColor"}
                startIcon={<CheckCircleOutlineRoundedIcon />}
              >
                Save
              </Button>
            </Grid>
          </Grid>
        ) : (
          <Grid container className={"fullHeight"}>
            <Grid item xs={12} className={"alignLeft"}>
              <ArrowBackRoundedIcon />
            </Grid>
            <Grid item xs={9} className={"alignRight"}>
              <Typography>Create new shipment</Typography>
            </Grid>
            <Grid item xs={3} className={"alignCenter"}>
              <Chip
                variant="outlined"
                size="small"
                label="Reset"
                onClick={handleReset}
                color="secondary"
              />
            </Grid>
            <Grid
              item
              xs={10}
              className={"mt-1 p-1 consignmentCard"}
              onClick={() => setConsignmentCreationStep(0)}
            >
              <Typography variant={"caption"} className={"lighterText"}>
                Category
              </Typography>
              {checkedCategories.length === 0 ? (
                <Typography variant={"body2"}>Select a category</Typography>
              ) : (
                <Grid
                  container
                  className={"flexDisplay"}
                  justify={"flex-start"}
                >
                  {checkedCategories.map((category, index) => {
                    return (
                      <Grid item xs={"auto"}>
                        <Typography variant={"body2"} className={"pr-0_5"}>
                          {categoryListItems[+category].categoryName}
                          {index !== checkedCategories.length - 1 && ","}
                        </Typography>
                      </Grid>
                    );
                  })}
                </Grid>
              )}
            </Grid>
            <Grid item xs={2} className={"mt-1 p-1 consignmentCard"}>
              <ChevronRightRoundedIcon />
            </Grid>
            <Grid item xs={12} className={"alignCenter p-1"}>
              <img src={createShipment} alt={"Shipment icon"} width={"60%"} />
            </Grid>
            <Grid
              item
              xs={6}
              className={"p-1 consignmentCard"}
              onClick={() => setConsignmentCreationStep(1)}
            >
              <Grid container>
                <Grid item xs={10}>
                  {weightSelected === -1 ? (
                    <Typography variant={"body2"}>Add dimensions</Typography>
                  ) : (
                    <>
                      <Typography variant={"caption"} className={"lighterText"}>
                        Dimension :
                      </Typography>
                      <Typography variant={"body2"}>
                        {weightCategories[+weightSelected].title}
                      </Typography>
                      {/*<Typography variant={"caption"}>
                      {"(" +
                        weightCategories[+weightSelected].minWeight +
                        " kg -" +
                        +weightCategories[+weightSelected].maxWeight +
                        " kg)"}
                    </Typography>*/}
                    </>
                  )}
                </Grid>
                <Grid item xs={2}>
                  <ChevronRightRoundedIcon />
                </Grid>
              </Grid>
            </Grid>
            <Divider
              orientation="vertical"
              className={"ml-0_5 mr-0_5"}
              flexItem
            />
            <Grid
              item
              xs={5}
              className={"p-1 consignmentCard"}
              onClick={() => setConsignmentCreationStep(2)}
            >
              <Grid container>
                <Grid item xs={10}>
                  {packagesAdded === undefined ||
                  Object.keys(packagesAdded)?.length === 0 ? (
                    <Typography variant={"body2"}>Add contents</Typography>
                  ) : (
                    <Grid container alignItems={"center"}>
                      <Typography variant={"caption"} className={"lighterText"}>
                        Contents :
                      </Typography>
                      <Grid item xs={4}>
                        <CheckCircleOutlineRoundedIcon
                          className={"greenColor pt-1s"}
                          fontSize={"small"}
                        />
                      </Grid>
                      <Grid item xs={8}>
                        <Typography variant={"body2"} component={"span"}>
                          Added
                        </Typography>
                      </Grid>
                    </Grid>
                  )}
                </Grid>
                <Grid item xs={2}>
                  <ChevronRightRoundedIcon />
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              className={"p-1"}
              onClick={() => setConsignmentCreationStep(3)}
            >
              <Grid container alignItems={"center"}>
                <Grid item xs={2}>
                  <LocationOnRoundedIcon color={"disabled"} />
                </Grid>

                <Grid item xs={10}>
                  <Grid container>
                    <Grid item xs={10}>
                      {originLocation === undefined ? (
                        <Typography variant={"body2"}>
                          Add your pick up location
                        </Typography>
                      ) : (
                        <Typography variant={"body2"}>
                          {originLocation?.mainText}
                        </Typography>
                      )}
                    </Grid>
                    <Grid item xs={2}>
                      <ChevronRightRoundedIcon />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              className={"p-1"}
              onClick={() => setConsignmentCreationStep(4)}
            >
              <Grid container alignItems={"center"}>
                <Grid item xs={2}>
                  <PinDropRoundedIcon color={"disabled"} />
                </Grid>

                <Grid item xs={10}>
                  <Grid container>
                    <Grid item xs={10}>
                      {destinationLocation === undefined ? (
                        <Typography variant={"body2"}>
                          Add drop location
                        </Typography>
                      ) : (
                        <Typography variant={"body2"}>
                          {destinationLocation?.mainText}
                        </Typography>
                      )}
                    </Grid>
                    <Grid item xs={2}>
                      <ChevronRightRoundedIcon />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              className={"p-1"}
              onClick={() => setConsignmentCreationStep(5)}
            >
              <Grid container alignItems={"center"}>
                <Grid item xs={2}>
                  <WatchRoundedIcon color={"disabled"} />
                </Grid>

                <Grid item xs={10}>
                  <Grid container>
                    <Grid item xs={10}>
                      {pickupTime === null ? (
                        <Typography variant={"body2"}>Pickup time</Typography>
                      ) : (
                        <Typography variant={"body2"}>
                          {new Date(pickupTime.toString()).toDateString() +
                            ", " +
                            new Date(
                              pickupTime.toString()
                            ).toLocaleTimeString()}
                        </Typography>
                      )}
                    </Grid>
                    <Grid item xs={2}>
                      <ChevronRightRoundedIcon />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ))}
      {consignmentCreationStep !== 6 && (
        <Typography className={"mt-2 mb-1"}>{stepInformationText()}</Typography>
      )}
      {consignmentCreationStep === 0 && (
        <Grid item xs={12}>
          <CategoryList
            checkedCategories={checkedCategories}
            setCheckedCategories={handleCategorySelections}
          />
        </Grid>
      )}
      {consignmentCreationStep === 1 && (
        <Grid item xs={12}>
          <ConsignmentPhysics
            weightSelected={weightSelected}
            handleWeightSelection={handleWeightSelection}
          />
        </Grid>
      )}
      {consignmentCreationStep === 2 && (
        <Grid item xs={12}>
          <PackageContents
            packageContentTitle={packageContentTitle}
            setPackageContentTitle={setPackageContentTitle}
            packageDescription={packageDescription}
            setPackageDescription={setPackageDescription}
            packagesAdded={packagesAdded}
            handlePackagesAdded={handlePackagesAdded}
            removeAddedPackageContent={removeAddedPackageContent}
            openPackedContentDetails={openPackedContentDetails}
            setOpenPackedContentDetails={setOpenPackedContentDetails}
          />
        </Grid>
      )}
      {consignmentCreationStep === 3 && (
        <OriginSelector
          closeHandler={handleOnClose}
          type={"origin"}
          isConsignment={true}
          setCarrierState={setCarrierState}
          originLocation={originLocation}
          setOriginLocation={setOriginLocation}
        />
      )}
      {consignmentCreationStep === 4 && (
        <OriginSelector
          closeHandler={handleOnClose}
          type={"destination"}
          isConsignment={true}
          setCarrierState={setCarrierState}
          destinationLocation={destinationLocation}
          setDestinationLocation={setDestinationLocation}
        />
      )}
      {consignmentCreationStep === 5 && (
        <Grid item xs={12}>
          <TimePicker setPickupTime={setPickupTime} />
        </Grid>
      )}
      {consignmentCreationStep === 6 && (
        <ConsignmentCreated
          shipmentDetails={{
            shipmentId: new Date().getTime(),
            shipmentDate: pickupTime,
            shipmentFrom: originLocation?.description,
            shipmentTo: destinationLocation?.description,
            shipmentCategory: checkedCategories,
            shipmentDimensions: weightSelected,
            fromAddressComponents: originLocation?.addressComponents,
            toAddressComponents: destinationLocation?.addressComponents
          }}
          closeHandler={handleOnClose}
        />
      )}

      {consignmentCreationStep === -1 && (
        <Button
          fullWidth={true}
          variant={"contained"}
          color={"primary"}
          disabled={
            checkedCategories.length === 0 ||
            weightSelected === -1 ||
            packagesAdded === undefined ||
            pickupTime === null ||
            originLocation === undefined ||
            destinationLocation === undefined
          }
          onClick={() => {
            saveConsignment();
            setConsignmentCreationStep(6);
          }}
        >
          Save Shipment
        </Button>
      )}
    </>
  );
};

export default CreateConsignment;
