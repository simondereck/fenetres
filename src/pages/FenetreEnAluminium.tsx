import {
  Box, 
  useMediaQuery, 
  useTheme, 
  styled,
  Grid,
  Container,
} from "@mui/material";

import { Fragment, useEffect ,ReactElement} from "react"; 
import Spacer from "./Spacer"; 
import useWindowDimensions from "../utils/getWindowsDimensions";
import Carousel from "../components/carousel/Carousel";


const bg1 =  process.env.REACT_APP_ASSETS_URL + "images/fenetre-en-aluminium/1.jpg";
const bg2 =  process.env.REACT_APP_ASSETS_URL + "images/fenetre-en-aluminium/2.jpg";
const bg3 =  process.env.REACT_APP_ASSETS_URL + "images/fenetre-en-aluminium/3.jpg";
const bg4 =  process.env.REACT_APP_ASSETS_URL + "images/fenetre-en-aluminium/4.jpg";
const bg5 =  process.env.REACT_APP_ASSETS_URL + "images/fenetre-en-aluminium/5.jpg";
const bg6 =  process.env.REACT_APP_ASSETS_URL + "images/fenetre-en-aluminium/6.jpg";
 
const bannerImage01 =  process.env.REACT_APP_ASSETS_URL + "images/fenetre-en-aluminium/fenetre-en-aluminium1.jpg";
const bannerImage02 =  process.env.REACT_APP_ASSETS_URL + "images/fenetre-en-aluminium/fenetre-en-aluminium2.jpg";
const bannerImage03 =  process.env.REACT_APP_ASSETS_URL + "images/fenetre-en-aluminium/fenetre-en-aluminium3.jpg";
const bannerImage04 =  process.env.REACT_APP_ASSETS_URL + "images/fenetre-en-aluminium/fenetre-en-aluminium4.png";

 const FenetreEnAluminium = () => {
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
  const StyledBanner = styled(Box)(() => ({
    "& .banner-image": {
      height: "auto",
      width: imageWidth,
      maxWidth: "100%",
    },
  }));
  const StyledCarouselBanner = styled<React.FC<StyledCarouselBannerProps>>(
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
  const StyledImageCenterWrapper = styled(Grid)(() => ({
    textAlign: "center",
    "& .ImageCenter": {
      width: "70%",
    },
  }));
  const banners = [
   
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
    } 
  ]
  const arrowButtonStyle = {
    boxShadow: "none",
    background: "transparent",
    color: "#7D879C",
  };
  return (
    <Fragment>
    <Carousel
        totalSlides={banners.length}
        interval={5000}
        autoPlay={true}
        visibleSlides={1}
        leftButtonStyle={{ ...arrowButtonStyle, left: 8 }}
        rightButtonStyle={{ ...arrowButtonStyle, right: 8 }}
      >
        {banners.map((_item, ind) => (
          <StyledCarouselBanner className="banner-image" url={_item.url}>
            <Box></Box>
          </StyledCarouselBanner>
        ))}
      </Carousel>
      <Spacer mb="1.5rem" />
      <Grid container spacing={3}>
        <Grid item md={12} xs={12}>
          <Box fontWeight="600" mb={2.5} lineHeight="1">
            Créer et fabriquer des portes et fenêtres en aluminium, toujours
            plus beaux, toujours plus design, adaptés à tous vos projets, à
            toutes vos exigences tout en épargnant notre environnement
          </Box>
        </Grid>
      </Grid>
      <StyledBanner>
        <img src={bannerImage02} className="banner-image"></img>
      </StyledBanner>
      <Spacer mb="1.5rem" />
      <Grid container spacing={3}>
        <Grid item md={12} xs={12}>
          <Box fontSize="25px" fontWeight="600" mb={2.5} lineHeight="1">
            L'Aluminium 100% recyclable
          </Box>
          <Box py={0.6}>
            L'aluminium, un matériau pur et écologique... Le recyclage de
            l’aluminium est infini !
          </Box>
          <Box py={0.6}>Le “green metal” porte donc bien son nom !</Box>
        </Grid>
      </Grid>

      <Spacer mb="1.5rem" />
      <StyledBanner>
        <img src={bannerImage03} className="banner-image"></img>
      </StyledBanner>

      <Spacer mb="1.5rem" />

      <Grid container spacing={3}>
        <Grid item md={12} xs={12}>
          <Box fontSize="25px" fontWeight="600" mb={2.5} lineHeight="1">
            L’Aluminium : un matériau durable et recyclable
          </Box>
          <Box py={0.6}>Une gamme complète</Box>
          <Box py={0.6}>
            * Le point fort de l’aluminium est son recyclage à l’infini sans
            perdre ses qualités, ni sa valeur.
          </Box>
          <Box py={0.6}>
            * Son recyclage ne nécessite que 5% seulement de l’énergie utilisée
            pour la production de métal primaire, réduisant considérablement
            l’empreinte carbone du matériau.
          </Box>
          <Box py={0.6}>
            * 75% de l’aluminium issu de première fusion depuis 1880 serait
            toujours en circulation. Aujourd’hui, le taux de recyclage de
            l’aluminium atteindrait 95% en Europe.
          </Box>
          <Box py={0.6}>
            * La majorité de l’aluminium utilisé pour l’extrusion des profilés
            aluminium de l’Union Européenne (20% provient du recyclage de
            l’aluminium en France), et tous les déchets aluminium du site sont
            recyclés.
          </Box>
          <Box py={0.6} fontWeight="600">
            * Grâce à ses propriétés, et notamment sa légèreté, l’aluminium
            contribue aussi à la performance énergétique.
          </Box>
          <Box py={0.6} fontWeight="600">
            * Son rapport résistance/poids permet d’installer de grandes
            surfaces vitrées dans des profilés très fins qui maximisent les
            gains d’énergie solaire.
          </Box>
          <Box py={0.6} fontWeight="600">
            * Le fort pouvoir réfléchissant de l’aluminium lui donne des atouts
            pour la gestion de l’éclairage.
          </Box>
        </Grid>
      </Grid>
      <Spacer mb="1.5rem" />
      <StyledBanner>
        <img src={bannerImage04} className="banner-image"></img>
      </StyledBanner>
    </Fragment>
  );
};
export default FenetreEnAluminium;
