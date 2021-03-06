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
            Tout l???ann??e les volets font preuve de leurs utilit??s. Pendant les
            p??riodes les plus froides, ils fournissent une isolation
            suppl??mentaire et retiennent en grande partie de l?????nergie
            thermique. Les jours ensoleill??s ils se sont av??r??s tr??s efficace
            pour conserver la fraicheur de votre int??rieur. En position ferm??e
            -ou semi-ferm??e-,filtrent la lumi??re et limitent les reflects sur
            les ??crans et prot??gent ainsi votre mobilier.
          </Box>
          <Box py={0.6}>
            Nos volets roulants sont faciles ?? utiliser,tant manuellement
            qu???avec une commande automatique. Motoris??s, ils peuvent ??tre
            command??s par interrupteur, t??l??commande ou encore par la domotique.
          </Box>
          <Box py={0.6}>
            Equip??s d???une coulisse double, il peut int??grer une moustiquaire
            entre la fen??tre et le volet. Ainsi les insectes ne p??n??trent pas
            l???habitat pendant que vous ventilez.
          </Box>
          <Box py={0.6} mb={2}>
            Entre le tablier du volet et la vitrage le ?? coussin d???air ?? offre
            une isolation thermique parfaite.
          </Box>

          <Box fontSize="25px" fontWeight="600" mb={2.5} lineHeight="1">
            PRIVACY
          </Box>
          <Box py={0.6} mb={2}>
            Les volets roulants vous prot??gent non seulement du froid et de la
            lumi??re du soleil mais ils garantissent ??galement la protection de
            votre vie priv??e. Vous ??vitez ainsi les regards indiscrets des
            passant. En position ferm??e -ou semi-ferm??e-,filtrent la lumi??re et
            limitent les reflects sur les ??crans et prot??gent ainsi votre
            mobilier.
          </Box>
          <Box fontSize="25px" fontWeight="600" mb={2.5} lineHeight="1">
            ANTI-EFFRACTION
          </Box>
          <Box py={0.6}>
            Le sentiment de s??curit?? est souvent la caract??ristique la plus
            importante lors du choix des volets,et c'est justifi??. Avec une
            fermeture fixe pour les portes et fen??tres on se prot??ge des intrus.
            Notre gamme Minirol est ??quip??e de ressorts de s??curit??. Ils ??
            verrouillent ?? les lames en position ferm??e assurant ainsi une
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
            ??CONOMIE D?????NERGIE{" "}
          </Box>
          <Box py={0.6} fontSize="25px" fontWeight="600">
            R??alisez aussi des ??conomies d?????nergie!
          </Box>
          <Box py={0.6}>
            Gr??ce ?? ses performances, les volets roulants font l?????conomie
            d?????nergie: moins de climatisation l?????t?? ! Pendant les mois d???hiver,
            vous conservez la chaleur. En cr??ant une chambre d???air entre le
            volet et la vitrage, le volet agit comme un isolant. Notre gamme
            Minirol est ??quip??e de ressorts de s??curit??. Ils ?? verrouillent ??
            les lames en position ferm??e assurant ainsi une protection
            anti-effraction efficace.
          </Box>
          <Box py={0.6}>
            Vous participez ?? l???am??lioration de l???habitat et ses performances en
            r??duisant la facture ??nerg??tique. Avez-vous d??j?? pens?? ?? un moteur
            ??nergie solaire? Choisir l?????nergie solaire a beaucoup d???avantages:
            ??conomie d'??nergie ,efficace et fiable . En plus c'est sans fil et
            donc facile ?? installer.
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
              Le profil BP42RS est le profil standard avec le Minirol?? SOLAR
            </Box>
            <Box py={0.6}>
              <ul>
                <li>
                  Avec un excellent diam??tre d???enroulement le Minirol?? SOLAR
                  s???enroule dans un caisson compact. Pour une porte ou une
                  fen??tre coulissante, le volet peut s???enrouler dans un caison
                  de 180mm au maximum, hauteur 2,3m sous coffre.
                </li>
                <li>
                  De plus, la BP42RS est un profil tr??s robuste.Vous couvrez une
                  largeur jusqu????? 3,5m, id??al pour les coulissants de grande
                  dimension.
                </li>
              </ul>
            </Box>
            <Box py={0.6}>
              Les bonnes performances de notre BP42RS vous permettent d'utiliser
              un seul et m??me profil pour toute la maison. La combinaison de la
              grande largeur et l???enroulement compact, vous assure la
              possibilit?? de fournir m??me les grandes fen??tres avec un petit
              caisson.
            </Box>
            <Box py={0.6}>
              Pour des applications extra large , le profil BP55RS est mieux
              adapt?? (largeur max. de 4,8m)
            </Box>
            <Box py={0.6}>
              Un volet roulant en applique agit comme une protection
              anti-effraction en utilisant des ressorts de s??curit??
              suppl??mentaires. La protection contre les remont??es garantit que
              le volet reste toujours abaiss??.
            </Box>
            <Box py={0.6}>
              Avec un volet Minirol?? SOLAR vous pouvez opter pour une lame
              finale qui ferme le passage dans le coffre. Un design moderne,
              lisse et en augmentant la visibilit??.
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
                  R??novation
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
                        R??novation
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
                        - devant le ch??ssis, ?? l???ext??rieur
                      </Box>
                      <Box
                       mb={1}
                        ml={5.5}
                        lineHeight="1"
                        fontSize="15px"
                        fontWeight="normal"
                      >
                        - devant le mur, ?? l???ext??rieur
                      </Box>
                    </li>
                  </ul>
                </Box>
                <Box fontSize="20px" fontWeight="600" mb={2.5} lineHeight="1">
                  Ex??cution:
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
                        Caisson : Tous les caissons sont fabriqu??s en aluminium
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
                        Lames : La choix parmi des lames en alum profil?? ou PVC
                        (dimensions plus petites) PVC (dimensions plus petites)
                      </Box>
                      <Box py={0.6} fontSize="15px">
                        BP42RS (ALU) jusqu????? 5,5m??
                      </Box>
                      <Box py={0.6} fontSize="15px">
                        BP55RS (ALU) jusqu????? 4,8m??
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
                  Caract??ristiques techniques
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
                        Design du caisson: pan coup?? (45??) ??? carr?? (90??) ou ?? de
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
            Le profil BP42RS est le profil standard avec le Minirol?? SOLAR
          </Box>
          <Box py={0.6} pl={1.5}>
            <ul>
              <li>
                En raison du bon diam??t d'enroulement de ce profil??, le Minirol??
                MONO s???enroule dans un petit caisson. Pour une porte ou une
                fen??tre coulissante, le volet peut s???enrouler dans un caison de
                205mm au maximum, hauteur 2,3m sous coffre.
              </li>
              <li>
                De plus, la BP42RS est un profil tr??s robuste.Vous couvrez une
                largeur jusqu????? 3,5m, id??al pour les coulissants de grande
                dimension.
              </li>
            </ul>
          </Box>
          <Box py={0.6}>
            La coulisses double vous permet d???installer un moustiquaire fixe
            entre la fen??tre et le volet.
          </Box>
          <Box py={0.6}>
            Le profil d'adaptation et la fixation lat??rale assurent une
            installation parfaite.
          </Box>
          <Box py={0.6} mb={1}>
            Accessible par la face int??rieure ou inf??rieure
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
                Construction neuve et r??novation
              </Box>
            </li>
            <li>
              <Box fontSize="15px" fontWeight="500"   mb={1} ml={1.5}>
                Montage:Type bloc-baie (sur la menuiserie)
              </Box>
              <Box fontSize="18px" fontWeight="600"   mb={1} lineHeight="1">
                Ex??cution:
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
                      Caisson : Tous les caisson sont fabriqu??s en PVC, avec en
                      option une plaque de fa??ade en aluminium est propos??e.
                      Isolation suppl??mentaire du caisson est possible
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
                      Lames : La choix parmi des lames en alum profil?? ou PVC
                      (dimensions plus petites) PVC (dimensions plus petites)
                    </Box>
                    <Box py={0.6} fontSize="15px">
                      BP42RS (ALU) jusqu????? 8m??
                    </Box>
                    <Box py={0.6} fontSize="15px">
                      L44R (PVC) jusqu????? 4,5m??
                    </Box>{" "}
                    <Box
                      fontSize="15px"
                      fontWeight="400"
                      mb={1}
                      ml={2.5}
                      lineHeight="1"
                    >
                      Commande: Standard ??l??ctrique (motorisation Somfy) <br />
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
