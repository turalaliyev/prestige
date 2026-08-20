import portfolio1 from '../assets/Images/Portfolio/IMG_9257.webp'
import portfolio2 from '../assets/Images/Portfolio/IMG_9260.webp'
import portfolio3 from '../assets/Images/Portfolio/IMG_9268.webp'
import portfolio4 from '../assets/Images/Portfolio/IMG_9270.webp'
import portfolio5 from '../assets/Images/Portfolio/IMG_9280.webp'
import portfolio7 from '../assets/Images/Portfolio/IMG_9291.webp'
import portfolio8 from '../assets/Images/Portfolio/IMG_9293.webp'
import portfolio9 from '../assets/Images/Portfolio/IMG_9302.webp'
import partnersImage from '../assets/Images/Partners/partners.webp'
import aboutLogo from '../assets/Images/Logo/logo2.webp'
import heroLogo from '../assets/Images/Logo/logo.webp'
import aboutStamp from '../assets/Images/About/about.webp'
import footerLogo from '../assets/Images/Logo/logo3.webp'
import footerPhoneIcon from '../assets/Images/Footer/Phone.svg'
import footerMailIcon from '../assets/Images/Footer/Mail.webp'
import footerAddressIcon from '../assets/Images/Footer/Address.webp'
import serviceSlide1 from '../assets/Images/Services/Service1.webp'
import serviceSlide2 from '../assets/Images/Services/Service2.webp'
import serviceSlide3 from '../assets/Images/Services/Service3.webp'
import serviceSlide4 from '../assets/Images/Services/Service4.webp'
import serviceSlide5 from '../assets/Images/Services/Service5.webp'
import serviceSlide6 from '../assets/Images/Services/Service6.webp'
import servicePromo from '../assets/Images/Services/PromoSuvenir.webp'
import heroMain from '../assets/HeroMain.webp'
import collection1 from '../assets/Collection/1.webp'
import collection2 from '../assets/Collection/2.webp'
import collection3 from '../assets/Collection/3.webp'
import collection4 from '../assets/Collection/4.webp'
import collection5 from '../assets/Collection/5.webp'
import collection6 from '../assets/Collection/6.webp'
import collection7 from '../assets/Collection/7.webp'
import collection8 from '../assets/Collection/8.webp'
import collection9 from '../assets/Collection/9.webp'
import collection10 from '../assets/Collection/10.webp'
import collection11 from '../assets/Collection/11.webp'
import collection12 from '../assets/Collection/12.webp'
import packages1 from '../assets/Packages/1.webp'
import packages2 from '../assets/Packages/2.webp'
import packages3 from '../assets/Packages/3.webp'
import packages4 from '../assets/Packages/4.webp'
import packages5 from '../assets/Packages/5.webp'
import packages6 from '../assets/Packages/6.webp'
import packages7 from '../assets/Packages/7.webp'
import packages8 from '../assets/Packages/8.webp'
import packages9 from '../assets/Packages/9.webp'
import packages10 from '../assets/Packages/10.webp'
import packages11 from '../assets/Packages/11.webp'
import packages12 from '../assets/Packages/12.webp'
import packages13 from '../assets/Packages/13.webp'
import packages14 from '../assets/Packages/14.webp'
import packages15 from '../assets/Packages/15.webp'
import packages16 from '../assets/Packages/16.webp'

import docEpsonFile from '../assets/Files/Letter from Epson.pdf?url'
import docCityServiceFile from '../assets/Files/CSC.pdf?url'
import docPfmFile from '../assets/Files/PFM.pdf?url'
import docFircroftFile from '../assets/Files/Ficroft.pdf?url'
import docRapidFile from '../assets/Files/RLS.pdf?url'
import docEpsonThumb from '../assets/Images/Documents/epson.webp'
import docCityServiceThumb from '../assets/Images/Documents/city-service.webp'
import docPfmThumb from '../assets/Images/Documents/pfm.webp'
import docFircroftThumb from '../assets/Images/Documents/fircroft.webp'
import docRapidThumb from '../assets/Images/Documents/rapid-solutions.webp'

import { plates } from './plates.generated'

export const heroImage = heroMain
export { heroLogo }

export const farajPhone = {
  display: '+994 50 245 05 95',
  tel: '+994502450595',
}

export const site = {
  brand: 'PRESTIGE',
  social: {
    facebook: '#',
    instagram: 'https://www.instagram.com/prestige_group.az/',
    linkedin: '#',
  },
}

export const introSlides = [
  {
    id: 'wideformat' as const,
    contact: '050 278 00 70',
    phone: '+994502780070',
    image: serviceSlide1,
  },
  {
    id: 'construction' as const,
    contact: '050 286 86 87',
    phone: '+994502868687',
    image: serviceSlide2,
  },
  {
    id: 'vinyl' as const,
    contact: '050 245 05 94',
    phone: '+994502450594',
    image: serviceSlide3,
  },
  {
    id: 'print' as const,
    contact: '050 445 90 02',
    phone: '+994504459002',
    image: serviceSlide4,
  },
  {
    id: 'merch' as const,
    contact: '050 245 05 89',
    phone: '+994502450589',
    image: serviceSlide5,
  },
  {
    id: 'napkins' as const,
    contact: '050 245 05 92',
    phone: '+994502450592',
    image: serviceSlide6,
  },
]

export const portfolio = [
  { src: portfolio1, id: 0 },
  { src: portfolio2, id: 1 },
  { src: portfolio3, id: 2 },
  { src: portfolio4, id: 3 },
  { src: portfolio5, id: 4 },
  { src: portfolio7, id: 5 },
  { src: portfolio8, id: 6 },
  { src: portfolio9, id: 7 },
]

export const packagingSlides = [
  packages1,
  packages2,
  packages3,
  packages4,
  packages5,
  packages6,
  packages7,
  packages8,
  packages9,
  packages10,
  packages11,
  packages12,
  packages13,
  packages14,
  packages15,
  packages16,
].map((src, i) => ({
  src,
  plate: plates[`Packages/${i + 1}.webp`],
}))

export const advertisingSlides = [
  collection1,
  collection2,
  collection3,
  collection4,
  collection5,
  collection6,
  collection7,
  collection8,
  collection9,
  collection10,
  collection11,
  collection12,
].map((src, i) => ({
  src,
  plate: plates[`Collection/${i + 1}.webp`],
}))

export const services = [
  {
    id: 'packaging' as const,
    slides: packagingSlides,
    dark: true,
    imageRight: true,
  },
  {
    id: 'advertising' as const,
    slides: advertisingSlides,
    dark: false,
    imageRight: false,
  },
  {
    id: 'merch' as const,
    image: servicePromo,
    dark: true,
    imageRight: true,
  },
]

export const partners = {
  image: partnersImage,
}

export const recommendations = [
  {
    id: 'epson' as const,
    company: 'Epson',
    org: 'Epson Middle East FZCO',
    year: '2026',
    file: docEpsonFile,
    thumb: docEpsonThumb,
  },
  {
    id: 'cityService' as const,
    company: 'City Service',
    org: 'City Service Company LLC',
    year: '2025',
    file: docCityServiceFile,
    thumb: docCityServiceThumb,
  },
  {
    id: 'pfm' as const,
    company: 'PFM',
    org: 'Private Facility Management',
    year: '2025',
    file: docPfmFile,
    thumb: docPfmThumb,
  },
  {
    id: 'fircroft' as const,
    company: 'Fircroft',
    org: 'Fircroft Engineering Services Ltd.',
    year: '2011',
    file: docFircroftFile,
    thumb: docFircroftThumb,
  },
  {
    id: 'rapidSolutions' as const,
    company: 'Rapid Solutions',
    org: 'Rapid Solutions Limited',
    year: '2011',
    file: docRapidFile,
    thumb: docRapidThumb,
  },
]

export const about = {
  logo: aboutLogo,
  stamp: aboutStamp,
  image:
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80',
}

export const footer = {
  emails: ['main@prestigegroup.az', 'main_prestige@mail.ru'] as const,
  copyright: '© 2026 PRESTIGE GROUP',
  logo: footerLogo,
  phoneIcon: footerPhoneIcon,
  mailIcon: footerMailIcon,
  addressIcon: footerAddressIcon,
  phones: [
    {
      icon: 'napkins',
      display: '+994 50 245 05 92',
      tel: '+994502450592',
    },
    {
      icon: 'packaging',
      display: '+994 55 383 66 42',
      tel: '+994553836642',
    },
    {
      icon: 'print',
      display: '+994 50 445 90 02',
      tel: '+994504459002',
    },
    {
      icon: 'construction',
      display: '+994 50 286 86 87',
      tel: '+994502868687',
    },
    {
      icon: 'gift',
      display: '+994 50 245 05 89',
      tel: '+994502450589',
    },
    {
      icon: 'vinyl',
      display: '+994 50 245 05 94',
      tel: '+994502450594',
    },
    {
      icon: 'wideformat',
      display: '+994 50 278 00 70',
      tel: '+994502780070',
    },
  ],
}
