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
import serviceCover from '../assets/Images/Services/Cover.webp'
import serviceMarketing from '../assets/Images/Services/Marketing.webp'
import servicePromo from '../assets/Images/Services/PromoSuvenir.webp'
import heroMain from '../assets/HeroMain.webp'

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
    contact: '050 245 05 95',
    phone: '+994502450595',
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
    contact: '050 245 05 95',
    phone: '+994502450595',
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

export const services = [
  {
    id: 'packaging' as const,
    image: serviceCover,
    dark: true,
    imageRight: true,
  },
  {
    id: 'advertising' as const,
    image: serviceMarketing,
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
      display: farajPhone.display,
      tel: farajPhone.tel,
    },
    {
      icon: 'construction',
      display: farajPhone.display,
      tel: farajPhone.tel,
    },
    {
      icon: 'gift',
      display: farajPhone.display,
      tel: farajPhone.tel,
    },
    {
      icon: 'vinyl',
      display: farajPhone.display,
      tel: farajPhone.tel,
    },
    {
      icon: 'wideformat',
      display: farajPhone.display,
      tel: farajPhone.tel,
    },
  ],
}
