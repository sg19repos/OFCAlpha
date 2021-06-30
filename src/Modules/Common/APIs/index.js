export const SaveConsignment = {
  url: "consignments/",
  method: "POST",
  requestSchema: null,
  queryParamsSchema: null,
  responseSchema: null,
  callErrorPage: false,
  storeKey: "Fetching_Consignments"
};

export const GetUserDetailsAPI = {
  url: "users",
  method: "GET",
  requestSchema: null,
  queryParamsSchema: null,
  responseSchema: null,
  callErrorPage: false,
  storeKey: "LoggedIn_User_Details"
};

export const GetUserDetailsByIdAPI = {
  url: "users",
  method: "GET",
  requestSchema: null,
  queryParamsSchema: null,
  responseSchema: null,
  callErrorPage: false,
  storeKey: "User_Details"
};

export const LoginAPI = {
  url: "users/login",
  method: "POST",
  requestSchema: null,
  queryParamsSchema: null,
  responseSchema: null,
  callErrorPage: false,
  storeKey: "Login"
};

export const LogoutAPI = {
  url: "users/logout",
  method: "POST",
  requestSchema: null,
  queryParamsSchema: null,
  responseSchema: null,
  callErrorPage: false,
  storeKey: "User_Logout"
};

export const CheckTokenAPI = {
  url: "users/checkToken",
  method: "GET",
  requestSchema: null,
  queryParamsSchema: null,
  responseSchema: null,
  callErrorPage: false,
  storeKey: "Check_Token"
};

const UserAPIs = [
  GetUserDetailsAPI,
  LoginAPI,
  CheckTokenAPI,
  LogoutAPI,
  GetUserDetailsByIdAPI
];

export default UserAPIs;
