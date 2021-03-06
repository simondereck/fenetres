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
            Notre gamme est ??quip??e d???un moteur intelligent qui assure la bonne
            tension de la toile, m??me apr??s des ann??es d???utilisation. Les stores
            screen sont r??sistant au vent gr??ce ?? la technologie ZIP ce qui
            garantit la tension de la toile, sans plis. De plus, la toile est
            enti??rement prise dans la finale, plus aucune soudure ou coutrue
            n'est visible , Avec un large choix de toiles, de nombreuses options
            de couleur, diff??rentes formes du caisson et adaptable ?? chaque
            situation de montages, nos stores screen s???accordent parfaitement ??
            chaque style de maison.
          </Box>
        </Grid>
        <StyledImageCenterWrapper item md={12} xs={12}>
          <img src={bannerImage05} className="ImageCenter"></img>
        </StyledImageCenterWrapper> 
        <Grid item md={12} xs={12}>
          <Box fontSize="25px" fontWeight="600" mb={2.5} lineHeight="1">
            Economie d?????nergie
          </Box>
          <Box py={0.6}>
            R??alisez aussi des ??conomies d?????nergie!Gr??ce aux caract??ristiques
            techniques des toiles et au contr??le personnalis??, le store screen
            rend votre int??rieur plus agr??able, et par ortes chaleurs, vous
            conservez la fraicheur de votre int??rieur tout en faisant l?????conomie
            d?????nergie ??lectrique: moins de climatisation! En hiver, vous faites
            barri??re au froid, votre maison reste agr??able. Vous participez ??
            l???am??lioration de l???habitat et ses performances en r??duisant la
            facture ??nerg??tique; une ??tape significative dans le cadres des
            r??glementatios en cours (p.ex. PEB en Belgique, RT 2012 en France???)
          </Box>
          <Box py={0.6}>
            Avez-vous d??j?? pens?? ?? un moteur ??nergie solaire? Choisir l?????nergie
            solaire a beaucoup d???avantages: ??conomie d'??nergie, efficace et
            fiable. En plus c'est sans fil et donc facile ?? installer.
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
