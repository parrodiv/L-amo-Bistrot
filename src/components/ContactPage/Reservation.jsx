import Aos from 'aos'
import React, { useEffect, useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

import { prenotazione } from '../../data'
import { useTranslation } from 'react-i18next'
import { FaExclamationCircle } from 'react-icons/fa'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'




const initialState = {
  nome: '',
  cognome: '',
  guest: '',
  number: '',
  date: '',
  time: '',
}

const Reservation = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  const [formData, setFormData] = useState(initialState)
  const form = useRef()

  const { nome, cognome, guest, number, date } = formData

  const navigate = useNavigate()

  const onMutate = (e) => {
    console.log(e.target.value)
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  //EMAIL JS
  const sendEmail = async () => {
    try {
      const result = await emailjs.sendForm(
        'service_o45pi2z',
        'template_ni0c12c',
        form.current,
        'XL_UG4CDVCcmZ6qWq'
      )
      console.log(result)
    } catch (error) {
      console.log(error)
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()
    // sendEmail()
    toast.success('Richiesta andata a buon fine! Attendere nostra conferma grazie')
    console.log('inviato')
    navigate('/')
  }

  const { t } = useTranslation()

  return (
    <section
      data-aos='flip-right'
      id='reservation'
      className='min-h-[480px] container flex flex-col items-center justify-center w-full h-full mx-auto my-5 py-[80px]'
    >
      <h1 className='h2 text-dark'> {t("prenota_un_tavolo")}</h1>
      <form ref={form} className='text-center' onSubmit={(e) => onSubmit(e)}>
        <div className='flex flex-wrap -mx-3'>
          <div className='w-full px-3 sm:w-1/2'>
            <div className='mb-5'>
              <label
                for='nome'
                className='mb-3 block text-base font-medium text-[#07074D]'
              >
                {t('nome')}
              </label>
              <input
                type='text'
                name='nome'
                id='nome'
                value={nome}
                onChange={onMutate}
                placeholder={t('nome')}
                className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                required
              />
            </div>
          </div>
          <div className='w-full px-3 sm:w-1/2'>
            <div className='mb-5'>
              <label
                for='cognome'
                class='mb-3 block text-base font-medium text-[#07074D]'
              >
                {t('cognome')}
              </label>
              <input
                type='text'
                name='cognome'
                id='cognome'
                placeholder={t('cognome')}
                onChange={onMutate}
                value={cognome}
                className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                required
              />
            </div>
          </div>
        </div>
        <div class='mb-5'>
          <label
            for='number'
            class='mb-3 block text-base font-medium text-[#07074D]'
          >
            {t('telefono')}
          </label>
          <input
            type='text'
            name='number'
            id='number'
            placeholder={t('telefono')}
            onChange={onMutate}
            value={number}
            className='w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
            required
          />
        </div>
        <div class='mb-5'>
          <label
            for='guest'
            class='mb-3 block text-base font-medium text-[#07074D]'
          >
            {t('persone')}
          </label>
          <input
            type='number'
            name='guest'
            id='guest'
            placeholder='5'
            value={guest}
            onChange={onMutate}
            min='0'
            className='w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
            required
          />
        </div>

        <div class='-mx-3 flex flex-wrap'>
          <div class='w-full px-3 sm:w-1/2'>
            <div class='mb-5'>
              <label
                for='date'
                className='mb-3 block text-base font-medium text-[#07074D]'
              >
                {t('data')}
              </label>
              <input
                type='date'
                name='date'
                id='date'
                value={date}
                onChange={onMutate}
                className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                required
              />
            </div>
          </div>
          <div class='w-full px-3 sm:w-1/2'>
            <div class='mb-5'>
              <label
                for='time'
                class='mb-3 block text-base font-medium text-[#07074D]'
              >
                {t('orario')}{' '}
              </label>
              <input
                type='time'
                name='time'
                id='time'
                onChange={onMutate}
                className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                required
              />
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center justify-between mb-4'>
          <FaExclamationCircle size={30}/> {t('informativa')}
        </div>
        <button
          type='submit'
          className='px-8 py-3 text-base font-semibold text-center text-white rounded-md outline-none hover:shadow-form bg-blu-logo'
        >
          {t('prenota')}{' '}
        </button>
      </form>
    </section>
  )
}

export default Reservation
