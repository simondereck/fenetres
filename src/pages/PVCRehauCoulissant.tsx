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
  const bannerImage01 =  process.env.REACT_APP_ASSETS_URL + "images/pvc-rehau-coulissant/pvc-rehau-coulissant-01.jpg";
  const bannerImage02 =  process.env.REACT_APP_ASSETS_URL + "images/pvc-rehau-coulissant/pvc-rehau-coulissant-02.jpg";
  const bannerImage03 =  process.env.REACT_APP_ASSETS_URL + "images/pvc-rehau-coulissant/pvc-rehau-coulissant-03.jpg";


  const PVCRehauCoulissant = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const { height, width } = useWindowDimensions();
    const imageHeight = Math.round((width * 10) / 16);
    const imageWidth = isMobile? width*0.9 : width ;
    const StyledBanner = styled(Box)(() => ({
      "& .banner-image": {
        height: 'auto',
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
          <Grid item md={12} xs={12}>
            <Box fontSize="25px" fontWeight="600" mb={2.5} lineHeight="1">
              Sentez-vous en pleine nature dans votre intérieur !
            </Box>
            <Box py={0.6} className="desc-item">
            Les systèmes de baies vitrées REHAU vous permettent de créer des ouvertures vers l’extérieur jusqu’à 4 m de large. Proﬁtez ainsi de plus de lumière dans votre intérieur et immergez la nature dans vos espaces de vie. Grâce aux baies vitrées, proﬁtez d’un design aux lignes ﬁnes et optimisez votre espace en proﬁtant de lumineuses ouvertures sur l’extérieur.
            </Box>
            <Box py={0.6} className="desc-item">
            En comparaison avec d’autres matériaux, les systèmes de baies vitrées REHAU en polymère, vous garantissent d’excellentes performances AEV, ainsi qu’une très bonne isolation thermique et acoustique.

            </Box>
            
          </Grid>
        </StyledTextListDescription>
        <Spacer mb="1.5rem" />
        <StyledBanner>
          <img src={bannerImage02} className="banner-image"></img>
        </StyledBanner>
        <StyledBanner>
          <img src={bannerImage03} className="banner-image"></img>
        </StyledBanner>
     
      </Fragment>
    );
  };
  export default PVCRehauCoulissant;
  