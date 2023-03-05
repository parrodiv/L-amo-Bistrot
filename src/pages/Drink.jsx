import React, { useEffect } from 'react'
import HeroPages from '../components/HeroPages'

const Drink = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return <HeroPages page='drink' />
}

export default Drink
