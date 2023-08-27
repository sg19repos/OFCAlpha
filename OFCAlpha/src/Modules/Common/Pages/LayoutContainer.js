import React, { useEffect, useState } from "react";
import Footer from "./Footer/footer";
import Grid from "@material-ui/core/Grid";
import PickupLocation from "../../Consigner/Pages/PickupLocation";
// import Pincode from "../../Consigner/Pages/Pincode_obselete";
import ConsignmentPhysics from "../../Consigner/Pages/ConsignmentPhysics";
import { Box, Container } from "@material-ui/core";
import CategoryList from "../../Consigner/Pages/CategoryList";
import TimePicker from "../../Consigner/Pages/TimePicker";
import Consignments from "../../Carrier/Pages/ConsignmentCard";
import ConsignmentsList from "../../Carrier/Pages/ConsignmentsList";
import ViewConsignmentDetails from "../../Carrier/Pages/ViewConsignmentDetails";
import CreateJourney from "../../Carrier/Pages/CreateJourney";
import VehicleSelection from "../../Carrier/Pages/VehicleSelection";
import LocationSearch_obselete from "./LocationSearch_obselete";
import CarrierList from "../../Consigner/Pages/CarrierList";
import ViewCarrier from "../../Carrier/Pages/ViewCarrier";
import ModeSelection from "./ModeSelection";
// import OrderPreview from "../../Consigner/Pages/OrderPreview_obselete";
import { useHistory } from "react-router-dom";
// import { CheckTokenAPI } from "../APIs";
import { callAPIAction } from "../../../common/Store/callAPI/actions";
import { useSelector } from "react-redux";
import { SelectDataObjInResponse } from "../../../common/Store/callAPI/selectors";
import { LoginAPI, LogoutAPI } from "../APIs";
import Login from "./Login";

const LayoutContainer = ({ children }) => {
  const history = useHistory();
  const [footerPresent, setFooterPresent] = useState(false);
  /*console.log("history is", history.location.pathname);

  let CheckTokenResponse = useSelector(state =>
    SelectDataObjInResponse(state, CheckTokenAPI)
  );

  useEffect(() => {
    callAPIAction(CheckTokenAPI, null);
  }, []);

  useEffect(() => {
    console.log("CheckTokenResponse", CheckTokenResponse);
    if (CheckTokenResponse) {
      if (Object.keys(CheckTokenResponse).length < 0) {
        sessionStorage.removeItem("token");
        history.push("/login");
      }
    } else {
      sessionStorage.removeItem("token");
      history.push("/login");
    }
  }, [CheckTokenResponse]);*/

  let CheckLoginResponse = useSelector(state =>
    SelectDataObjInResponse(state, LoginAPI)
  );

  let CheckLogoutResponse = useSelector(state =>
    SelectDataObjInResponse(state, LogoutAPI)
  );

  useEffect(() => {
    setFooterPresent(
      !["/signup", "/login"].includes(history.location.pathname) ||
        ![null, undefined].includes(sessionStorage.getItem("token"))
    );
  }, [CheckLoginResponse, CheckLogoutResponse]);

  return (
    <>
      <Grid
        container
        layout={"column"}
        className={"mainBackground"}
        style={{
          // minHeight: !["/signup", "/login"].includes(history.location.pathname)
          minHeight: footerPresent ? "calc(90vh)" : "calc(100vh)"
        }}
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
            {/*<ConsignmentsList />*/}
            {/*<ViewConsignmentDetails />*/}
            {/*<CreateJourney />*/}
            {/*<VehicleSelection />*/}
            {/*<LocationSearch_obselete />*/}
            {/*<CarrierList />*/}
            {/*<ViewCarrier />*/}
            {/*<ModeSelection />*/}
            {children}
            {/*{<OrderPreview />}*/}
          </Box>
        </Grid>
      </Grid>
      {/*{!["/signup", "/login"].includes(history.location.pathname) && (*/}
      {footerPresent && (
        <Grid container style={{ minHeight: "calc(10vh)" }}>
          <Grid item xs={12}>
            <Footer />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default LayoutContainer;
