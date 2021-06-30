import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";

const FooterElement = ({ element, handleOnClick }) => {
  return (
    <Grid item xs={2} mt={2} onClick={handleOnClick}>
      <Box mt={1}>
        <Grid item xs={12}>
          <element.icon />
        </Grid>
        <Grid item xs={12}>
          <Typography variant={"caption"}>{element.name}</Typography>
        </Grid>
      </Box>
    </Grid>
  );
};

export default FooterElement;
