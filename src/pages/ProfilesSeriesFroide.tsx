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

const bannerImage01 =  process.env.REACT_APP_ASSETS_URL +  "images/profiles-series-foide/profiles-series-froide01.jpg";
const bannerImage02 =  process.env.REACT_APP_ASSETS_URL +  "images/profiles-series-foide/profiles-series-froide02.png";
const bannerImage03 =  process.env.REACT_APP_ASSETS_URL +  "images/profiles-series-foide/profiles-series-froide03.png";
const bannerImage04 =  process.env.REACT_APP_ASSETS_URL +  "images/profiles-series-foide/profiles-series-froide04.png";
const bannerImage05 =  process.env.REACT_APP_ASSETS_URL +  "images/profiles-series-foide/profiles-series-froide05.png";
const bannerImage06 =  process.env.REACT_APP_ASSETS_URL +  "images/profiles-series-foide/profiles-series-froide06.png";



const ProfilesSeriesFroide = () => {
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
      <Box
        py={0.6}
        sx={{
          textAlign: "center",
        }}
      >
        <Box fontSize="20px" fontWeight="600" lineHeight="1.2">
          IFENETRES
        </Box>
        <Box lineHeight="1.2">utilise les profiles serie froide pour</Box>
        <Box lineHeight="1.2">
          les façades,les portes et les véranda des magasins ou des restaurents.
        </Box>
      </Box>
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
      <Grid container spacing={3} justifyContent="center">
        <Grid
          item
          md={7}
          xs={12}
          sx={{
            textAlign: "center",
          }}
        >
          <Box fontSize="25px" fontWeight="600" mb={2.5} lineHeight="1">
            DESCRIPTION :
          </Box>
          <Box py={0.6}>
            Les différentes profilés Aluminium permettent la construction de
            diverse châssis aux conceptions architecturales variées. La grande
            variété de combinaisons offerte par ces systèmes laisse libre cours
            à la créativité des architectes pour la conception d’ouvrages les
            plus diversifiés. Sur la base de systèmes homologués, il est
            possible de concrétiser quasiment tous vos souhaits.
          </Box>
          <Box py={0.6} mb={2}>
            • Châssis fixe vitré
          </Box>
          <Box py={0.6} mb={2}>
            • Porte un vantail ou deux vantaux sur paumelles avec serrure
            multipoints
          </Box>
          <Box py={0.6} mb={2}>
            • Porte sur pivots encastré avec penture haute et basse
          </Box>
          <Box py={0.6} mb={2}>
            • Porte repliable avec ou sans rail en applique
          </Box>
          <Box py={0.6} mb={2}>
            • Porte avec SAS d’entrée
          </Box>
          <Box py={0.6} mb={2}>
            • Porte sortie de secours avec serrure antipanique et ou crémone
            pompier
          </Box>
          <Box py={0.6} mb={2}>
            • Porte entrée d’immeuble avec gâche électrique ou bandeau ventouse
          </Box>
        </Grid>
      </Grid>
      <Spacer mb="1.5rem" />
      <Grid container spacing={3} justifyContent="center">
        <StyledImageCenterWrapper item md={10} xs={12}>
          <img src={bannerImage05} className="ImageCenter"></img>
        </StyledImageCenterWrapper>
      </Grid>
      <Spacer mb="1.5rem" />
      <Grid container spacing={3} justifyContent="center">
        <Grid item md={8} xs={12}>
          <Box
            py={0.6}
            fontWeight ={600}
            sx={{
              textAlign: "center",
            }}
          >
            Solution complète pour le neuf et la rénovation, elle s'intégre
            aussi bien dans les bâtiments d'habitation et non résidentiel.
          </Box>
        </Grid>
      </Grid>
      <Spacer mb="1.5rem" />
      <Grid container spacing={3} justifyContent="center">
        <StyledImageCenterWrapper item md={10} xs={12}>
          <img src={bannerImage04} className="ImageCenter"></img>
        </StyledImageCenterWrapper>
      </Grid> 
      <Spacer mb="1.5rem" />
      <StyledBanner>
        <img src={bannerImage06} className="banner-image"></img>
      </StyledBanner>
    </Fragment>
  );
};
export default ProfilesSeriesFroide;
