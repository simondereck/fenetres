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

const bannerImage01 =  process.env.REACT_APP_ASSETS_URL + "images/pvc-gealan-frappe/pvc-gealan-frappe-1.jpg";
const bannerImage02 =  process.env.REACT_APP_ASSETS_URL + "images/pvc-gealan-frappe/pvc-gealan-frappe-2.jpg";
const bannerImage03 =  process.env.REACT_APP_ASSETS_URL + "images/pvc-gealan-frappe/pvc-gealan-frappe-3.jpg";
const bannerImage04 =  process.env.REACT_APP_ASSETS_URL + "images/pvc-gealan-frappe/pvc-gealan-frappe-4.jpg";
const bannerImage05 =  process.env.REACT_APP_ASSETS_URL + "images/pvc-gealan-frappe/pvc-gealan-frappe-5.png";

const PVCGealanFrappe = () => {
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
  return (
    <Fragment>
      <StyledBanner>
        <img src={bannerImage01} className="banner-image"></img>
      </StyledBanner>
      <Spacer mb="1.5rem" />
      <Grid container spacing={3}>
        <Grid item md={6} xs={12}>
          <Box fontSize="25px" fontWeight="600" mb={2.5} lineHeight="1">
            GEALAN
          </Box>
          <Box py={0.6} fontWeight="600">
            Une gamme complète
          </Box>
          <Box py={0.6}>
            La gamme S8000 - 74 mm offre des solutions complètes pour tous les
            types de pose : en neuf comme en rénovation.
          </Box>
        </Grid>
        <Grid item md={6} xs={12}>
          <Box py={0.6} fontWeight="600">
            Une stabilité à toute épreuve
          </Box>
          <Box py={0.6} mb={2}>
            Les géométries externes et internes de nos profilés et l'épaisseur
            de leurs parois leur confèrent une grande stabillité.De plus, la
            chambre principale des profilés S8000 permet d'accueillir des
            renforts de haute qualité en acier galvanisé Z275 selon les besoins.
          </Box>
        </Grid>
      </Grid> 
      <StyledBanner>
        <img src={bannerImage05} className="banner-image"></img>
      </StyledBanner>
      <Spacer mb="1.5rem" /> 
      <Grid container spacing={3}>
        <StyledImageCenterWrapper item md={6} xs={12}>
          <img src={bannerImage03} className="ImageCenter"></img>
        </StyledImageCenterWrapper>
        <Grid item md={6} xs={12}>
          <Box fontSize="25px" fontWeight="600" mb={2.5} lineHeight="1">
            Une étanchéité sans faille
          </Box>
          <Box py={0.6}>
            Les profilés S8000 IQ sont équipés d’un système de joints
            tri-matières ou de joints co-extrudés à la pointe de la technologie.
            Les joints sont soudés dans les angles de fenêtres pour garantir une
            étanchéité maximale de vos menuiseries. Ces profilés sont basés sur
            un systèmes de 5 ou 6 chambres.{" "}
          </Box>
          <Box py={0.6}>
            Ces chambres agissent comme autant de barrières contre les échanges
            thermiques entre l'intérieur et l'extérieur. L'épaisseur des parois
            de nos profilés répond aux critères de qualité de marchés
            extrêmement exigeants : une haute résistance mécanique des
            menuiseries est ainsi assurée.
          </Box>
        </Grid>
      </Grid>
    </Fragment>
  );
};
export default PVCGealanFrappe;
