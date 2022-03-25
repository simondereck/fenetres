import { Box,
     Typography, 
     useMediaQuery, 
     Button, 
     useTheme ,
     styled,
     Grid } from "@mui/material";
import { Link } from "react-router-dom";  

const TermsCondition = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const StyledTextListDescription = styled(Grid)(() => ({
        alignItems: "center",
        justifyContent: "center",
        "& .desc-item": {
          "& span": {
            color: "#264685",
          },
        },
      }));
    return (
        <div>
        <StyledTextListDescription container spacing={3}>
        <Grid item md={12} xs={12}>
          <Box fontSize="25px" fontWeight="600" mt={2.5} mb={2.5} lineHeight="1">
          PRINCIPES GENERAUX
          </Box>
          <Box py={0.6} className="desc-item">
          Les présentes Conditions Générales de Vente s’appliquent à toutes les Ventes consenties par la société IFENETRES. Elles prévalent sur toutes conditions d'achat ou documents émanant du Client, non signés par IFENETRES. En conséquence, le fait de passer commande implique l’adhésion entière et sans réserve de l’acheteur à ces CGV à l’exclusion de tout autre document en contradiction avec ces CGV. Aucune condition particulière ne peut, sans acceptation formelle et écrite de IFENETRES, prévaloir contre les présentes conditions. Toute condition contraire opposée par l’acheteur sera donc, a défaut d’acceptation écrite expresse du vendeur, inopposable à IFENETRES, quel que soit le moment où elle aura pu être portée à sa connaissance. Le fait que IFENETRES ne se prévale pas, à un moment donné de l’une quelconque des présentes conditions générales, ne peut être interprété comme valant renonciation à se prévaloir ultérieurement de l’une desdites conditions. Toute prise de commande au titre d'un produit figurant dans la boutique en ligne Ifenetres.fr suppose la consultation préalable et l'acceptation des présentes conditions générales. Le consommateur déclare avoir la pleine capacité juridique lui permettant de s'engager au titre des présentes conditions générales. Celles-ci ont pour objet de définir les droits et obligations des parties dans le cadre de la vente en ligne de biens proposés par la société IFENETRES au consommateur. 
          </Box> 
          <Box fontSize="25px" fontWeight="600" mt={2.5} mb={2.5} lineHeight="1">
          CARACTERISTIQUES DES PRODUITS 
          </Box>
          <Box py={0.6} className="desc-item">
          Les produits proposés sont ceux qui figurent dans le catalogue publié sur le site Ifenetres.fr. La spécificité et la technicité des produits nécessitent que le Client s’assure de l’adéquation des produits qu’il choisit avec l’utilisation envisagée, le lieu d’installation, notamment des conditions climatiques locales et de la réglementation applicable, et de l’utilisateur. Ces produits supposent une compétence technique en matière d’installation. Le Client devra en conséquence de la compétence de l’installateur qu’il aura choisi.
          </Box> 
          <Box fontSize="25px" fontWeight="600" mt={2.5} mb={2.5} lineHeight="1">
          PRIX
          </Box>
          <Box py={0.6} className="desc-item">
          Les prix indiqués pour chacun des produits commercialisés par IFENETRES s'entendent toutes taxes comprises (TTC).

          </Box> 
          <Box fontSize="25px" fontWeight="600" mt={2.5} mb={2.5} lineHeight="1">
          IDENTIFICATION
          </Box>
          <Box py={0.6} className="desc-item">
          Le défaut de renseignement concernant l'identification du client entraîne la non validation de la commande.
         Ces informations nominatives ne peuvent faire l'objet d'une utilisation à des fins commerciales par IFENETRES. Conformément à la loi "Informatique et Libertés",  le client dispose (article 34 de la loi du 6 janvier 1978) d'un droit d'accès, de modification, de rectification et de suppression des données qui le concernent, qu'il peut exercer auprès de :

          </Box> 
          <Box py={0.6} className="desc-item" fontWeight="600">
            <div>Société IFENETRES SARL</div>
            83 rue Dulong  75017 PARIS  
          </Box> 
          <Box fontSize="25px" fontWeight="600" mt={2.5} mb={2.5} lineHeight="1">
          COMMANDES
          </Box>
          <Box py={0.6} className="desc-item">
          L’acheteur, qui souhaite acheter un produit doit obligatoirement : 
          </Box> 
          <Box py={0.6} className="desc-item">
          – remplir la fiche d’identification sur laquelle il indiquera toutes les coordonnées demandées ou donner son numéro de client s’il en a un;

          </Box> 
          <Box py={0.6} className="desc-item">
          – remplir le bon de commande en ligne en donnant toutes les références des produits choisis;

          </Box> 
          <Box py={0.6} className="desc-item">
          – valider sa commande après l’avoir vérifiée; 
          </Box> 
          <Box py={0.6} className="desc-item">
          – effectuer le paiement dans les conditions prévues; 
          </Box> 
          <Box py={0.6} className="desc-item">
          La validation de la commande entraîne acceptation des présentes conditions de vente, la reconnaissance d’en avoir parfaite connaissance et la renonciation à se prévaloir de ses propres conditions d’achat ou d’autres conditions.

          </Box> 
          <Box py={0.6} className="desc-item">
          L’ensemble des données fournies et la confirmation enregistrée vaudront preuve de la transaction. La confirmation vaudra signature et acceptation des opérations effectuées.

          </Box> 
          <Box py={0.6} className="desc-item">
          Le vendeur communiquera par courrier électronique confirmation de la commande enregistrée
          </Box>
          <Box fontSize="25px" fontWeight="600" mt={2.5} mb={2.5} lineHeight="1">
          PAIEMENT
          </Box>
          <Box py={0.6} className="desc-item">
          Les commandes ne deviennent définitives qu’après réception du règlement de l'acheteur.
          </Box> 
          <Box py={0.6} className="desc-item">
          Les paiements seront effectués :  </Box> 
          <Box py={0.6} className="desc-item">
          - par carte bancaire  </Box> 
          <Box py={0.6} className="desc-item">
          - par chèque  </Box> 
          <Box py={0.6} className="desc-item">
          - par virement
          </Box> 
          <Box fontSize="25px" fontWeight="600" mt={2.5}  mb={2.5} lineHeight="1">
          LIVRAISON
          </Box>
          <Box py={0.6} className="desc-item">
          Les livraisons s'effectuent exclusivement en France métropolitaine, elles peuvent donner lieu à application de frais de port. Toutefois, les délais de livraison sont toujours donnés à titre indicatif et leur non-respect ne saurait donner lieu à annulation de commande ou à dommages et intérêts.
La Société IFENETRES n’accepte aucune pénalité de retard. IFENETRES se réserve le droit de déterminer librement le mode de transport. La livraison s'effectue au "pas de porte" : en bas de l'immeuble ou à l'entrée de l'habitation du client. Les obligations de IFENETRES sont limitées à la livraison des marchandises commandées, à l’exclusion des travaux de pose.
 
          </Box> 
          <Box fontSize="25px" fontWeight="600" mt={2.5} mb={2.5} lineHeight="1">
          RETRACTATION
          </Box>
          <Box py={0.6} className="desc-item">
          Conformément aux dispositions de la la loi n°2014-344 du 17 mars 2014 du Code de la Consommation, le client dispose à compter de la livraison d'un délai de 14 jours francs pour retourner le produit commandé aux fins d'échange ou de remboursement. Le retour est à la charge du client. Nous n'accepterons pas de retour en port dû, ou si le produit n'est pas accompagné de sa facture. Le produit retourné devra impérativement l'être dans son emballage d'origine, intact, accompagné de tous les accessoires éventuels, notices d'emploi et documentations. Les remboursements clients dus à une annulation ou à un litige sont réalisés 14 jours après la date d'annulation. ART. L121-20-2 : tout produit confectionné sur mesure ne rentre pas dans le cadre des 14 jours de rétractation .
  
          </Box> 
          <Box fontSize="25px" fontWeight="600"  mt={2.5} mb={2.5} lineHeight="1">
          GARANTIES
          </Box>
          <Box py={0.6} className="desc-item">
          IFENETRES est tenue de la garantie légale en cas de défauts ou de vices cachés des produits, conformément aux articles 1641 à 1649 du Code Civil.
La garantie prend effet à la date de facturation pour connaitre la durée de prise en charge veuillez consulter notre rubrique garanties
          </Box> 
          <Box py={0.6} className="desc-item">
          IFENETRES s'engage à remplacer toute pièce manquante ou défectueuse couverte par la garantie dans le délai le plus bref. Cette pièce pourra être remplacée par une pièce compatible si celle-ci n’est plus disponible.
La garantie est limitée au remplacement de la pièce défectueuse, aucun dédommagement ne pourra être réclamé de quelque nature que ce soit (main d'oeuvre, déplacement ...)
          </Box> 
          <Box py={0.6} className="desc-item">
          Les dommages suivants sont exclus de la garantie :
           </Box> 
           <Box py={0.6} className="desc-item">
           - Mise en oeuvre ou utilisation non conforme 
           </Box> 
           <Box py={0.6} className="desc-item">
           - Caractéristiques du produit inadaptée à l'utilisation

           </Box> 
           <Box py={0.6} className="desc-item">
           - Altération ou modification du produit par le client 
           </Box> 
           <Box py={0.6} className="desc-item">
           - Conditions de stockage non conformes. 
           </Box> 
           <Box py={0.6} className="desc-item">
           - Non respect des recommandations d’entretien. 
           </Box> 
           <Box fontSize="25px" fontWeight="600"  mt={2.5} mb={2.5} lineHeight="1">
           FORCE MAJEURE
          </Box>
          <Box py={0.6} className="desc-item">
          IFENETRES se réserve de suspendre ou de résilier tout ou partie de la Vente, de plein droit et sans formalité, en cas d’événement de force majeure ou de cas fortuit intervenant dans ses usines, les industries et les prestataires de service dont elle dépend, et susceptible d’empêcher l’exécution normale de la Vente, à l’exclusion de tous dommages et intérêts et d’annulation de commande.
          </Box> 
          <Box fontSize="25px" fontWeight="600"  mt={2.5} mb={2.5} lineHeight="1">
          REGLEMENT DES DIFFERENDS
          </Box>
          <Box py={0.6} className="desc-item">
          En cas de litige, seul sera compétent le Tribunal de commerce de PARIS, même en cas de référé et nonobstant pluralité d'instances ou de parties, appel en garantie.          </Box> 
        </Grid>
      </StyledTextListDescription>
        </div>
    );


};
export default TermsCondition; 