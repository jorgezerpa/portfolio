import React, { useContext } from 'react';
import Context from '../../context/context';

const ProjectCard = ({ image, title, description, github, preview, isReady }) => {
  const { language } = useContext(Context);

  return (
    <div className='mb-10 mx-auto w-[180px] min-h-[250px] relative'>
      <div className='mb-2 h-[100px] relative overflow-hidden' style={{ backgroundImage:`url(${image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center'}}>
      </div>
      <div className='text-lg text-center mb-2'>{ title[language] }</div>
      <div className='text-xs text-center mb-4'>{ description[language] }</div>
      <div className='flex justify-center gap-2 absolute bottom-0 left-0 right-0'>
        {github.length > 0 && <a href={github} target='/blank' className='p-2 text-xs rounded-lg bg-blue-400'>github</a> }
        {preview.length > 0 && <a href={preview} target='/blank' className='p-2 text-xs rounded-lg bg-[#202020] '>view</a>}
      </div>
    </div>
  )
}

export default ProjectCard