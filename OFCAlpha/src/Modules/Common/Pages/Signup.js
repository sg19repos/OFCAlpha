import React, { useState } from "react";
import {
  Button,
  Divider,
  Grid,
  InputAdornment,
  TextField,
  Typography
} from "@material-ui/core";
import trainBg from "../../../images/bg3.png";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import PhoneIphoneOutlinedIcon from "@material-ui/icons/PhoneIphoneOutlined";
import { useHistory } from "react-router-dom";

const SignUp = () => {
  const history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");
  const [signupSubmitted, setSignupSubmitted] = useState(false);

  const handleSignupSubmitted = () => {
    const requestObj = {
      user_firstname: firstName,
      user_lastname: lastName,
      user_email: email,
      user_phone: phoneNo,
      user_password: password
    };
  };

  return (
    <Grid container>
      <Grid item xs={12} className={"alignCenter"}>
        <Typography variant={"h5"} className={"weightBold"}>
          Out fly
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        className={"setTrainBg"}
        style={{ backgroundImage: `url(${trainBg})` }}
      >
        <Typography variant={"h6"} className={"mt-6 weightBold pl-1"}>
          Create
          <br /> Account
        </Typography>
      </Grid>
      <Grid item xs={12} className={"locationInputCard pb-2 mt-2 plainBorder"}>
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
                  onChange={event => {
                    setFirstName(event.target.value);
                  }}
                  value={firstName}
                  label={
                    <Grid item xs={12}>
                      <Grid container alignItems={"center"}>
                        <Grid item xs={3}>
                          <PersonOutlineOutlinedIcon
                            fontSize={"small"}
                            className={"lightWt 1_5Font"}
                          />
                        </Grid>
                        <Grid item xs={9}>
                          Firstname
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
                  fullWidth={true}
                  variant={"outlined"}
                  size={"small"}
                  id="standard-basic"
                  InputLabelProps={{
                    shrink: true
                  }}
                  onChange={event => {
                    setLastName(event.target.value);
                  }}
                  value={lastName}
                  label={
                    <Grid item xs={12}>
                      <Grid container alignItems={"center"}>
                        <Grid item xs={3}>
                          <PersonOutlineOutlinedIcon
                            fontSize={"small"}
                            className={"lightWt 1_5Font"}
                          />
                        </Grid>
                        <Grid item xs={9}>
                          Lastname
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
                  fullWidth={true}
                  variant={"outlined"}
                  size={"small"}
                  id="standard-basic"
                  InputLabelProps={{
                    shrink: true
                  }}
                  onChange={event => {
                    setEmail(event.target.value);
                  }}
                  value={email}
                  label={
                    <Grid item xs={12}>
                      <Grid container alignItems={"center"}>
                        <Grid item xs={5}>
                          <MailOutlineOutlinedIcon
                            fontSize={"small"}
                            className={"lightWt 1_5Font"}
                          />
                        </Grid>
                        <Grid item xs={7}>
                          Email
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
                  fullWidth={true}
                  type={"number"}
                  variant={"outlined"}
                  size={"small"}
                  id="standard-basic"
                  InputLabelProps={{
                    shrink: true
                  }}
                  onChange={event => {
                    setPhoneNo(event.target.value);
                  }}
                  value={phoneNo}
                  label={
                    <Grid item xs={12}>
                      <Grid container alignItems={"center"}>
                        <Grid item xs={4}>
                          <PhoneIphoneOutlinedIcon
                            fontSize={"small"}
                            className={"lightWt 1_5Font"}
                          />
                        </Grid>
                        <Grid item xs={8}>
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
                  onChange={event => {
                    setPassword(event.target.value);
                  }}
                  value={password}
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
                setSignupSubmitted(true);
                handleSignupSubmitted();
              }}
            >
              Sign up
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
                history.push("/login");
              }}
            >
              Log in
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SignUp;
