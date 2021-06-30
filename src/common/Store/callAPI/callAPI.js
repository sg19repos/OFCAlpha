import { v1 as UUIDv1 } from "uuid";
import Axios from "axios";

export function getCommonHeaders(afterLogin = true) {
  const authToken = afterLogin
    ? {
        "Access-Control-Allow-Headers": "Content-Type,Authorization,loginId",
        Authorization: sessionStorage.getItem("token"),
        loginId: sessionStorage.getItem("OFCLoginId")
      }
    : {};
  return {
    "content-type": "application/json",
    "X-B3-TraceId": UUIDv1(),
    ...authToken
  };
}

export function getFullURL(url, pathsList = null) {
  // In API BASE URL - DO NOT PUT '/' at the END
  // let fullURL = process.env.REACT_APP_API_URL + "/" + url;
  //TODO - rectify and standardize this
  // let fullURL = url.includes("mapbox") ? url : "http://localhost:4000/" + url;
  let fullURL = url.includes("mapbox")
    ? url
    : process.env.REACT_APP_API_URL + url;
  if (pathsList) {
    for (const path of pathsList) {
      fullURL = fullURL + "/" + path;
    }
  }
  return fullURL;
}

export async function makeAPICall(payload) {
  console.info("payload:", payload);
  let { apiObj, requestObj, queryParams, pathsList, customHeaders } = payload;
  let headers = getCommonHeaders(apiObj.authTokenNeeded);
  if (customHeaders) {
    headers = { ...headers, ...customHeaders };
  }
  const fullURL = getFullURL(apiObj.url, pathsList);
  // alert("fullURL - " + fullURL);
  if (apiObj.method === "GET" && requestObj) {
    queryParams = requestObj;
    requestObj = null;
  }
  console.log("URL:", fullURL);
  const response = await Axios.request({
    method: apiObj.method,
    url: fullURL,
    data: requestObj,
    params: queryParams,
    headers: headers
  });
  console.log("response in callAPI: ", response);
  return fullURL.includes("mapbox")
    ? { ...response, headers: response.headers }
    : {
        ...response.data,
        headers: response.headers
      };
  // This will not happen bcz if invalid, it will throw error
}

export function checkInternetConnectivity() {
  return navigator.onLine;
}

// This constant is used for tests - spyOn and also for segregation of logic from sagas_old.js
const callAPIFunctions = {
  callAPI: makeAPICall,
  checkInternet: checkInternetConnectivity,
  headers: getCommonHeaders
};

export default callAPIFunctions;
