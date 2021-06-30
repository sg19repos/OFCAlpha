import React from "react";
import Typography from "@material-ui/core/Typography";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteOutlineRoundedIcon from "@material-ui/icons/DeleteOutlineRounded";
import Grid from "@material-ui/core/Grid";

const AddressCard = ({
  addressCard,
  handleClickOpen,
  setLocationId,
  handleRemoveAddressCards
}) => {
  const { title, locationId } = addressCard;
  // TODO - Complete edit and address book section
  return (
    <Grid
      container
      className={"carrierListBottomCard p-0_5"}
      style={{ minHeight: "inherit", maxHeight: "120px", overflow: "hidden" }}
      id={locationId}
      /*onClick={() => {
        setLocationId(locationId);
        handleClickOpen(true);
      }}*/
    >
      <Grid item xs={11}>
        <Typography
          variant={"subtitle2"}
          color="textSecondary"
          className={"truncateWithDots"}
        >
          {title}
        </Typography>
      </Grid>
      <Grid item xs={1}>
        {/*<EditOutlinedIcon color={"disabled"} fontSize={"small"} />*/}
        <DeleteOutlineRoundedIcon
          color={"error"}
          onClick={() => {
            handleRemoveAddressCards();
          }}
          fontSize={"small"}
        />
      </Grid>
    </Grid>
  );
};

export default AddressCard;
