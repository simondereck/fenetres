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

const bannerImage01 =  process.env.REACT_APP_ASSETS_URL + "images/fenetre-en-aluminium-profiles-verrier/profiles-verrier01.jpg";
const bannerImage02 =  process.env.REACT_APP_ASSETS_URL + "images/fenetre-en-aluminium-profiles-verrier/profiles-verrier02.png";
const bannerImage03 =  process.env.REACT_APP_ASSETS_URL + "images/fenetre-en-aluminium-profiles-verrier/profiles-verrier03.png";
const bannerImage04 =  process.env.REACT_APP_ASSETS_URL + "images/fenetre-en-aluminium-profiles-verrier/profiles-verrier04.png";
const bannerImage05 =  process.env.REACT_APP_ASSETS_URL + "images/fenetre-en-aluminium-profiles-verrier/profiles-verrier05.png";
const bannerImage06 =  process.env.REACT_APP_ASSETS_URL + "images/fenetre-en-aluminium-profiles-verrier/profiles-verrier06.png";
const bannerImage07 =  process.env.REACT_APP_ASSETS_URL + "images/fenetre-en-aluminium-profiles-verrier/profiles-verrier07.png";
 

const ProfilesVerrier = () => {
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
      width: "90%",
    },
  }));

  const StyledImageRight = styled("img")(() => ({
    width: isMobile ? "100%" : "30%",
  }));

  return (
    <Fragment>
      <StyledBanner>
        <img src={bannerImage01} className="banner-image"></img>
      </StyledBanner>
      <StyledBanner>
        <img src={bannerImage02} className="banner-image"></img>
      </StyledBanner>
      <StyledBanner>
        <img src={bannerImage03} className="banner-image"></img>
      </StyledBanner>
      <Spacer mb="1.5rem" />
      <Grid container spacing={3} sx = {{background:"#E8E5E4"}}>   
        <StyledImageCenterWrapper item md={6} xs={12}>
          <img src={bannerImage04} className="ImageCenter"></img>
        </StyledImageCenterWrapper>
        <StyledImageCenterWrapper item md={6} xs={12}>
          <img src={bannerImage05} className="ImageCenter"></img>
        </StyledImageCenterWrapper>
        <StyledImageCenterWrapper item md={6} xs={12}>
          <img src={bannerImage06} className="ImageCenter"></img>
        </StyledImageCenterWrapper>
        <StyledImageCenterWrapper item md={6} xs={12}>
          <img src={bannerImage07} className="ImageCenter"></img>
        </StyledImageCenterWrapper>
      </Grid>
    </Fragment>
  );
};
export default ProfilesVerrier;
