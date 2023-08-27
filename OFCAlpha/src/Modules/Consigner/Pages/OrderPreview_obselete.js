import React from "react";
import Grid from "@material-ui/core/Grid";
import { Divider, Typography } from "@material-ui/core";
import { weightCategories, categoryListItems } from "../../../common/constants";

const OrderPreview = ({
  pickupLocation = [
    {
      completeAddressValue: "Test pickup address",
      landmarkValue: "Test pickup landmark",
      directionsValue: "Test directions",
      locationId: "place.10500729632604010",
      title: "Srikakulam, Andhra Pradesh, India"
    }
  ],
  dropLocation = [
    {
      completeAddressValue: "Gurudwara, Visakhapatnam",
      landmarkValue: "Test dest landmark",
      directionsValue: "Test dest directions",
      locationId: "place.1657018279024290",
      title: "Visakhapatnam, Andhra Pradesh, India"
    }
  ],
  itemCategory = [7],
  itemWeight = 1,
  itemDescriptions = {
    "0": { id: 0, title: "Test item name", description: "Test item desc" }
  },
  pickupTime = "2021-03-29T15:20"
}) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant={"overline"}>Location details</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant={"caption"} className={"lighterText"}>
          From
        </Typography>
        <Typography variant={"subtitle2"}>
          {pickupLocation?.[0]?.title}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant={"caption"} className={"lighterText"}>
          To
        </Typography>
        <Typography variant={"subtitle2"}>
          {dropLocation?.[0]?.title}
        </Typography>
      </Grid>
      <Grid item xs={12} className={"pt-1 pb-1"}>
        <Divider />
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant={"caption"} className={"lighterText"}>
              Total Weight
            </Typography>
            <Typography variant={"subtitle2"}>
              {weightCategories[itemWeight].title}
              <Typography variant={"subtitle2"}>
                ({weightCategories[itemWeight].minWeight} -{" "}
                {weightCategories[itemWeight].maxWeight})KGs
              </Typography>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant={"caption"} className={"lighterText"}>
              Item Category
            </Typography>

            {itemCategory.map((category, index) => {
              return (
                <Typography variant={"subtitle2"}>
                  {index + 1 + " - " + categoryListItems[category].categoryName}
                </Typography>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className={"pt-1 pb-1"}>
        <Divider />
      </Grid>
      <Grid item xs={12}>
        <Typography variant={"caption"} className={"lighterText"}>
          Item description
        </Typography>
        {Object.values(itemDescriptions).map(item => {
          return (
            <Typography variant={"subtitle2"} className={"pt-0_5"}>
              {item.title} -
              <Typography component={"span"} variant={"subtitle2"}>
                {item.description}
              </Typography>
            </Typography>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default OrderPreview;
