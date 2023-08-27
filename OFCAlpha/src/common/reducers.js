import { createSlice } from "@reduxjs/toolkit";

export const locationData = createSlice({
  name: "location",
  initialState: { loading: false, location: [] },
  reducers: {
    fetchingLocation: (state, { payload }) => {
      state.loading = payload;
    },
    fetchLocationSuccess: (state, { payload }) => {
      state.location = {
        message: payload.Message,
        postOffices: payload.PostOffice
      };
    },
    fetchLocationIncorrect: (state, payload) => {
      state.error = payload;
    },
    fetchLocationFailure: (state, payload) => {
      state.error = payload.error;
    }
  }
});

export const {
  fetchingLocation,
  fetchLocationSuccess,
  fetchLocationFailure,
  fetchLocationIncorrect
} = locationData.actions;

export default locationData.reducer;
