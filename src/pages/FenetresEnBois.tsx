import {
  Box,
  Typography,
  useMediaQuery,
  Button,
  useTheme,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  styled,
  Grid,
  Container,
} from "@mui/material";

import { Fragment, useEffect } from "react";
import Spacer from "./Spacer";

import FlexBox from "../components/FlexBox";
import { H2 } from "../components/Typography";
import useWindowDimensions from "../utils/getWindowsDimensions";

const bannerImage01 =  process.env.REACT_APP_ASSETS_URL + "images/fenetres-en-bois/fenetres-en-bois-1.jpg";
const bannerImage02 =  process.env.REACT_APP_ASSETS_URL + "images/fenetres-en-bois/fenetres-en-bois-2.jpg";
const bannerImage03 =  process.env.REACT_APP_ASSETS_URL + "images/fenetres-en-bois/fenetres-en-bois-3.jpg";
const bannerImage04 =  process.env.REACT_APP_ASSETS_URL + "images/fenetres-en-bois/fenetres-en-bois-4.jpg";
const bannerImage05 =  process.env.REACT_APP_ASSETS_URL + "images/fenetres-en-bois/fenetres-en-bois-5.jpg";
const bannerImage06 =  process.env.REACT_APP_ASSETS_URL + "images/fenetres-en-bois/fenetres-en-bois-6.jpg";
const bannerImage07 =  process.env.REACT_APP_ASSETS_URL + "images/fenetres-en-bois/fenetres-en-bois-7.png";
const bannerImage08 =  process.env.REACT_APP_ASSETS_URL + "images/fenetres-en-bois/fenetres-en-bois-8.png";
const bannerImage09 =  process.env.REACT_APP_ASSETS_URL + "images/fenetres-en-bois/fenetres-en-bois-9.png";
const bannerImage10 =  process.env.REACT_APP_ASSETS_URL + "images/fenetres-en-bois/fenetres-en-bois-10.jpg";
const bannerImage11 =  process.env.REACT_APP_ASSETS_URL + "images/fenetres-en-bois/fenetres-en-bois-11.jpg";

const FenetresEnBois = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { height, width } = useWindowDimensions();
  const imageHeight = Math.round((width * 10) / 16);
  const imageWidth = isMobile ? width * 0.9 : width;
  const StyledBanner = styled(Box)(() => ({
    "& .banner-image": {
      height: "auto",
      width: imageWidth,
      maxWidth: "1200px",
    },
  }));
  const StyledImageCenterWrapper = styled(Grid)(() => ({
    textAlign: "center",
    "& .ImageCenter": {
      width: "70%",
    },
  }));
  const StyledImageCenterWrapper1 = styled(Grid)(() => ({
    textAlign: "center",
    "& .ImageCenter": {
      width: "60%",
    },
  }));
  return (
    <Fragment>
      <StyledBanner>
        <img src={bannerImage01} className="banner-image"></img>
      </StyledBanner>
      <Spacer mb="1.5rem" />
      <Grid container spacing={3}>
        <Grid item md={6} xs={12}>
          <Box
            py={0.6}
            fontWeight="500"
            sx={{ padding: "20px", textAlign: "center" }}
          >
            Fabriquer votre propre fenêtre bois à partir de nos profilés et
            profils complémentaires, c’est simple, rapide et économique.
          </Box>
        </Grid>
        <Grid item md={6} xs={12}>
          <Box
            py={0.6}
            fontWeight="500"
            sx={{ padding: "20px", textAlign: "center" }}
          >
            Vous bénéficiez d’un procédé technique idéal et profitez d’unstock
            mutualisé disponible dans un délai très court.
          </Box>
        </Grid>
      </Grid>
      <Spacer mb="1.5rem" />
      <StyledBanner>
        <img src={bannerImage05} className="banner-image"></img>
      </StyledBanner>
      <Spacer mb="1.5rem" />
      <Grid container spacing={3}>
        <StyledImageCenterWrapper1 item md={6} xs={12}>
          <img src={bannerImage06} className="ImageCenter"></img>
        </StyledImageCenterWrapper1>
        <StyledImageCenterWrapper item md={6} xs={12}>
          <img src={bannerImage03} className="ImageCenter"></img>
          <img src={bannerImage02} className="ImageCenter"></img>
        </StyledImageCenterWrapper>
      </Grid>
      <Spacer mb="1.5rem" />
      <Grid container spacing={3}>
        <StyledImageCenterWrapper item md={4} xs={12}>
          <img src={bannerImage07} className="ImageCenter"></img>
        </StyledImageCenterWrapper>
        <StyledImageCenterWrapper item md={4} xs={12}>
          <img src={bannerImage08} className="ImageCenter"></img>
        </StyledImageCenterWrapper>
        <StyledImageCenterWrapper item md={4} xs={12}>
          <img src={bannerImage09} className="ImageCenter"></img>
        </StyledImageCenterWrapper>
      </Grid>
      <Spacer mb="1.5rem" />
      <Grid container spacing={3} justifyContent="center">
        <Grid item md={7} xs={12} justifyContent="center">
          <Box py={0.6} sx={{ padding: "20px", textAlign: "center" }}>
            Recherches continues dans le domaine des matériaux et de la
            technologie Symbiose entre une technologie CNC de pointe et un
            savoir-faire expert Joint fermé - préservation du bois constructive
          </Box>
        </Grid>
      </Grid>
      <Spacer mb="1.5rem" />
      <StyledBanner>
        <img src={bannerImage10} className="banner-image"></img>
      </StyledBanner>
      <Spacer mb="1.5rem" />
      <Grid container spacing={3} justifyContent="center">
        <Grid item md={7} xs={12} justifyContent="center">
          <Box
            py={0.6}
            sx={{ padding: "20px", textAlign: "center" }}
            fontWeight="800"
            fontSize="27px"
          >
            En conformité avec la RT 2012 la fenêtre 68 mm.
          </Box>
        </Grid>
      </Grid>
      <Spacer mb="1.5rem" />
      <Grid container spacing={3} justifyContent="center">
        <StyledImageCenterWrapper1 item md={4} xs={12}>
          <img src={bannerImage11} className="ImageCenter"></img>
        </StyledImageCenterWrapper1>
        <Grid item md={4} xs={12}  textAlign = "center" >
          <Box py={0.6}>
            essences de bois issus de forêts gérées durablement sont à votre
            disposition : Pin, BER et Chêne{" "}
          </Box>
          <Box py={0.6}>
            FENETRES offre les performances attendues par un menuisier-fabricant
            :{" "}
          </Box>
          <Box py={0.6}>Uw=1,3</Box>
          <Box py={0.6} mb={2}>
            Pin sylvestre + 4 /16 argon / 4 FE
          </Box>
        </Grid>
      </Grid>
    </Fragment>
  );
};
export default FenetresEnBois;
