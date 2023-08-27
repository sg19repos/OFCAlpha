import { RouteTypes } from "../Common/Pages/Routes/CommonModuleRoutes";

export const ConsignerPage = "consigner";
export const CreateConsignmentPage = "newConsignment";
export const SearchConsignmentsPage = "consignments";
export const ConsignmentDetailsPage = "consignmentDetails";

const ConsignerRoutes = [
  {
    type: RouteTypes.Login,
    title: "Consigner",
    path: ConsignerPage
  },
  {
    type: RouteTypes.Login,
    title: "New Consignment",
    path: CreateConsignmentPage
  },
  {
    type: RouteTypes.Login,
    title: "Search consignments",
    path: SearchConsignmentsPage
  },
  {
    type: RouteTypes.Login,
    title: "Consignment details",
    path: ConsignmentDetailsPage
  }
];

export default ConsignerRoutes;
