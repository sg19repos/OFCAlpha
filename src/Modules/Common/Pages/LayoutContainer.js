import React from "react";
import Footer from "./Footer/footer";
import Grid from "@material-ui/core/Grid";
import PickupLocation from "../../Consigner/Pages/PickupLocation";
import Pincode from "../../Consigner/Pages/Pincode";
import ConsignmentPhysics from "../../Consigner/Pages/ConsignmentPhysics";
import { Box, Container } from "@material-ui/core";
import CategoryList from "../../Consigner/Pages/CategoryList";
import TimePicker from "../../Consigner/Pages/TimePicker";
import Consignments from "../../Carrier/Pages/ConsignmentsList";
import ViewConsignmentDetails from "../../Carrier/Pages/ViewConsignmentDetails";
import CreateJourney from "../../Carrier/Pages/CreateJourney";
import VehicleSelection from "../../Carrier/Pages/VehicleSelection";
import LocationSearch from "./LocationSearch";
import CarrierList from "../../Consigner/Pages/CarrierList";
import ViewCarrier from "../../Carrier/Pages/ViewCarrier";
import ModeSelection from "./ModeSelection";

const LayoutContainer = () => {
  return (
    <>
      <Grid
        container
        layout={"column"}
        className={"mainBackground"}
        style={{ minHeight: "calc(90vh)" }}
      >
        <Grid item xs={12}>
          <Box
            m={1}
            p={2}
            minHeight={"92%"}
            className={"mainBorder plainBorder roundCorners"}
          >
            {/*<PickupLocation />*/}
            {/*<Pincode />*/}
            {/*<CategoryList />*/}
            {/*<ConsignmentPhysics />*/}
            {/*<TimePicker fullWidth={false} />*/}
            {/*{"\u2728"}*/}
            {/*<Consignments />*/}
            {/*<ViewConsignmentDetails />*/}
            {/*<CreateJourney />*/}
            {/*<VehicleSelection />*/}
            {/*<LocationSearch />*/}
            {/*<CarrierList />*/}
            <ViewCarrier />
            {/*<ModeSelection />*/}
          </Box>
        </Grid>
      </Grid>
      <Grid container style={{ minHeight: "calc(10vh)" }}>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </>
  );
};

export default LayoutContainer;
