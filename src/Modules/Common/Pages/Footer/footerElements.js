import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { spacing } from "@material-ui/system";

const FooterElement = ({ element }) => {
  return (
    <Grid item xs={3} mt={2}>
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
