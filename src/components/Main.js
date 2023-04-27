import React from 'react';


import MainPart1 from './MainPart1'
import MainPart2 from './MainPart2'
import MainPart3 from './MainPart3'

const Main = () => {
  return (
    <main className=' w-full'>
      <video
      
      controlsList='hidden'
        autoPlay
        loop
        muted
      
        className=' ' 
        src={require('../image/whyChooseUs/FINAL MANN.mp4')} 
        alt="vide_error"
      />
      <MainPart1/>
      <MainPart2/> 
      <MainPart3/> 
    </main>
  )
}

export default Main