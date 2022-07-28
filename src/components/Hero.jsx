import React, { useContext, useEffect, useState } from 'react';
import Context from '../context/context';
import { texts } from '../constants';
import Rings3D from './animations/Rings3D/Rings3D';

const Hero = ({openModal}) => {
  const { language } = useContext(Context);
  const [modalAnimationImage, setModalAnimationImage] = useState('')
  const [modalAnimationText, setModalAnimationText] = useState(' ')

  useEffect(() => {
    if(openModal){
      setModalAnimationImage('opacity-0 scale-0 transition-all duration-300 delay-300 ')
      setModalAnimationText('opacity-0 -translate-y-[100px] duration-300  transition-all')
    } else {
      setModalAnimationImage('opacity-100 -translate-y-[0] duration-300 delay-300 transition-all ')
      setModalAnimationText('opacity-100 -translate-y-[0] duration-300 transition-all')
    }    
  }, [openModal])

  return (
    <>
      <div className='px-4 sm:px-10 colums-1 sm:columns-2 h-screen'>
        <div className='relative h-auto sm:h-full'>
          <div className={modalAnimationImage}>
            <Rings3D />
          </div>
        </div>

        <div className={`${modalAnimationText} relative -left-0 sm:-left-16 sm:min-h-[80vh] w-full flex flex-col justify-center align-center`}>
          <h5 className='text-md sm:text-xl text-center sm:text-left'>{ texts.home.hello[language] }</h5>
          <h2 className='font-bold text-xl sm:text-5xl desktop:text-7xl mt-4 sm:mt-0 text-center sm:text-left'>{ texts.home.title[language] }</h2>
          <h4 className='text-lg sm:text-xl text-center sm:text-left'>{ texts.home.subtitle[language] }</h4>
        </div>
      </div>
    
    </>
  )
}

export default Hero