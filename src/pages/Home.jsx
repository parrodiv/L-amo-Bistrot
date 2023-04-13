import React, {useEffect} from 'react'
import Hero from '../components/Home/Hero'
import TextFragment from '../components/Layout/TextFragment'
import BoxImages from '../components/Home/BoxImages'
import { aboutData } from '../data'
import { useTranslation } from 'react-i18next'




const Home = () => {
   useEffect(() => {
     window.scrollTo(0, 0)
   }, [])

    const { t } = useTranslation()
  return (
    <>
      <Hero />
      <TextFragment
        title={t('about_title1')}
        title1_2={t('about_title1_2')}
        text={t('text1')}
      />
      <BoxImages />
      <TextFragment title={t('about_title2')} text={t('about_text2')} />
    </>
  )
}

export default Home
