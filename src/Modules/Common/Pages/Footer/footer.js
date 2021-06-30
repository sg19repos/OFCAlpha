import React from "react";
import { Grid } from "@material-ui/core";
import FooterElement from "./footerElements";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import ScheduleRoundedIcon from "@material-ui/icons/ScheduleRounded";
import ChatBubbleOutlineRoundedIcon from "@material-ui/icons/ChatBubbleOutlineRounded";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import { useHistory } from "react-router-dom";

const Footer = () => {
  const history = useHistory();

  const footerElements = [
    { name: "Home", icon: HomeOutlinedIcon, route: "/" },
    { name: "Search", icon: SearchRoundedIcon, route: "/search" },
    { name: "Schedule", icon: ScheduleRoundedIcon, route: "/currentShipment" },
    { name: "Chat", icon: ChatBubbleOutlineRoundedIcon, route: "/chat" },
    { name: "Account", icon: PersonOutlineOutlinedIcon, route: "/account" }
  ];

  return (
    <footer className={"fullHeight alignCenter footerColor"}>
      <Grid container justify={"space-evenly"}>
        {footerElements.map((element, index) => {
          return (
            <FooterElement
              handleOnClick={() => {
                history.push(element.route);
              }}
              key={index}
              element={element}
            />
          );
        })}
      </Grid>
    </footer>
  );
};

export default Footer;
