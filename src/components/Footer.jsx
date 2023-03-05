import React from 'react'
import { FaPhone, FaEnvelope } from 'react-icons/fa'
import logo from '../assets/img/logo/logo.jpeg'

const Footer = () => {
  return (
    <footer className='p-10 footer footer-center bg-rosa-antico text-primary-content'>
      <div>
        <img
          src={logo}
          className='max-w-[100px] rounded-full mb-3'
          alt="L'amo Bistrot logo"
        />
        <p className='text-xl'>Piazza Nazario Sauro, 29, 25084 Gargnano BS </p>
        <div className='flex flex-col'>
          <div className='flex'>
            <FaEnvelope className='mr-3' />{' '}
            <a href='mailto:info@lamobistrot.it'>info@lamobistrot.it</a>{' '}
          </div>
          <div className='flex'>
            <FaPhone className='mr-3' />{' '}
            <a href='tel:+393937992253'>+39 393 7992253</a>
          </div>
        </div>
        <h2>Orari: </h2>
        Mercoledi - Lunedì <br />
        11 - 14 e 18 - 22 <br />
        Martedi chiuso
      </div>
    </footer>
  )
}

export default Footer
