import React, { useState } from "react";
import { TextField, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { Months } from "../../../common/constants";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";

const TimePicker = props => {
  const { fullWidth } = props;
  // const [date, setDate] = useState(new Date().toISOString());
  const [newDate, setNewDate] = useState("");
  const handleChange = e => {
    setNewDate(e.target.value);
  };

  const formatAMPM = date => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return { hours: hours + ":" + minutes, ampm: ampm };
  };

  const [open, setOpen] = useState(false);

  return (
    <div align={"center"}>
      <TextField
        fullWidth={fullWidth}
        id="datetime-local"
        label="Pickup date & time"
        type="datetime-local"
        // defaultValue="2017-05-24T10:30"
        defaultValue={new Date(
          new Date().getTime() - new Date().getTimezoneOffset() * 60000
        )
          .toISOString()
          .substring(0, 16)}
        InputLabelProps={{
          shrink: true
        }}
        onChange={e => {
          handleChange(e);
        }}
      />

      {newDate ? (
        <Grid container justify={"center"}>
          <Grid item xs={3} className={"datePicked"}>
            <Typography
              variant="body2"
              align={"center"}
              className={"mt-1 mb-0_5 weightBold"}
            >
              {new Date(newDate).getDate()}
            </Typography>
            <Typography align={"center"} className={"lighterText"}>
              <p>{Months[new Date(newDate).getMonth()]}</p>
            </Typography>
          </Grid>

          <Grid item xs={3} className={"datePicked"}>
            <Typography
              variant="body2"
              align={"center"}
              className={"mt-1 mb-0_5 weightBold"}
            >
              {formatAMPM(new Date(newDate)).hours}
            </Typography>
            <Typography align={"center"} className={"lighterText"}>
              <p>{formatAMPM(new Date(newDate)).ampm}</p>
            </Typography>
          </Grid>
        </Grid>
      ) : (
        ""
      )}
    </div>
  );
};

export default TimePicker;
