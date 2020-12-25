import React from "react";
import { fetchingLocation, fetchLocationSuccess } from "./reducers";
import { useDispatch } from "react-redux";

const MakeAPICall = apiCallDetails => {
  const url = apiCallDetails.url;
  const dispatch = useDispatch();
  const requestParam = apiCallDetails.requestParam;

  const fullUrl = url + "/" + requestParam;

  // const getLocationData = async () => {
  dispatch(fetchingLocation);
  const response = fetch(fullUrl);
  //
  return response && response.json;
  // return async dispatch => {
  //   dispatch(fetchingLocation());
  //   try {
  //     const response = await fetch(fullUrl);
  //     const data = response.json();
  //     dispatch(fetchLocationSuccess(data));
  //   } catch (error) {}
  // };
  // };
};

export default MakeAPICall;
