import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import CategoryList from "./CategoryList";
import ConsignmentPhysics from "./ConsignmentPhysics";
import PackageContents from "./PackageContents";
import LocationSearch from "./ConsignmentPickUpLocation";
import TimePicker from "./TimePicker";
import OrderPreview from "./OrderPreview_obselete";
import { callAPIAction } from "../../../common/Store/callAPI/actions";
import { GetBuyerConsignments, SaveConsignment } from "../APIs";

const CreateConsignment = () => {
  const [consignmentCreationStep, setConsignmentCreationStep] = useState(-1);
  const [checkedCategories, setCheckedCategories] = useState([]);
  const [proceedBtnDisabled, setProceedBtnDisabled] = useState(false);
  const [weightSelected, setWeightSelected] = useState(-1);
  const [packageContentTitle, setPackageContentTitle] = useState("");
  const [packageDescription, setPackageDescription] = useState("");
  const [packagesAdded, setPackagesAdded] = useState(undefined);
  const [openPackedContentDetails, setOpenPackedContentDetails] = useState();
  const [locationId, setLocationId] = useState();
  const [destinationLocationId, setDestinationLocationId] = useState();
  const [addressCards, setAddressCards] = useState([]);
  const [destinationAddressCards, setDestinationAddressCards] = useState([]);
  const [pickupTime, setPickupTime] = useState([]);

  useEffect(() => {
    switch (consignmentCreationStep) {
      case -1:
        return false;
      case 0:
        return setProceedBtnDisabled(!checkedCategories.length > 0);
      case 1:
        return setProceedBtnDisabled(!(weightSelected > -1));
      case 2:
        return setProceedBtnDisabled(
          !(
            packagesAdded &&
            Object.keys(packagesAdded) &&
            Object.keys(packagesAdded).length > 0
          )
        );
      case 3:
        return !setProceedBtnDisabled(!(addressCards?.length > 0));
      case 4:
        return !pickupTime;
      default:
        return false;
    }
  }, [
    consignmentCreationStep,
    checkedCategories,
    weightSelected,
    packagesAdded,
    addressCards
  ]);

  useEffect(() => {
    callAPIAction(GetBuyerConsignments);
  }, []);

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
        return "Save and chose pickup time";
      case 5:
        return "Save and select your drop location";
      default:
        return "";
    }
  };

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

  const changeStep = action => {
    action === "next"
      ? setConsignmentCreationStep(i => i + 1)
      : setConsignmentCreationStep(i => i - 1);
  };

  const saveConsignment = () => {
    /*callAPIAction(SaveConsignment, {
      consignment_consignerid: 1001006,
      consignment_createdtime: "2021-03-28T12:21:28.425Z",
      consignment_pickuplocation: "poi.60129546343",
      consignment_droplocation: "poi.670014936311",
      consignment_description: {
        id: 0,
        title: "Test item name",
        description: "Test item desc"
      },
      consignment_category: "8",
      consignment_weight: 2,
      consignment_pickupLocationObject: {
        completeAddressValue: "Pujaripeta, Amadalavalasa",
        landmarkValue: "Near MROs office",
        directionsValue: "Straight and right",
        locationId: "place.10500729632604010",
        title: "Srikakulam, Andhra Pradesh, India"
      },
      consignment_dropLocationObject: {
        completeAddressValue: "Gurudwara, Visakhapatnam",
        landmarkValue: "Near Gurudwara bussstand",
        directionsValue: "Left then right",
        locationId: "place.1657018279024290",
        title: "Visakhapatnam, Andhra Pradesh, India"
      }
    });*/
    const requestObj = {
      consignment_id: new Date().getTime(),
      consignment_consignerid: 1001006,
      consignment_createdtime: new Date().toJSON(),
      consignment_pickuplocation: locationId,
      consignment_droplocation: destinationLocationId,
      consignment_description: packagesAdded,
      consignment_category: [...checkedCategories],
      consignment_weight: weightSelected,
      consignment_pickupLocationObject: addressCards[0],
      consignment_dropLocationObject: destinationAddressCards[0]
    };
    callAPIAction(SaveConsignment, requestObj);
  };

  const proceedButtonLabels = () => {
    switch (consignmentCreationStep) {
      case -1:
        return "Proceed";
      case 0:
        return "dimensions";
      case 1:
        return "weight";
      case 2:
        return "contents";
      case 3:
        return "origin";
      case 4:
        return "time";
      case 5:
        return "destination";
      default:
        return "Save";
    }
    /*switch (consignmentCreationStep) {
      case -1:
        return "Proceed";
      case 0:
        return "Save and add item dimensions";
      case 1:
        return "Save and add item weight";
      case 2:
        return "Save and add package contents";
      case 3:
        return "Save and select your pickup location";
      case 4:
        return "Save and chose pickup time";
      case 5:
        return "Save and select your drop location";
      default:
        return "Save";
    }*/
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant={"h6"}>Create a consignment</Typography>
      </Grid>
      {consignmentCreationStep === -1 && (
        <Grid item xs={12}>
          <Typography variant={"subtitle1"} className={"mt-2"}>
            Please make sure to read the terms and conditions carefully before
            creating a consignment. You are subjected to our Privacy policy
            statement. Once you are done, please proceed
          </Typography>
        </Grid>
      )}

      <Typography className={"mt-2 mb-1"}>{stepInformationText()}</Typography>

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
        <LocationSearch
          addressCards={addressCards}
          setAddressCards={setAddressCards}
          setLocationId={setLocationId}
          locationId={locationId}
        />
      )}
      {consignmentCreationStep === 4 && (
        <Grid item xs={12}>
          <TimePicker setPickupTime={setPickupTime} />
        </Grid>
      )}
      {consignmentCreationStep === 5 && (
        <LocationSearch
          addressCards={destinationAddressCards}
          setAddressCards={setDestinationAddressCards}
          setLocationId={setDestinationLocationId}
          locationId={destinationLocationId}
        />
      )}
      {consignmentCreationStep === 6 && (
        <OrderPreview
          pickupLocation={addressCards}
          dropLocation={destinationAddressCards}
          itemCategory={checkedCategories}
          itemWeight={weightSelected}
          itemDescriptions={packagesAdded}
          pickupTime
        />
      )}
      <Grid
        container
        xs={12}
        // direction={"column"}
        justify={"space-around"}
        className={"mt-2"}
        alignItems={"center"}
      >
        {consignmentCreationStep !== -1 && (
          <Grid item xs={5} alignContent={"center"}>
            <Button
              // className={"mt-2"}
              size={"large"}
              fullWidth
              variant={"outlined"}
              startIcon={<ArrowBackRoundedIcon />}
              onClick={() => changeStep("previous")}
            >
              Previous
            </Button>
          </Grid>
        )}
        {/*<Grid item xs={12}>*/}
        {consignmentCreationStep <= 6 && (
          <Grid item xs={5}>
            <Button
              // className={"mt-1"}
              size={"large"}
              disabled={proceedBtnDisabled}
              fullWidth
              variant={"outlined"}
              endIcon={<ArrowForwardRoundedIcon />}
              onClick={() =>
                consignmentCreationStep === 6
                  ? saveConsignment()
                  : changeStep("next")
              }
            >
              {proceedButtonLabels()}
              {/*Proceed*/}
            </Button>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default CreateConsignment;
