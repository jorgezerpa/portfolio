import React, { useContext } from 'react';
import Context from '../../context/context';

const ProjectCard = ({ image, title, description, github, preview, isReady }) => {
  const { language } = useContext(Context);

  return (
    <div className='mb-10 mx-auto w-[150px]'>
      <div className='mb-2 h-[150px] relative overflow-hidden' style={{ backgroundImage:`url(${image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
      </div>
      <div className='text-2xl text-center mb-2'>{ title[language] }</div>
      <div className='text-xs text-center mb-4'>{ description[language] }</div>
      <div className='flex justify-evenly'>
        {github.length > 0 && <a href={github} target='/blank' className='p-2 text-xs rounded-lg bg-blue-400'>github</a> }
        {preview.length > 0 && <a href={preview} target='/blank' className='p-2 text-xs rounded-lg bg-[#202020] '>view</a>}
      </div>
    </div>
  )
}

export default ProjectCard