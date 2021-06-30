import { RouteTypes } from "../Common/Pages/Routes/CommonModuleRoutes";

export const CarrierPage = "carrier";
export const CreateJourneyPage = "createJourney";
export const CarriersList = "carriers";

const CarrierRoutes = [
  {
    type: RouteTypes.Login,
    title: "Carrier",
    path: CarrierPage
  },
  {
    type: RouteTypes.Login,
    title: "Create Journey",
    path: CreateJourneyPage
  },
  {
    type: RouteTypes.Login,
    title: "Matching Carriers",
    path: CarriersList
  }
];

export default CarrierRoutes;
