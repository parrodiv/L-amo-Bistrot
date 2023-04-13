import React from 'react'
import Map from './Map'

import { contactInfo } from '../../data'
import { useTranslation } from 'react-i18next'


const ContactInfo = () => {
  const { t } = useTranslation()
  return (
    <section className='flex flex-col items-center justify-around w-full p-8 mx-auto text-white lg:flex-row '>
      <Map attributionControl={false} />
      <div className='flex flex-col items-center justify-center text-center animate__animated animate__fadeInRight'>
        <h3 className='my-3 h3'>L'AMO BISTROT</h3>
        <p>Piazza Nazario Sauro, 29, 25084 Gargnano BS</p>

        <h3 className='h3'> {t('orari')}</h3>
        <p className='text-center'>
          {t('contact_text1')} <br />
          {t('contact_text2')} <br />
          {t('contact_text3')} <br />
          {t('contact_text4')} <br />
          {t('contact_text5')} <br />
          {t('contact_text6')} <br />
          {t('contact_text7')} <br />
        </p>
      </div>
    </section>
  )
}

export default ContactInfo
