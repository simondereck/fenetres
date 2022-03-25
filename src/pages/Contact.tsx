import { Box, Typography, styled,useMediaQuery, Card, Button, useTheme, CardActionArea, CardContent, CardMedia, Container, Grid } from "@mui/material";
 
import { Fragment, useEffect ,useState,useCallback} from "react";
 
import Spacer from "./Spacer"; 
import { GoogleMap, Marker, useJsApiLoader ,LoadScript, InfoWindow} from '@react-google-maps/api';
import useWindowDimensions from "../utils/getWindowsDimensions";
const contactBannerImage  =  process.env.REACT_APP_ASSETS_URL + "images/contact/banner.jpg";

export type MarkerType = { 
  location: google.maps.LatLngLiteral;
  name: string; 
};
const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { height, width } = useWindowDimensions();
  const imageHeight = Math.round((width * 10) / 16);
  const imageWidth = isMobile? width*0.9 : width ;
  const StyledBanner = styled(Card)(() => ({
    "& .banner-image": {
      height: isMobile ? "150px" : "450px",
    },
  }));
   const StyledCard = styled(Card)(() => ({
       padding : "10px" ,
       minHeight: "219px"
   }));
   const containerStyle = {
    width: "auto",
    height: '600px',
    maxWidth: "1200px",
    padding : "10px"
  };
 
  const [map, setMap] =  useState(null)
   const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyB5Gv7sWNV2jrsgh7rQSmc7lIlaUL_nBxM"
  })
  const [selectedMarker, setSelectedMarker] = useState<MarkerType>({} as MarkerType);

  const [markerMap, setMarkerMap] = useState({});
  const [center, setCenter] = useState({ lat:  48.915742, lng: 2.417698 }); 
   const [infoOpen, setInfoOpen] = useState(false);

 const onLoad =  useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    myPlaces.map(place => {
      bounds.extend(place.location);
      return place.name;
    }); 
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])
  
  
  const markerLoadHandler = useCallback(function callback(marker,place) { 
    return setMarkerMap(prevState => {
      return { ...prevState, [place.id]: marker };
    });
  }, []);

  const onMarkerClick = (marker: MarkerType) => setSelectedMarker(marker);

   
  
  const myPlaces = [
    { name: "USINE BOBIGNY ", location: { lat: 48.908270, lng: 2.424960 } },
    { name: " USINE LA COURNEUVE", location: { lat: 48.924900, lng: 2.414680 } },
   ];
  
 
   return (
    <Fragment>
    <StyledBanner>
      <CardActionArea>
        <CardContent>
          <CardMedia image={contactBannerImage} className="banner-image" />
        </CardContent>
      </CardActionArea>
    </StyledBanner>
    <Spacer mb="1.5rem" /> 

    <Container sx={{ p: '1rem'  }}>
          <Box  overflow="hidden">
            <Grid container spacing={3} alignItems="center" justifyContent ="center"> 
              <Grid item lg={4} md={6} sm={6} xs={12}>
                <StyledCard>
                <Box
                  fontSize="25px"
                  fontWeight="600"
                  mb={2.5}
                  lineHeight="1" 
                >
                 USINE LA COURNEUVE
                </Box>
                <Box py={0.6}  >
                  LOT 10,145 RUE RATEAU, 93120 La Courneuve
                </Box>
                <Box py={0.6}   > 
                  Email: <a href= "mailto:lacourneuve@ifenetres.fr">lacourneuve@ifenetres.fr</a>
                </Box>
                 <Box py={0.6} mb={2}>
                  Tél:   <a href= "callto:+33184210597">+33 1 84 21 05 97</a> 
                </Box> 
                </StyledCard>  
              </Grid> 
              <Grid item lg={4} md={6} sm={6} xs={12}>
                <StyledCard>
                <Box
                  fontSize="25px"
                  fontWeight="600"
                  mb={2.5}
                  lineHeight="1"
                 
                >
                  USINE BOBIGNY
                </Box>
                <Box py={0.6}  >
                 126 RUE DE L'ETOILE, 93000 Bobigny
                </Box>
                <Box py={0.6}   >
                  Email: <a href= "mailto:contact@ifenetres.fr">contact@ifenetres.fr</a>
                </Box>
                 <Box py={0.6} mb={2}   >
                  Tél:  <a href= "callto:+33961639246">+33 9 61 63 92 46</a> 
                </Box> 
                <Box py={0.6} mb={2}>
                   Site Internet: <a href= "https://www.ifenetres.fr">www.ifenetres.fr</a>
                </Box>
                </StyledCard>  
              </Grid> 
            </Grid>  
          </Box> 
         {  isLoaded && (
              <GoogleMap
                  mapContainerStyle={containerStyle}
                  center={center}
                  zoom={14}
                  onLoad={onLoad}
                  onUnmount={onUnmount}
                >
                    {myPlaces.map(place => (
                      <Marker
                        key={place.name}
                        position={place.location}  
                        onLoad={marker => markerLoadHandler(marker, place)}
                        onClick={() => onMarkerClick(place)}
             
                      />
                ))}
             {selectedMarker && selectedMarker.location && (
                <InfoWindow position={selectedMarker.location} onCloseClick={() => setSelectedMarker({} as MarkerType)}>
                  <div>
                    <h3>{selectedMarker.name}</h3>  
                  </div>
                </InfoWindow>
              )}
          </GoogleMap>) }
        </Container>
  </Fragment>
  );
};
export default Contact;
 
