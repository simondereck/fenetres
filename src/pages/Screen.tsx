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

const bannerImage01 = process.env.REACT_APP_ASSETS_URL + "images/screen/screen01.jpg";
const bannerImage02 = process.env.REACT_APP_ASSETS_URL + "images/screen/screen02.jpg";
const bannerImage03 = process.env.REACT_APP_ASSETS_URL + "images/screen/screen03.jpg";
const bannerImage04 = process.env.REACT_APP_ASSETS_URL + "images/screen/screen04.jpg";
const bannerImage05 = process.env.REACT_APP_ASSETS_URL + "images/screen/screen05.jpg";
const bannerImage06 = process.env.REACT_APP_ASSETS_URL + "images/screen/screen06.jpg";
const bannerImage07 = process.env.REACT_APP_ASSETS_URL + "images/screen/screen07.jpg";
const bannerImage08 = process.env.REACT_APP_ASSETS_URL + "images/screen/screen08.jpg";
const bannerImage09 = process.env.REACT_APP_ASSETS_URL + "images/screen/screen09.png"; 
const bannerImage10 = process.env.REACT_APP_ASSETS_URL + "images/screen/screen10.png"; 
const bannerImage11 = process.env.REACT_APP_ASSETS_URL + "images/screen/screen11.png"; 
const bannerImage12 = process.env.REACT_APP_ASSETS_URL + "images/screen/screen12.png";



const Screen = () => {
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
        <img src={bannerImage01} className="banner-image"></img>
      </StyledBanner>
      <StyledBanner>
        <img src={bannerImage02} className="banner-image"></img>
      </StyledBanner>
      <StyledBanner>
        <img src={bannerImage03} className="banner-image"></img>
      </StyledBanner>
      <Spacer mb="1.5rem" />
      <Grid container spacing={3}> 
        <StyledImageCenterWrapper item md={12} xs={12}>
          <img src={bannerImage04} className="ImageCenter"></img>
        </StyledImageCenterWrapper> 
        <Grid item md={12} xs={12}>
          <Box fontSize="25px" fontWeight="600" mb={2.5} lineHeight="1">
            DESIGN
          </Box>
          <Box py={0.6}>
            Notre gamme est équipée d’un moteur intelligent qui assure la bonne
            tension de la toile, même après des années d’utilisation. Les stores
            screen sont résistant au vent grâce à la technologie ZIP ce qui
            garantit la tension de la toile, sans plis. De plus, la toile est
            entièrement prise dans la finale, plus aucune soudure ou coutrue
            n'est visible , Avec un large choix de toiles, de nombreuses options
            de couleur, différentes formes du caisson et adaptable à chaque
            situation de montages, nos stores screen s’accordent parfaitement à
            chaque style de maison.
          </Box>
        </Grid>
        <StyledImageCenterWrapper item md={12} xs={12}>
          <img src={bannerImage05} className="ImageCenter"></img>
        </StyledImageCenterWrapper> 
        <Grid item md={12} xs={12}>
          <Box fontSize="25px" fontWeight="600" mb={2.5} lineHeight="1">
            Economie d’énergie
          </Box>
          <Box py={0.6}>
            Réalisez aussi des économies d’énergie!Grâce aux caractéristiques
            techniques des toiles et au contrôle personnalisé, le store screen
            rend votre intérieur plus agréable, et par ortes chaleurs, vous
            conservez la fraicheur de votre intérieur tout en faisant l’économie
            d’énergie électrique: moins de climatisation! En hiver, vous faites
            barrière au froid, votre maison reste agréable. Vous participez à
            l’amélioration de l’habitat et ses performances en réduisant la
            facture énergétique; une étape significative dans le cadres des
            réglementatios en cours (p.ex. PEB en Belgique, RT 2012 en France…)
          </Box>
          <Box py={0.6}>
            Avez-vous déjà pensé à un moteur énergie solaire? Choisir l’énergie
            solaire a beaucoup d’avantages: économie d'énergie, efficace et
            fiable. En plus c'est sans fil et donc facile à installer.
          </Box>
        </Grid> 
        <StyledImageCenterWrapper item md={12} xs={12}>
          <img src={bannerImage06} className="ImageCenter"></img>
        </StyledImageCenterWrapper>
        <StyledImageCenterWrapper item md={12} xs={12}>
          <img src={bannerImage07} className="ImageCenter"></img>
        </StyledImageCenterWrapper>
        <StyledImageCenterWrapper item md={12} xs={12}>
          <img src={bannerImage08} className="ImageCenter"></img>
        </StyledImageCenterWrapper> 
        <StyledImageCenterWrapper item md={6} xs={12}>
          <img src={bannerImage09} className="ImageCenter"></img>
        </StyledImageCenterWrapper>
        <StyledImageCenterWrapper item md={6} xs={12}>
          <img src={bannerImage10} className="ImageCenter"></img>
        </StyledImageCenterWrapper>
        <StyledImageCenterWrapper item md={6} xs={12}>
          <img src={bannerImage11} className="ImageCenter"></img>
        </StyledImageCenterWrapper>
        <StyledImageCenterWrapper item md={6} xs={12}>
          <img src={bannerImage12} className="ImageCenter"></img>
        </StyledImageCenterWrapper>
      </Grid>
    </Fragment>
  );
};
export default Screen;
