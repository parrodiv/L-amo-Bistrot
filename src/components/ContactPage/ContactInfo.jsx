import React from 'react'
import Map from './Map'

const ContactInfo = () => {
  return (
    <section className='text-white flex flex-col lg:flex-row justify-around items-center mx-auto w-full p-8 '>
      <Map attributionControl={false} />
      <div className='flex flex-col items-center justify-center '>
        <h3 className='my-3 h3'>L'AMO BISTROT</h3>
        <p>Piazza Nazario Sauro, 29, 25084 Gargnano BS</p>

        <h3 className='h3'>ORARI</h3>
        <p className='text-center'>
          Da Mercoledi a Lunedi dalle 11:00 alle 14:00 <br /> e dalle 18:00 alle
          22:00
        </p>
        <p className='h5'>Martedì chiuso</p>
      </div>
    </section>
  )
}

export default ContactInfo
