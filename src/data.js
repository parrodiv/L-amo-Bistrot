// import icons
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
} from 'react-icons/fa'

import image from './assets/img/hero/image00246.jpeg'

import locationImg from './assets/img/boxImagesHome/location.jpeg'
import foodImg from './assets/img/boxImagesHome/food.jpeg'
import drinkImg from './assets/img/boxImagesHome/drinks.jpeg'

export const navData = [
  { href: '/', name: 'home' },
  { href: '/food', name: 'food' },
  { href: '/', name: 'drink' },
  { href: '/', name: 'contact' },
]

export const heroData = {
  pretitle: 'Nothing brings together like',
  title: "L'amo Bistrot",
  subtitle:
    'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ',
  btnText: 'Prenota un tavolo',
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
    img: image,
  },
  {
    title: 'Our coosy indoor atmosphere',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus optio consequuntur corrupti quam, id at distinctio error recusandae inventore repudiandae!',
    position: 'right',
    img: image,
  },
]

export const boxImagesHomeData = [
  {
    img: foodImg,
  },
  {
    title: 'FOOD',
    text: 'Scopri di più',
    link: '/',
  },
  {
    img: drinkImg,
  },
  {
    title: 'LOCATION',
    text: 'Scopri di più',
    link: '/',
  },
  {
    img: locationImg,
  },
  {
    title: 'DRINK',
    text: 'Scopri di più',
    link: '/',
  },
]


