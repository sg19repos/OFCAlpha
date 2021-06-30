import React, { useEffect, useState } from "react";
import { Button, Grid, TextField, Typography } from "@material-ui/core";
import natureBg from "../../../images/bg8.png";
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import PhoneIphoneOutlinedIcon from "@material-ui/icons/PhoneIphoneOutlined";
import { useHistory } from "react-router-dom";
import { callAPIAction } from "../../../common/Store/callAPI/actions";
import { LoginAPI } from "../APIs";
import {
  DataKey,
  ErrorKey,
  FetchingKey
} from "../../../common/Store/callAPI/allAPIs";
import { useSelector } from "react-redux";
import { SelectFullStateOfThisAPI } from "../../../common/Store/callAPI/selectors";

const SignUp = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginSubmitted, setLoginSubmitted] = useState(false);

  const {
    [DataKey]: LoginSuccess,
    [FetchingKey]: LoginFetching,
    [ErrorKey]: LoginError
  } = useSelector(state => SelectFullStateOfThisAPI(state, LoginAPI));

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      history.push("/");
    }
  }, []);

  useEffect(() => {
    if (LoginSuccess && loginSubmitted) {
      sessionStorage.setItem("token", "Bearer " + LoginSuccess.token);
      if (LoginSuccess?.user_details?.user_id) {
        sessionStorage.setItem("OFCLoginId", LoginSuccess.user_details.user_id);
        sessionStorage.setItem(
          "OFCUserEmail",
          LoginSuccess.user_details.user_email
        );
        history.push("/account");
      }
    }
  }, [LoginSuccess, loginSubmitted]);

  useEffect(() => {
    if (LoginError && loginSubmitted) {
      alert("Login Error - " + LoginError);
    }
  }, [LoginError, loginSubmitted]);

  const handleLoginSubmit = () => {
    callAPIAction(LoginAPI, {
      user_email: username,
      user_password: password,
      user_loggedinstate: 1
    });
  };

  return (
    <Grid container>
      <Grid item xs={12} className={"alignCenter mt-3"}>
        <Typography variant={"h5"} className={"weightBold"}>
          Out fly
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        className={"setTrainBg mt-2"}
        style={{ backgroundImage: `url(${natureBg})` }}
      >
        <Typography variant={"h6"} className={"mt-6 weightBold pl-1"}>
          Welcome
          <br /> Back
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        className={"locationInputCard pb-6 mt-2 mb-4 plainBorder"}
      >
        <Grid container className={"p-1"} justify={"center"}>
          <Grid item xs={12} className={"mt-1"}>
            <Grid container alignItems="flex-end">
              <Grid item xs={12}>
                <TextField
                  fullWidth={true}
                  variant={"outlined"}
                  size={"small"}
                  id="standard-basic"
                  InputLabelProps={{
                    shrink: true
                  }}
                  value={username}
                  onChange={event => {
                    setUsername(event.target.value);
                  }}
                  label={
                    <Grid item xs={12}>
                      <Grid container alignItems={"center"}>
                        <Grid item xs={2}>
                          <MailOutlineOutlinedIcon
                            fontSize={"small"}
                            className={"lightWt 1_5Font"}
                          />
                        </Grid>
                        <Grid item xs={4}>
                          Email
                        </Grid>
                        <Grid item xs={1}>
                          /
                        </Grid>
                        <Grid item xs={2}>
                          <PhoneIphoneOutlinedIcon
                            fontSize={"small"}
                            className={"lightWt 1_5Font"}
                          />
                        </Grid>
                        <Grid item xs={3}>
                          Phone
                        </Grid>
                      </Grid>
                    </Grid>
                  }
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} className={"mt-1"}>
            <Grid container alignItems="flex-end">
              <Grid item xs={12}>
                <TextField
                  type={"password"}
                  fullWidth={true}
                  variant={"outlined"}
                  size={"small"}
                  id="standard-basic"
                  InputLabelProps={{
                    shrink: true
                  }}
                  value={password}
                  onChange={event => {
                    setPassword(event.target.value);
                  }}
                  label={
                    <Grid item xs={12}>
                      <Grid container alignItems={"center"}>
                        <Grid item xs={3}>
                          <LockOutlinedIcon
                            fontSize={"small"}
                            className={"lightWt 1_5Font"}
                          />
                        </Grid>
                        <Grid item xs={9}>
                          Password
                        </Grid>
                      </Grid>
                    </Grid>
                  }
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} className={"alignCenter mt-2"}>
            <Button
              variant="contained"
              color="primary"
              className={"capitalise"}
              fullWidth
              onClick={() => {
                setLoginSubmitted(true);
                handleLoginSubmit();
              }}
            >
              Log in
            </Button>
          </Grid>
          <Grid item xs={12} className={"mt-1"}>
            <Grid container justify={"center"}>
              <Grid item xs={2} className={"alignCenter"}>
                <Typography variant={"caption"}>or</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} className={"alignCenter mt-1"}>
            <Button
              variant="outlined"
              className={"capitalise"}
              color="primary"
              fullWidth
              onClick={() => {
                history.push("/signup");
              }}
            >
              Sign up
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SignUp;
