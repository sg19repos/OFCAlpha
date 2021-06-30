import Store from "../Store";
import { callAPI, removeError, removeAPIData, editAPIData } from "./reducer";

export function getCallAPIActionType(
    apiObj,
    requestObj,
    queryParams,
    pathsList,
    customHeaders
) {
    return callAPI({
        apiObj: apiObj,
        requestObj: requestObj,
        queryParams: queryParams,
        pathsList: pathsList,
        customHeaders: customHeaders,
    });
}

export const callAPIAction = (
    apiObj,
    requestObj = null,
    queryParams = null,
    pathsList = null,
    customHeaders = null
) => {
    return Store.dispatch(
        getCallAPIActionType(
            apiObj,
            requestObj,
            queryParams,
            pathsList,
            customHeaders
        )
    );
};

export const removeErrorAction = () => Store.dispatch(removeError());

export const removeAPIDataAction = (storeKey) =>
    Store.dispatch(removeAPIData(storeKey));

export const editAPIDataAction = (storeKey, payload) =>
    Store.dispatch(editAPIData({ storeKey: storeKey, payload: payload }));
