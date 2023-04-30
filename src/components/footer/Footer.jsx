import "./Footer.css";
import { Stack, Button } from "@mui/material";
import companyLogo from "../../assets/company-logo.jpg";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import React from "react";

const Footer = () => {
  return (
    <Stack
      direction="column"
      sx={{
        borderRadius: "8px",
        margin: "0",
        boxShadow: "3px 6px 32px 0px rgba(136, 136, 136, 0.39)",
      }}
      className="shadow"
    >
      <Stack
        direction={{ sm: "column" }}
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
      >
        <div className="footerImage">
          <img src={companyLogo} alt="" />
        </div>

        <Stack
          spacing={5}
          direction={{ sm: "column", md: "row" }}
          alignItems="center"
        >
          <div> "All Rights Reserved."</div>

          <Stack
            spacing={6}
            direction="row"
            sx={{
              m: 2,
            }}
          >
            <WhatsAppIcon />
            <LinkedInIcon />
            <InstagramIcon />
            <FacebookIcon />
          </Stack>

          <Stack direction="row" alignItems="center">
            <Button>Contact Us</Button>
            <ContactMailIcon />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Footer;
