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
 
import { Fragment } from "react"; 
import ShowcaseCard4 from "../components/showcase-cards/ShowcaseCard4";
import Spacer from "./Spacer";
import BallotOutlinedIcon from "@mui/icons-material/BallotOutlined";
import HearingOutlinedIcon from "@mui/icons-material/HearingOutlined";
import CabinOutlinedIcon from "@mui/icons-material/CabinOutlined";
import ImagesearchRollerOutlinedIcon from "@mui/icons-material/ImagesearchRollerOutlined";
import OtherHousesOutlinedIcon from "@mui/icons-material/OtherHousesOutlined";
import FlexBox from "../components/FlexBox";
import { H2 } from "../components/Typography"; 
import useWindowDimensions from "../utils/getWindowsDimensions";
 import ReactPlayer from "react-player";

 const bannerImage01 =  process.env.REACT_APP_ASSETS_URL + "images/home/banner01.jpg";
 const bannerImage02 =  process.env.REACT_APP_ASSETS_URL + "images/home/banner02.jpg";

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { height, width } = useWindowDimensions();
  const imageHeight = Math.round((width * 10) / 16);
  const imageWidth = isMobile ? width * 0.9 : width;

  const StyledBanner = styled(Box)(() => ({
    "& .banner-image": {
      height: "auto",
      width: imageWidth,
      maxWidth: "100%",
    },
  }));

  const arrowButtonStyle = {
    boxShadow: "none",
    background: "transparent",
    color: "#7D879C",
  };

  const banners = [
    {
      label: "",
      url: bannerImage01,
    },
    {
      label: "",
      url: bannerImage02,
    },
  ]; 
  return (
    <Fragment> 
      <StyledBanner>
            <img src={bannerImage01} className="banner-image"></img>
      </StyledBanner>
      <Spacer mb="1.5rem" />
      <ReactPlayer
        url="https://ifenetres.fr/videos/1635967378327258.mp4"
        controls={true}
        muted={true}
        playing
        width="100%"
        height="100%"
      />    
   {/*    <Carousel
        totalSlides={banners.length}
        interval={3000}
        autoPlay={true}
        visibleSlides={1}
        leftButtonStyle={{ ...arrowButtonStyle, left: 8 }}
        rightButtonStyle={{ ...arrowButtonStyle, right: 8 }}
      >
        {banners.map((_item, ind) => (
          <StyledBanner>
            <img src={_item.url} className="banner-image"></img>
          </StyledBanner>
        ))}
      </Carousel> */}
      <Spacer mb="1.5rem" />
      <Container sx={{ mb: "4rem" }}>
        <FlexBox
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <H2 mt="1.5rem" mb="0.5rem" lineHeight={1.2}>
            Des fenêtres pour les exigences les plus élevées
          </H2>
        </FlexBox>
      </Container>
      <Grid container spacing={3}>
        <Grid item md={4} xs={12}>
          <ShowcaseCard4
            Icon={BallotOutlinedIcon}
            title="Isolation themeique"
            body="En général, les fenêtres jouent un rôle crucial
              pour faire des économies d'énergie et remplir
              les exigences réglementaires relatives à
              l'isolation thermique en apportant une bonne 
              isolation thermique et une grande étanchéité."
          />
        </Grid>
        <Grid item md={4} xs={12}>
          <ShowcaseCard4
            Icon={HearingOutlinedIcon}
            title="Isolation acoustique"
            body="Lisolation acoustique joue un rôle de plus en
              plus important dans les bâtiments modernes.
              Étant donné le nombre de personnes qui
              résident dans les centres-villes et près des
              routes à trafic élevé, il est important de tenir
              compte autant que possible du bruit ambiant
              pour ne pas s'exposer à des problèmes de
              santés comme le stress."
          />
        </Grid>
        <Grid item md={4} xs={12}>
          <ShowcaseCard4
            Icon={CabinOutlinedIcon}
            title="Protection antieffraction"
            body="Protection et sécurité sont des besoins
              élémentaires. Vous voulez vous sentir en
              sécurité lorsque vous êtes chez vous ? Ne
              laissez rien au hasard. Suivez l'adage : « La
              confiance n'exclue pas le contrôle. »."
          />
        </Grid>
      </Grid>
      <Grid container spacing={3} justifyContent="center">
        <Grid item md={4} xs={12}>
          <ShowcaseCard4
            Icon={ImagesearchRollerOutlinedIcon}
            title="Aspects de surface"
            body="Lisolation acoustique joue un rôle de plus en
              plus important dans les bâtiments modernes.
              Étant donné le nombre de personnes qui
              résident dans les centres-villes et près des
              routes à trafic élevé, il est important de tenir
              compte autant que possible du bruit ambiant
              pour ne pas s'exposer à des problèmes de
              santés comme le stress."
          />
        </Grid>
        <Grid item md={4} xs={12}>
          <ShowcaseCard4
            Icon={OtherHousesOutlinedIcon}
            title="La solution adhésive de
              vitrage collé"
            body="La technologie de vitrage collé unique de
              GEALAN permet de faciliter la fabrication des
              châssis de grande taille."
          />
        </Grid>
      </Grid>
    </Fragment>
  );
};
export default Home;
