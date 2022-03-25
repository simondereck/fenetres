const navbarNavigationsMobile = [
  {
    title: 'Accueil',
    url: '/' 
  },
  {
    title: 'Fenêtres en PVC' ,
    url: '/fenetres-en-pvc', 
    child: [  
      {
        title: 'Profiles Gealan', 
        url: '/fenetres-en-pvc/profiles-gealan',
        child: [ 
          {
            title: 'Frappe',
            url: '/fenetres-en-pvc/profiles-gealan/frappe',
          },
          {
            title: 'Coulissant',
            url: '/fenetres-en-pvc/profiles-gealan/coulissant',
          }]
      },
      {
        title: 'Profiles Rehau',
        url: '/fenetres-en-pvc/profiles-rehau',
        child: [ 
          {
            title: 'Frappe',
            url: '/fenetres-en-pvc/profiles-rehau/frappe',
          },
          {
            title: 'Coulissant',
            url: '/fenetres-en-pvc/profiles-rehau/coulissant',
          }]
      } 
    ],
  },
  {
    title: 'Fenêtres en BOIS',
    url: '/fenetres-en-bois'  
  },
  {
    title: 'Fenêtres en ALUMINIUM',
    url: '/fenetres-en-aluminium',
    child: [ 
      {
        title: 'Profiles Rupture', 
        url: '/fenetres-en-aluminium/profiles-rupture', 
        child: [ 
          {
            title: 'Frappe',
            url: '/fenetres-en-aluminium/profiles-rupture/frappe',
          },
          {
            title: 'Coulissant',
            url: '/fenetres-en-aluminium/profiles-rupture/coulissant',
          }]
      },
      {
        title: 'Profiles series froide',
        url: '/fenetres-en-aluminium/profiles-series-froide',
      } ,
      {
        title: 'Profiles vérrier',
        url: '/fenetres-en-aluminium/profiles-verrier',
      } 
    ] 
  },
  {
    title: 'Volet roulant',
    url: '/volet-roulant', 
    child: [ 
      {
        title: 'Porte roulant',
        url: '/volet-roulant/porte-roulant',
      },
      {
        title: 'Screen',
        url: '/volet-roulant/screen',
      } 
    ] 
  }, 
  {
    title: "Porte d'entrée",
    url: '/porte-entree' 
  }, 
  {
    title: 'Accesoirs',
    url: '/accesoirs',
  }, 
  {
    title: 'Contact',
    url: '/contact',
  } , 
  {
    title: 'Demande Un Devis',
    url: '/quote-request',
  } , 
  {
    title: 'Payer En Ligne',
    url: '/payment-online',
  } , 
  {
    title: 'Fiche Technique',
    url: 'https://ifenetres.fr/documents/' 
  } 
]

export default navbarNavigationsMobile
