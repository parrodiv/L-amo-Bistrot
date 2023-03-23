import i18next from 'i18next'
import { useEffect } from 'react'

const SelectLang = () => {
  useEffect(() => {}, [])

  const languages = [
    {
      code: 'it',
      name: 'IT',
      country_code: 'it',
      icon: '🇮🇹',
    },
    {
      code: 'en',
      name: 'EN',
      country_code: 'gb',
      icon: '🇬🇧',
    },
    {
      code: 'de',
      name: 'DE',
      country_code: 'DE',
      icon: '🇩🇪',
    },
  ]

  return (
    <select
      className='fixed z-50 text-white bg-black border-black opacity-50 w-28 select select-info lg:w-28 rounded-xl bottom-2 lg:bottom-5 right-8 lg:right-14'
      onChange={(e) => i18next.changeLanguage(e.target.value)}
    >
      {languages.map(({ code, name, icon }, index) => (
        <option key={index} value={code} className='text-center'>
          {icon} {name}
        </option>
      ))}
    </select>
  )
}

{
}

export default SelectLang
