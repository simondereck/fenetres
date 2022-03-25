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
const bannerImage01 =  process.env.REACT_APP_ASSETS_URL + "images/fenetre-en-pvc/fenetre-en-pvc-01.jpg";
const bannerImage02 =  process.env.REACT_APP_ASSETS_URL + "images/fenetre-en-pvc/fenetre-en-pvc-02.jpg";
const bannerImage03 =  process.env.REACT_APP_ASSETS_URL + "images/fenetre-en-pvc/fenetre-en-pvc-03.jpg";
const bannerImage04 =  process.env.REACT_APP_ASSETS_URL + "images/fenetre-en-pvc/fenetre-en-pvc-04.jpg";

const FenetreEnPVC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { height, width } = useWindowDimensions();
  const imageHeight = Math.round((width * 10) / 16);
  const imageWidth = width;
  const StyledBanner = styled(Box)(() => ({
    "& .banner-image": {
      height: "auto",
      width: imageWidth,
      maxWidth: "100%",
    },
  }));
  const StyledImageCenterWrapper = styled(Grid)(() => ({
    textAlign: "center",
    alignSelf: "center",
    "& .ImageCenter": {
      width: "90%",
    },
  }));
  const StyledImageCenterWrapper1 = styled(Grid)(() => ({
    textAlign: "center",
    alignSelf: "center",
    "& .ImageCenter": {
      width: "70%",
    },
  }));
  const StyledTextListDescription = styled(Grid)(() => ({
    alignItems: "center",
    justifyContent: "center",
    "& .desc-item": {
      "& span": {
        color: "#264685",
      },
    },
  }));
  const StyledTextListDescriptionColor = styled(Grid)(() => ({
    alignItems: "center",
    justifyContent: "center",
    background: "#5A707E",
    padding: "20px",
    margin:"0px",
    "& .desc-item": {
      "& span": {
        color: "#264685",
      },
    },
  }));
  return (
    <Fragment>
      <StyledBanner>
        <img src={bannerImage01} className="banner-image"></img>
      </StyledBanner>
      <Spacer mb="1.5rem" />
      <StyledTextListDescription container spacing={3}>
        <Grid item md={12} xs={12}  >
          <Box fontSize="25px" fontWeight="600" mb={2.5} lineHeight="1" ml={ isMobile?0 :14}>
            Choisir le PVC, c’est faire le choix de :
          </Box>
          <Box py={0.6} className="desc-item" ml={isMobile?0 :24}>
            • <span>l’isolation</span> : exceptionnelles performances thermiques
            et acoustiques pour la menuiserie
          </Box>
          <Box py={0.6} className="desc-item" ml={isMobile?0 :24}>
            • <span> la durabilité </span>: déjà plus de 50 ans de satisfaction
            client dans son usage appliqué aux fenêtres
          </Box>
          <Box py={0.6} className="desc-item" ml={isMobile?0 :24}>
            • <span>la solidité</span> : très bonne résistance mécanique
          </Box>
          <Box py={0.6} className="desc-item" ml={isMobile?0 :24}>
            • <span>la facilité d’entretien</span> : simple d’entretien, une
            éponge humide suffit
          </Box>
          <Box py={0.6} className="desc-item" ml={isMobile?0 :24}>
            • <span>la recyclabilité</span> : le PVC est 100% recyclable dans la
            même application en conservant toutes ses qualités
          </Box>
          <Box py={0.6} className="desc-item" ml={isMobile?0 :24}>
            • <span>la sécurité incendie </span> :excellente résistance au feu
          </Box>
          <Box py={0.6} className="desc-item" mb={2.5} ml={isMobile?0 :24}>
            • <span> l’économie</span> : excellent rapport performance / prix
          </Box>
        </Grid>
      </StyledTextListDescription>
      <Spacer mb="1.5rem" />
      <Grid container spacing={3}>
        <StyledImageCenterWrapper item md={6} xs={12}>
          <img src={bannerImage02} className="ImageCenter"></img>
        </StyledImageCenterWrapper>
        <StyledImageCenterWrapper1 item md={6} xs={12} >
          <img src={bannerImage03} className="ImageCenter" ></img>
        </StyledImageCenterWrapper1>
      </Grid>
      <Spacer mb="1.5rem" />  
      <StyledTextListDescriptionColor container spacing={3}>
        <Grid item md={12} xs={12}>
          <Box
            fontSize="25px"
            fontWeight="600"
            mb={2.5}
            lineHeight="1"
            color="white"
          >
            Un profilé PVC , c'est quoi?
          </Box>
          <Box py={0.6} className="desc-item" color="white">
            Le PVC est obtenu à partir d’une majorité de sel (57%) et est dérivé
            du pétrole (43%). Contrairement aux idées reçues, sa production ne
            représente que 0,6% du pétrole consommé dans le monde.
          </Box>
          <Box py={0.6} className="desc-item" color="white">
            Pour être utilisé, le PVC doit être formulé. Sa faible stabilité
            thermique nécessite un système stabilisant écologique afin de
            pouvoir l’extruder et rendre la matière thermoplastique. Nos
            formulations contiennent des charges minérales de très haute qualité
            dont les quantités sont définies afin d’assurer la stabilité de la
            matière, la résistance aux UV et à la chaleur. Ces charges minérales
            interagissent avec le stabilisant sans plomb. Afin de perfectionner
            le flux de matière dans nos filières, il est important de garder une
            rhéologie constante et adéquate qui est assuré par des lubrifiants
            et des polymères qui soutiennent sa mise en œuvre lors de la
            production des profilés.
          </Box>
          <Box py={0.6} className="desc-item" color="white" pb={2.5} >
            Le PVC présente de très bonnes performances mécaniques. Cependant,
            pour l’améliorer davantage, nous utilisions des additifs afin
            d’obtenir des performances optimales de résistance aux chocs. Du
            point de vue environnemental, il faut savoir que les produits en PVC
            rigide peuvent être recyclables plusieurs fois sans qu’ils ne
            perdent leurs performances mécaniques.
          </Box>
        </Grid>
      </StyledTextListDescriptionColor> 
      <Spacer mb="1.5rem" />
      <StyledBanner>
        <img src={bannerImage04} className="banner-image"></img>
      </StyledBanner>
    </Fragment>
  );
};
export default FenetreEnPVC;
