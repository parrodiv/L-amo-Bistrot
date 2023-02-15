// import icons
import {
  FaWhatsapp,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
} from 'react-icons/fa'

import image from './assets/img/hero/image00246.jpeg'

export const navData = [
  { href: '/', name: 'home' },
  { href: '/', name: 'about' },
  { href: '/', name: 'team' },
  { href: '/', name: 'book a table' },
  { href: '/', name: 'contact' },
]

export const heroData = {
  pretitle: 'Nothing brings together like',
  title: 'Bistro Cafe',
  subtitle:
    'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ',
  btnText: 'Find out more',
}

export const socialData = [
  { href: '/', icon: <FaWhatsapp /> },
  { href: '/', icon: <FaInstagram /> },
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

export const footerData = {
  contact: {
    title: 'contact location',
    address: '3784 patterson road, #8 new york, CA 69000',
    phone: '(201)256-3689',
  },
  hours: {
    title: 'working hours',
    program: [
      {
        days: 'monday - friday',
        hours: '09:00 AM - 10:00 PM',
      },
      {
        days: 'saturday - sunday',
        hours: '09:00 AM - 11:00 PM',
      },
    ],
  },
  social: {
    title: 'social network',
    icons: [
      { href: '/', icon: <FaFacebookF /> },
      { href: '/', icon: <FaInstagram /> },
    ],
  },
}
