// import icons
import { FaWhatsapp, FaFacebookF, FaInstagram } from 'react-icons/fa'

// Home Images
import locationImg from './assets/img/boxImagesHome/location.jpeg'
import foodImg from './assets/img/boxImagesHome/food.jpeg'
import drinkImg from './assets/img/boxImagesHome/drinks.jpeg'

// Food Images
import foodImg1 from './assets/img/foodPage/image00007_optimized.jpeg'
import foodImg2 from './assets/img/foodPage/image00012_optimized.jpeg'
import foodImg3 from './assets/img/foodPage/image00020_optimized.jpeg'
import foodImg4 from './assets/img/foodPage/image00032_optimized.jpeg'
import foodImg5 from './assets/img/foodPage/image00039_1_optimized.jpeg'
import foodImg6 from './assets/img/foodPage/image00039_optimized.jpeg'
import foodImg7 from './assets/img/foodPage/image00040_1_optimized.jpeg'
import foodImg8 from './assets/img/foodPage/image00040_optimized.jpeg'
import foodImg9 from './assets/img/foodPage/image00134_optimized.jpeg'
import foodImg10 from './assets/img/foodPage/image00141_optimized.jpeg'
import foodImg11 from './assets/img/foodPage/image00142_optimized.jpeg'
import foodImg12 from './assets/img/foodPage/image00144_optimized.jpeg'
import foodImg13 from './assets/img/foodPage/image00145_optimized.jpeg'
import foodImg14 from './assets/img/foodPage/image00203_optimized.jpeg'
import foodImg15 from './assets/img/foodPage/image00206_optimized.jpeg'
import foodImg16 from './assets/img/foodPage/image00207_optimized.jpeg'
import foodImg17 from './assets/img/foodPage/image00208_optimized.jpeg'
import foodImg18 from './assets/img/foodPage/image00209_optimized.jpeg'

// Drink Images
import drinkImg1 from './assets/img/drinkPage/image00170_optimized.jpeg'
import drinkImg3 from './assets/img/drinkPage/image00174_optimized.jpeg'
import drinkImg4 from './assets/img/drinkPage/image00189_optimized.jpeg'
import drinkImg5 from './assets/img/drinkPage/image00195_optimized.jpeg'
import drinkImg7 from './assets/img/drinkPage/image00197_optimized.jpeg'
import drinkImg8 from './assets/img/drinkPage/image00198_1_optimized.jpeg'
import drinkImg9 from './assets/img/drinkPage/image00198_optimized.jpeg'
import drinkImg10 from './assets/img/drinkPage/image00223_optimized.jpeg'

// Hero Imgs
import heroImg1 from './assets/img/hero/image00054_optimized.jpeg'
import heroImg2 from './assets/img/hero/image00055_optimized.jpeg'
import heroImg3 from './assets/img/hero/image00161_optimized.jpeg'
import heroImg4 from './assets/img/hero/image00180_optimized.jpeg'
import heroImg5 from './assets/img/hero/image00225_optimized.jpeg'

export const navData = [
  { href: '/', name: 'home' },
  { href: '/food', name: 'food' },
  { href: '/drink', name: 'drink' },
  { href: '/contact', name: 'contact' },
]

export const heroData = {
  title: "L'amo Bistrot",
  subtitle: 'Amare è mangiare insieme',
  btnText: 'Prenota un tavolo',
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

export const locationData = [
  {
    title: 'Our beautiful outdoor area',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus optio consequuntur corrupti quam, id at distinctio error recusandae inventore repudiandae!',
    // img: image,
  },
  {
    title: 'Our coosy indoor atmosphere',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus optio consequuntur corrupti quam, id at distinctio error recusandae inventore repudiandae!',
    position: 'right',
    // img: image,
  },
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
]

export const heroImgs = [heroImg1, heroImg2, heroImg3, heroImg4, heroImg5]

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
    img: drinkImg,
  },
  {
    title: 'CONTACT',
    text: 'Scopri di più',
    link: '/contact',
  },
  {
    img: locationImg,
  },
  {
    title: 'DRINK',
    text: 'Scopri di più',
    link: '/drink',
  },
]
