import {
  Box, 
  useMediaQuery, 
  useTheme, 
  styled,
  Grid, 
} from "@mui/material";

import { Fragment, useEffect } from "react";
import Spacer from "./Spacer"; 
import useWindowDimensions from "../utils/getWindowsDimensions";

const bannerImage0 =  process.env.REACT_APP_ASSETS_URL +"images/pvc-rehau-frappe/pvc-rehau-frappe0.jpg"; 
const bannerImage01 = process.env.REACT_APP_ASSETS_URL +"images/pvc-rehau-frappe/pvc-rehau-frappe01.jpg";
const bannerImage02 = process.env.REACT_APP_ASSETS_URL +"images/pvc-rehau-frappe/pvc-rehau-frappe02.jpg";
const bannerImage03 = process.env.REACT_APP_ASSETS_URL +"images/pvc-rehau-frappe/pvc-rehau-frappe03.jpg";
const bannerImage04 = process.env.REACT_APP_ASSETS_URL +"images/pvc-rehau-frappe/pvc-rehau-frappe04.jpg";
const bannerImage05 = process.env.REACT_APP_ASSETS_URL + "images/pvc-rehau-frappe/pvc-rehau-frappe05.jpg"; 

const PVCRehauFrappe = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { height, width } = useWindowDimensions();
  const imageHeight = Math.round((width * 10) / 16);
  const imageWidth = isMobile? width*0.9 : width ;
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
        <img src={bannerImage0} className="banner-image"></img>
      </StyledBanner>
      <Spacer mb="1.5rem" />
      <Grid container spacing={3}>
        <Grid item md={6} xs={12}>
          <Box py={0.6} fontWeight="500">
          Préservez les ressources tout en économisant l’énergie Alors que les
            matières premières se raréﬁent et que les coûts de chauffage sont en
            augmentation constante, l’utilisation optimisée de l’énergie est
            l’une des premières préoccupations au quotidien.
          </Box>
        </Grid>
        <Grid item md={6} xs={12}>
          <Box py={0.6} fontWeight="500">
            Avec REHAU Aralya-Design, vous optez pour une nouvelle génération de
            fenêtre et de porte d’entrée. 
            
          </Box>
          <Box py={0.6} fontWeight="500" sx = {{color:'#D1356F'}}> 
            Elles sont éligibles au crédit
            d’impôts en rénovation et constituent une véritable référence pour
            la mise en œuvre dans les Bâtiments Basse Consommation, THPE,
            Maisons Passives et Maisons à énergie positive.
          </Box>
          
        </Grid>
      </Grid>
      <Spacer mb="1.5rem" />
      <StyledBanner>
        <img src={bannerImage01} className="banner-image"></img>
      </StyledBanner>
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
          <Box fontSize="25px" fontWeight="600" mb={2.5} lineHeight="1" sx = {{color:'#D1356F'}}> 
            UN DESIGN QUI S’AFFICHE{" "}
          </Box>
          <Box py={0.6} fontSize="22px" fontWeight="600">
            UN DESIGN CLASSIQUE OU CONTEMPORAIN, RICHE EN COULEURS
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
        <Grid item md={6} xs={12}>
          <Box py={0.6} fontWeight="700">
            Une esthétique classique ou contemporaine
          </Box>
          <Box py={0.6}  >
          Les formes droites ou arrondies de la gamme de proﬁlés REHAU Aralya-Design apportent une esthétique classique ou contemporaine à 
          tous les types de constructions.
          </Box>
          <Box py={0.6}  >
          De par ses élégantes lignes réduites, les menuiseries proﬁtent d’un large clair de vitrage pour laisser entrer un maximum de lumière. 
          </Box>
          <Spacer mb="1.5rem" />
          <Spacer mb="1.5rem" />
          <Box py={0.6} fontWeight="700">
             Mettez l’accent sur les formes et couleurs
          </Box>
          <Box py={0.6}  >
          Avec les coloris proposés par REHAU, vous pouvez personnaliser vos menuiseries en fonction de vos goûts et de vos envies
          L’association parfaite du PVC et de la couleur vous donnera la possibilité de créer différents styles et ambiances pour votre habitation :
          du très avant-gardiste en passant par les habitations de haut standing jusqu’aux constructions traditionnelles.

          </Box>
          <Box py={0.6}  >
          Nous proposons différentes techniques pour donner des couleurs à vos proﬁlés - laquage avec une laque, teinte dans la masse du proﬁlé 
          lors de la fabrication en usine ou application d’un ﬁlm décoratif de plaxage en usine.
           
          </Box>
          <Box py={0.6} fontWeight="700">
          Voici un petit extrait des ﬁlms de plaxage disponibles dans la palette des 70 coloris homologués sous Avis Technique :
          </Box>
        </Grid>
      
        </Grid> 
    </Fragment>
  );
};
export default PVCRehauFrappe;
