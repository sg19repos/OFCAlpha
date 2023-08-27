import React from "react";
import { Grid, Typography } from "@material-ui/core";
// import SendParcelImage from "../../../images/sendParcel.png";
// import SendParcelImage from "../../../images/send.png";
// import SendParcelImage from "../../../images/cartonBox.png";
// import SendParcelImage from "../../../images/sender.png";
import SendParcelImage from "../../../images/deliveries.png";
// import CarrierIcon from "../../../images/deliver.gif";
// import CarrierIcon from "../../../images/drive.png";
import CarrierIcon from "../../../images/biker.png";
// import CarrierIcon from "../../../images/carrier.png";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";
import BusinessCenterOutlinedIcon from "@material-ui/icons/BusinessCenterOutlined";
import { useHistory } from "react-router-dom";

const ModeSelection = () => {
  const history = useHistory();
  return (
    <Grid container>
      <Grid item xs={12} className={"m-2"}>
        <Typography className={"closerLetters lineHeight"} variant={"h4"}>
          What's your plan today?
        </Typography>
      </Grid>
      <Grid container className={"modeSelectionCards consignmentPhysics"}>
        <Grid item xs={8}>
          <img src={SendParcelImage} alt={"Send Parcel"} width={"90%"} />
        </Grid>
        <Grid item xs={4} className={"mt-1"}>
          <Grid container>
            <Grid item xs={12}>
              <Typography
                component={"span"}
                variant={"caption"}
                className={"regularFont"}
              >
                I need someone to deliver my stuff
              </Typography>
            </Grid>
            <Grid item xs={12} className={"mt-0_5"}>
              <Button
                size={"small"}
                variant={"outlined"}
                endIcon={<BusinessCenterOutlinedIcon />}
                onClick={() => history.push("/newConsignment")}
              >
                Let's see
              </Button>
            </Grid>
          </Grid>

          {/*<SendIcon fontSize={"large"} className={"mt-1 ml-2 violetColor"} />*/}
        </Grid>
      </Grid>
      <Typography
        variant={"h6"}
        component={"div"}
        className={"m-auto alignCenter mt-1"}
      >
        Or
      </Typography>
      <Grid container className={"modeSelectionCards consignmentPhysics mt-1"}>
        <Grid item xs={8}>
          <img
            src={CarrierIcon}
            alt={"Carry Parcel"}
            width={"100%"}
            className={"mt-1"}
          />
        </Grid>
        <Grid item xs={4} className={"mt-1"}>
          <Grid container>
            <Grid item xs={12}>
              <Typography
                component={"span"}
                variant={"caption"}
                className={"regularFont"}
              >
                I'm travelling & can deliver it for you
              </Typography>
            </Grid>
            <Grid item xs={12} className={"mt-0_5"}>
              <Button
                size={"small"}
                variant={"outlined"}
                endIcon={<DirectionsBikeIcon />}
                onClick={() => history.push("/createJourney")}
              >
                Sure
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ModeSelection;
