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

const bannerImage01 =  process.env.REACT_APP_ASSETS_URL +  "images/aluminium-profile-rupture-frappe/aluminium-profile-rupture-frappe01.jpg"
const bannerImage02 =  process.env.REACT_APP_ASSETS_URL +  "images/aluminium-profile-rupture-frappe/aluminium-profile-rupture-frappe02.jpg"
const bannerImage03 =  process.env.REACT_APP_ASSETS_URL +  "images/aluminium-profile-rupture-frappe/aluminium-profile-rupture-frappe03.png"
const bannerImage04 =  process.env.REACT_APP_ASSETS_URL +  "images/aluminium-profile-rupture-frappe/aluminium-profile-rupture-frappe04.jpg"
const bannerImage05 =  process.env.REACT_APP_ASSETS_URL +  "images/aluminium-profile-rupture-frappe/aluminium-profile-rupture-frappe05.jpg"
  


const AluminiumRuptureFrappe = () => {
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
      <Grid container spacing={3}> 
        <Grid item md={12} xs={12}>
          <Box fontSize="25px" fontWeight="600" mb={2.5} lineHeight="1">
          DESCRIPTION PRODUIT：
          </Box>
          <Box py={0.6}>
          La gamme de frappe est une incontournable de vos projets d'habitats collectifs comme résidentiels.
          </Box>
          <Box py={0.6} mb={2} >
          Son large choix de profilés (coupe droite et coupe d'onglet) permet une très grande modularité.
          </Box>  
        </Grid>
      </Grid>
     <Spacer mb="1.5rem" />
      <Grid container spacing={3}>
        <StyledImageCenterWrapper item md={6} xs={12}>
          <img src={bannerImage02} className="ImageCenter"></img>
        </StyledImageCenterWrapper>
        <StyledImageCenterWrapper item md={6} xs={12}>
          <img src={bannerImage03} className="ImageCenter"></img>
        </StyledImageCenterWrapper> 
      </Grid> 
      <Spacer mb="1.5rem" />
      <Grid container spacing={3}> 
        <Grid item md={12} xs={12}>
          <Box fontSize="25px" fontWeight="600" mb={2.5} lineHeight="1">
          CARACTÉRISTIQUES：
          </Box>
          <Box py={0.6}>
          Cette solution garantit un niveau de performances conforme aux exigences
d'isolation des constructions neuves et travaux de rénovation (CITE).
          </Box>
          <Box py={0.6} mb={2} >
          Cette solution de frappe se compose d'une offre complète de profilés
et d'accessoires, pour une grande polyvalence.
          </Box> 
          <Box py={0.6} mb={2} >
          Cette frappe aluminium à rupture de pont thermique offre une excellente
isolation thermique et un niveau d'étanchéité optimal : A4. Grâce à différentes
options d'accessoires et de points de fermeture, la Reva 54 allie confort et sécurtité.
Formes traditionnelles
          </Box>  
        </Grid>
      </Grid>
      <Spacer mb="1.5rem" />
      <StyledBanner>
        <img src={bannerImage04} className="banner-image"></img>
      </StyledBanner>
      <Spacer mb="1.5rem" />
      <Grid container spacing={3}> 
        <Grid item md={12} xs={12}>
          <Box fontSize="25px" fontWeight="600" mb={2.5} lineHeight="1">
          APPLICATIONS：
          </Box>
          <Box py={0.6}>
          Solution complète pour le neuf et la rénovation, elle s'intégre aussi bien dans les bâtiments d'habitation et non résidentiel,
et notamment les projets PMR grâce à une solution de seuil plat RPT.
          </Box> 
        </Grid>
      </Grid>
      <Spacer mb="1.5rem" />
      <StyledBanner>
        <img src={bannerImage05} className="banner-image"></img>
      </StyledBanner>
    </Fragment>
  );
};
export default AluminiumRuptureFrappe;
