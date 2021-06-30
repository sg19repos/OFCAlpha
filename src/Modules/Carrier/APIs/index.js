export const CreateCarrierAPI = {
  url: "carriers/",
  method: "POST",
  requestSchema: null,
  queryParamsSchema: null,
  responseSchema: null,
  callErrorPage: false,
  storeKey: "Create_Carriers"
};
export const FetchCarrierAPI = {
  url: "ofcconsignments",
  method: "GET",
  callErrorPage: false,
  storeKey: "Fetching_Carriers"
};
export const UpdateCarrierAPI = {
  url: "carriers",
  method: "PATCH",
  requestSchema: null,
  queryParamsSchema: null,
  responseSchema: null,
  callErrorPage: false,
  storeKey: "Update_Carrier"
};
export const GetMatchingConsignmentsAPI = {
  url: "consignments",
  method: "GET",
  requestSchema: null,
  queryParamsSchema: null,
  responseSchema: null,
  callErrorPage: false,
  storeKey: "Fetching_Matching_Consignments"
};
export const GetConsignmentDetailsAPI = {
  url: "consignments",
  method: "GET",
  requestSchema: null,
  queryParamsSchema: null,
  responseSchema: null,
  callErrorPage: false,
  storeKey: "Fetching_Consignment_Details"
};

const CarrierAPIs = [
  CreateCarrierAPI,
  FetchCarrierAPI,
  UpdateCarrierAPI,
  GetMatchingConsignmentsAPI,
  GetConsignmentDetailsAPI
];

export default CarrierAPIs;
