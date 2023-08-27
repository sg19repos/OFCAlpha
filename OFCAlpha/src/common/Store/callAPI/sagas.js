import { all, call, put, takeEvery } from "redux-saga/effects";
import {
  callAPI,
  callError,
  callFailed,
  callStarted,
  callSuccess,
  updateNotificationTimestamp
} from "./reducer";
import Axios from "axios";
import callAPIFunctions from "./callAPI";
// import { callMockAPI } from "./callMockAPIs";
import { NotificationStoreKey } from "./allAPIs";

const statusEnums = {
  success: "SUCCESS",
  failure: "FAILURE",
  partial: "PARTIAL_SUCCESS",
  successCode: 200
};

export const NotificationTimeStampHeaderKey = "x-" + NotificationStoreKey;

export function* watchCallAPI() {
  yield takeEvery(callAPI.toString(), workerCallAPI);
}

/**
 * 1. Updates data key of `storeKey` Obj if action is successful
 * 2. Updates `error` key of `storeKey` Obj if (something unexpected
 * happened and callErrorPage is false) or (throw flag of that error is false)
 * 3. Updates `error` State obj if throw flag of that error is true or if
 * something unexpected happened and callErrorPage is true
 * 4. Updates `error` of State Obj irrespective of what flags are there,
 * if "internet lost" error occurred
 * @param action
 */
export function* workerCallAPI(action) {
  const { apiObj, requestObj } = action.payload;
  const storeKey = apiObj.storeKey;
  try {
    yield put(callStarted({ storeKey: storeKey }));

    if (callAPIFunctions.checkInternet()) {
      // console.log('Request Schema: ', apiObjValid);
      // console.log("Request Obj:", requestObj);
      const responseData = yield call(callAPIFunctions.callAPI, action.payload);
      // const responseData = yield call(callMockAPI, action.payload);
      console.log("RESPONSE OBJ : ", responseData);

      const { data, errorCode, throwError, headers } = handleResponse(
        responseData,
        apiObj
      );
      if (
        headers &&
        Object.prototype.hasOwnProperty.call(
          headers,
          NotificationTimeStampHeaderKey
        )
      ) {
        // TODO - NOTIFICATION API STORY REMOVE COMMENTS
        // yield put(updateNotificationTimestamp(headers[NotificationTimeStampHeaderKey]));
        yield put(updateNotificationTimestamp(new Date().valueOf()));
      }

      if (data) {
        yield put(
          callSuccess({
            data: data,
            storeKey: storeKey
          })
        );
      } else if (!throwError) {
        yield put(
          callFailed({
            error: errorCode,
            storeKey: storeKey
          })
        );
      } else {
        yield put(
          callError({
            storeKey: storeKey,
            errorCode: errorCode,
            header: storeKey
          })
        );
      }
    } else {
      yield put(
        callError({
          storeKey: storeKey,
          errorCode: 1,
          header: null
        })
      );
    }
  } catch (error) {
    handleError(apiObj.url, error);
    // If some unexpected error occurred, it will be handled by ErrorBoundary
    // Or the Component itself based on APIObj callErrorPage flag
    if (typeof apiObj.callErrorPage === "undefined" || apiObj.callErrorPage) {
      yield put(
        callError({
          storeKey: storeKey,
          errorCode: 0,
          header: null
        })
      );
    } else {
      yield put(
        callFailed({
          error: error,
          storeKey: storeKey
        })
      );
    }
  }
}

export function handleResponse(response, apiObj) {
  let data = null;
  let errorCode = null;
  let throwError = true;
  let headers = null;
  if (response) {
    const isStatusSuccess = checkSuccessResponseStatus(response);
    headers = response.headers || {};
    console.log("is Success:", isStatusSuccess);
    if (response.token === "EXPIRED") {
      sessionStorage.clear();
      window.location.href = "/login";
    } else if (!isStatusSuccess) {
      errorCode = getResponseErrorCode(response);
      // First Checking the callErrorPage Flag and only if its not false
      if (apiObj.callErrorPage === false) {
        throwError = false;
      } else if (errorCode) {
        throwError = errorCode;
      }
    } else {
      throwError = false;
      if (apiObj.responseSchema) {
        callAPIFunctions.checkSchema(
          apiObj.responseSchema,
          response.data,
          "Response Schema not matching When this called : " + apiObj.url,
          true
        );
      }
      data = response.data || response;
    }
  }
  // console.log('handling Response output:',{ data: data, errorCode: errorCode, throwError: throwError });
  return {
    data: data,
    errorCode: errorCode,
    throwError: throwError,
    headers: headers
  };
}

export function checkSuccessResponseStatus(responseData) {
  return (
    responseData &&
    (responseData.status === statusEnums.successCode ||
      responseData.status === statusEnums.success ||
      responseData.status === statusEnums.partial)
  );
}

export function getResponseErrorCode(responseData) {
  if (responseData && typeof responseData.errors[0] !== "undefined") {
    return responseData.errors[0].code;
  }
  return 0;
  // If error code not mentioned, give code corresponding to "Some Internal Error Occurred"
  // Because we should call this after success flag is checked, if we dont find any error object
  // Then that is also an error - so throwing 0
}

export function handleError(url, error) {
  console.warn("Error:", error);
  if (Axios.isCancel(error)) {
    console.log("API request is Cancelled");
  } else if (error.response) {
    /*
     * The request was made and the server responded with a
     * status code that falls out of the range of 2xx
     */
    error.message =
      "Error in Response when this API is called :" +
      url +
      " \n This is the response we got :" +
      JSON.stringify(error.response, null, 3);
    console.log("Error in Response:");
    console.log(error.response);
  } else if (error.request) {
    /*
     * The request was made but no response was received, `error.request`
     * is an instance of XMLHttpRequest in the browser and an instance
     * of http.ClientRequest in Node.js
     */
    error.message =
      "No Response received, when this API is called :" +
      url +
      " \n PLEASE CHECK WHETHER THIS API AND OUR GATEWAY IS WORKING PROPERLY";
    console.log("NO response for :", error.request);
  }
}

export default function* callAPISagas() {
  yield all([call(watchCallAPI)]);
}
