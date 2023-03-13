import Aos from 'aos'
import React, { useEffect } from 'react'

const Reservation = () => {
  useEffect(() => {
    Aos.init({ duration: 1000})
  }, [])
 
  return (
    <section data-aos="flip-right" id='reservation' className='min-h-[480px] container flex flex-col items-center justify-center w-full h-full mx-auto my-5 py-[80px]'>
      <h1 className='h2 text-dark'> Prenota un tavolo</h1>
      <form className='text-center'>
        <form>
          <div class='-mx-3 flex flex-wrap'>
            <div class='w-full px-3 sm:w-1/2'>
              <div class='mb-5'>
                <label
                  for='fName'
                  class='mb-3 block text-base font-medium text-[#07074D]'
                >
                  Nome
                </label>
                <input
                  type='text'
                  name='fName'
                  id='fName'
                  placeholder='First Name'
                  class='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                />
              </div>
            </div>
            <div class='w-full px-3 sm:w-1/2'>
              <div class='mb-5'>
                <label
                  for='lName'
                  class='mb-3 block text-base font-medium text-[#07074D]'
                >
                  Cognome
                </label>
                <input
                  type='text'
                  name='lName'
                  id='lName'
                  placeholder='Last Name'
                  class='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                />
              </div>
            </div>
          </div>
          <div class='mb-5'>
            <label
              for='number'
              class='mb-3 block text-base font-medium text-[#07074D]'
            >
              Telefono
            </label>
            <input
              type="text"
              name='number'
              id='number'
              placeholder='Telefono'
              class='w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
            />
          </div>
          <div class='mb-5'>
            <label
              for='guest'
              class='mb-3 block text-base font-medium text-[#07074D]'
            >
              Quante persone?
            </label>
            <input
              type='number'
              name='guest'
              id='guest'
              placeholder='5'
              min='0'
              class='w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
            />
          </div>

          <div class='-mx-3 flex flex-wrap'>
            <div class='w-full px-3 sm:w-1/2'>
              <div class='mb-5'>
                <label
                  for='date'
                  class='mb-3 block text-base font-medium text-[#07074D]'
                >
                  Data
                </label>
                <input
                  type='date'
                  name='date'
                  id='date'
                  class='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                />
              </div>
            </div>
            <div class='w-full px-3 sm:w-1/2'>
              <div class='mb-5'>
                <label
                  for='time'
                  class='mb-3 block text-base font-medium text-[#07074D]'
                >
                  Orario
                </label>
                <input
                  type='time'
                  name='time'
                  id='time'
                  class='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                />
              </div>
            </div>
          </div>
          <div>
            <button class='hover:shadow-form rounded-md bg-blu-logo py-3 px-8 text-center text-base font-semibold text-white outline-none'>
              Prenota
            </button>
          </div>
        </form>
      </form>
    </section>
  )
}

export default Reservation