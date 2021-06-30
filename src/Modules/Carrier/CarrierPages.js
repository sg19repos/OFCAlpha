import React from "react";
import { CarrierPage, CreateJourneyPage, CarriersList } from "./CarrierRoutes";
import CreateJourney from "./Pages/CreateJourney";
import CarrierList from "../Consigner/Pages/CarrierList";

const CarrierPages = ({ page }) => {
  switch (page) {
    case CreateJourneyPage:
      return <CreateJourney />;
    case CarriersList:
      return <CarrierList />;

    default:
      return;
  }
};

export default CarrierPages;
