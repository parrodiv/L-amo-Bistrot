import React from 'react'
import { useTranslation } from 'react-i18next'
import { FaPhone, FaEnvelope } from 'react-icons/fa'
import logo from '../assets/img/logo/logo.jpeg'


const Footer = () => {

  const { t } = useTranslation()

  return (
    <footer className='p-10 footer footer-center bg-rosa-antico text-primary-content'>
      <div>
        <img
          src={logo}
          className='max-w-[100px] rounded-full mb-3'
          alt="L'amo Bistrot logo"
        />
        <p className='text-xl'>Piazza Nazario Sauro, 29 25084 Gargnano BS </p>
        <div className='flex flex-col'>
          <div className='flex'>
            <FaEnvelope className='mr-3' />{' '}
            <a href='mailto:info@lamobistrot.it'>info@lamobistrot.it</a>{' '}
          </div>
          <div className='flex'>
            <FaPhone className='mr-3' />{' '}
            <a href='tel:+393937992253'>+39 0365 1905352</a>
          </div>
        </div>
        <h2 className='h4'>{t('orario')} </h2>
        {t('contact_text1')} <br />
        {t('contact_text2')} <br />
        {t('contact_text3')} <br />
        {t('contact_text4')} <br />
        {t('contact_text5')} <br />
        {t('contact_text6')} <br />
        {t('contact_text7')} <br />
      </div>
      <div className='flex flex-col'>
        Copyright @ 2023{' '}
        <span>
          Website created by{' '}
          <a
            href='https://alessandroparrilla.netlify.app/'
            target='_blank'
            className='text-xs underline'
          >
            Alessandro Parrilla
          </a>
        </span>
      </div>
    </footer>
  )
}

export default Footer
