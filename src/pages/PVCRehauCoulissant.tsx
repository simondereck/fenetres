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
              Sentez-vous en pleine nature dans votre int??rieur !
            </Box>
            <Box py={0.6} className="desc-item">
            Les syst??mes de baies vitr??es REHAU vous permettent de cr??er des ouvertures vers l???ext??rieur jusqu????? 4 m de large. Pro???tez ainsi de plus de lumi??re dans votre int??rieur et immergez la nature dans vos espaces de vie. Gr??ce aux baies vitr??es, pro???tez d???un design aux lignes ???nes et optimisez votre espace en pro???tant de lumineuses ouvertures sur l???ext??rieur.
            </Box>
            <Box py={0.6} className="desc-item">
            En comparaison avec d???autres mat??riaux, les syst??mes de baies vitr??es REHAU en polym??re, vous garantissent d???excellentes performances AEV, ainsi qu???une tr??s bonne isolation thermique et acoustique.

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
  