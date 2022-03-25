const navbarNavigations = [
  {
    title: 'Accueil',
    url: '/' 
  },
  {
    title: 'Fenêtres en PVC' ,
    child: [
      {
        title: 'Fenêtres en PVC',
         url: '/fenetres-en-pvc',  
      },
      {
        title: 'Profiles Gealan', 
        child: [
          {
            title: 'Profiles Gealan',
            url: '/fenetres-en-pvc/profiles-gealan',
          },
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
        child: [
          {
            title: 'Profiles Rehau',
            url: '/fenetres-en-pvc/profiles-rehau',
          },
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
    child: [
      {
        title: 'Fenêtres en ALUMINIUM',
        url: '/fenetres-en-aluminium',
      },
      {
        title: 'Profiles Rupture', 
        child: [
          {
            title: 'Profiles Rupture',
            url: '/fenetres-en-aluminium/profiles-rupture',
          },
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
    child: [
      {
        title: 'Volet roulant',
        url: '/volet-roulant',
      },
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
    url: '/porte-entree', 
  }, 
  {
    title: 'Accesoirs',
    url: '/accesoirs',
  }, 
  {
    title: 'Contact',
    url: '/contact',
  } 
]

export default navbarNavigations
