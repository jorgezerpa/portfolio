import React from 'react'
import { icons } from '../assets'

const SocialWeb = () => {
  return (
    <div className=' pl-2 z-10 absolute min-h-full flex flex-col gap-6 justify-center'>
        <div >
        </div>
        <div>
        </div>
        <a className='hover:shadow-xl hover:scale-[1.3] hover:translate-x-[10px] transition-all hover:shadow-white' href="https://www.instagram.com/zerpa.code/" target='/blank'  >
            <img className='w-4' src={ icons.instagram } alt="" />
        </a>
        <a className='hover:shadow-xl hover:scale-[1.3] hover:translate-x-[10px] transition-all hover:shadow-white' href="https://wa.me/584126436269" target='/blank'  >
            <img className='w-4' src={ icons.whatsapp } alt="" />
        </a>
        <a className='hover:shadow-xl hover:scale-[1.3] hover:translate-x-[10px] transition-all hover:shadow-white' href="https://www.linkedin.com/in/jorge-zerpa-code" target='/blank'  >
            <img className='w-4' src={ icons.linkedin } alt="" />
        </a>
    </div>
  )
}

export default SocialWeb