import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  useMediaQuery,
  Button,
  Menu,
  MenuItem,
  ListItemIcon
} from "@mui/material";

import { styled, Theme, useTheme } from "@mui/material/styles";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";


// IMPORTING ICONS
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./header.module.scss";

// REACT APP IMPORTS
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Estimation from "../pages/Estimation";
import PaymentOnline from "../pages/PaymentOnline";
import PaySuccess from "../pages/PaySuccess";
import PayFailed from "../pages/PayFailed";
import FenetreEnPVC from "../pages/FenetreEnPVC";
import PVCGealanProfileGealan from "../pages/PVCGealanProfileGealan"
import PVCGealanCoulissant from "../pages/PVCGealanCoulissant";
import PVCGealanFrappe from "../pages/PVCGealanFrappe";
import PVCRehauCoulissant from "../pages/PVCRehauCoulissant";
import PVCRehauFrappe from "../pages/PVCRehauFrappe";
import QuoteRequest from "../pages/QuoteRequest";
import FenetresEnBois from "../pages/FenetresEnBois";
import AluminiumRupture from "../pages/AluminiumRupture";
import FenetreEnAluminium from "../pages/FenetreEnAluminium";
/* import TermsCondition from "../pages/TermsCondition";
import TechnicalDocument from "../pages/TechnicalDocument";
import VoletRoulant from "../pages/VoletRoulant";
import PorteEntree from "../pages/PorteEntree";
import Accesoirs from "../pages/Accesoirs";
import PorteRoulant from "../pages/PorteRoulant";
import Screen from "../pages/Screen";
import ProfilesVerrier from "../pages/ProfilesVerrier";
import ProfilesSeriesFroide from "../pages/ProfilesSeriesFroide";
import AluminiumRuptureFrappe from "../pages/AluminiumRuptureFrappe";
import AluminiumRuptureCoulissant from "../pages/AluminiumRuptureCoulissant";
import PVCProfileRehau from "../pages/PVCProfileRehau";
 */
const Main = () => {

  const [anchor, setAnchor] = React.useState(null);
  const open = Boolean(anchor);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleMenu = (event: React.BaseSyntheticEvent<MouseEvent>) => {
    setAnchor(event.currentTarget);
  };

  const StyledPageContainer = styled("div")(() => ({
    marginTop: isMobile ? "60px" : "160px"
  }));
  return (
    <StyledPageContainer className ="pageContent" >
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/quote-request" component={QuoteRequest} />
        <Route exact path="/payment-online" component={PaymentOnline} />
        <Route exact path="/fenetres-en-pvc" component={FenetreEnPVC} />
        <Route exact path="/fenetres-en-pvc/profiles-gealan" component={PVCGealanProfileGealan} />
        <Route exact path="/fenetres-en-pvc/profiles-gealan/coulissant" component={PVCGealanCoulissant} />
        <Route exact path="/fenetres-en-pvc/profiles-gealan/frappe" component={PVCGealanFrappe} />
        <Route exact path="/fenetres-en-pvc/profiles-rehau/coulissant" component={PVCRehauCoulissant} />
        <Route exact path="/fenetres-en-pvc/profiles-rehau/frappe" component={PVCRehauFrappe} />
        <Route exact path="/fenetres-en-bois" component={FenetresEnBois} /> 
        <Route exact path="/fenetres-en-aluminium" component={FenetreEnAluminium} /> 
        <Route exact path="/fenetres-en-aluminium/profiles-rupture" component={AluminiumRupture} />
{/*         <Route exact path="/pay/success" component={PaySuccess} />
        <Route exact path="/pay/faild" component={PayFailed}/>
        <Route exact path="/terms-condition" component={TermsCondition}/>  
        <Route exact path="/volet-roulant" component={VoletRoulant}/>  
        <Route exact path="/porte-entree" component={PorteEntree}/>   
        <Route exact path="/accesoirs" component={Accesoirs}/>  
        <Route exact path="/volet-roulant/porte-roulant" component={PorteRoulant}/>   
        <Route exact path="/volet-roulant/screen" component={Screen}/>    
        <Route exact path="/fenetres-en-aluminium/profiles-verrier" component={ProfilesVerrier}/>     
        <Route exact path="/fenetres-en-aluminium/profiles-series-froide" component={ProfilesSeriesFroide}/>     
        <Route exact path="/fenetres-en-aluminium/profiles-rupture/frappe" component={AluminiumRuptureFrappe}/>     
        <Route exact path="/fenetres-en-aluminium/profiles-rupture/coulissant" component={AluminiumRuptureCoulissant}/>     
        <Route exact path="/fenetres-en-pvc/profiles-rehau" component={PVCProfileRehau}/>     
 */}
      </Switch> 
    </StyledPageContainer>
  );
};

export default Main;
