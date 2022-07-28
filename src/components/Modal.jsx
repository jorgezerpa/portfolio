import React, { useState, useEffect } from 'react';
import About from './About/About';
import Projects from './Projects/Projects';
import { icons } from '../assets';

const Modal = ({ openModal, setOpenModal, modalContent }) => {
  const [zoomIn, setZoomIn] = useState('scale-100 transition-all flex justify-center align-center bg-black absolute z-50 w-[100%] h-[100%] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]')

  useEffect(() => {
    if(openModal){
      setZoomIn('delay-700 scale-100 transition-all duration-700 flex justify-center align-center bg-black absolute z-50 w-[100%] h-[100%] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]')
    } else {
      setZoomIn('delay-700 scale-0 transition-all duration-700 flex justify-center align-center bg-black absolute z-50 w-[100%] h-[100%] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[150%]')
    }
    
  }, [openModal])
  

  return (
    <>
      {openModal && (
        <div className={zoomIn}>
            <div className=' absolute top-0 left-0 right-0 bottom-0 bg-black opacity-80'></div>
            <button onClick={()=>setOpenModal(false)} className='absolute top-5 right-5 z-50' >
              <img width='20px' src={icons.close} alt="" />
            </button>
            <div className='shadow-2xl shadow-white border-2 bg-[#111] absolute h-[90vh] w-[90%] top-8 overflow-y-scroll align-center p-2 sm:p-10' >
              { modalContent === 'about' && (
                <>
                <div className='absolute top-0 right-0 bg-[#36FCD8] opacity-80 border rounder-[50%] w-[150px] h-[150px] blur-[100px]'></div>
                <div className='absolute bottom-0 left-0 bg-[#D11DEE] opacity-80 border rounder-[50%] w-[150px] h-[150px] blur-[150px]'></div>
                <div className='absolute bottom-[45%] left-[45%] bg-[#FCEEFC] opacity-80 border rounder-[50%] w-[150px] h-[150px] blur-[150px]'></div>
                </>
              )}
              <div className='z-40'>
              { modalContent === 'about' && <About /> }
              { modalContent === 'projects' && <Projects />}
              </div>
            </div>
        </div>
      )}
    </>
  )
}

export default Modal