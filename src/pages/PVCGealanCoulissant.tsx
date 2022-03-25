import {
  Box, 
  useMediaQuery, 
  useTheme, 
  styled,
  Grid 
} from "@mui/material";
 
import { Fragment, useEffect } from "react";
import Spacer from "./Spacer"; 
import useWindowDimensions from "../utils/getWindowsDimensions";

const bannerImage01 =  process.env.REACT_APP_ASSETS_URL +  "images/pvc-gealan-coulissant/pvc-gealan-coulissant-1-100.jpg";
const bannerImage02 =  process.env.REACT_APP_ASSETS_URL +  "images/pvc-gealan-coulissant/pvc-gealan-coulissant-2-100.jpg"; 
const bannerImage03 =  process.env.REACT_APP_ASSETS_URL +  "images/pvc-gealan-coulissant/pvc-gealan-coulissant-4-100.jpg"; 
const bannerImage04 =  process.env.REACT_APP_ASSETS_URL +  "images/pvc-gealan-coulissant/pvc-gealan-coulissant-4-50.jpg";

const PVCGealanCoulissant = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { height, width } = useWindowDimensions();  
  const imageHeight = Math.round(width * 10 / 16);
  const imageWidth = isMobile? width*0.9 : width ; 

  const StyledBanner = styled(Box)(() => ({ 
    "& .banner-image": {
      height: "auto",
      width : imageWidth,
      maxWidth : "1200px"
    },
  }));
  const StyledImageCenterWrapper = styled(Grid)(() => ({
       textAlign : "center",
       "& .ImageCenter" :{
          width : "70%"
       }
  }));
  return (
    <Fragment>
      <StyledBanner> 
        <img src = {bannerImage01} className="banner-image"></img> 
      </StyledBanner>
      <Spacer mb="1.5rem" /> 
      <Grid container spacing={3}>
        <StyledImageCenterWrapper item md={6} xs={12} >
          <img src = {bannerImage02} className="ImageCenter"></img>
        </StyledImageCenterWrapper>
        <Grid item md={6} xs={12}>
              <Box
                  fontSize="25px"
                  fontWeight="600"
                  mb={2.5}
                  lineHeight="1"
               
                >
                  Version classique
                </Box>
                <Box py={0.6}   >
                • Faible encombrement de l‘ouvrant : 100 mm
                </Box>
                <Box py={0.6}  >
                • Très bonne performance thermique :  Uf = 1,3W/(m²K) 
                </Box> 
                <Box py={0.6} >
                • Possibilité de triple vitrage jusqu’à 52 mm 
                </Box>   
                <Box py={0.6} mb={2} >• Conforme aux standards Passivhaus les plus élevés
                </Box>   
        </Grid> 
      </Grid> 
      <StyledBanner> 
        <img src = {bannerImage03} className="banner-image"></img> 
      </StyledBanner>
      <Spacer mb="1.5rem" />
      <Grid container spacing={3}> 
        <Grid item md={12} xs={12}>
              <Box
                  fontSize="25px"
                  fontWeight="600"
                  mb={2.5}
                  lineHeight="1"
               
                >
                 Notre levant coulissant S 9000 en version classique  </Box>
                <Box py={0.6}    fontSize="25px"
                  fontWeight="600"  >
                DIFFERENTS SYTEMES D’OUVERTURE POSSIBLES
                </Box> 
        </Grid> 
      </Grid>
      <StyledBanner> 
        <img src = {bannerImage04} className="banner-image"></img> 
      </StyledBanner>
    </Fragment>
  );
};
export default PVCGealanCoulissant;
