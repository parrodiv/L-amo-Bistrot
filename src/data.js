// import icons
import { FaWhatsapp, FaFacebookF, FaInstagram } from 'react-icons/fa'

// Home Images
import locationImg from './assets/img/boxImagesHome/location.jpeg'
import foodImg from './assets/img/foodPage/image00140_optimized.jpeg'
import drinkImg from './assets/img/drinkPage/photo_2023-03-25_15-59-07_optimized.jpg'

// Bistrot logo senza background
import bistrotHero from './assets/img/hero/bistrot.png'

// Food Images
import foodImg1 from './assets/img/foodPage/image00007_optimized.jpeg'
import foodImg2 from './assets/img/foodPage/photo_2023-03-25_14-43-00.jpg'
import foodImg3 from './assets/img/foodPage/image00020_optimized.jpeg'
import foodImg4 from './assets/img/foodPage/image00032_optimized.jpeg'
import foodImg5 from './assets/img/foodPage/photo_2023-03-25_14-42-18.jpg'
import foodImg6 from './assets/img/foodPage/image00039_optimized.jpeg'
import foodImg7 from './assets/img/foodPage/image00040_1_optimized.jpeg'
import foodImg8 from './assets/img/foodPage/image00040_optimized.jpeg'
import foodImg9 from './assets/img/foodPage/image00134_optimized.jpeg'
import foodImg10 from './assets/img/foodPage/image00094_optimized.jpeg'
import foodImg11 from './assets/img/foodPage/image00142_optimized.jpeg'
import foodImg12 from './assets/img/foodPage/image00144_optimized.jpeg'
import foodImg13 from './assets/img/foodPage/image00145_optimized.jpeg'
import foodImg14 from './assets/img/foodPage/photo_2023-03-25_14-38-34.jpg'
import foodImg15 from './assets/img/foodPage/photo_2023-03-25_14-38-33.jpg'
import foodImg16 from './assets/img/foodPage/photo_2023-04-06_12-04-39_optimized.jpg'
import foodImg17 from './assets/img/foodPage/photo_2023-03-25_14-38-32.jpg'
import foodImg18 from './assets/img/foodPage/photo_2023-03-25_14-38-30.jpg'
import foodImg19 from './assets/img/foodPage/photo_2023-03-25_14-38-29.jpg'
import foodImg20 from './assets/img/foodPage/image00116_optimized.jpeg'

// Drink Images
import drinkImg1 from './assets/img/drinkPage/image00170_optimized.jpeg'
import drinkImg3 from './assets/img/drinkPage/image00174_optimized.jpeg'
import drinkImg4 from './assets/img/drinkPage/image00189_optimized.jpeg'
import drinkImg5 from './assets/img/drinkPage/image00195_optimized.jpeg'
import drinkImg7 from './assets/img/drinkPage/image00197_optimized.jpeg'
import drinkImg8 from './assets/img/drinkPage/image00198_1_optimized.jpeg'
import drinkImg9 from './assets/img/drinkPage/image00198_optimized.jpeg'
import drinkImg10 from './assets/img/drinkPage/image00223_optimized.jpeg'
import drinkImg11 from './assets/img/drinkPage/image00015_optimized.jpeg'
import drinkImg12 from './assets/img/drinkPage/image00090_optimized.jpeg'
import drinkImg13 from './assets/img/drinkPage/image00201_optimized.jpeg'
import drinkImg14 from './assets/img/drinkPage/image00190_optimized.jpeg'


// Hero Imgs
import heroImg6 from './assets/img/hero/image00235_1_optimized.jpeg'
import heroImg2 from './assets/img/hero/image00054_optimized.jpeg'
import heroImg4 from './assets/img/hero/image00161_optimized.jpeg'
import heroImg1 from './assets/img/hero/image00225_optimized.jpeg'


import { useTranslation } from 'react-i18next'


export const navData = [
  { href: '/', name: 'home' },
  { href: '/food', name: 'food' },
  { href: '/drink', name: 'drink' },
  { href: '/contact', name: 'contact' },
]

export const heroData = {
  img: bistrotHero,
}

export const aboutData = {
  title1: 'Amo come amore.',
  title1_2:
    ' Amore per il paese, per i prodotti, per le ricette tipiche, amo come amo da pesca per non dimenticare le tradizioni e la materia prima che lavoriamo con tanta sapienza e divertimento.',
  text1:
    "L'amo nasce a Bogliaco, incantevole frazione di Gargnano sulla sponda occidentale del lago di garda, durante una splendida giornata di sole. L'amo Bistrot è un piccolo ristorante a conduzione famigliare, un lugo rilassante, un po come essere a casa.",
  title2:
    'Ci piace farvi sentire a vostro agio senza troppa formalità, coccolandovi coi nostri piatti golosi e genuini.',
  text2:
    'Amiamo il nostro lavoro e cerchiamo di trasmetterlo a tutti voi attraverso i nostri piatti e i nostri vini, con competenza e passione perchè noi siamo così.',
}

export const socialData = [
  {
    href: 'https://api.whatsapp.com/send?phone=393937992253',
    icon: <FaWhatsapp />,
  },
  { href: 'https://www.instagram.com/lamobistrot/', icon: <FaInstagram /> },
]


export default [
  foodImg1,
  foodImg2,
  foodImg3,
  foodImg4,
  foodImg5,
  foodImg6,
  foodImg7,
  foodImg8,
  foodImg9,
  foodImg10,
  foodImg11,
  foodImg12,
  foodImg13,
  foodImg14,
  foodImg15,
  foodImg16,
  foodImg17,
  foodImg18,
  foodImg19,
  foodImg20,
]

export const drinkImgs = [
  drinkImg1,
  drinkImg3,
  drinkImg4,
  drinkImg5,
  drinkImg7,
  drinkImg8,
  drinkImg9,
  drinkImg10,
  drinkImg11,
  drinkImg12,
  drinkImg13,
  drinkImg14,
]

export const heroImgs = [heroImg1, heroImg2, heroImg4, heroImg6]

export const boxImagesHomeData = [
  {
    img: foodImg,
  },
  {
    title: 'FOOD',
    text: 'Scopri di più',
    link: '/food',
  },
  {
    img: locationImg,
  },

  {
    title: 'CONTACT',
    text: 'Scopri di più',
    link: '/contact',
  },
  {
    img: drinkImg,
  },
  {
    title: 'DRINK',
    text: 'Scopri di più',
    link: '/drink',
  },
]

export const textFragments = 
  {
    food: 'E’ una storia d’amore la cucina. Bisogna innamorarsi dei prodotti e poi delle persone che li cucinano.',
    drink:
      'Il suono morbido di un sughero che viene stappato dalla bottiglia ha il suono di un uomo che sta aprendo il suo cuore.',
  }

  
export const contactInfo = {
  orari: "ORARI",
  text1: 'Da Mercoledi a Lunedi dalle 11:00 alle 14:00',
  text2: 'e dalle 18:00 alle 22:00',
  text3: 'Martedì chiuso',
}

export const prenotazione = {
  nome: "Nome",
  cognome: "Cognome",
  telefono: "Telefono",
  persone: "Quante persone?",
  data: "Data",
  orario: "Orario",
  prenota: "Prenota"
}

