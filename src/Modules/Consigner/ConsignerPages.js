import React from "react";
import {
  ConsignerPage,
  CreateConsignmentPage,
  SearchConsignmentsPage,
  ConsignmentDetailsPage
} from "./ConsignerRoutes";
import ConsignerDashboard from "./Pages";
// import CreateConsignment from "./Pages/CreateConsignment";
import CreateConsignment from "./Pages/CreateConsignment";
import ConsignmentsList from "../Carrier/Pages/ConsignmentsList";
import ViewConsignmentDetails from "../Carrier/Pages/ViewConsignmentDetails";

const ConsignmentPages = ({ page }) => {
  switch (page) {
    case ConsignerPage:
      return <ConsignerDashboard />;

    case CreateConsignmentPage:
      return <CreateConsignment />;

    case SearchConsignmentsPage:
      return <ConsignmentsList />;

    case ConsignmentDetailsPage:
      return <ViewConsignmentDetails />;

    default:
      return;
  }
};

export default ConsignmentPages;
