import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton, 
  useMediaQuery,
  Button, 
  Container,
  Grid, 
  Drawer,
} from "@mui/material";

import { styled, Theme, useTheme } from "@mui/material/styles";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom"; 
 
import MenuIcon from "@mui/icons-material/Menu";
import Navbar from "../navbar/Navbar";
import FlexBox from "../FlexBox";
import AppSidenav from "../navbar/AppSidenav"; 
 
const logo =  process.env.REACT_APP_ASSETS_URL +  "images/logo.png";
const made_in_france =  process.env.REACT_APP_ASSETS_URL +  "images/made_in_france.png";
 
const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const StyledAppBar = styled("div")(() => ({
    "& .appBar": {
      background: "#fff",
    
    },

    "& .headerToolbar": {
      background: "#fff",
      "& .logoWrapper": {
        margin: isMobile ? "0 auto" : "",

        "& .logo": {
          height: "44px",
          margin: isMobile ? "0 auto" : "",
          [theme.breakpoints.down("sm")]: {
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          },
        },
      },
      "& .right-links-item": {
        margin: "5px 5px",
        maxWidth: "170px",
      }, 
    },
    "& .made-in-france":{
      height: "auto" ,
      width: "80px" 
    }
  }));
  const [sidenavOpen, setSidenavOpen] = useState(false);
  const toggleSidenav = () => setSidenavOpen(!sidenavOpen);
 
 
  return (
    <StyledAppBar>
      <AppBar className="appBar">
        <Container sx={{ py: "2rem" }}>
        <Grid
                container 
                  sx={{ display: isMobile ? "block" : "none" }}
                  textAlign = "end"
                > 
                  <Grid
                  item 
                  xs={3}
                  textAlign = "end"
                >
                  <img src={made_in_france} className="made-in-france"></img> 
               </Grid>
            </Grid>
          <Toolbar className="headerToolbar">
       
            <Grid
              container
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
            
              <Grid container item lg={2} md={2} sm={3} xs={12}>
                <FlexBox
                  alignItems="center"
                  sx={{ display: isMobile ? "block" : "none" }}
                >
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={toggleSidenav}
                    edge="start"
                    sx={{ mr: 2, ...(sidenavOpen && { display: "none" }) }}
                  >
                    <MenuIcon />
                  </IconButton>
                </FlexBox>
                <FlexBox sx={{ textAlign: "center" }} className="logoWrapper">
                  <Link to="/">
                    <img src={logo} className="logo"></img>
                  </Link>
                </FlexBox>
              </Grid>
              <Grid
                container
                item
                lg={10}
                md={10}
                sm={12}
                xs={12}
                justifyContent="flex-end"
                alignItems="center"
                sx={{
                  display: isMobile ? "none" : "flex",
                }}
              >
                <Grid
                  item
                  lg={3}
                  md={3}
                  sm={4}
                  xs={12}
                  className="right-links-item"
                >
                  <Link to="/quote-request">
                    <Button variant="outlined" color="primary">
                      Demande un devis
                    </Button>
                  </Link>
                </Grid>
                <Grid
                  item
                  lg={2}
                  md={3}
                  sm={4}
                  xs={12}
                  className="right-links-item"
                >
                  <Link to="/payment-online">
                    <Button variant="outlined" color="primary">
                      Payer en ligne
                    </Button>
                  </Link>
                </Grid>
                <Grid
                  item
                  lg={3}
                  md={4}
                  sm={4}
                  xs={12}
                  className="right-links-item"
                >
                  <a target="_blank" href="https://ifenetres.fr/documents/">
                    <Button variant="outlined" color="primary">
                      Fiches techniques
                    </Button>
                  </a>
                </Grid>
                <Grid
                  item
                  lg={3}
                  md={4}
                  sm={4}
                  xs={12}
                  className="right-links-item"
                >
                  <img src={made_in_france} className="made-in-france"></img>
                </Grid>
              </Grid>
            </Grid>
            <Drawer open={sidenavOpen} anchor="left" onClose={toggleSidenav}>
              <AppSidenav />
            </Drawer>
          </Toolbar> 
          <Navbar />
        </Container>
      </AppBar>
    </StyledAppBar>
  );
};

export default Header;
