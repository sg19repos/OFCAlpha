import React, { useState, useEffect } from "react";
import { Grid, IconButton, InputAdornment, TextField } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import SearchIcon from "@material-ui/icons/Search";
import { withStyles } from "@material-ui/core/styles";
import { Send } from "@material-ui/icons";
import { pincodeToLocationUrl } from "../../../common/constants";
import MakeAPICall from "../../../common/service2";

import {
  fetchingLocation,
  fetchLocationSuccess,
  fetchLocationFailure,
  fetchLocationIncorrect
} from "../../../common/reducers";

import { FetchCarrierAPI } from "../../Carrier/APIs";
import { SelectDataObjInResponse } from "../../../common/Store/callAPI/selectors";
import { callAPIAction } from "../../../common/Store/callAPI/actions";

const styles = {
  multilineColor: {
    color: "#4330A9"
  }
};

function Pincode_obselete(props) {
  const { standard, label } = props;
  const { classes } = props;
  const dispatch = useDispatch();
  const [searchDisabled, setSearchDisabled] = useState(true);
  const [pincodeInput, setPincodeInput] = useState("");

  // const locationData = useSelector(state =>
  //   state.locationData.location.postOffices
  //     ? state.locationData.location.postOffices[0].Name
  //     : ""
  // );

  useEffect(() => {
    callAPIAction(FetchCarrierAPI);
  }, []);

  const locationData = useSelector(state =>
    SelectDataObjInResponse(state, FetchCarrierAPI)
  );

  console.log("locationData", locationData);

  const handleOnPincodeChange = e => {
    setPincodeInput(e.target.value);
    e.target.value.length === 6
      ? setSearchDisabled(false)
      : setSearchDisabled(true);
  };

  // const fetchPincodeDetails = async () => {
  //   dispatch(fetchingLocation(true));
  //   try {
  //     const response = await MakeAPICall.getLocationDetails({
  //       url: pincodeToLocationUrl,
  //       pincode: pincodeInput
  //     });
  //     if (response.data[0].Status === "Success") {
  //       dispatch(fetchingLocation(false));
  //       dispatch(fetchLocationSuccess(response.data[0]));
  //     } else if (
  //       response.data[0].Status === "Error" ||
  //       response.data[0].Status === "404"
  //     ) {
  //       dispatch(fetchLocationIncorrect(response));
  //     } else if (response.status !== "200") {
  //       dispatch(
  //         fetchLocationFailure(
  //           "Request failed with error code " + response.status
  //         )
  //       );
  //     }
  //   } catch (error) {
  //     dispatch(fetchLocationFailure(error));
  //   }
  // };

  return (
    <Grid container>
      <Grid item xs={12}>
        <TextField
          className={"inputBackgroundColor"}
          variant={standard ? "standard" : "outlined"}
          // variant={"standard"}
          label={standard && label}
          type={"number"}
          size={"small"}
          placeholder={!standard && "Enter your pincode"}
          fullWidth={true}
          InputProps={{
            className: classes.multilineColor,
            startAdornment: !standard && (
              <InputAdornment position={"start"}>
                <SearchIcon fontSize={"inherit"} />
              </InputAdornment>
            ),
            endAdornment: (
              <IconButton
                color={"primary"}
                disabled={searchDisabled}
                aria-label="delete"
                // onClick={fetchPincodeDetails}
              >
                <Send className={!searchDisabled && "violetColor"} />
              </IconButton>
            )
          }}
          onChange={handleOnPincodeChange}
        />
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(Pincode_obselete);
