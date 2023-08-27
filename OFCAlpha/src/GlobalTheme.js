import { makeStyles } from "@material-ui/core/styles";

const GlobalCSS = makeStyles({
  "@global": {
    typography: {
      fontFamily: "Poppins !important"
    },
    font75: {
      fontSize: "0.75rem !important"
    },
    /*--------- Theme overrides start -----------*/
    ".MuiStepper-root": {
      padding: "0px"
    },
    ".MuiStepConnector-vertical": {
      padding: "0 0 2px",
      marginLeft: "7px"
    },
    ".MuiStepConnector-lineVertical": {
      borderLeftStyle: "dotted"
    },
    /*--------- Theme overrides end -----------*/
    ".regularFont": {
      fontFamily: "Poppins !important"
    },
    ".flexDisplay": {
      display: "flex"
    },
    ".alignItemsCenter": {
      alignItems: "center"
    },
    ".redIt": {
      backgroundColor: "red"
    },
    ".fullWidth": {
      width: "100%"
    },
    ".fullHeight": {
      height: "100%"
    },
    ".overflowAuto": {
      overflow: "auto"
    },
    ".alignCenter": {
      textAlign: "center !important"
    },
    ".alignLeft": {
      textAlign: "left"
    },
    ".alignRight": {
      textAlign: "right"
    },
    ".closerLetters": {
      letterSpacing: "-1px !important"
    },
    ".lineHeight": {
      lineHeight: "3rem !important"
    },
    ".footerColor": {
      backgroundColor: "#F9F9FC"
    },
    ".weightLight": {
      fontWeight: "300 !important"
    },
    ".weightNormal": {
      fontWeight: "500 !important"
    },
    ".weightBold": {
      fontWeight: "600 !important"
    },
    ".smallerFont": {
      fontSize: "1rem !important"
    },
    ".75Font": {
      fontSize: "0.75rem !important"
    },
    ".1_5Font": {
      fontSize: "1.25rem !important"
    },
    ".allCaps": {
      textTransform: "uppercase !important"
    },
    ".capitalise": {
      textTransform: "capitalize !important"
    },
    ".violetColor": {
      color: "#595a9b"
    },
    ".violetBG": {
      backgroundColor: "#595a9b"
    },
    ".purpleColor": {
      color: "#aca9d6"
    },
    ".purpleBG": {
      backgroundColor: "#aca9d6"
    },
    ".plainBorder": {
      backgroundColor: "#fff"
    },
    ".plainColor": {
      color: "#fff !important"
    },
    ".mainBackground": {
      backgroundColor: "#aab8c4"
    },
    ".mainBorder": {
      borderColor: "#aab8c4"
    },
    ".inputBackgroundColor": {
      backgroundColor: "#F9F9FC"
    },
    ".orangeBG": {
      backgroundColor: "#f44336"
    },
    ".greenBG": {
      backgroundColor: "#388e3c"
    },
    ".greenColor": {
      color: "#388e3c"
    },
    ".yellowBG": {
      backgroundColor: "#fbc02d"
    },
    ".yellowColor": {
      color: "#fbc02d"
    },
    ".roundCorners": {
      borderRadius: "5% 5% 0 0/20px"
    },
    ".allRoundCorners": {
      borderRadius: "3%/9px"
    },
    ".shadow1": {
      border: "1px solid #DBDBDB"
    },
    ".onlyLeftBorder": { borderWidth: "0px 0px 0px 1px" },
    ".onlyRightBorder": { borderWidth: "0px 1px 0px 0px" },
    ".onlyTopBorder": { borderWidth: "1px 0px 0px 0px" },
    ".onlyBottomBorder": { borderWidth: "0px 0px 1px 0px" },
    ".p-0": {
      padding: "0"
    },
    ".p-0_5": {
      padding: "0.5rem"
    },
    ".p-0_75": {
      padding: "0.75rem"
    },
    ".p-1": {
      padding: "1rem !important"
    },
    ".p-2": {
      padding: "2rem !important"
    },
    ".pl-0_75": {
      paddingLeft: "0.75rem !important"
    },
    ".pl-0": {
      paddingLeft: "0"
    },
    ".p-4": {
      padding: "0.25rem !important"
    },
    ".p-16": {
      padding: "1rem !important"
    },
    ".ptb-1s": {
      padding: "0.25rem 0 !important"
    },
    ".pt-2px": {
      paddingTop: "0.125rem !important"
    },
    ".pt-1s": {
      paddingTop: "0.25rem !important"
    },
    ".pt-0_5": {
      paddingTop: "0.5rem !important"
    },
    ".pt-1": {
      paddingTop: "1rem !important"
    },
    ".pt-1_25": {
      paddingTop: "1.25rem !important"
    },
    ".pt-1_5": {
      paddingTop: "1.5rem !important"
    },
    ".pt-2": {
      paddingTop: "2rem !important"
    },
    ".pb-1s": {
      paddingBottom: "0.25rem !important"
    },
    ".pb-1": {
      paddingBottom: "1rem !important"
    },
    ".pb-1_25": {
      paddingBottom: "1.25rem !important"
    },
    ".pb-0": {
      paddingBottom: "0 !important"
    },
    ".pb-0_5": {
      paddingBottom: "0.5rem"
    },
    ".pb-0_6": {
      paddingBottom: "0.6rem"
    },
    ".pb-2": {
      paddingBottom: "2rem"
    },
    ".pb-3": {
      paddingBottom: "3rem"
    },
    ".pb-4": {
      paddingBottom: "4rem"
    },
    ".pr-0_25": {
      paddingRight: "0.25rem !important"
    },
    ".pr-0_5": {
      paddingRight: "0.5rem !important"
    },
    ".pr-1": {
      paddingRight: "1rem !important"
    },
    ".pr-1_5": {
      paddingRight: "1.5rem !important"
    },
    ".pr-2": {
      paddingRight: "2rem !important"
    },
    ".pr-3": {
      paddingRight: "3rem !important"
    },
    ".pl-1s": {
      paddingLeft: "0.25rem !important"
    },
    ".pl-0_5": {
      paddingLeft: "0.5rem !important"
    },
    ".pl-0_25": {
      paddingLeft: "0.25rem !important"
    },
    ".pl-1": {
      paddingLeft: "1rem !important"
    },
    ".pl-1_25": {
      paddingLeft: "1.25rem !important"
    },
    ".pl-1_5": {
      paddingLeft: "1.5rem !important"
    },
    ".pl-2": {
      paddingLeft: "2rem !important"
    },
    ".pl-2-2": {
      paddingLeft: "2.125rem !important"
    },
    ".pl-2_5": {
      paddingLeft: "2.5rem !important"
    },
    ".pl-3": {
      paddingLeft: "3rem !important"
    },
    ".m-auto": {
      margin: "auto"
    },
    ".m-0": {
      margin: "0"
    },
    ".m-4": {
      margin: "4rem"
    },
    ".m-2": {
      margin: "2rem"
    },
    ".m-1": {
      margin: "1rem"
    },
    ".ml-0": {
      marginLeft: "0 !important"
    },
    ".ml-0_5": {
      marginLeft: "0.5rem !important"
    },
    ".ml-1": {
      marginLeft: "1rem !important"
    },
    ".ml-1_5": {
      marginLeft: "1.5rem !important"
    },
    ".ml-2": {
      marginLeft: "2rem !important"
    },
    ".ml-2_5": {
      marginLeft: "2.5rem !important"
    },
    ".ml-3": {
      marginLeft: "3rem !important"
    },
    ".ml-4": {
      marginLeft: "4rem !important"
    },
    ".mln-0_5": {
      marginLeft: "-0.5rem !important"
    },
    ".mr-2": {
      marginRight: "2rem !important"
    },
    ".mr-1": {
      marginRight: "1rem !important"
    },
    ".mr-3": {
      marginRight: "3rem !important"
    },
    ".mr-4": {
      marginRight: "4rem !important"
    },
    ".mr-1_5": {
      marginRight: "1.5rem !important"
    },
    ".mr-0_5": {
      marginRight: "0.5rem !important"
    },
    ".mt-0": {
      marginTop: "0 !important"
    },
    ".mt-1s": {
      marginTop: "0.25rem !important"
    },
    ".mt-0_5": {
      marginTop: "0.5rem !important"
    },
    ".mt-1": {
      marginTop: "1rem !important"
    },
    ".mt-1_25": {
      marginTop: "1.25rem !important"
    },
    ".mt-1_5": {
      marginTop: "1.5rem !important"
    },
    ".mt-2": {
      marginTop: "2rem !important"
    },
    ".mt-3": {
      marginTop: "3rem !important"
    },
    ".mt-4": {
      marginTop: "4rem !important"
    },
    ".mt-6": {
      marginTop: "6rem !important"
    },
    ".mtn-hp": {
      marginTop: "-0.5px !important"
    },
    ".mtn-1s": {
      marginTop: "-0.25rem !important"
    },
    ".mtn-2": {
      marginTop: "-2rem !important"
    },
    ".mbn-0_25": {
      marginBottom: "-0.25rem !important"
    },
    ".mb-0": {
      marginBottom: "0 !important"
    },
    ".mb-0_25": {
      marginBottom: "0.25rem !important"
    },
    ".mb-0_5": {
      marginBottom: "0.5rem !important"
    },
    ".mbn-0_5": {
      marginBottom: "-0.5rem !important"
    },
    ".mb-1": {
      marginBottom: "1rem !important"
    },
    ".mb-1_5": {
      marginBottom: "1.5rem !important"
    },
    ".mb-2": {
      marginBottom: "2rem !important"
    },
    ".mb-3": {
      marginBottom: "3rem !important"
    },
    ".mb-4": {
      marginBottom: "4rem !important"
    },
    ".mb-6": {
      marginBottom: "6rem !important"
    },
    ".mb-10": {
      marginBottom: "10rem !important"
    },
    ".mb-12": {
      marginBottom: "12rem !important"
    },
    ".mb-16": {
      marginBottom: "16rem !important"
    },
    ".mb-20": {
      marginBottom: "20rem !important"
    },
    ".mb-22": {
      marginBottom: "22rem !important"
    },
    ".consignmentPhysics": {
      borderRadius: "6% 6% 6% 6% / 6px",
      boxShadow:
        "rgba(1, 1, 1, 0.2) 1px 1px 1px 1px, rgba(0, 0, 0, 0.11) 1px 1px 1px 1px"
    },
    ".lighterText": {
      color: "#888",
      fontSize: "0.7rem"
    },
    ".datePicked": {
      // border: "1px solid #595a9b",
      // borderRadius: "10%",
      padding: "5px",
      margin: "5px",
      borderRadius: "6% 6% 6% 6% / 6px",
      boxShadow:
        "rgba(112, 76, 182, 0.4) 1px 1px 1px 1px, rgba(0, 0, 0, 0.11) 1px 1px 1px 1px"
    },
    ".iconBackground": {
      borderRadius: "50%",
      padding: "10%",
      marginTop: "-10%",
      backgroundColor: "#eee"
    },
    ".regularShadow": {
      boxShadow:
        "rgba(1, 1, 1, 0.2) 1px 1px 1px 1px, rgba(0, 0, 0, 0.11) 1px 1px 1px 1px"
    },
    ".consignmentCard": {
      padding: "2% 1%",
      borderRadius: "7%/30px",
      // backgroundColor: "#595a9b0d"
      backgroundColor: "#fff"
    },
    ".consignmentCardIcon": {
      margin: "10% 0% 0% 0%"
    },
    ".verticalDivider": {
      marginTop: "-0.45rem"
    },
    ".destinationPointer": {
      border: "1px solid #ddd",
      borderRadius: "50%",
      backgroundColor: "#ddd"
    },
    ".sourcePointer": {
      borderRadius: "50%",
      backgroundColor: "#ddd"
    },
    ".vehicleSelectorCard": {
      border: "1px solid #ddd",
      borderRadius: "5%"
    },
    ".fabStylesCarrier": {
      position: "fixed",
      top: "20%",
      right: 20,
      backgroundColor: "green"
    },
    ".fabStylesConsigner": {
      position: "fixed",
      // width: "90%",
      bottom: 80,
      marginRight: "5%",
      right: 0,
      backgroundColor: "green"
    },
    ".locationInputCard": {
      border: "1px solid #ddd",
      backgroundColor: "#F9F9FC",
      borderRadius: "3%/9px"
    },
    ".carrierListBottomCard": {
      border: "1px solid #F9F9FC",
      backgroundColor: "#F9F9FC",
      borderRadius: "3%/9px"
    },
    ".modeSelectionCards": {
      padding: "2% 5%",
      borderRadius: "1%",
      backgroundColor: "#ffffff",
      minHeight: "150px"
    },
    ".selectedWeightCard": {
      backgroundColor: "#ddd",
      border: "2px solid #555"
    },
    ".positionRelative": {
      position: "relative"
    },
    ".positionAbsolute": {
      position: "absolute"
    },
    ".top0": {
      top: 0
    },
    ".bottom0": {
      bottom: 0
    },
    ".right0": {
      right: 0
    },
    ".truncateWithDots": {
      overflowX: "hidden",
      textOverflow: "ellipsis"
    },
    ".addressCardContainer": {
      // minHeight: "120px",
      /*maxHeight: "120px",*/
      // width: "auto",
      overflow: "auto",
      flexWrap: "nowrap"
    },
    ".location-search-input": {
      width: "100%"
    },
    ".locationResultsIcon": {
      borderRadius: "50%",
      backgroundColor: "#ddd",
      padding: "10%"
    },
    ".truncateText": {
      width: "inherit",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    },
    ".searchTab": {
      border: "2px solid #595a9b",
      padding: "0.25rem",
      borderRadius: "2%/9px"
    },
    ".btnLeftRadius": {
      borderRadius: "2% 0% 0% 2%/4px"
    },
    ".btnRightRadius": {
      borderRadius: "0% 2% 2% 0%/4px"
    },
    ".initialsText": {
      textAlign: "center",
      margin: "auto",
      height: "2rem",
      padding: "1rem",
      borderRadius: "50%",
      fontSize: "1.5rem",
      width: "2rem"
    },
    ".setTrainBg": {
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"
    },
    ".lightWt": {
      color: "#888",
      fontWeight: "lighter"
    },
    ".nameDisplay": {
      border: "1px solid #ddd",
      padding: "1rem 0rem",
      borderRadius: "4% 4% 4% 0/10px"
    },
    ".carrierVehicleIcon": {
      border: "1px solid #ddd",
      borderRadius: "10%",
      padding: "1% 4%"
    },
    ".carrierFromTo": {
      border: "1px solid #ddd",
      padding: "1% 3%",
      borderRadius: "2%/6px",
      margin: "0% 1%",
      backgroundColor: "#595a9b0d",
      color: "#000"
    }
  }
});

export default GlobalCSS;
