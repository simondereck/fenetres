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
            Choisir le PVC, c???est faire le choix de :
          </Box>
          <Box py={0.6} className="desc-item" ml={isMobile?0 :24}>
            ??? <span>l???isolation</span> : exceptionnelles performances thermiques
            et acoustiques pour la menuiserie
          </Box>
          <Box py={0.6} className="desc-item" ml={isMobile?0 :24}>
            ??? <span> la durabilit?? </span>: d??j?? plus de 50 ans de satisfaction
            client dans son usage appliqu?? aux fen??tres
          </Box>
          <Box py={0.6} className="desc-item" ml={isMobile?0 :24}>
            ??? <span>la solidit??</span> : tr??s bonne r??sistance m??canique
          </Box>
          <Box py={0.6} className="desc-item" ml={isMobile?0 :24}>
            ??? <span>la facilit?? d???entretien</span> : simple d???entretien, une
            ??ponge humide suffit
          </Box>
          <Box py={0.6} className="desc-item" ml={isMobile?0 :24}>
            ??? <span>la recyclabilit??</span> : le PVC est 100% recyclable dans la
            m??me application en conservant toutes ses qualit??s
          </Box>
          <Box py={0.6} className="desc-item" ml={isMobile?0 :24}>
            ??? <span>la s??curit?? incendie </span> :excellente r??sistance au feu
          </Box>
          <Box py={0.6} className="desc-item" mb={2.5} ml={isMobile?0 :24}>
            ??? <span> l?????conomie</span> : excellent rapport performance / prix
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
            Un profil?? PVC , c'est quoi?
          </Box>
          <Box py={0.6} className="desc-item" color="white">
            Le PVC est obtenu ?? partir d???une majorit?? de sel (57%) et est d??riv??
            du p??trole (43%). Contrairement aux id??es re??ues, sa production ne
            repr??sente que 0,6% du p??trole consomm?? dans le monde.
          </Box>
          <Box py={0.6} className="desc-item" color="white">
            Pour ??tre utilis??, le PVC doit ??tre formul??. Sa faible stabilit??
            thermique n??cessite un syst??me stabilisant ??cologique afin de
            pouvoir l???extruder et rendre la mati??re thermoplastique. Nos
            formulations contiennent des charges min??rales de tr??s haute qualit??
            dont les quantit??s sont d??finies afin d???assurer la stabilit?? de la
            mati??re, la r??sistance aux UV et ?? la chaleur. Ces charges min??rales
            interagissent avec le stabilisant sans plomb. Afin de perfectionner
            le flux de mati??re dans nos fili??res, il est important de garder une
            rh??ologie constante et ad??quate qui est assur?? par des lubrifiants
            et des polym??res qui soutiennent sa mise en ??uvre lors de la
            production des profil??s.
          </Box>
          <Box py={0.6} className="desc-item" color="white" pb={2.5} >
            Le PVC pr??sente de tr??s bonnes performances m??caniques. Cependant,
            pour l???am??liorer davantage, nous utilisions des additifs afin
            d???obtenir des performances optimales de r??sistance aux chocs. Du
            point de vue environnemental, il faut savoir que les produits en PVC
            rigide peuvent ??tre recyclables plusieurs fois sans qu???ils ne
            perdent leurs performances m??caniques.
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
