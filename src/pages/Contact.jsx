import React, { useEffect } from 'react'
import HeroPages from '../components/HeroPages'
import Reservation from '../components/ContactPage/Reservation'

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <HeroPages page='contact' />
      <Reservation />
    </>
  )
}

export default Contact
