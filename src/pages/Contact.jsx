import React, { useEffect } from 'react'
import HeroPages from '../components/HeroPages'
import Reservation from '../components/ContactPage/Reservation'

const Contact = () => {
  useEffect(() => {
    const href = window.location.href.substring(
      window.location.href.lastIndexOf('#') + 1
    )
    console.log(window.location.href)
    console.log(window.location.href.lastIndexOf('#') + 1)
    console.log(href)
    const element = document.getElementById(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.scrollTo(0, 0)
    }
  }, [])
  return (
    <>
      <HeroPages page='contact' />
      <Reservation />
    </>
  )
}

export default Contact
