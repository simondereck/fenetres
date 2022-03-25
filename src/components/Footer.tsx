import { Box, Container, Grid, Link, styled ,Card} from '@mui/material'
 
import React, { FC } from 'react'
import FlexBox from './FlexBox'

// styled component
const StyledLink = styled('a')(({ theme }) => ({
  position: 'relative',
  display: 'block',
  padding: '0.3rem 0rem',
  color: "white",
  cursor: 'pointer',
  borderRadius: 4,

  '&:hover': {
    color: "white",
  },
}))
 
const Footer: FC = () => {
  return (
    <footer>
      <Box bgcolor="#85BD4A">
        <Container sx={{ p: '1rem', color: 'white' }}>
          <Box py={10} overflow="hidden">
            <Grid container spacing={3}>
              <Grid item lg={4} md={6} sm={6} xs={12}>
                <Box
                  fontSize="25px"
                  fontWeight="600"
                  mb={2.5}
                  lineHeight="1"
                  color="white"
                >
                  À propos de nous 
                </Box> 
                <Box py={0.6}  color="white">
                Année de création 2009,Ifenêtres développe depuis bientôt 15 ans son expertise dans les fenêtres PVC, ALU, BOIS et a construit sa croissance sur la qualité des produits et de son service. Notre savoir-faire acquis depuis de nombreuses années, nous permet de faire face aux exigences techniques (menuiseries de grandes dimensions, fenêtres cintrées en plan) ou aux contraintes liées à l'environnement (bâtiment haussmannien avec fenêtre bois traditionnelle).
Rénovation de maisons anciennes ou contemporaines, restauration d'appartements parisiens, nous fabriquons des fenêtres de formes multiples avec le type d'ouverture que vous souhaitez.
Imaginez la fenêtre de vos rêves, nous la réalisons pour vous.

                </Box>
              </Grid> 
              <Grid item lg={3} md={6} sm={6} xs={12}>
                
                <Grid container spacing={3} alignItems="center" justifyContent ="center"> 
              <Grid item lg={12} md={12} sm={12} xs={12}> 
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
                
              </Grid> 
              <Grid item lg={12} md={12} sm={12} xs={12}>
                
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
              </Grid> 
            </Grid>  
              </Grid>
              <Grid item lg={2} md={6} sm={6} xs={12}>
                <Box
                  fontSize="25px"
                  fontWeight="600"
                  mb={2.5}
                  lineHeight="1"
                  color="white"
                >
                   Aide
                </Box>

                <div>
                    <Link href="/quote-request" key="1" >
                      <StyledLink> Demande un devis  </StyledLink>
                    </Link>
                    <Link href="/payment-online" key="2"  >
                      <StyledLink>Payer en ligne</StyledLink>
                    </Link> 
                    <Link href="https://ifenetres.fr/documents/"  key="3" >
                      <StyledLink>Fiches techniques</StyledLink>
                    </Link>
                </div>
              </Grid>
             
              <Grid item lg={3} md={6} sm={6} xs={12}>
                <Box
                  fontSize="25px"
                  fontWeight="600"
                  mb={2.5}
                  lineHeight="1"
                  color="white"
                >
                  Liens
                </Box>

                <div>
                    <Link href="/terms-condition" key="5"  >
                      <StyledLink>Terms & Conditions</StyledLink>
                    </Link>
                   
                    <Link href="/contact"  key="3" >
                      <StyledLink>Contact</StyledLink>
                    </Link>
                </div>
              </Grid> 
             
            </Grid>
          </Box>
        </Container>
      </Box>
    </footer>
  )
}

 
export default Footer
