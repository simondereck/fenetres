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


const bannerImage01 =  process.env.REACT_APP_ASSETS_URL +  "images/fenetre-en-aluminium-profile-rupture/fenetre-en-aluminium-profile-rupture1.jpg";
const bannerImage02 =  process.env.REACT_APP_ASSETS_URL +  "images/fenetre-en-aluminium-profile-rupture/fenetre-en-aluminium-profile-rupture2.jpg";
const bannerImage03 =  process.env.REACT_APP_ASSETS_URL +  "images/fenetre-en-aluminium-profile-rupture/fenetre-en-aluminium-profile-rupture3.jpg";
const bannerImage04 =  process.env.REACT_APP_ASSETS_URL +  "images/fenetre-en-aluminium-profile-rupture/fenetre-en-aluminium-profile-rupture4.jpg";


const AluminiumRupture = () => {
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
      <Grid container spacing={3} justifyContent='center'>
        <Grid item md={8} xs={12}>
          <Box
            py={0.6}
            fontWeight="500"
            sx={{ padding: "5px ", textAlign: "center" }}
          >
           IFENETRES utilise les profiles rupture de pont thermique RPT 
pour l???isolation thermique de ses fen??tres. 
          </Box>
        </Grid> 
         <Grid item md={8} xs={12}>
          <Box
            py={0.6}
            fontWeight="500"
            sx={{ padding: "5px", textAlign: "center" }}
          >
           Les profiles RPT proc??d?? consiste ?? cranter un profil?? aluminium pour faire 
adh??rer une barrette en polyamide qui est ensuite int??gr??e,puis sertie entre deux profil??s aluminium. La barrette polyamide va rompre 
la conduction entre les 2 mat??riaux. 
          </Box>
        </Grid> 
        <Grid item md={8} xs={12}>
          <Box
            py={0.6}
            fontWeight="500"
            sx={{ padding: "5px", textAlign: "center" }}
          >
           L???aluminium contribue ainsi ?? la performance 
??nerg??tique des b??timents.
          </Box>
        </Grid> 
      </Grid>
      <Spacer mb="1.5rem" />
      <Grid container spacing={3} justifyContent ='center'>
        <StyledImageCenterWrapper item md={4} xs={12}>
          <img src={bannerImage02} className="ImageCenter"></img>
        </StyledImageCenterWrapper>
        <StyledImageCenterWrapper item md={6} xs={12}>
          <img src={bannerImage03} className="ImageCenter"></img>
        </StyledImageCenterWrapper>
      </Grid>
      <Spacer mb="1.5rem" />

      <Grid container spacing={3} justifyContent ='center' textAlign ='center'>
        <Grid item md={12} xs={12}>
          <Box fontSize="25px" fontWeight="600" mb={2.5} lineHeight="1">
            CARACT??RISTIQUES
          </Box>
          <Box py={0.6}>Une gamme compl??te</Box>
          <Box py={0.6}>
            Cette solution garantit un niveau de performances conforme aux
            exigences d'isolation des constructions neuves et travaux de
            r??novation (CITE).
          </Box>
          <Box py={0.6}>
          Cette solution de frappe se compose d'une offre compl??te de profil??s et d'accessoires,
pour une grande polyvalence.

          </Box>
          <Box py={0.6}>
          Cette frappe aluminium ?? rupture de pont thermique offre une excellente isolation thermique
et un niveau d'??tanch??it?? optimal : A4.

          </Box>
          <Box py={0.6}>
          Gr??ce ?? diff??rentes options d'accessoires et de points de fermeture, confort et s??curtit??.

          </Box> 
          <Box py={0.6}  fontWeight="600" >
          Formes traditionnelles 
          </Box>
          <Box py={0.6} fontWeight="600"  >
          Fermeture multipoints

          </Box>
          <Box py={0.6} fontWeight="600"  >
          Seuil plat PMR ??tanche.

          </Box>
          <Box py={0.6}  >
          Ch??ssis fixe, ouvrant ?? la fran??aise, oscillo-battant 1 et 2 vantaux, soufflet, italienne,
ensembles compos??s.

          </Box>
        </Grid>
      </Grid>  
      <Spacer mb="1.5rem" />
      <StyledBanner>
        <img src={bannerImage04} className="banner-image"></img>
      </StyledBanner>
      <Spacer mb="1.5rem" />  
      <Grid container spacing={3}>
        <Grid item md={12} xs={12}>
          <Box
            py={0.6}
            fontWeight="500"
            sx={{ padding: "20px", textAlign: "center" }}
          >
           Solution compl??te pour le neuf et la r??novation, elle s'int??gre aussi bien dans les b??timents d'habitation
 et non r??sidentiel, et notamment les projets PMR gr??ce ?? une solution de seuil plat RPT.
          </Box>
        </Grid> 
      </Grid>
    </Fragment>
  );
};
export default AluminiumRupture;
