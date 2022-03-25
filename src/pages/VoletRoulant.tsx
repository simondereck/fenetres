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

const bannerImage01 = process.env.REACT_APP_ASSETS_URL +  "images/volet-roulant/volet-roulant01.jpg";
const bannerImage02 = process.env.REACT_APP_ASSETS_URL + "images/volet-roulant/volet-roulant02.jpg";
const bannerImage03 = process.env.REACT_APP_ASSETS_URL +  "images/volet-roulant/volet-roulant03.jpg";
const bannerImage04 = process.env.REACT_APP_ASSETS_URL +  "images/volet-roulant/volet-roulant04.jpg";
const bannerImage05 = process.env.REACT_APP_ASSETS_URL +  "images/volet-roulant/volet-roulant05.jpg";
const bannerImage06 = process.env.REACT_APP_ASSETS_URL +  "images/volet-roulant/volet-roulant06.jpg";
const bannerImage08 = process.env.REACT_APP_ASSETS_URL +  "images/volet-roulant/volet-roulant08.jpg";
const VoletRoulant = () => {
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
      width: "70%",
    },
  })); 
  return (
    <Fragment>
      <StyledBanner>
        <img src={bannerImage01} className="banner-image"></img>
      </StyledBanner>
      <Spacer mb="1.5rem" />
      <Grid container spacing={3}>
        <StyledImageCenterWrapper item md={4} xs={12}>
          <img src={bannerImage02} className="ImageCenter"></img>
        </StyledImageCenterWrapper>
        <Grid item md={8} xs={12}>
          <Box fontSize="25px" fontWeight="600" mb={2.5} lineHeight="1">
            CONFORT
          </Box>
          <Box py={0.6}>
            Tout l’année les volets font preuve de leurs utilités. Pendant les
            périodes les plus froides, ils fournissent une isolation
            supplémentaire et retiennent en grande partie de l’énergie
            thermique. Les jours ensoleillés ils se sont avérés très efficace
            pour conserver la fraicheur de votre intérieur. En position fermée
            -ou semi-fermée-,filtrent la lumière et limitent les reflects sur
            les écrans et protègent ainsi votre mobilier.
          </Box>
          <Box py={0.6}>
            Nos volets roulants sont faciles à utiliser,tant manuellement
            qu’avec une commande automatique. Motorisés, ils peuvent être
            commandés par interrupteur, télécommande ou encore par la domotique.
          </Box>
          <Box py={0.6}>
            Equipés d’une coulisse double, il peut intégrer une moustiquaire
            entre la fenêtre et le volet. Ainsi les insectes ne pénètrent pas
            l’habitat pendant que vous ventilez.
          </Box>
          <Box py={0.6} mb={2}>
            Entre le tablier du volet et la vitrage le « coussin d’air » offre
            une isolation thermique parfaite.
          </Box>

          <Box fontSize="25px" fontWeight="600" mb={2.5} lineHeight="1">
            PRIVACY
          </Box>
          <Box py={0.6} mb={2}>
            Les volets roulants vous protègent non seulement du froid et de la
            lumière du soleil mais ils garantissent également la protection de
            votre vie privée. Vous évitez ainsi les regards indiscrets des
            passant. En position fermée -ou semi-fermée-,filtrent la lumière et
            limitent les reflects sur les écrans et protègent ainsi votre
            mobilier.
          </Box>
          <Box fontSize="25px" fontWeight="600" mb={2.5} lineHeight="1">
            ANTI-EFFRACTION
          </Box>
          <Box py={0.6}>
            Le sentiment de sécurité est souvent la caractéristique la plus
            importante lors du choix des volets,et c'est justifié. Avec une
            fermeture fixe pour les portes et fenêtres on se protège des intrus.
            Notre gamme Minirol est équipée de ressorts de sécurité. Ils «
            verrouillent » les lames en position fermée assurant ainsi une
            protection anti-effraction efficace.
          </Box>
        </Grid>
      </Grid>
      <StyledBanner>
        <img src={bannerImage03} className="banner-image"></img>
      </StyledBanner>
      <Spacer mb="1.5rem" />
      <Grid container spacing={3} mb={2.5}>
        <Grid item md={12} xs={12}>
          <Box fontSize="25px" fontWeight="600" mb={2.5} lineHeight="1">
            ÉCONOMIE D’ÉNERGIE{" "}
          </Box>
          <Box py={0.6} fontSize="25px" fontWeight="600">
            Réalisez aussi des économies d’énergie!
          </Box>
          <Box py={0.6}>
            Grâce à ses performances, les volets roulants font l’économie
            d’énergie: moins de climatisation l’été ! Pendant les mois d’hiver,
            vous conservez la chaleur. En créant une chambre d’air entre le
            volet et la vitrage, le volet agit comme un isolant. Notre gamme
            Minirol est équipée de ressorts de sécurité. Ils « verrouillent »
            les lames en position fermée assurant ainsi une protection
            anti-effraction efficace.
          </Box>
          <Box py={0.6}>
            Vous participez à l’amélioration de l’habitat et ses performances en
            réduisant la facture énergétique. Avez-vous déjà pensé à un moteur
            énergie solaire? Choisir l’énergie solaire a beaucoup d’avantages:
            économie d'énergie ,efficace et fiable . En plus c'est sans fil et
            donc facile à installer.
          </Box>
        </Grid>
      </Grid>
      <StyledBanner>
        <img src={bannerImage04} className="banner-image"></img>
      </StyledBanner>
      <Spacer mb="1.5rem" />
      <Grid container spacing={3} mb={2.5} justifyContent="center">
        <StyledImageCenterWrapper item md={6} xs={12}>
          <img src={bannerImage06} className="ImageCenter"></img>
        </StyledImageCenterWrapper>
      </Grid>
      <Grid container spacing={3} mb={2.5} justifyContent ="center"> 
         <Grid container md={9} xs={12} >
          <Grid item md={6} xs={12}>
            <Box py={0.6}>
              Le profil BP42RS est le profil standard avec le Minirol® SOLAR
            </Box>
            <Box py={0.6}>
              <ul>
                <li>
                  Avec un excellent diamètre d’enroulement le Minirol® SOLAR
                  s’enroule dans un caisson compact. Pour une porte ou une
                  fenêtre coulissante, le volet peut s’enrouler dans un caison
                  de 180mm au maximum, hauteur 2,3m sous coffre.
                </li>
                <li>
                  De plus, la BP42RS est un profil très robuste.Vous couvrez une
                  largeur jusqu’à 3,5m, idéal pour les coulissants de grande
                  dimension.
                </li>
              </ul>
            </Box>
            <Box py={0.6}>
              Les bonnes performances de notre BP42RS vous permettent d'utiliser
              un seul et même profil pour toute la maison. La combinaison de la
              grande largeur et l’enroulement compact, vous assure la
              possibilité de fournir même les grandes fenêtres avec un petit
              caisson.
            </Box>
            <Box py={0.6}>
              Pour des applications extra large , le profil BP55RS est mieux
              adapté (largeur max. de 4,8m)
            </Box>
            <Box py={0.6}>
              Un volet roulant en applique agit comme une protection
              anti-effraction en utilisant des ressorts de sécurité
              supplémentaires. La protection contre les remontées garantit que
              le volet reste toujours abaissé.
            </Box>
            <Box py={0.6}>
              Avec un volet Minirol® SOLAR vous pouvez opter pour une lame
              finale qui ferme le passage dans le coffre. Un design moderne,
              lisse et en augmentant la visibilité.
            </Box>
          </Grid>
          <Grid item md={5} xs={12} ml={2.5}>
            <Box fontSize="20px" fontWeight="600" mb={1} lineHeight="1">
              Application
            </Box>
            <ul>
              <li>
                <Box
                  fontSize="17px"
                  fontWeight="500" 
                  lineHeight="1"
                  ml={1.5}
                >
                  Rénovation
                </Box>
              </li>
              <li>
                <Box fontSize="17px" fontWeight="500"mb={1} ml={1.5}>
                  Montage
                </Box>
                <Box
                  fontSize="15px"
                  fontWeight="500"
                  mb={1}
                  ml={1.5}
                  lineHeight="1"
                >
                  <ul>
                    <li>
                      <Box
                        fontSize="15px"
                        fontWeight="400"
                        lineHeight="1"
                        mb={1}
                        ml={2.5}
                      >
                        Rénovation
                      </Box>
                    </li>
                    <li>
                      <Box
                        fontSize="15px"
                        fontWeight="400"
                        mb={1}
                        ml={2.5}
                        lineHeight="1"
                      >
                        Montage
                      </Box>
                      <Box fontSize="15px" mb={1} ml={4.5} lineHeight="1">
                        En applique :
                      </Box>
                      <Box
                       mb={1}
                        ml={5.5}
                        fontSize="15px"
                        lineHeight="1"
                        fontWeight="normal"
                      >
                        - devant le châssis, à l’extérieur
                      </Box>
                      <Box
                       mb={1}
                        ml={5.5}
                        lineHeight="1"
                        fontSize="15px"
                        fontWeight="normal"
                      >
                        - devant le mur, à l’extérieur
                      </Box>
                    </li>
                  </ul>
                </Box>
                <Box fontSize="20px" fontWeight="600" mb={2.5} lineHeight="1">
                  Exécution:
                </Box>
                <Box
                  fontSize="15px"
                  fontWeight="500"
                  mb={1}
                  ml={1.5}
                  lineHeight="1"
                >
                  <ul>
                    <li>
                      <Box
                        fontSize="15px"
                        fontWeight="400"
                        lineHeight="1"
                        mb={1}
                        ml={2.5}
                      >
                        Caisson : Tous les caissons sont fabriqués en aluminium
                      </Box>
                    </li>
                    <li>
                      <Box
                        fontSize="15px"
                        fontWeight="400"
                        mb={1}
                        ml={2.5}
                        lineHeight="1"
                      >
                        Finition : La lame finale et les lames du tablier sont
                        disponibles dans tous les coloris RAL
                      </Box>
                      <Box fontSize="15px" mb={1.5} ml={2.5} lineHeight="1">
                        Lames : La choix parmi des lames en alum profilé ou PVC
                        (dimensions plus petites) PVC (dimensions plus petites)
                      </Box>
                      <Box py={0.6} fontSize="15px">
                        BP42RS (ALU) jusqu’à 5,5m²
                      </Box>
                      <Box py={0.6} fontSize="15px">
                        BP55RS (ALU) jusqu’à 4,8m²
                      </Box>{" "}
                      <Box
                        fontSize="15px"
                        fontWeight="400"
                        mb={1}
                        ml={2.5}
                        lineHeight="1"
                      >
                        Commande: Moteur solaire Somfy (10N)
                      </Box>
                    </li>
                  </ul>
                </Box>

                <Box fontSize="20px" fontWeight="600" mb={1} lineHeight="1">
                  Caractéristiques techniques
                </Box>
                <Box
                  fontSize="15px"
                  fontWeight="500"
                  mb={1}
                  ml={1.5}
                  lineHeight="1"
                >
                  <ul>
                    <li>
                      <Box
                        fontSize="15px"
                        fontWeight="400"
                        lineHeight="1"
                        mb={1}
                        ml={2.5}
                      >
                        Taille de caisson: 125mm '{">"}' 205mm (BP42RS); '{">"}'
                        250mm (BP55RS)
                      </Box>
                    </li>
                    <li>
                      <Box
                        fontSize="15px"
                        fontWeight="400"
                        mb={1}
                        ml={2.5}
                        lineHeight="1"
                      >
                        Design du caisson: pan coupé (45°) – carré (90°) ou ¼ de
                        rond
                      </Box>
                    </li>
                  </ul>
                </Box>
              </li>
            </ul>
          </Grid> 
          </Grid> 
      </Grid>  
      <Grid container spacing={3} mb={2.5} justifyContent="center">
        <StyledImageCenterWrapper item md={6} xs={12}>
          <img src={bannerImage08} className="ImageCenter"></img>
        </StyledImageCenterWrapper>
      </Grid>
      <Spacer mb="1.5rem" />
      <Grid container spacing={3} mb={2.5}>
        <StyledImageCenterWrapper item md={6} xs={12}>
          <img src={bannerImage05} className="ImageCenter"></img>
        </StyledImageCenterWrapper>
        <Grid item md={4} xs={12}>
          <Box py={0.6}>
            Le profil BP42RS est le profil standard avec le Minirol® SOLAR
          </Box>
          <Box py={0.6} pl={1.5}>
            <ul>
              <li>
                En raison du bon diamèt d'enroulement de ce profilé, le Minirol®
                MONO s’enroule dans un petit caisson. Pour une porte ou une
                fenêtre coulissante, le volet peut s’enrouler dans un caison de
                205mm au maximum, hauteur 2,3m sous coffre.
              </li>
              <li>
                De plus, la BP42RS est un profil très robuste.Vous couvrez une
                largeur jusqu’à 3,5m, idéal pour les coulissants de grande
                dimension.
              </li>
            </ul>
          </Box>
          <Box py={0.6}>
            La coulisses double vous permet d’installer un moustiquaire fixe
            entre la fenêtre et le volet.
          </Box>
          <Box py={0.6}>
            Le profil d'adaptation et la fixation latérale assurent une
            installation parfaite.
          </Box>
          <Box py={0.6} mb={1}>
            Accessible par la face intérieure ou inférieure
          </Box>
          <Box fontSize="18px" fontWeight="600"   mb={1} lineHeight="1">
            Application
          </Box>
          <ul>
            <li>
              <Box
                fontSize="15px"
                fontWeight="500"
                mb={1}
                lineHeight="1"
                ml={1.5}
              >
                Construction neuve et rénovation
              </Box>
            </li>
            <li>
              <Box fontSize="15px" fontWeight="500"   mb={1} ml={1.5}>
                Montage:Type bloc-baie (sur la menuiserie)
              </Box>
              <Box fontSize="18px" fontWeight="600"   mb={1} lineHeight="1">
                Exécution:
              </Box>
              <Box
                fontSize="15px"
                fontWeight="500"
                mb={1}
                ml={1.5}
                lineHeight="1"
              >
                <ul>
                  <li>
                    <Box
                      fontSize="15px"
                      fontWeight="400"
                      lineHeight="1"
                      mb={1}
                      ml={2.5}
                    >
                      Caisson : Tous les caisson sont fabriqués en PVC, avec en
                      option une plaque de façade en aluminium est proposée.
                      Isolation supplémentaire du caisson est possible
                    </Box>
                  </li>
                  <li>
                    <Box
                      fontSize="15px"
                      fontWeight="400"
                      mb={1}
                      ml={2.5}
                      lineHeight="1"
                    >
                      Finition : La lame finale et les lames du tablier sont
                      disponibles dans tous les coloris RAL
                    </Box>
                    <Box  py={0.6}   fontWeight="400"  mb={1} ml={2.5} lineHeight="1">
                      Lames : La choix parmi des lames en alum profilé ou PVC
                      (dimensions plus petites) PVC (dimensions plus petites)
                    </Box>
                    <Box py={0.6} fontSize="15px">
                      BP42RS (ALU) jusqu’à 8m²
                    </Box>
                    <Box py={0.6} fontSize="15px">
                      L44R (PVC) jusqu’à 4,5m²
                    </Box>{" "}
                    <Box
                      fontSize="15px"
                      fontWeight="400"
                      mb={1}
                      ml={2.5}
                      lineHeight="1"
                    >
                      Commande: Standard éléctrique (motorisation Somfy) <br />
                      Utilisation manuelle possible
                    </Box>
                  </li>
                </ul>
              </Box>
            </li>
          </ul>
        </Grid>
      </Grid>
    </Fragment>
  );
};
export default VoletRoulant;
