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
          Nos portes roulantes sont assembl??es avec des lames 
          aluminium double paroi, inject??es de mousse. Ces 
          mat??riaux sont l??gers, isolants et tr??s robustes. 
          Elles combinent ainsi facteurs d???isolation tout en 
          att??nuant les bruits ext??rieurs. 
          </Box>
          <Box py={0.6} mb={2} >
          Gr??ce ?? son faible encombrement, une porte enroulable 
          Gararol?? vous lib??re de l???espace; pratique pour votre stockage.  
          </Box> 

          <Box fontSize="25px" fontWeight="600" mb={2.5} lineHeight="1">
          S??CURIT??
          </Box>
          <Box py={0.6} mb={2}>
          Nos portes roulantes sont pourvues d???un caisson en 
          standard. Le caisson offre de l???esth??tique ?? votre porte 
          et il n???y a pas de danger de pincement (la s??curit?? des doigts). 
          Une porte enroulable sans coffre est aussi disponible, dans ce cas il faut int??grer la porte ?? 
          l???int??rieur de la fa??ade. 
          </Box>
          <Box py={0.6} mb={2}>
          La s??curit?? de verrouillage assure que la porte ne tombe pas quand il y a un d??faillance du moteur.
          La man??uvre de secours assure l???ouverture et la ermeture de votre porte en cas de panne de courant;  
          a longueur de la manivelle est adapt??e ?? la dimension de votre porte.  
          </Box>
          <Box py={0.6} mb={2}>
          La protection anti-relevage pr??vue dans nos portes enroulables vous garantit une s??curit?? renforc??e. 
          Le montage des ressorts de s??curit?? qui assurent la liaison entre le tablier et l???axe emp??che tout intrus de 
          relever le tablier et de p??n??trer chez vous.
          </Box>
          <Box py={0.6} mb={2}>
          De plus, les portes Gararol?? peuvent ??galement ??tre pourvues du syst??me barre palpeuse des capteurs mont??s dans le joint n??opr??ne de la lame 
          finale assurent la d??tection d'obstacles.Le stabiler est imm??diatement stopp?? et remonte, lib??rant ?? nouveau le passage en toute s??curit??. 
          </Box> 
          <Box py={0.6} mb={2}>
          L???option cellules photovolta??ques dans la lame finale ou coulisses est ??galement disponible.Ils forment un rideau de lumi??re qui peut d??tecter les obstacles.  
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
          Le choix d???une porte roulante pour un gain de place. 
          </Box>
          <Box py={0.6}>
          Une porte est ??quip??e d???un caisson aluminium en standard.Nous livrons la porte sans coffre si n??cessaire.
          </Box>
          <Box py={0.6}>
          Tous les caissons sont fabriqu??s en aluminium.  
          </Box> 
          <Box py={0.6} mb={2.5}>
          Le tablier est assembl?? avec des ames en aluminium
          </Box> 
          <Box fontSize="25px" fontWeight="600" mb={2.5} lineHeight="1">
          Applications
          </Box>
          <Box py={0.6}  >
          Construction neuves (maison passives, BBC,constructions ?? ossature bois,etc ???) 
          </Box>
          <Box py={0.6} >
          R??novation
          </Box>
          <Box py={0.6}  >
          Montage:
          </Box>
          <Box py={0.6} pl={ 1.5} >
             Caisson en applique, en le fa??ade ou montage ?? l???int??rieur.
          </Box>  
        </Grid>
        <Grid item md={6} xs={12}> 
          <Box py={0.6}>
          Le profile BP77 conf??re ?? notre le meilleur enroulement et robustesse.
          </Box>
          <Box py={0.6}>
          Grandes dimensions:
          </Box>
          <Box py={0.6}>
          BP77 jusqu????? 15m??
          </Box> 
          <Box py={0.6} mb={2.5}>
          BP77FE (variante en acier galvanis??) jusqu????? 20m??
          </Box> 
          <Box fontSize="25px" fontWeight="600" mb={2.5} lineHeight="1">
          Ex??cution
          </Box>
          <Box py={0.6}  >
          Finition: Casson, coulisses,lame finale et tablier sont disponibles dans toutes les coloris RAL.
          </Box>
          <Box py={0.6} >
          Commande: Standard ??lectrique (motorisation Gaposa ou PMAC)
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
