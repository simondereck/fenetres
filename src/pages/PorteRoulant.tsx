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

const bannerImage00 =  process.env.REACT_APP_ASSETS_URL + "images/volet-roulant-porte-roulant/volet-roulant-porte-roulant00.jpg"; 
const bannerImage01 =  process.env.REACT_APP_ASSETS_URL + "images/volet-roulant-porte-roulant/volet-roulant-porte-roulant01.jpg";
const bannerImage02 =  process.env.REACT_APP_ASSETS_URL + "images/volet-roulant-porte-roulant/volet-roulant-porte-roulant02.jpg";
const bannerImage03 =  process.env.REACT_APP_ASSETS_URL + "images/volet-roulant-porte-roulant/volet-roulant-porte-roulant03.jpg";
const bannerImage04 =  process.env.REACT_APP_ASSETS_URL + "images/volet-roulant-porte-roulant/volet-roulant-porte-roulant04.jpg";
const bannerImage05 =  process.env.REACT_APP_ASSETS_URL + "images/volet-roulant-porte-roulant/volet-roulant-porte-roulant05.png";
const bannerImage06 =  process.env.REACT_APP_ASSETS_URL + "images/volet-roulant-porte-roulant/volet-roulant-porte-roulant06.png";

 
const PorteRoulant = () => {
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

  const StyledImageRight = styled("img")(() => ({
    width: isMobile ? "100%" : "30%",
  }));

  return (
    <Fragment>
      <StyledBanner>
        <img src={bannerImage00} className="banner-image"></img>
      </StyledBanner>
      <StyledBanner>
        <img src={bannerImage02} className="banner-image"></img>
      </StyledBanner>
      <StyledBanner>
        <img src={bannerImage01} className="banner-image"></img>
      </StyledBanner>
      <Spacer mb="1.5rem" /> 
      <Grid container spacing={3}>
        <StyledImageCenterWrapper item md={6} xs={12}>
          <img src={bannerImage03} className="ImageCenter"></img>
        </StyledImageCenterWrapper>
        <Grid item md={6} xs={12}>
          <Box fontSize="25px" fontWeight="600" mb={2.5} lineHeight="1">
            CONFORT
          </Box>
          <Box py={0.6}>
          Nos portes roulantes sont assemblées avec des lames 
          aluminium double paroi, injectées de mousse. Ces 
          matériaux sont légers, isolants et très robustes. 
          Elles combinent ainsi facteurs d’isolation tout en 
          atténuant les bruits extérieurs. 
          </Box>
          <Box py={0.6} mb={2} >
          Grâce à son faible encombrement, une porte enroulable 
          Gararol® vous libère de l’espace; pratique pour votre stockage.  
          </Box> 

          <Box fontSize="25px" fontWeight="600" mb={2.5} lineHeight="1">
          SÉCURITÉ
          </Box>
          <Box py={0.6} mb={2}>
          Nos portes roulantes sont pourvues d’un caisson en 
          standard. Le caisson offre de l’esthétique à votre porte 
          et il n’y a pas de danger de pincement (la sécurité des doigts). 
          Une porte enroulable sans coffre est aussi disponible, dans ce cas il faut intégrer la porte à 
          l’intérieur de la façade. 
          </Box>
          <Box py={0.6} mb={2}>
          La sécurité de verrouillage assure que la porte ne tombe pas quand il y a un défaillance du moteur.
          La manœuvre de secours assure l’ouverture et la ermeture de votre porte en cas de panne de courant;  
          a longueur de la manivelle est adaptée à la dimension de votre porte.  
          </Box>
          <Box py={0.6} mb={2}>
          La protection anti-relevage prévue dans nos portes enroulables vous garantit une sécurité renforcée. 
          Le montage des ressorts de sécurité qui assurent la liaison entre le tablier et l’axe empêche tout intrus de 
          relever le tablier et de pénétrer chez vous.
          </Box>
          <Box py={0.6} mb={2}>
          De plus, les portes Gararol® peuvent également être pourvues du système barre palpeuse des capteurs montés dans le joint néoprène de la lame 
          finale assurent la détection d'obstacles.Le stabiler est immédiatement stoppé et remonte, libérant à nouveau le passage en toute sécurité. 
          </Box> 
          <Box py={0.6} mb={2}>
          L’option cellules photovoltaïques dans la lame finale ou coulisses est également disponible.Ils forment un rideau de lumière qui peut détecter les obstacles.  
          </Box> 
        </Grid>
      </Grid>
      <StyledBanner>
        <img src={bannerImage02} className="banner-image"></img>
      </StyledBanner>
      <Spacer mb="1.5rem" /> 
      <Grid container spacing={3}>
      <Grid item md={6} xs={12}> 
          <Box py={0.6}>
          Le choix d’une porte roulante pour un gain de place. 
          </Box>
          <Box py={0.6}>
          Une porte est équipée d’un caisson aluminium en standard.Nous livrons la porte sans coffre si nécessaire.
          </Box>
          <Box py={0.6}>
          Tous les caissons sont fabriqués en aluminium.  
          </Box> 
          <Box py={0.6} mb={2.5}>
          Le tablier est assemblé avec des ames en aluminium
          </Box> 
          <Box fontSize="25px" fontWeight="600" mb={2.5} lineHeight="1">
          Applications
          </Box>
          <Box py={0.6}  >
          Construction neuves (maison passives, BBC,constructions à ossature bois,etc …) 
          </Box>
          <Box py={0.6} >
          Rénovation
          </Box>
          <Box py={0.6}  >
          Montage:
          </Box>
          <Box py={0.6} pl={ 1.5} >
             Caisson en applique, en le façade ou montage à l’intérieur.
          </Box>  
        </Grid>
        <Grid item md={6} xs={12}> 
          <Box py={0.6}>
          Le profile BP77 confère à notre le meilleur enroulement et robustesse.
          </Box>
          <Box py={0.6}>
          Grandes dimensions:
          </Box>
          <Box py={0.6}>
          BP77 jusqu’à 15m²
          </Box> 
          <Box py={0.6} mb={2.5}>
          BP77FE (variante en acier galvanisé) jusqu’à 20m²
          </Box> 
          <Box fontSize="25px" fontWeight="600" mb={2.5} lineHeight="1">
          Exécution
          </Box>
          <Box py={0.6}  >
          Finition: Casson, coulisses,lame finale et tablier sont disponibles dans toutes les coloris RAL.
          </Box>
          <Box py={0.6} >
          Commande: Standard électrique (motorisation Gaposa ou PMAC)
          </Box> 
        </Grid>
      </Grid>
      <Spacer mb="1.5rem" /> 
      <StyledBanner>
        <img src={bannerImage04} className="banner-image"></img>
      </StyledBanner>
      <Spacer mb="1.5rem" /> 
      <Grid container spacing={3}>
        <StyledImageCenterWrapper item md={6} xs={12}>
          <img src={bannerImage05} className="ImageCenter"></img>
        </StyledImageCenterWrapper>
        <StyledImageCenterWrapper item md={6} xs={12}>
          <img src={bannerImage06} className="ImageCenter"></img>
        </StyledImageCenterWrapper>
      </Grid>
    </Fragment>
  );
};
export default PorteRoulant;
