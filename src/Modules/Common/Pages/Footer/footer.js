import React from "react";
import { Grid } from "@material-ui/core";
import FooterElement from "./footerElements";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import ScheduleOutlinedIcon from "@material-ui/icons/ScheduleOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";

const Footer = () => {
  const footerElements = [
    { name: "Home", icon: HomeOutlinedIcon },
    { name: "Schedule", icon: ScheduleOutlinedIcon },
    { name: "Chat", icon: ChatBubbleOutlineOutlinedIcon },
    { name: "Account", icon: PersonOutlineOutlinedIcon }
  ];

  return (
    <footer className={"fullHeight alignCenter footerColor"}>
      <Grid container justify={"center"}>
        {footerElements.map((element, index) => {
          return <FooterElement key={index} element={element} />;
        })}
      </Grid>
    </footer>
  );
};

export default Footer;
