import React from "react";
import { Redirect } from "react-router-dom";
import ModeSelection from "./ModeSelection";
import {
  ModeSelectionPage,
  SearchPage,
  AccountPage,
  SignUpPage,
  LoginPage
} from "./Routes/CommonModuleRoutes";
import CommonSearch from "./CommonSearch";
import Account from "./AccountPages/Account";
import SignUp from "./Signup";
import Login from "./Login";

// import SubmitOTP from "./SubmitOTP/SubmitOTP";
/*import {
  ClosePopUpPage,
  SubmitOTPPage,
  OAuth2ConsentPage,
  WorkInProgressPage,
  InformationCapturePage,
  LogoutPage
} from "./Routes/CommonModuleRoutes";*/

// import { LandingPagePath } from "../Constants";
// import ClosePopUp from "./ClosePopUp/ClosePopUp";
// import OAuth2Consent from "./OAuth2Consent/OAuth2Consent";
// import LandingPage from "./LandingPage/LandingPage";
// import WorkInProgress from "./WorkInProgress/WorkInProgress";
// import InformationCapture from "./InformationCapturePage/InformationCapturePage";
// import Logout from "./Logout/Logout";

const CommonModulePages = ({ page }) => {
  switch (page) {
    /*case SubmitOTPPage:
      return <SubmitOTP />;
    case LandingPagePath:
      return <LandingPage />;
    case ClosePopUpPage:
      return <ClosePopUp />;
    case OAuth2ConsentPage:
      return <OAuth2Consent />;
    case WorkInProgressPage:
      return <WorkInProgress />;
    case InformationCapturePage:
      return <InformationCapture />;
    case LogoutPage:
      return <Logout />;*/
    case ModeSelectionPage:
      return <ModeSelection />;
    case SearchPage:
      return <CommonSearch />;
    case AccountPage:
      return <Account />;
    case SignUpPage:
      return <SignUp />;
    case LoginPage:
      return <Login />;

    default:
      // return <Redirect to={"/error"} />;
      // return <ModeSelection />;
      return <ModeSelection />;
  }
};

export default CommonModulePages;
