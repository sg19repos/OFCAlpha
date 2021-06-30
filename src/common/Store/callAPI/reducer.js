import { createSlice } from "@reduxjs/toolkit";
import { DataKey, ErrorKey, FetchingKey, initialState, NotificationStoreKey } from "./allAPIs";

export const callAPIStoreKey = "APIData";

const callAPISlice = createSlice({
    name: callAPIStoreKey,
    initialState: initialState(),
    reducers: {
        callAPI(state, action) {},
        callStarted(state, action) {
            const { storeKey } = action.payload;
            state[storeKey] = {
                [FetchingKey]: true,
                [DataKey]: null,
                [ErrorKey]: null,
            };
        },
        callSuccess(state, action) {
            const { storeKey, data } = action.payload;
            state[storeKey] = {
                [FetchingKey]: false,
                [DataKey]: data,
                [ErrorKey]: null,
            };
        },
        callFailed(state, action) {
            const { storeKey, error } = action.payload;
            state[storeKey] = {
                [FetchingKey]: false,
                [DataKey]: null,
                [ErrorKey]: error,
            };
        },
        callError(state, action) {
            const { storeKey, errorCode, header } = action.payload;
            state[storeKey][FetchingKey] = false;
            state.error = {
                errorCode: errorCode,
                header: header,
            };
        },
        removeError(state, action) {
            state.error = null;
        },
        // Updating the Notification Timestamp
        updateNotificationTimestamp(state, action) {
            if(state[NotificationStoreKey] !== action.payload) {
                state[NotificationStoreKey] = action.payload;
            }
        },
        // Useful for removing some data from API calls or to reset it so that
        // Call can be made again
        removeAPIData(state, action) {
            const storeKey = action.payload;
            state[storeKey] = {
                [FetchingKey]: false,
                [DataKey]: null,
                [ErrorKey]: null,
            };
        },
        editAPIData(state, action) {
            const { storeKey, payload } = action.payload;
            state[storeKey][DataKey] = payload;
        },
    },
});

// Extract the action creators object and the reducer
const { actions, reducer: callAPIReducer } = callAPISlice;
// Extract and export each action creator by name
export const {
    callAPI,
    callStarted,
    callSuccess,
    callFailed,
    callError,
    removeError,
    removeAPIData,
    editAPIData,
    updateNotificationTimestamp,
} = actions;
// Export the reducer, either as a default or named export
export default callAPIReducer;
