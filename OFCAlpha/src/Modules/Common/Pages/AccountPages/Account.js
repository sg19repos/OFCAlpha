import React, { useEffect, useState } from "react";
import { Divider, Grid, Typography } from "@material-ui/core";
import { callAPIAction } from "../../../../common/Store/callAPI/actions";
import { GetUserDetailsAPI, LoginAPI, LogoutAPI } from "../../APIs";
import { useSelector } from "react-redux";
import { SelectDataObjInResponse } from "../../../../common/Store/callAPI/selectors";
import { getFullName } from "../../../../common/CommonUtils";
import InitialsText from "../../../../common/CustomUIComponents/InitialsText";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import consignmentSuccess from "../../../../images/successIcon.png";
import journeysIcon from "../../../../images/journeysIcon.png";
import liveLocation from "../../../../images/noLocation.png";
import paymentsIcon from "../../../../images/paymentsIcon.png";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
import { useHistory } from "react-router-dom";
import Login from "../Login";

const Account = () => {
  const userObj = useSelector(state =>
    SelectDataObjInResponse(state, GetUserDetailsAPI)
  );
  const requestObj = {
    id: userObj?.user_details?.user_id
      ? userObj?.user_details?.user_id
      : sessionStorage.getItem("OFCLoginId")
  };

  const history = useHistory();

  const [userDetails, setUserDetails] = useState({});
  const [userConsignments, setUserConsignments] = useState(undefined);
  const [userJourneys, setUserJourneys] = useState(undefined);
  const [logoutClicked, setLogoutClicked] = useState(false);

  const UserDetailsResponse = useSelector(state =>
    SelectDataObjInResponse(state, GetUserDetailsAPI)
  );

  const UserLogoutResponse = useSelector(state =>
    SelectDataObjInResponse(state, LogoutAPI)
  );

  const handleLogout = () => {
    callAPIAction(LogoutAPI, {
      user_email: userObj?.user_details
        ? userObj?.user_details?.user_email
        : sessionStorage.getItem("OFCUserEmail"),
      user_loggedinstate: 0
    });
  };

  useEffect(() => {
    callAPIAction(GetUserDetailsAPI, requestObj);
  }, []);

  useEffect(() => {
    if (logoutClicked && UserLogoutResponse) {
      sessionStorage.clear();
      history.push("/login");
    }
  }, [UserLogoutResponse]);

  useEffect(() => {
    setUserDetails(UserDetailsResponse?.user_details);
    if (UserDetailsResponse?.user_consignments?.length) {
      setUserConsignments(UserDetailsResponse?.user_consignments);
    }
    if (UserDetailsResponse?.user_journeys?.length) {
      setUserJourneys(UserDetailsResponse?.user_journeys);
    }
  }, [UserDetailsResponse]);

  return (
    <Grid container className={"pt-1s p-1"}>
      <Grid item xs={12}>
        <Grid container justify={"flex-end"}>
          <Grid item xs={2}>
            <NotificationsNoneOutlinedIcon
              className={"violetColor"}
              onClick={() => {}}
            />
          </Grid>
          <Grid item xs={1}>
            <ExitToAppRoundedIcon
              className={"violetColor"}
              onClick={() => {
                setLogoutClicked(true);
                handleLogout();
              }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className={"mt-1 mb-2 nameDisplay"}>
        <Grid container alignItems={"center"}>
          <Grid item xs={3}>
            <InitialsText
              firstName={userDetails?.user_firstname}
              lastName={userDetails?.user_lastname}
            />
          </Grid>
          <Grid item xs={8} className={"alignLeft"}>
            <Typography variant={"h5"} className={"weightBold capitalise"}>
              {getFullName(
                userDetails?.user_firstname,
                userDetails?.user_lastname
              )}
            </Typography>
            <Typography variant={"body1"} className={"lighterText pl-0_25"}>
              Username: <b>{userDetails?.user_email}</b>
            </Typography>
            <Typography variant={"body1"} className={"lighterText pl-0_25"}>
              Phone no: <b>{userDetails?.user_phone}</b>
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <EditOutlinedIcon fontSize={"small"} color={"disabled"} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid
          container
          className={
            "alignCenter shadow1 pt-2 pb-2 roundCorners violetBG plainColor"
          }
          justify={"space-evenly"}
        >
          <Grid item xs={4} className={"onlyRightBorder shadow1"}>
            <Typography variant={"h5"} className={"weightBold"}>
              {userConsignments?.length ? userConsignments?.length : 0}
            </Typography>
            <Typography
              variant={"caption"}
              className={"lighterText plainColor"}
            >
              Consignments
            </Typography>
          </Grid>
          <Grid item xs={4} className={"onlyRightBorder shadow1"}>
            <Typography variant={"h5"} className={"weightBold"}>
              {userDetails?.user_carrierrating
                ? userDetails?.user_carrierrating
                : 0}
            </Typography>
            <Typography
              variant={"caption"}
              className={"lighterText plainColor"}
            >
              Carrier Ratings
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant={"h5"} className={"weightBold"}>
              {userJourneys?.length ? userJourneys?.length : 0}
            </Typography>
            <Typography
              variant={"caption"}
              className={"lighterText plainColor"}
            >
              Journeys
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container className={"alignCenter"}>
          <Grid
            item
            xs={6}
            className={"p-1 shadow1 onlyRightBorder"}
            onClick={() => {
              history.push({
                pathname: "/consignments",
                search: "?consignerId=" + userDetails?.user_id,
                state: {
                  consignerId: userDetails?.user_id
                }
              });
            }}
          >
            <img src={consignmentSuccess} width={"75%"} />
            <Typography variant={"body2"} className={"lighterText"}>
              Consignments
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            className={"p-1 shadow1 onlyBottomBorder"}
            onClick={() => {
              history.push({
                pathname: "/carriers",
                search: "?carrierId=" + userDetails?.user_id,
                state: {
                  carrierId: userDetails?.user_id
                }
              });
            }}
          >
            <img src={journeysIcon} width={"90%"} />
            <Typography variant={"body2"} className={"lighterText"}>
              Journeys
            </Typography>
          </Grid>
        </Grid>
        <Grid container className={"alignCenter mt-1"}>
          <Grid item xs={6} className={"p-1 shadow1 onlyTopBorder"}>
            <img src={liveLocation} width={"80%"} />
            <Typography variant={"body2"} className={"lighterText"}>
              Live tracking
            </Typography>
          </Grid>
          <Grid item xs={6} className={"p-1 shadow1 onlyLeftBorder"}>
            <img src={paymentsIcon} width={"90%"} />
            <Typography variant={"body2"} className={"lighterText"}>
              Payments
            </Typography>
          </Grid>
        </Grid>
        <Divider orientation={"horizontal"} className={"mt-2"} />
      </Grid>
    </Grid>
  );
};

export default Account;
