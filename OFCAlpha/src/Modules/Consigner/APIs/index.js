import { mapboxAPIKey } from "../../../common/constants";

export const LocationSearchAPI = {
  url:
    "https://api.mapbox.com/geocoding/v5/mapbox.places/Amadalavalasa.json?access_token=" +
    mapboxAPIKey,
  method: "GET",
  requestSchema: null,
  queryParamsSchema: null,
  responseSchema: null,
  callErrorPage: false,
  storeKey: "Fetching_location_details"
};

export const GetBuyerConsignments = {
  url: "consignments",
  method: "GET",
  requestSchema: null,
  queryParamsSchema: null,
  responseSchema: null,
  callErrorPage: false,
  storeKey: "Fetching_Consignments"
};

export const SaveConsignment = {
  url: "consignments/",
  method: "POST",
  requestSchema: null,
  queryParamsSchema: null,
  responseSchema: null,
  callErrorPage: false,
  storeKey: "Fetching_Consignments"
};

export const GetMatchingCarriersAPI = {
  url: "carriers",
  method: "GET",
  requestSchema: null,
  queryParamsSchema: null,
  responseSchema: null,
  callErrorPage: false,
  storeKey: "Fetching_Matching_Carriers"
};

export const UpdateConsignment = {
  url: "consignments",
  method: "PATCH",
  requestSchema: null,
  queryParamsSchema: null,
  responseSchema: null,
  callErrorPage: false,
  storeKey: "Update_Consignments"
};

const ConsignerAPIs = [
  LocationSearchAPI,
  GetBuyerConsignments,
  SaveConsignment,
  GetMatchingCarriersAPI,
  UpdateConsignment
];

export default ConsignerAPIs;
