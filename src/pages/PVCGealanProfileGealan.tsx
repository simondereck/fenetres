import React, { ReactElement } from 'react'
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
import { H2, H1 } from "../components/Typography";
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MeetingRoomOutlinedIcon from '@mui/icons-material/MeetingRoomOutlined';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import WindowOutlinedIcon from '@mui/icons-material/WindowOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import Spacer from "./Spacer";
import Carousel from "../components/carousel/Carousel";
import useWindowDimensions from '../utils/getWindowsDimensions';

const bg1 =  process.env.REACT_APP_ASSETS_URL + 'images/pvc-gealan-profile-gealan/bg1.jpg';
const bg2 =  process.env.REACT_APP_ASSETS_URL + 'images/pvc-gealan-profile-gealan/bg2.jpg';
const bg3 =  process.env.REACT_APP_ASSETS_URL + 'images/pvc-gealan-profile-gealan/bg3.jpg';
const bg4 =  process.env.REACT_APP_ASSETS_URL + 'images/pvc-gealan-profile-gealan/bg4.jpg';
const bg5 =  process.env.REACT_APP_ASSETS_URL + 'images/pvc-gealan-profile-gealan/bg5.jpg';
const bg6 =  process.env.REACT_APP_ASSETS_URL + 'images/pvc-gealan-profile-gealan/bg6.jpg';
const bg7 =  process.env.REACT_APP_ASSETS_URL + 'images/pvc-gealan-profile-gealan/bg7.jpg';
const bg8 =  process.env.REACT_APP_ASSETS_URL + 'images/pvc-gealan-profile-gealan/bg8.jpg';
const bg9 =  process.env.REACT_APP_ASSETS_URL + 'images/pvc-gealan-profile-gealan/bg9.jpg';

const img1 =  process.env.REACT_APP_ASSETS_URL + 'images/pvc-gealan-profile-gealan/img1.png';
const img2 =  process.env.REACT_APP_ASSETS_URL + 'images/pvc-gealan-profile-gealan/img2.png';
const img3 =  process.env.REACT_APP_ASSETS_URL + 'images/pvc-gealan-profile-gealan/img3.png';
const img4 =  process.env.REACT_APP_ASSETS_URL + 'images/pvc-gealan-profile-gealan/img4.png';
const img5 =  process.env.REACT_APP_ASSETS_URL + 'images/pvc-gealan-profile-gealan/img5.png';
const img6 =  process.env.REACT_APP_ASSETS_URL + 'images/pvc-gealan-profile-gealan/img6.png';
const img7 =  process.env.REACT_APP_ASSETS_URL + 'images/pvc-gealan-profile-gealan/img7.png';
const img8 =  process.env.REACT_APP_ASSETS_URL + 'images/pvc-gealan-profile-gealan/img8.png';
const img9 =  process.env.REACT_APP_ASSETS_URL + 'images/pvc-gealan-profile-gealan/img9.png';
const img10 =  process.env.REACT_APP_ASSETS_URL + 'images/pvc-gealan-profile-gealan/img10.png';
const img11 =  process.env.REACT_APP_ASSETS_URL + 'images/pvc-gealan-profile-gealan/img11.png';
const img12 =  process.env.REACT_APP_ASSETS_URL + 'images/pvc-gealan-profile-gealan/img12.png';
const img13 =  process.env.REACT_APP_ASSETS_URL + 'images/pvc-gealan-profile-gealan/img13.png';
const img14 =  process.env.REACT_APP_ASSETS_URL + 'images/pvc-gealan-profile-gealan/img14.png';
const img15 =  process.env.REACT_APP_ASSETS_URL + 'images/pvc-gealan-profile-gealan/img15.png';

const PVCGealanProfileGealan = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const { height, width } = useWindowDimensions();
    const imageHeight = Math.round((width * 10) / 16);
    const imageWidth = isMobile ? width * 0.9 : width;
    type StyledCarouselBannerProps = {
        url?: string 
        children?: ReactElement  ,
        className? : string
      }
    const StyledBanner = styled<React.FC<StyledCarouselBannerProps>>( ({ children ,url , ...props }) => (
        <Box {...props}> {children} </Box>)
         ) <StyledCarouselBannerProps>(({ url }) => ({ 
        
           
        "&.banner-image": { 
            height:  isMobile ? "180px" : "679px",
            width: imageWidth,
            maxWidth: "100%", 
            margin: '0 auto',
            overflow: 'hidden',
            background: `url(${url}) no-repeat top/cover`,
            paddingBottom: 0,
            backgroundSize: isMobile ? "contain" : "cover"
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
          },
          {
            label: "",
            url: bg7,
          },
          {
            label: "",
            url: bg8,
          },
          {
            label: "",
            url: bg9,
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
        
           <StyledBanner className="banner-image"  url = {_item.url} >  
            <Grid item md={6} xs={11} mt='30px' ml="4%" sx = {{ display : { xs:'none',md: ind==0?'block':'none'} }}>
                   <Box
                       bgcolor="rgba(0,72,145,0.9)"
                       color="#fff"
                       p='30px'
                   >
                       <H1>La gamme de profil??s S 8000 </H1>
                       <H2>pour une atmosph??re parfaite</H2>
                       <Box my='1.5rem'>
                           Notre syst??me de profil??s S 8000 d??montre la coh??rence de notre adaptation au march??. Lors de la fabrication de ce syst??me ?? joint de frappe d'une section de 74 mm, l'optimisation des mat??riaux a ??t?? au c??ur du processus, dans le but de simplifier et de rentabiliser le travail des professionnels de la fen??tre.
                       </Box>
                   </Box>
               </Grid> 
             </StyledBanner>   
        ))} 

         </Carousel>   
         <Grid item md={6} xs={11} mt='10px' ml="4%" sx = {{ display : { lg: 'none' ,xs : 'block'}  }}>
                    <Box
                        bgcolor="rgba(0,72,145,0.9)"
                        color="#fff"
                        p='30px'
                    >
                        <H1>La gamme de profil??s S 8000 </H1>
                        <H2>pour une atmosph??re parfaite</H2>
                        <Box my='1.5rem'>
                            Notre syst??me de profil??s S 8000 d??montre la coh??rence de notre adaptation au march??. Lors de la fabrication de ce syst??me ?? joint de frappe d'une section de 74 mm, l'optimisation des mat??riaux a ??t?? au c??ur du processus, dans le but de simplifier et de rentabiliser le travail des professionnels de la fen??tre.
                        </Box>
                    </Box>
                </Grid>
            <Box mt="30px">
                <Grid container textAlign="center" justifyContent="center">
                    <Grid item md={3} xs={12} mt="20px">
                        <SendOutlinedIcon sx={{
                            color: 'rgb(190, 190, 190)',
                            fontSize: 50,
                            textAlign: 'center',
                            mb: '1.5rem',
                        }} />
                        <H2 color="#004891">La section</H2>
                        <Box lineHeight="30px" px="20px">La section de 74 mm garantit une bonne isolation acoustique et thermique</Box>
                    </Grid>
                    <Grid item md={3} xs={12} mt="20px">
                        <HomeOutlinedIcon sx={{
                            color: 'rgb(190, 190, 190)',
                            fontSize: 50,
                            textAlign: 'center',
                            mb: '1.5rem',
                        }} />
                        <H2 color="#004891">La g??om??trie des profil??s</H2>
                        <Box lineHeight="30px" px="20px">La g??om??trie des profil??s permet d'optimiser les mat??riaux, ce qui pr??serve les ressources et l'environnement</Box>
                    </Grid>
                    <Grid item md={3} xs={12} mt="20px">
                        <MeetingRoomOutlinedIcon sx={{
                            color: 'rgb(190, 190, 190)',
                            fontSize: 50,
                            textAlign: 'center',
                            mb: '1.5rem',
                        }} />
                        <H2 color="#004891">La grande chambre principale</H2>
                        <Box lineHeight="30px" px="20px">La grande chambre principale permet d'int??grer de grands renforts en acier</Box>
                    </Grid>
                    <Grid item md={3} xs={12} mt="20px">
                        <SettingsInputComponentIcon sx={{
                            color: 'rgb(190, 190, 190)',
                            fontSize: 50,
                            textAlign: 'center',
                            mb: '1.5rem',
                        }} />

                        <H2 color="#004891">Un seul renfort en acier pour le ch??ssis</H2>
                        <Box lineHeight="30px" px="20px">Un seul renfort en acier pour le ch??ssis, l'ouvrant et les montants</Box>
                    </Grid>
                    <Grid item md={3} xs={12} mt="20px">
                        <WindowOutlinedIcon sx={{
                            color: 'rgb(190, 190, 190)',
                            fontSize: 50,
                            textAlign: 'center',
                            mb: '1.5rem',
                        }} />
                        <H2 color="#004891">Une atmosph??re int??rieure</H2>
                        <Box lineHeight="30px" px="20px">Une atmosph??re int??rieure plus agr??able et confortable gr??ce au syst??me de ventilation brevet?? GECCO (en option) pour un ??change r??gul?? entre l'air ext??rieur et int??rieur</Box>
                    </Grid>
                    <Grid item md={3} xs={12} mt="20px">
                        <EventAvailableOutlinedIcon sx={{
                            color: 'rgb(190, 190, 190)',
                            fontSize: 50,
                            textAlign: 'center',
                            mb: '1.5rem',
                        }} />
                        <H2 color="#004891">Disponible dans de nombreux coloris</H2>
                        <Box lineHeight="30px" px="20px">Disponible dans de nombreux coloris acrylcolor et films et d??cors</Box>
                    </Grid>
                </Grid>
            </Box>
            <Box>
                <Grid container>
                    <Grid item md={6} xs={12} mt='80px'>
                        <Box textAlign='center'><img src={img1} alt="" /></Box>
                        <ul style={{ listStyle: 'disc', listStylePosition: 'inside', padding: '0 20px' }}>
                            <li>Excellente stabilit?? gr??ce aux grands renforts acier du ch??ssis fixe et de l'ouvrant</li>
                            <li>Grande facilit?? d'entretien gr??ce aux feuillures de grandes dimensions du ch??ssis fixe</li>
                            <li>Disponible en version ?? pan d??cal?? avec parclose biseaut??e double ou en version ?? pan semi-d??cal?? avec parclose arrondie</li>
                        </ul>
                    </Grid>
                    <Grid item md={6} xs={12} mt='80px'>
                        <Box textAlign='center'><img src={img2} alt="" /></Box>
                        <ul style={{ listStyle: 'disc', listStylePosition: 'inside', padding: '0 20px' }}>
                            <li>Excellente stabilit?? gr??ce aux grands renforts acier du ch??ssis fixe et de l'ouvrant</li>
                            <li>Grande facilit?? d'entretien gr??ce aux feuillures de grandes dimensions du ch??ssis fixe</li>
                            <li>Disponible en version ?? pan d??cal?? avec parclose biseaut??e double ou en version ?? pan semi-d??cal?? avec parclose arrondie</li>
                        </ul>
                    </Grid>
                </Grid>
            </Box>
            <Spacer mb="1.5rem" />  
            <Grid container spacing={3}>
               <StyledImageCenterWrapper item md={12} xs={12}>
                <img src={img3} className="ImageCenter"></img>
                </StyledImageCenterWrapper> 
            </Grid>
            <Spacer mb="1.5rem" />  
            <Grid container spacing={3}> 
               <StyledImageCenterWrapper item md={12} xs={12}>
                <Box lineHeight="20px" sx={{
                            color: '#0306E3',
                            fontSize: 40,
                            textAlign: 'start', 
                            paddingLeft :"20px"
                        }}>Dormant</Box>
                </StyledImageCenterWrapper> 
                <StyledImageCenterWrapper item md={6} xs={12}>
                <img src={img4} className="ImageCenter"></img> 
                </StyledImageCenterWrapper>
                <StyledImageCenterWrapper item md={6} xs={12}>
                <img src={img5} className="ImageCenter"></img>
                </StyledImageCenterWrapper> 
                <StyledImageCenterWrapper item md={12} xs={12}>
                <Box lineHeight="20px" sx={{
                            color: '#0306E3',
                            fontSize: 40,
                            textAlign: 'start', 
                            paddingLeft :"20px"
                        }}>Ouvrant</Box>
                </StyledImageCenterWrapper>  
                <StyledImageCenterWrapper item md={6} xs={12}>
                <img src={img8} className="ImageCenter"></img>
            
                </StyledImageCenterWrapper>
                <StyledImageCenterWrapper item md={6} xs={12}>
                <img src={img9} className="ImageCenter"></img>
                </StyledImageCenterWrapper>

                <StyledImageCenterWrapper item md={12} xs={12}>
                <Box lineHeight="20px" sx={{
                            color: '#0306E3',
                            fontSize: 40,
                            textAlign: 'start', 
                            paddingLeft :"20px"
                        }}>Coulissant</Box>
                </StyledImageCenterWrapper> 
                <StyledImageCenterWrapper item md={6} xs={12}>
                <img src={img10} className="ImageCenter"></img>
                </StyledImageCenterWrapper>
                <StyledImageCenterWrapper item md={6} xs={12}>
                <img src={img11} className="ImageCenter"></img>
                </StyledImageCenterWrapper>

                <StyledImageCenterWrapper item md={12} xs={12}>
                <Box lineHeight="10px" sx={{
                            color: '#0306E3',
                            fontSize: 40,
                            textAlign: 'start', 
                            paddingLeft :"20px"
                        }}>Divers</Box>
                </StyledImageCenterWrapper> 

                <StyledImageCenterWrapper item md={6} xs={12}>
                <img src={img12} className="ImageCenter"></img>
                </StyledImageCenterWrapper>
                <StyledImageCenterWrapper item md={6} xs={12}>
                <img src={img13} className="ImageCenter"></img>
                </StyledImageCenterWrapper>
                <StyledImageCenterWrapper item md={6} xs={12}>
                <img src={img14} className="ImageCenter"></img>
                </StyledImageCenterWrapper>
                <StyledImageCenterWrapper item md={6} xs={12}>
                <img src={img15} className="ImageCenter"></img> 
                </StyledImageCenterWrapper>
            </Grid>
        </Box>
    )
}

export default PVCGealanProfileGealan;
