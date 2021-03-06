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
          les fa??ades,les portes et les v??randa des magasins ou des restaurents.
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
            Les diff??rentes profil??s Aluminium permettent la construction de
            diverse ch??ssis aux conceptions architecturales vari??es. La grande
            vari??t?? de combinaisons offerte par ces syst??mes laisse libre cours
            ?? la cr??ativit?? des architectes pour la conception d???ouvrages les
            plus diversifi??s. Sur la base de syst??mes homologu??s, il est
            possible de concr??tiser quasiment tous vos souhaits.
          </Box>
          <Box py={0.6} mb={2}>
            ??? Ch??ssis fixe vitr??
          </Box>
          <Box py={0.6} mb={2}>
            ??? Porte un vantail ou deux vantaux sur paumelles avec serrure
            multipoints
          </Box>
          <Box py={0.6} mb={2}>
            ??? Porte sur pivots encastr?? avec penture haute et basse
          </Box>
          <Box py={0.6} mb={2}>
            ??? Porte repliable avec ou sans rail en applique
          </Box>
          <Box py={0.6} mb={2}>
            ??? Porte avec SAS d???entr??e
          </Box>
          <Box py={0.6} mb={2}>
            ??? Porte sortie de secours avec serrure antipanique et ou cr??mone
            pompier
          </Box>
          <Box py={0.6} mb={2}>
            ??? Porte entr??e d???immeuble avec g??che ??lectrique ou bandeau ventouse
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
            Solution compl??te pour le neuf et la r??novation, elle s'int??gre
            aussi bien dans les b??timents d'habitation et non r??sidentiel.
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
