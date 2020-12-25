import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { weightCategories } from "../../../common/constants";
import ScaleIcon from "../../../images/papers.png";
import BooksIcon from "../../../images/books.png";
import BagPack from "../../../images/backpack.png";
import HandBag from "../../../images/handbag.png";
import Luggage from "../../../images/luggage.png";
import Carton from "../../../images/carton.png";

const ConsignmentPhysics = () => {
  return (
    <Grid
      container
      justify={"space-evenly"}
      spacing={4}
      className={"pl-2 pr-2 pt-2"}
    >
      {weightCategories.map((item, index) => {
        return (
          <Grid item xs={5} className={"mb-1 consignmentPhysics"}>
            <img src={item.icon} width={"50%"} style={{ margin: "auto 25%" }} />
            <Typography
              variant="body2"
              align={"center"}
              className={"mt-1 mb-0_5"}
            >
              {item.title}
            </Typography>
            <Typography align={"center"} className={"lighterText"}>
              {item.minWeight} to {item.maxWeight} Kg
            </Typography>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ConsignmentPhysics;
