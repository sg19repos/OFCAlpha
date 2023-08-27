import React from "react";
import { Button, Chip, TextField } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";
import CheckCircleOutlinedIcon from "@material-ui/icons/CheckCircleOutlined";

const PackageContents = ({
  packageContentTitle,
  setPackageContentTitle,
  packageDescription,
  setPackageDescription,
  packagesAdded,
  handlePackagesAdded,
  removeAddedPackageContent,
  openPackedContentDetails,
  setOpenPackedContentDetails
}) => {
  return (
    <>
      <Grid container className={"mt-1"}>
        {packagesAdded &&
        Object.values(packagesAdded) &&
        Object.values(packagesAdded).length
          ? Object.values(packagesAdded).map(packageContentElement => {
              return (
                <Chip
                  id={packageContentElement.id}
                  className={"m-1"}
                  label={packageContentElement.title}
                  onDelete={() =>
                    removeAddedPackageContent(packageContentElement.id)
                  }
                  onClick={() =>
                    setOpenPackedContentDetails(packageContentElement.id)
                  }
                  color="primary"
                />
              );
            })
          : ""}
      </Grid>
      <Grid container className={"locationInputCard p-16 pt-1 mt-1"}>
        <Grid item xs={12}>
          <TextField
            id="package-content"
            label="Item name"
            fullWidth
            autoFocus
            value={
              typeof openPackedContentDetails !== undefined &&
              packagesAdded?.[openPackedContentDetails]
                ? packagesAdded[openPackedContentDetails].title
                : packageContentTitle
            }
            onChange={e => setPackageContentTitle(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} className={"pt-2"}>
          <TextField
            id="package-description"
            label="Description"
            multiline
            fullWidth
            rows={4}
            value={
              typeof openPackedContentDetails !== undefined &&
              packagesAdded?.[openPackedContentDetails]
                ? packagesAdded[openPackedContentDetails].description
                : packageDescription
            }
            onChange={e => setPackageDescription(e.target.value)}
          />
        </Grid>
        <Grid container justify={"space-between"}>
          <Grid item xs={4}>
            {typeof openPackedContentDetails !== "undefined" && (
              <Button
                className={"mt-2"}
                size={"small"}
                fullWidth
                variant={"contained"}
                color={"secondary"}
                endIcon={<CancelOutlinedIcon />}
                onClick={() => {
                  setOpenPackedContentDetails();
                }}
              >
                Close
              </Button>
            )}
          </Grid>

          <Grid item xs={4}>
            {typeof openPackedContentDetails === "undefined" && (
              <Button
                className={"mt-2"}
                size={"small"}
                fullWidth
                disabled={!(packageDescription && packageContentTitle)}
                variant={"contained"}
                color={"primary"}
                endIcon={<CheckCircleOutlinedIcon />}
                onClick={() => {
                  handlePackagesAdded(packageContentTitle, packageDescription);
                }}
              >
                Save
              </Button>
            )}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default PackageContents;
