import React, {useEffect} from 'react'
import Hero from '../components/Home/Hero'
import TextFragment from '../components/Layout/TextFragment'
import BoxImages from '../components/Home/BoxImages'
import { aboutData } from '../data'



const Home = () => {
   useEffect(() => {
     window.scrollTo(0, 0)
   }, [])
  return (
    <>
      <Hero />
      <TextFragment title={aboutData.title1} title1_2={aboutData.title1_2} text={aboutData.text1} />
      <BoxImages />
      <TextFragment title={aboutData.title2} text={aboutData.text2} />
    </>
  )
}

export default Home
