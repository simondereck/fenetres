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

  const bannerImage01 =  process.env.REACT_APP_ASSETS_URL + "images/porte-de-entree/porte-entree01.jpg";
  const portImage01_1 =  process.env.REACT_APP_ASSETS_URL + "images/porte-de-entree/porte-01-1.png";
  const portImage01_2 =  process.env.REACT_APP_ASSETS_URL + "images/porte-de-entree/porte-01-2.png";
  const portImage02_1 =  process.env.REACT_APP_ASSETS_URL + "images/porte-de-entree/porte-02-1.png";
  const portImage02_2 =  process.env.REACT_APP_ASSETS_URL + "images/porte-de-entree/porte-02-2.png";
  const portImage03_1 =  process.env.REACT_APP_ASSETS_URL + "images/porte-de-entree/porte-03-1.png";
  const portImage03_2 =  process.env.REACT_APP_ASSETS_URL + "images/porte-de-entree/porte-03-2.png";
  const portImage04_1 =  process.env.REACT_APP_ASSETS_URL + "images/porte-de-entree/porte-04-1.png";
  const portImage04_2 =  process.env.REACT_APP_ASSETS_URL + "images/porte-de-entree/porte-04-2.png";
  const portImage05_1 =  process.env.REACT_APP_ASSETS_URL + "images/porte-de-entree/porte-05-1.png";
  const portImage05_2 =  process.env.REACT_APP_ASSETS_URL + "images/porte-de-entree/porte-05-2.png";
  const portImage06_1 =  process.env.REACT_APP_ASSETS_URL + "images/porte-de-entree/porte-06-1.png";
  const portImage06_2 =  process.env.REACT_APP_ASSETS_URL + "images/porte-de-entree/porte-06-2.png"; 
  const portImage07_1 =  process.env.REACT_APP_ASSETS_URL + "images/porte-de-entree/porte-07-1.png";
  const portImage07_2 =  process.env.REACT_APP_ASSETS_URL + "images/porte-de-entree/porte-07-2.png";
  const portImage08_1 =  process.env.REACT_APP_ASSETS_URL + "images/porte-de-entree/porte-08-1.png";
  const portImage08_2 =  process.env.REACT_APP_ASSETS_URL + "images/porte-de-entree/porte-08-2.png";
  const portImage09_1 =  process.env.REACT_APP_ASSETS_URL + "images/porte-de-entree/porte-09-1.png";
  const portImage09_2 =  process.env.REACT_APP_ASSETS_URL + "images/porte-de-entree/porte-09-2.png";
  const portImage10_1 =  process.env.REACT_APP_ASSETS_URL + "images/porte-de-entree/porte-10-1.png";
  const portImage10_2 =  process.env.REACT_APP_ASSETS_URL + "images/porte-de-entree/porte-10-2.png";
  const portImage11_1 =  process.env.REACT_APP_ASSETS_URL + "images/porte-de-entree/porte-11-1.png";
  const portImage11_2 =  process.env.REACT_APP_ASSETS_URL + "images/porte-de-entree/porte-11-2.png"; 
  const portImage12_1 =  process.env.REACT_APP_ASSETS_URL + "images/porte-de-entree/porte-12-1.png";
  const portImage12_2 =  process.env.REACT_APP_ASSETS_URL + "images/porte-de-entree/porte-12-2.png";  
  const portImage13_1 =  process.env.REACT_APP_ASSETS_URL + "images/porte-de-entree/porte-13-1.png";
  const portImage13_2 =  process.env.REACT_APP_ASSETS_URL + "images/porte-de-entree/porte-13-2.png";
  const portImage14_1 =  process.env.REACT_APP_ASSETS_URL + "images/porte-de-entree/porte-14-1.png";
  const portImage14_2 =  process.env.REACT_APP_ASSETS_URL + "images/porte-de-entree/porte-14-2.png";
  const portImage15_1 =  process.env.REACT_APP_ASSETS_URL + "images/porte-de-entree/porte-15-1.png";
  const portImage15_2 =  process.env.REACT_APP_ASSETS_URL + "images/porte-de-entree/porte-15-2.png";
  const portImage16_1 =  process.env.REACT_APP_ASSETS_URL + "images/porte-de-entree/porte-16-1.png";
  const portImage16_2 =  process.env.REACT_APP_ASSETS_URL + "images/porte-de-entree/porte-16-2.png";

  const portImage17_1 =  process.env.REACT_APP_ASSETS_URL + "images/porte-de-entree/porte-17-1.png";
  const portImage17_2 =  process.env.REACT_APP_ASSETS_URL + "images/porte-de-entree/porte-17-2.png";

  const portImage18_1 =  process.env.REACT_APP_ASSETS_URL + "images/porte-de-entree/porte-18-1.png";
  const portImage18_2 =  process.env.REACT_APP_ASSETS_URL + "images/porte-de-entree/porte-18-2.png";

  const portImage19_1 =  process.env.REACT_APP_ASSETS_URL + "images/porte-de-entree/porte-19-1.png";
  const portImage19_2 =  process.env.REACT_APP_ASSETS_URL + "images/porte-de-entree/porte-19-2.png";

  const portImage20_1 =  process.env.REACT_APP_ASSETS_URL + "images/porte-de-entree/porte-20-1.png";
  const portImage20_2 =  process.env.REACT_APP_ASSETS_URL + "images/porte-de-entree/porte-20-2.png";
  const portImage21_1 =  process.env.REACT_APP_ASSETS_URL + "images/porte-de-entree/porte-21-1.png";
  const portImage21_2 =  process.env.REACT_APP_ASSETS_URL + "images/porte-de-entree/porte-21-2.png";
  const portImage22_1 =  process.env.REACT_APP_ASSETS_URL + "images/porte-de-entree/porte-22-1.png";
  const portImage22_2 =  process.env.REACT_APP_ASSETS_URL + "images/porte-de-entree/porte-22-2.png";
  const portImage23_1 =  process.env.REACT_APP_ASSETS_URL + "images/porte-de-entree/porte-23-1.png";
  const portImage23_2 =  process.env.REACT_APP_ASSETS_URL + "images/porte-de-entree/porte-23-2.png";
  const portImage24_1 =  process.env.REACT_APP_ASSETS_URL + "images/porte-de-entree/porte-24-1.png";
  const portImage24_2 =  process.env.REACT_APP_ASSETS_URL + "images/porte-de-entree/porte-24-2.png";


  const PorteEntree = () => {
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
        width: "100%",
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
        <Grid container spacing={3}>
          <Grid item md={4} xs={12}>
            <StyledImageCenterWrapper item md={8} xs={12}>
             <img src={portImage01_1} className="ImageCenter"></img>
           </StyledImageCenterWrapper>
           <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={portImage01_2} className="ImageCenter"></img>
           </StyledImageCenterWrapper>
          </Grid>
          <Grid item md={4} xs={12}>
          <StyledImageCenterWrapper item md={8} xs={12}>
             <img src={portImage02_1} className="ImageCenter"></img>
           </StyledImageCenterWrapper>
           <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={portImage02_2} className="ImageCenter"></img>
           </StyledImageCenterWrapper>
            
         </Grid>
         <Grid item md={4} xs={12}>
            <StyledImageCenterWrapper item md={8} xs={12}>
             <img src={portImage03_1} className="ImageCenter"></img>
           </StyledImageCenterWrapper>
           <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={portImage03_2} className="ImageCenter"></img>
           </StyledImageCenterWrapper> 
         </Grid>
        </Grid>
        <Spacer mb="1.5rem" />
        <Grid container spacing={3}>
          <Grid item md={4} xs={12}>
            <StyledImageCenterWrapper item md={8} xs={12}>
             <img src={portImage04_1} className="ImageCenter"></img>
           </StyledImageCenterWrapper>
           <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={portImage04_2} className="ImageCenter"></img>
           </StyledImageCenterWrapper>
          </Grid>
          <Grid item md={4} xs={12}>
          <StyledImageCenterWrapper item md={8} xs={12}>
             <img src={portImage05_1} className="ImageCenter"></img>
           </StyledImageCenterWrapper>
           <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={portImage05_2} className="ImageCenter"></img>
           </StyledImageCenterWrapper>
            
         </Grid>
         <Grid item md={4} xs={12}>
            <StyledImageCenterWrapper item md={8} xs={12}>
             <img src={portImage06_1} className="ImageCenter"></img>
           </StyledImageCenterWrapper>
           <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={portImage06_2} className="ImageCenter"></img>
           </StyledImageCenterWrapper> 
         </Grid>
        </Grid>
        <Spacer mb="1.5rem" />
        <Grid container spacing={3}>
          <Grid item md={4} xs={12}>
            <StyledImageCenterWrapper item md={8} xs={12}>
             <img src={portImage07_1} className="ImageCenter"></img>
           </StyledImageCenterWrapper>
           <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={portImage07_2} className="ImageCenter"></img>
           </StyledImageCenterWrapper>
          </Grid>
          <Grid item md={4} xs={12}>
          <StyledImageCenterWrapper item md={8} xs={12}>
             <img src={portImage08_1} className="ImageCenter"></img>
           </StyledImageCenterWrapper>
           <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={portImage08_2} className="ImageCenter"></img>
           </StyledImageCenterWrapper>
            
         </Grid>
         <Grid item md={4} xs={12}>
            <StyledImageCenterWrapper item md={8} xs={12}>
             <img src={portImage09_1} className="ImageCenter"></img>
           </StyledImageCenterWrapper>
           <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={portImage09_2} className="ImageCenter"></img>
           </StyledImageCenterWrapper> 
         </Grid>
        </Grid>
        <Spacer mb="1.5rem" />
        <Grid container spacing={3}>
          <Grid item md={4} xs={12}>
            <StyledImageCenterWrapper item md={8} xs={12}>
             <img src={portImage10_1} className="ImageCenter"></img>
           </StyledImageCenterWrapper>
           <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={portImage10_2} className="ImageCenter"></img>
           </StyledImageCenterWrapper>
          </Grid>
          <Grid item md={4} xs={12}>
          <StyledImageCenterWrapper item md={8} xs={12}>
             <img src={portImage11_1} className="ImageCenter"></img>
           </StyledImageCenterWrapper>
           <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={portImage11_2} className="ImageCenter"></img>
           </StyledImageCenterWrapper>
            
         </Grid>
         <Grid item md={4} xs={12}>
            <StyledImageCenterWrapper item md={8} xs={12}>
             <img src={portImage12_1} className="ImageCenter"></img>
           </StyledImageCenterWrapper>
           <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={portImage12_2} className="ImageCenter"></img>
           </StyledImageCenterWrapper> 
         </Grid>
        </Grid>
        <Spacer mb="1.5rem" />
        <Grid container spacing={3}>
          <Grid item md={4} xs={12}>
            <StyledImageCenterWrapper item md={8} xs={12}>
             <img src={portImage13_1} className="ImageCenter"></img>
           </StyledImageCenterWrapper>
           <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={portImage13_2} className="ImageCenter"></img>
           </StyledImageCenterWrapper>
          </Grid>
          <Grid item md={4} xs={12}>
          <StyledImageCenterWrapper item md={8} xs={12}>
             <img src={portImage14_1} className="ImageCenter"></img>
           </StyledImageCenterWrapper>
           <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={portImage14_2} className="ImageCenter"></img>
           </StyledImageCenterWrapper>
            
         </Grid>
         <Grid item md={4} xs={12}>
            <StyledImageCenterWrapper item md={8} xs={12}>
             <img src={portImage15_1} className="ImageCenter"></img>
           </StyledImageCenterWrapper>
           <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={portImage15_2} className="ImageCenter"></img>
           </StyledImageCenterWrapper> 
         </Grid>
        </Grid>
        <Spacer mb="1.5rem" />
        <Grid container spacing={3}>
          <Grid item md={4} xs={12}>
            <StyledImageCenterWrapper item md={8} xs={12}>
             <img src={portImage16_1} className="ImageCenter"></img>
           </StyledImageCenterWrapper>
           <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={portImage16_2} className="ImageCenter"></img>
           </StyledImageCenterWrapper>
          </Grid>
          <Grid item md={4} xs={12}>
          <StyledImageCenterWrapper item md={8} xs={12}>
             <img src={portImage17_1} className="ImageCenter"></img>
           </StyledImageCenterWrapper>
           <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={portImage17_2} className="ImageCenter"></img>
           </StyledImageCenterWrapper>
            
         </Grid>
         <Grid item md={4} xs={12}>
            <StyledImageCenterWrapper item md={8} xs={12}>
             <img src={portImage18_1} className="ImageCenter"></img>
           </StyledImageCenterWrapper>
           <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={portImage18_2} className="ImageCenter"></img>
           </StyledImageCenterWrapper> 
         </Grid>
        </Grid>
        <Spacer mb="1.5rem" />
        <Grid container spacing={3}>
          <Grid item md={4} xs={12}>
            <StyledImageCenterWrapper item md={8} xs={12}>
             <img src={portImage19_1} className="ImageCenter"></img>
           </StyledImageCenterWrapper>
           <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={portImage19_2} className="ImageCenter"></img>
           </StyledImageCenterWrapper>
          </Grid>
          <Grid item md={4} xs={12}>
          <StyledImageCenterWrapper item md={8} xs={12}>
             <img src={portImage20_1} className="ImageCenter"></img>
           </StyledImageCenterWrapper>
           <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={portImage20_2} className="ImageCenter"></img>
           </StyledImageCenterWrapper>
            
         </Grid>
         <Grid item md={4} xs={12}>
            <StyledImageCenterWrapper item md={8} xs={12}>
             <img src={portImage21_1} className="ImageCenter"></img>
           </StyledImageCenterWrapper>
           <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={portImage21_2} className="ImageCenter"></img>
           </StyledImageCenterWrapper> 
         </Grid>
        </Grid>
        <Spacer mb="1.5rem" />
        <Grid container spacing={3}>
          <Grid item md={4} xs={12}>
            <StyledImageCenterWrapper item md={8} xs={12}>
             <img src={portImage22_1} className="ImageCenter"></img>
           </StyledImageCenterWrapper>
           <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={portImage22_2} className="ImageCenter"></img>
           </StyledImageCenterWrapper>
          </Grid>
          <Grid item md={4} xs={12}>
          <StyledImageCenterWrapper item md={8} xs={12}>
             <img src={portImage23_1} className="ImageCenter"></img>
           </StyledImageCenterWrapper>
           <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={portImage23_2} className="ImageCenter"></img>
           </StyledImageCenterWrapper>
            
         </Grid>
         <Grid item md={4} xs={12}>
            <StyledImageCenterWrapper item md={8} xs={12}>
             <img src={portImage24_1} className="ImageCenter"></img>
           </StyledImageCenterWrapper>
           <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={portImage24_2} className="ImageCenter"></img>
           </StyledImageCenterWrapper> 
         </Grid>
        </Grid>
      </Fragment>
    );
  };
  export default PorteEntree;
  