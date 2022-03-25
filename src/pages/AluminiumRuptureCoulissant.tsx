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
import useWindowDimensions from "../utils/getWindowsDimensions";
import { textAlign } from "@mui/system";

const bannerImage01 =  process.env.REACT_APP_ASSETS_URL +  "images/aluminium-profile-rupture-coulissant/coulissant01.jpg";
const bannerImage02 =  process.env.REACT_APP_ASSETS_URL +  "images/aluminium-profile-rupture-coulissant/coulissant02.jpg";
const bannerImage03 =  process.env.REACT_APP_ASSETS_URL +  "images/aluminium-profile-rupture-coulissant/coulissant03.jpg";
const bannerImage04 =  process.env.REACT_APP_ASSETS_URL +  "images/aluminium-profile-rupture-coulissant/coulissant04.jpg";
const bannerImage05 =  process.env.REACT_APP_ASSETS_URL +  "images/aluminium-profile-rupture-coulissant/coulissant05.jpg";
const bannerImage06 =  process.env.REACT_APP_ASSETS_URL +  "images/aluminium-profile-rupture-coulissant/coulissant06.jpg";
const bannerImage07 =  process.env.REACT_APP_ASSETS_URL +  "images/aluminium-profile-rupture-coulissant/coulissant07.jpg";
 

const AluminiumRuptureCoulissant = () => {
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
      width: "90%",
    },
  }));

  const StyledImageRight = styled("img")(() => ({
    width: isMobile ? "100%" : "30%",
  }));

  return (
    <Fragment>
      <StyledBanner>
        <img src={bannerImage01} className="banner-image"></img>
      </StyledBanner>
      <Spacer mb="1.5rem" />
      <Grid container spacing={3} justifyContent="center">
        <Grid item md={7} xs={12}>
          <Box fontSize="25px" fontWeight="600" mb={2.5} lineHeight="1">
            COULISSANT
          </Box>
          <Box py={0.6}>
            L’offre de coulissants 54mm se compose de{" "}
            <b>
              {" "}
              plusieurs typologies coupe droite, coupe d'onglet. Ces différentes
              configurations offrent un design propre{" "}
            </b>
          </Box>
          <Box py={0.6} mb={2}>
            • Des formes courbes et des performances à la hauteur de vos
            exigences
          </Box>
          <Box py={0.6} mb={2}>
            • Pour le neuf et la rénovation
          </Box>
        </Grid>
      </Grid>
      <Spacer mb="1.5rem" />
      <Grid container spacing={3}>
        <StyledImageCenterWrapper item md={6} xs={12}>
          <img src={bannerImage02} className="ImageCenter"></img>
        </StyledImageCenterWrapper>
        <StyledImageCenterWrapper item md={6} xs={12}>
          <img src={bannerImage04} className="ImageCenter"></img>
        </StyledImageCenterWrapper>
      </Grid>
      <Spacer mb="1.5rem" />
      <Spacer mb="1.5rem" />
      <Grid container spacing={3}>
        <Grid item md={6} xs={12}>
          <Box fontSize="22px" fontWeight="600" mt = {10.5}  mb={2.5} lineHeight="1">
            UN UNIVERS DE SOLUTIONS POUR UNE OFFRE COMPLÈTE.
          </Box>
          <Box py={0.6} mb={2}>
            • Profondeur de gamme pour les poses en neuf et rénovation.
          </Box>
          <Box fontSize="22px" fontWeight="600"  mt = {10.5} mb={2.5} lineHeight="1">
            DES PERFORMANCES À LA HAUTEUR DE VOS EXIGENCES.
          </Box>
          <Box py={0.6} mb={2}>
            • Chariots autorisant des ouvrants jusqu’à 200 Kg/vtl.
          </Box>
          <Box py={0.6} mb={2}>
            • Performance optimale en 28 mm (coût / performance).
          </Box>
          <Box fontSize="22px" fontWeight="600" mb={2.5}  mt = {10.5} lineHeight="1">
            CONFIGURATIONS
          </Box>
          <Box py={0.6} mb={2}>
            • Fenêtres et porte-fenêtres, neuf et rénovation.
          </Box>
          <Box fontSize="20px" fontWeight="500" mb={2.5} lineHeight="1">
            • Châssis jusqu'à 3 rails et 6 vantaux, ensembles composés.
          </Box>
          <Box py={0.6} mb={2} pl={2}>
            • Coulissant jusqu’à 3 rails , 6 vantaux.
          </Box>
          <Box py={0.6} mb={2} pl={2}>
            • PGalandage jusqu’à 2 rails, 4 vantaux.
          </Box>
          <Box fontSize="20px" fontWeight="500" mb={2.5} lineHeight="1">
            • Plusieurs solutions de dormants :
          </Box>
          <Box py={0.6} mb={2} pl={2}>
            • Rails et roulettes inox.
          </Box>
          <Box py={0.6} mb={2} pl={2}>
            • Profilés coupe d'onglet avec tapées rapportées
          </Box>
          <Box py={0.6} mb={2} pl={2}>
            • Solution rénovation avec couvre joint intégré.
          </Box>
        </Grid>
        <Grid item md={6} xs={12}>
          <StyledImageCenterWrapper item md={8} xs={12}>
            <img src={bannerImage03} className="ImageCenter"></img>
          </StyledImageCenterWrapper>
          <StyledImageCenterWrapper item md={8} xs={12}>
            <img src={bannerImage05} className="ImageCenter"></img>
          </StyledImageCenterWrapper>
   
        </Grid>
      </Grid>
      <Spacer mb="1.5rem" />
      <Grid container spacing={3}></Grid>
      <Spacer mb="1.5rem" />
      <StyledBanner>
            <img src={bannerImage06} className="banner-image"></img>
          </StyledBanner>
      <StyledBanner>
        <img src={bannerImage07} className="banner-image"></img>
      </StyledBanner>
      <Spacer mb="1.5rem" />
    </Fragment>
  );
};
export default AluminiumRuptureCoulissant;
