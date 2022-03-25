import {
    Box, 
    useMediaQuery, 
    useTheme, 
    styled,
    Grid 
  } from "@mui/material";
  
  import { Fragment, useEffect } from "react"; 
  import Spacer from "./Spacer"; 
  import FlexBox from "../components/FlexBox";
  import { H2 } from "../components/Typography";
  import useWindowDimensions from "../utils/getWindowsDimensions";

  const bannerImage01 =  process.env.REACT_APP_ASSETS_URL +   "images/accesoirs/accesoirs-banner-01.png";
  const Image01 =  process.env.REACT_APP_ASSETS_URL +   "images/accesoirs/accesoirs-01.png"; 
  const Image02 =  process.env.REACT_APP_ASSETS_URL +   "images/accesoirs/accesoirs-02.png"; 
  const Image03 =  process.env.REACT_APP_ASSETS_URL +   "images/accesoirs/accesoirs-03.png"; 
  const Image04 =  process.env.REACT_APP_ASSETS_URL +   "images/accesoirs/accesoirs-04.png"; 
  const Image05 =  process.env.REACT_APP_ASSETS_URL +   "images/accesoirs/accesoirs-05.png"; 
  const Image06 =  process.env.REACT_APP_ASSETS_URL +   "images/accesoirs/accesoirs-06.png"; 
  const Image07 =  process.env.REACT_APP_ASSETS_URL +   "images/accesoirs/accesoirs-07.png"; 
  const Image08 =  process.env.REACT_APP_ASSETS_URL +   "images/accesoirs/accesoirs-08.png"; 
  const Image09 =  process.env.REACT_APP_ASSETS_URL +   "images/accesoirs/accesoirs-09.png"; 
  const Image10 =  process.env.REACT_APP_ASSETS_URL +   "images/accesoirs/accesoirs-10.png"; 
  const Image11 =  process.env.REACT_APP_ASSETS_URL +   "images/accesoirs/accesoirs-11.png"; 
  const Image12 =  process.env.REACT_APP_ASSETS_URL +   "images/accesoirs/accesoirs-12.png"; 
  const Image13 =  process.env.REACT_APP_ASSETS_URL +   "images/accesoirs/accesoirs-13.png"; 
  const Image14 =  process.env.REACT_APP_ASSETS_URL +   "images/accesoirs/accesoirs-14.png"; 
  const Image15 =  process.env.REACT_APP_ASSETS_URL +   "images/accesoirs/accesoirs-15.png"; 
  const Image16 =  process.env.REACT_APP_ASSETS_URL +   "images/accesoirs/accesoirs-16.png"; 
  const Image17 =  process.env.REACT_APP_ASSETS_URL +   "images/accesoirs/accesoirs-17.png"; 
  const Image18 =  process.env.REACT_APP_ASSETS_URL +   "images/accesoirs/accesoirs-18.png"; 
  const Image19 =  process.env.REACT_APP_ASSETS_URL +   "images/accesoirs/accesoirs-19.png"; 
  const Image20 =  process.env.REACT_APP_ASSETS_URL +   "images/accesoirs/accesoirs-20.png"; 
  const Image21 =  process.env.REACT_APP_ASSETS_URL +   "images/accesoirs/accesoirs-21.png"; 
  const Image22 =  process.env.REACT_APP_ASSETS_URL +   "images/accesoirs/accesoirs-22.png"; 
  const Image23 =  process.env.REACT_APP_ASSETS_URL +   "images/accesoirs/accesoirs-23.png"; 
  const Image24 =  process.env.REACT_APP_ASSETS_URL +   "images/accesoirs/accesoirs-24.png"; 
  const Image25 =  process.env.REACT_APP_ASSETS_URL +   "images/accesoirs/accesoirs-25.png"; 
  const Image26 =  process.env.REACT_APP_ASSETS_URL +   "images/accesoirs/accesoirs-26.png"; 
  const Image27 =  process.env.REACT_APP_ASSETS_URL +   "images/accesoirs/accesoirs-27.png"; 
  const Image28 =  process.env.REACT_APP_ASSETS_URL +   "images/accesoirs/accesoirs-28.png"; 
  const Image29 =  process.env.REACT_APP_ASSETS_URL +   "images/accesoirs/accesoirs-29.png"; 
  const Image30 =  process.env.REACT_APP_ASSETS_URL +   "images/accesoirs/accesoirs-30.png"; 
  const Image31 =  process.env.REACT_APP_ASSETS_URL +   "images/accesoirs/accesoirs-31.png"; 
  const Image32 =  process.env.REACT_APP_ASSETS_URL +   "images/accesoirs/accesoirs-32.png"; 
  const Image33 =  process.env.REACT_APP_ASSETS_URL +   "images/accesoirs/accesoirs-33.png"; 
  const Image34 =  process.env.REACT_APP_ASSETS_URL +   "images/accesoirs/accesoirs-34.png"; 
  const Image35 =  process.env.REACT_APP_ASSETS_URL +   "images/accesoirs/accesoirs-35.png"; 
  const Image36 =  process.env.REACT_APP_ASSETS_URL +   "images/accesoirs/accesoirs-36.png"; 
  const Image37 =  process.env.REACT_APP_ASSETS_URL +   "images/accesoirs/accesoirs-37.png"; 
  const Image38 =  process.env.REACT_APP_ASSETS_URL +   "images/accesoirs/accesoirs-38.png"; 
  const Image39 =  process.env.REACT_APP_ASSETS_URL +   "images/accesoirs/accesoirs-39.png"; 
  const Image40 =  process.env.REACT_APP_ASSETS_URL +   "images/accesoirs/accesoirs-40.png"; 
  const Image41 =  process.env.REACT_APP_ASSETS_URL +   "images/accesoirs/accesoirs-41.png"; 
  const Image42 =  process.env.REACT_APP_ASSETS_URL +   "images/accesoirs/accesoirs-42.png"; 
  const Image43 =  process.env.REACT_APP_ASSETS_URL +   "images/accesoirs/accesoirs-43.png"; 
  const Image44 =  process.env.REACT_APP_ASSETS_URL +   "images/accesoirs/accesoirs-44.png"; 
  const Image45 =  process.env.REACT_APP_ASSETS_URL +   "images/accesoirs/accesoirs-45.png"; 
  const Image46 =  process.env.REACT_APP_ASSETS_URL +   "images/accesoirs/accesoirs-46.png"; 
  const Image47 =  process.env.REACT_APP_ASSETS_URL +   "images/accesoirs/accesoirs-47.png"; 
  const Image48 =  process.env.REACT_APP_ASSETS_URL +   "images/accesoirs/accesoirs-48.png"; 
  const Image49 =  process.env.REACT_APP_ASSETS_URL +   "images/accesoirs/accesoirs-49.png"; 
  const Image50 =  process.env.REACT_APP_ASSETS_URL +   "images/accesoirs/accesoirs-50.png"; 
  const Image51 =  process.env.REACT_APP_ASSETS_URL +   "images/accesoirs/accesoirs-51.png"; 
  const Image52 =  process.env.REACT_APP_ASSETS_URL +   "images/accesoirs/accesoirs-52.png"; 
  const Image53 =  process.env.REACT_APP_ASSETS_URL +   "images/accesoirs/accesoirs-53.png"; 
  const Image54 =  process.env.REACT_APP_ASSETS_URL +   "images/accesoirs/accesoirs-54.png"; 
  const Image55 =  process.env.REACT_APP_ASSETS_URL +   "images/accesoirs/accesoirs-55.png"; 
  const Image56 =  process.env.REACT_APP_ASSETS_URL +   "images/accesoirs/accesoirs-56.png"; 
  const Image57 =  process.env.REACT_APP_ASSETS_URL +   "images/accesoirs/accesoirs-57.png"; 
 
  const Accesoirs = () => {
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
    return (
      <Fragment>
        <StyledBanner>
          <img src={bannerImage01} className="banner-image"></img>
        </StyledBanner>
        <Spacer mb="1.5rem" />
        <Grid container spacing={3}>
          <Grid item md={3} xs={6}>
            <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={Image01} className="ImageCenter"></img>
           </StyledImageCenterWrapper> 
          </Grid>
          <Grid item md={3} xs={6}>
          <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={Image02} className="ImageCenter"></img>
           </StyledImageCenterWrapper>  
         </Grid>
         <Grid item md={3} xs={6}>
            <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={Image03} className="ImageCenter"></img>
           </StyledImageCenterWrapper>  
         </Grid>
         <Grid item md={3} xs={6}>
            <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={Image04} className="ImageCenter"></img>
           </StyledImageCenterWrapper>  
         </Grid>
         <Grid item md={3} xs={6}>
            <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={Image05} className="ImageCenter"></img>
           </StyledImageCenterWrapper>  
         </Grid>
         <Grid item md={3} xs={6}>
            <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={Image06} className="ImageCenter"></img>
           </StyledImageCenterWrapper>  
         </Grid>
         <Grid item md={3} xs={6}>
            <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={Image07} className="ImageCenter"></img>
           </StyledImageCenterWrapper>  
         </Grid>
         <Grid item md={3} xs={6}>
            <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={Image08} className="ImageCenter"></img>
           </StyledImageCenterWrapper>  
         </Grid>
         <Grid item md={3} xs={6}>
            <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={Image09} className="ImageCenter"></img>
           </StyledImageCenterWrapper>  
         </Grid>
         <Grid item md={3} xs={6}>
            <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={Image09} className="ImageCenter"></img>
           </StyledImageCenterWrapper>  
         </Grid>
         <Grid item md={3} xs={6}>
            <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={Image10} className="ImageCenter"></img>
           </StyledImageCenterWrapper>  
         </Grid>
         <Grid item md={3} xs={6}>
            <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={Image11} className="ImageCenter"></img>
           </StyledImageCenterWrapper>  
         </Grid>
         <Grid item md={3} xs={6}>
            <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={Image12} className="ImageCenter"></img>
           </StyledImageCenterWrapper>  
         </Grid>
         <Grid item md={3} xs={6}>
            <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={Image13} className="ImageCenter"></img>
           </StyledImageCenterWrapper>  
         </Grid>
         <Grid item md={3} xs={6}>
            <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={Image14} className="ImageCenter"></img>
           </StyledImageCenterWrapper>  
         </Grid>
         <Grid item md={3} xs={6}>
            <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={Image15} className="ImageCenter"></img>
           </StyledImageCenterWrapper>  
         </Grid>
        </Grid>
        <Spacer mb="1.5rem" /> 
        <StyledBanner>
          <img src={Image16} className="banner-image" ></img>
        </StyledBanner>
        <Spacer mb="1.5rem" />
        <Grid container spacing={3}>
          <Grid item md={3} xs={6}>
            <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={Image17} className="ImageCenter"></img>
           </StyledImageCenterWrapper> 
          </Grid>
          <Grid item md={3} xs={6}>
          <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={Image18} className="ImageCenter"></img>
           </StyledImageCenterWrapper>  
         </Grid>
         <Grid item md={3} xs={6}>
            <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={Image19} className="ImageCenter"></img>
           </StyledImageCenterWrapper>  
         </Grid>
         <Grid item md={3} xs={6}>
            <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={Image20} className="ImageCenter"></img>
           </StyledImageCenterWrapper>  
         </Grid>
         <Grid item md={3} xs={6}>
            <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={Image21} className="ImageCenter"></img>
           </StyledImageCenterWrapper>  
         </Grid>
         <Grid item md={3} xs={6}>
            <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={Image22} className="ImageCenter"></img>
           </StyledImageCenterWrapper>  
         </Grid>
         <Grid item md={3} xs={6}>
            <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={Image23} className="ImageCenter"></img>
           </StyledImageCenterWrapper>  
         </Grid>
         <Grid item md={3} xs={6}>
            <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={Image24} className="ImageCenter"></img>
           </StyledImageCenterWrapper>  
         </Grid>
         <Grid item md={3} xs={6}>
            <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={Image25} className="ImageCenter"></img>
           </StyledImageCenterWrapper>  
         </Grid>
         <Grid item md={3} xs={6}>
            <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={Image26} className="ImageCenter"></img>
           </StyledImageCenterWrapper>  
         </Grid>
         <Grid item md={3} xs={6}>
            <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={Image27} className="ImageCenter"></img>
           </StyledImageCenterWrapper>  
         </Grid>
         <Grid item md={3} xs={6}>
            <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={Image28} className="ImageCenter"></img>
           </StyledImageCenterWrapper>  
         </Grid>
         <Grid item md={3} xs={6}>
            <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={Image29} className="ImageCenter"></img>
           </StyledImageCenterWrapper>  
         </Grid>
         <Grid item md={3} xs={6}>
            <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={Image30} className="ImageCenter"></img>
           </StyledImageCenterWrapper>  
         </Grid>
         <Grid item md={3} xs={6}>
            <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={Image31} className="ImageCenter"></img>
           </StyledImageCenterWrapper>  
         </Grid>
         <Grid item md={3} xs={6}>
            <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={Image32} className="ImageCenter"></img>
           </StyledImageCenterWrapper>  
         </Grid>
         <Grid item md={3} xs={6}>
            <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={Image33} className="ImageCenter"></img>
           </StyledImageCenterWrapper>  
         </Grid>
         <Grid item md={3} xs={6}>
            <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={Image34} className="ImageCenter"></img>
           </StyledImageCenterWrapper>  
         </Grid>
        </Grid>
        <Spacer mb="1.5rem" /> 
        <StyledBanner>
          <img src={Image35} className="banner-image" ></img>
        </StyledBanner>
        <Spacer mb="1.5rem" />
        <Grid container spacing={3}>
          <Grid item md={3} xs={6}>
            <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={Image36} className="ImageCenter"></img>
           </StyledImageCenterWrapper> 
          </Grid>
          <Grid item md={3} xs={6}>
          <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={Image37} className="ImageCenter"></img>
           </StyledImageCenterWrapper>  
         </Grid>
         <Grid item md={3} xs={6}>
            <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={Image38} className="ImageCenter"></img>
           </StyledImageCenterWrapper>  
         </Grid>
         <Grid item md={3} xs={6}>
            <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={Image39} className="ImageCenter"></img>
           </StyledImageCenterWrapper>  
         </Grid>
         <Grid item md={3} xs={6}>
            <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={Image40} className="ImageCenter"></img>
           </StyledImageCenterWrapper>  
         </Grid>
         <Grid item md={3} xs={6}>
            <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={Image41} className="ImageCenter"></img>
           </StyledImageCenterWrapper>  
         </Grid>
         <Grid item md={3} xs={6}>
            <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={Image42} className="ImageCenter"></img>
           </StyledImageCenterWrapper>  
         </Grid>
         <Grid item md={3} xs={6}>
            <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={Image43} className="ImageCenter"></img>
           </StyledImageCenterWrapper>  
         </Grid>
         <Grid item md={3} xs={6}>
            <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={Image44} className="ImageCenter"></img>
           </StyledImageCenterWrapper>  
         </Grid>
         <Grid item md={3} xs={6}>
            <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={Image45} className="ImageCenter"></img>
           </StyledImageCenterWrapper>  
         </Grid>
         <Grid item md={3} xs={6}>
            <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={Image46} className="ImageCenter"></img>
           </StyledImageCenterWrapper>  
         </Grid>
         <Grid item md={3} xs={6}>
            <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={Image47} className="ImageCenter"></img>
           </StyledImageCenterWrapper>  
         </Grid>
         <Grid item md={3} xs={6}>
            <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={Image48} className="ImageCenter"></img>
           </StyledImageCenterWrapper>  
         </Grid>
         <Grid item md={3} xs={6}>
            <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={Image49} className="ImageCenter"></img>
           </StyledImageCenterWrapper>  
         </Grid>
         <Grid item md={3} xs={6}>
            <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={Image50} className="ImageCenter"></img>
           </StyledImageCenterWrapper>  
         </Grid>
         <Grid item md={3} xs={6}>
            <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={Image51} className="ImageCenter"></img>
           </StyledImageCenterWrapper>  
         </Grid>
         <Grid item md={3} xs={6}>
            <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={Image52} className="ImageCenter"></img>
           </StyledImageCenterWrapper>  
         </Grid>
         <Grid item md={3} xs={6}>
            <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={Image53} className="ImageCenter"></img>
           </StyledImageCenterWrapper>  
         </Grid>
        </Grid>
        <Spacer mb="1.5rem" />
        <StyledBanner>
          <img src={Image54} className="banner-image" ></img>
        </StyledBanner>
        <Spacer mb="1.5rem" />
        <Grid container spacing={3}>
          <Grid item md={3} xs={6}>
            <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={Image55} className="ImageCenter"></img>
           </StyledImageCenterWrapper> 
          </Grid>
          <Grid item md={3} xs={6}>
          <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={Image56} className="ImageCenter"></img>
           </StyledImageCenterWrapper>  
         </Grid>
         <Grid item md={3} xs={6}>
            <StyledImageCenterWrapper item md={10} xs={12}>
             <img src={Image57} className="ImageCenter"></img>
           </StyledImageCenterWrapper>  
         </Grid> 
        </Grid>
      </Fragment>
    );
  };
  export default Accesoirs;
  