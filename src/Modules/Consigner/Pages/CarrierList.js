import React from "react";
import { Grid, Typography } from "@material-ui/core";
import LocationSearch from "../../Common/Pages/LocationSearch";
import Filter from "../../Common/Pages/Filter";
import CarrierListItem from "./CarrierListItem";

const CarrierList = () => {
  return (
    <>
      <Typography
        variant={"h5"}
        className={"p-1 weightBold alignLeft mb-2"}
        align={"left"}
      >
        Carrier List
      </Typography>
      <LocationSearch />
      <Grid container className={"carrierListBottomCard p-1 mt-1"}>
        <Grid item xs={12} className={""}>
          <Filter />
        </Grid>
        <Grid item xs={12} className={"mt-1"}>
          <Typography variant={"body2"} align={"center"}>
            Filtering : Trains
          </Typography>
        </Grid>
      </Grid>
      <CarrierListItem
        locationDetails={{
          origin: "Srikakulam",
          destination: "Visakhapatnam"
        }}
        rating={4.5}
      />
      <CarrierListItem
        locationDetails={{
          origin: "Guntur",
          destination: "Vizianagaram"
        }}
        rating={3.5}
      />
      <CarrierListItem
        locationDetails={{
          origin: "Srikakulam",
          destination: "Visakhapatnam"
        }}
        rating={4}
      />
      <CarrierListItem
        locationDetails={{
          origin: "Guntur",
          destination: "Vizianagaram"
        }}
        rating={3}
      />
    </>
  );
};

export default CarrierList;
