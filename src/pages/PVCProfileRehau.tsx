import React, { ReactElement } from "react";
import {
  Box, 
  useMediaQuery, 
  useTheme, 
  styled,
  Grid, 
} from "@mui/material";
 
import Spacer from "./Spacer";
import Carousel from "../components/carousel/Carousel";
import useWindowDimensions from "../utils/getWindowsDimensions";
const bg0 =  process.env.REACT_APP_ASSETS_URL + "images/pvc-profiles-rehau/profiles-rehau01.jpg";
const bg1 =  process.env.REACT_APP_ASSETS_URL + "images/pvc-profiles-rehau/bg1.jpg";
const bg2 =  process.env.REACT_APP_ASSETS_URL + "images/pvc-profiles-rehau/bg2.jpg";
const bg3 =  process.env.REACT_APP_ASSETS_URL + "images/pvc-profiles-rehau/bg3.jpg";
const bg4 =  process.env.REACT_APP_ASSETS_URL + "images/pvc-profiles-rehau/bg4.jpg";
const bg5 =  process.env.REACT_APP_ASSETS_URL + "images/pvc-profiles-rehau/bg5.jpg";
const bg6 =  process.env.REACT_APP_ASSETS_URL + "images/pvc-profiles-rehau/bg6.jpg";

const img2 =  process.env.REACT_APP_ASSETS_URL + "images/pvc-profiles-rehau/profiles-rehau02.jpg";
const img3 =  process.env.REACT_APP_ASSETS_URL + "images/pvc-profiles-rehau/profiles-rehau03.jpg";
const img4 =  process.env.REACT_APP_ASSETS_URL + "images/pvc-profiles-rehau/profiles-rehau04.jpg";
const img5 =  process.env.REACT_APP_ASSETS_URL + "images/pvc-profiles-rehau/profiles-rehau05.jpg";
const img6 =  process.env.REACT_APP_ASSETS_URL + "images/pvc-profiles-rehau/profiles-rehau06.jpg";
const img7 =  process.env.REACT_APP_ASSETS_URL + "images/pvc-profiles-rehau/profiles-rehau07.jpg";
const img8 =  process.env.REACT_APP_ASSETS_URL + "images/pvc-profiles-rehau/profiles-rehau08.jpg";
const img9 =  process.env.REACT_APP_ASSETS_URL + "images/pvc-profiles-rehau/profiles-rehau09.jpg";
const img10 =  process.env.REACT_APP_ASSETS_URL + "images/pvc-profiles-rehau/profiles-rehau10.png";
const img11 =  process.env.REACT_APP_ASSETS_URL + "images/pvc-profiles-rehau/profiles-rehau11.png";
const img12 =  process.env.REACT_APP_ASSETS_URL + "images/pvc-profiles-rehau/profiles-rehau12.png";
const img13 =  process.env.REACT_APP_ASSETS_URL + "images/pvc-profiles-rehau/profiles-rehau13.png";
const img14 =  process.env.REACT_APP_ASSETS_URL + "images/pvc-profiles-rehau/profiles-rehau14.png";
const img15 =  process.env.REACT_APP_ASSETS_URL + "images/pvc-profiles-rehau/profiles-rehau15.jpg";
const img16 =  process.env.REACT_APP_ASSETS_URL + "images/pvc-profiles-rehau/profiles-rehau16.png";
const img17 =  process.env.REACT_APP_ASSETS_URL + "images/pvc-profiles-rehau/profiles-rehau17.jpg";
const img18 =  process.env.REACT_APP_ASSETS_URL + "images/pvc-profiles-rehau/profiles-rehau18.png";


const PVCProfileRehau = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { height, width } = useWindowDimensions();
  const imageHeight = Math.round((width * 10) / 16);
  const imageWidth = isMobile ? width * 0.9 : width;
  type StyledCarouselBannerProps = {
    url?: string;
    children?: ReactElement;
    className?: string;
  };
  const StyledBanner = styled<React.FC<StyledCarouselBannerProps>>(
    ({ children, url, ...props }) => <Box {...props}> {children} </Box>
  )<StyledCarouselBannerProps>(({ url }) => ({
    "&.banner-image": {
      height: isMobile ? "180px" : "679px",
      width: imageWidth,
      maxWidth: "100%",
      margin: "0 auto",
      overflow: "hidden",
      background: `url(${url}) no-repeat top/cover`,
      paddingBottom: 0,
      backgroundSize: isMobile ? "contain" : "cover",
    },
  }));
  const StyledGrid = styled(Grid)(() => ({
    "&": {
      height: isMobile ? "650px" : "450px",
    },
  }));
  const StyledImageCenterWrapper = styled(Grid)(() => ({
    textAlign: "center",
    "& .ImageCenter": {
      width: "90%",
    },
  }));
  const StyledImageCenterWrapper1 = styled(Grid)(() => ({
    textAlign: "start",
    "& .ImageCenter": {
      width: "50%",
    },
  }));
  const StyledImageCenterWrapper2 = styled(Grid)(() => ({
    textAlign: "center",
    "& .ImageCenter": {
      width: "90%",
    },
  }));
  const StyledImageCenterWrapper3 = styled(Grid)(() => ({
    textAlign: "center",
    "& .ImageCenter": {
      width: "70%",
    },
  }));
  const banners = [
    {
      label: "",
      url: bg0,
    },
    {
      label: "",
      url: bg1,
    },
    {
      label: "",
      url: bg2,
    },
    {
      label: "",
      url: bg3,
    },
    {
      label: "",
      url: bg4,
    },
    {
      label: "",
      url: bg5,
    },
    {
      label: "",
      url: bg6,
    },
  ];
  const arrowButtonStyle = {
    boxShadow: "none",
    background: "transparent",
    color: "#7D879C",
  };
  return (
    <Box>
      <Carousel
        totalSlides={banners.length}
        interval={5000}
        autoPlay={true}
        visibleSlides={1}
        leftButtonStyle={{ ...arrowButtonStyle, left: 8 }}
        rightButtonStyle={{ ...arrowButtonStyle, right: 8 }}
      >
        {banners.map((_item, ind) => (
          <StyledBanner className="banner-image" url={_item.url}>
            <Box></Box>
          </StyledBanner>
        ))}
      </Carousel>
      <Box mt="30px">
        <Grid container textAlign="left" justifyContent="center">
          <Grid item md={5} xs={12} mt="20px">
            <StyledImageCenterWrapper1 item md={12} xs={12}>
              <img src={img2} className="ImageCenter"></img>
            </StyledImageCenterWrapper1>
            <StyledImageCenterWrapper1 item md={12} xs={12}>
              <img src={img3} className="ImageCenter"></img>
            </StyledImageCenterWrapper1>
            <StyledImageCenterWrapper1 item md={12} xs={12}>
              <img src={img4} className="ImageCenter"></img>
            </StyledImageCenterWrapper1>
          </Grid>
          <Grid item md={6} xs={12} mt="20px">
            <Grid item md={12} xs={12} sx={{ textAlign: "left" }}>
              <StyledImageCenterWrapper2 item md={6} xs={12}>
                <img src={img5} className="ImageCenter"></img>
              </StyledImageCenterWrapper2>
            </Grid>
            <Grid container spacing={3}>
              <Grid item md={10} xs={12}>
                <Box fontSize="25px" fontWeight="600" mb={2.5} lineHeight="1">
                  La famille Aralya-Design
                </Box>
                <Box py={0.6}>
                  Quand Écologie rime avec Économie et Performance ! REHAU et le
                  savoir-faire
                </Box>
                <Box py={0.6}>
                  REHAU bénéficie de 40 ans d’expérience en tant que leader dans
                  l’extrusion des profilés pour les systèmes de menuiseries
                  extérieures (fenêtres et fermetures). Cette expérience
                  indéniable contribue sans aucun doute à la qualité suprême des
                  menuiseries conçues avec les profilés REHAU. Nos ambitions en
                  faveur de la qualité, du design et des solutions adaptées à
                  vos besoins d’aujourd’hui et de demain font l’objet de
                  nombreuses recherches. La marque NF et les Avis Techniques du
                  CSTB viennent garantir l’efficacité des systèmes REHAU. En
                  plus, REHAU est certifié ISO 9001 pour son système de
                  management de la qualité.
                </Box>
                <Box py={0.6}>
                  REHAU travaille exclusivement avec les menuisiers
                  professionnels. Que ce soit pour le neuf ou pour la
                  rénovation, vous serez conseillés par des experts qui vous
                  aideront à faire le meilleur choix. La forme, l’isolation
                  thermique et acoustique, ainsi que la protection
                  anti-effraction sont des éléments importants sur lesquels
                  votre fabricant de menuiseries vous informera. De la
                  conception à la mise en oeuvre et même après la pose vous
                  pouvez compter sur sa compétence !
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid container>
          <Grid item md={6} xs={12} mt="80px">
            <Box py={0.6}>REHAU et l’environnement</Box>
            <Box py={0.6}>
              Conscient de notre responsabilité envers l’Homme et la nature, le
              respect de l’environnement constitue pour nous une priorité.
            </Box>
            <Box py={0.6}>
              Leader sur le marché, c’est notre devoir de développer des
              systèmes innovants répondant aux exigences environnementales, de
              leur fabrication jusqu’à leur recyclage.
            </Box>
            <Box py={0.6}>
              Les profilés REHAU Aralya-Design sont fabriqués à partir d’une
              matière sans plomb.
            </Box>
            <Box py={0.6}>
              REHAU dispose dans tous ses sites de production d’un système de «
              management de l’environnement » selon la norme ISO 14001. Nous
              disposons également de notre propre circuit de recyclage homologué
              par le CSTB sur notre site de Morhange.
            </Box>
            <Box py={0.6}>Une menuiserie recyclable à 100% !</Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <StyledImageCenterWrapper3>
              <img src={img6} alt="" className="ImageCenter" />
            </StyledImageCenterWrapper3>
          </Grid>
        </Grid>
      </Box>
      <Spacer mb="1.5rem" />
      <Grid container spacing={3}>
        <StyledImageCenterWrapper item md={12} xs={12}>
          <img src={img7} className="ImageCenter"></img>
        </StyledImageCenterWrapper>
      </Grid>
      <Spacer mb="1.5rem" />
      <Grid container spacing={3}>
        <StyledImageCenterWrapper item md={12} xs={12}>
          <img src={img8} className="ImageCenter"></img>
        </StyledImageCenterWrapper>
      </Grid>
      <Spacer mb="1.5rem" />
      <Grid container spacing={3}>
        <StyledImageCenterWrapper item md={12} xs={12}>
          <img src={img9} className="ImageCenter"></img>
        </StyledImageCenterWrapper>
      </Grid>
      <Spacer mb="1.5rem" />
      <Grid container spacing={3}>
        <StyledImageCenterWrapper item md={12} xs={12}>
          <img src={img10} className="ImageCenter"></img>
        </StyledImageCenterWrapper>
      </Grid>
      <Grid container spacing={3}>
        <StyledImageCenterWrapper item md={12} xs={12}>
          <Box
            lineHeight="20px"
            sx={{
              color: "#0306E3",
              fontSize: 40,
              textAlign: "start",
              paddingLeft: "20px",
            }}
          >
            Dormant
          </Box>
        </StyledImageCenterWrapper>
        <StyledImageCenterWrapper item md={6} xs={12}>
          <img src={img11} className="ImageCenter"></img>
        </StyledImageCenterWrapper>
        <StyledImageCenterWrapper item md={6} xs={12}>
          <img src={img12} className="ImageCenter"></img>
        </StyledImageCenterWrapper>
        <StyledImageCenterWrapper item md={12} xs={12}>
          <Box
            lineHeight="20px"
            sx={{
              color: "#0306E3",
              fontSize: 40,
              textAlign: "start",
              paddingLeft: "20px",
            }}
          >
            Ouvrant
          </Box>
        </StyledImageCenterWrapper>
        <StyledImageCenterWrapper item md={6} xs={12}>
          <img src={img13} className="ImageCenter"></img>
        </StyledImageCenterWrapper>
        <StyledImageCenterWrapper item md={6} xs={12}>
          <img src={img14} className="ImageCenter"></img>
        </StyledImageCenterWrapper>

        <StyledImageCenterWrapper item md={12} xs={12}>
          <Box
            lineHeight="20px"
            sx={{
              color: "#0306E3",
              fontSize: 40,
              textAlign: "start",
              paddingLeft: "20px",
            }}
          >
            Coulissant
          </Box>
        </StyledImageCenterWrapper>
        <StyledImageCenterWrapper item md={6} xs={12}>
          <img src={img15} className="ImageCenter"></img>
        </StyledImageCenterWrapper>
        <StyledImageCenterWrapper item md={6} xs={12}>
          <img src={img16} className="ImageCenter"></img>
        </StyledImageCenterWrapper>

        <StyledImageCenterWrapper item md={12} xs={12}>
          <Box
            lineHeight="10px"
            sx={{
              color: "#0306E3",
              fontSize: 40,
              textAlign: "start",
              paddingLeft: "20px",
            }}
          >
            Divers
          </Box>
        </StyledImageCenterWrapper>

        <StyledImageCenterWrapper item md={6} xs={12}>
          <img src={img17} className="ImageCenter"></img>
        </StyledImageCenterWrapper>
        <StyledImageCenterWrapper item md={6} xs={12}>
          <img src={img18} className="ImageCenter"></img>
        </StyledImageCenterWrapper> 
      </Grid>
    </Box>
  );
};

export default PVCProfileRehau;
