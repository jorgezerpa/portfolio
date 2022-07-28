import React, { useContext } from 'react';
import Context from '../../context/context'
import { projects, landingPages } from '../../constants';
import { texts } from '../../constants';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const { language } = useContext(Context);

  return (
    <div>
        <div>
          <h3 className='text-2xl text-center font-bold mb-10' >{ texts.projects.title2[language] }</h3>
          <div className='mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5'>
            { landingPages.map((landing, index) => (
              <div key={landing.link} className='hover:scale-[90%] transition-all duration-300 ' >
                <a href={landing.link} target='/blank'>
                  <img src={landing.image} alt="" />
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className='mt-20'>
          <h3 className='text-2xl text-center font-bold' >{ texts.projects.title[language] }</h3>
          <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 large:grid-cols-4 gap-5'>
            { projects.map((project, index) => (
              <ProjectCard key={project.title+'project'+index} image={project.image} title={project.title} description={project.description} github={project.github} preview={project.preview} isReady={project.isReady} />
            ))}
          </div>
        </div>

        <div className='mt-20 mb-10'>
          <h3 className='text-2xl text-center font-bold mb-1' >{ texts.projects.title3[language] }</h3>
          { language ==="ES" && <p className='text-sm'>Sientete libre de revisar mi <a href="https://codepen.io/zerpa_coder" target='/blank' className='font-bold border-b-white border-b-2 inline-block transition-all duration-200 hover:scale-[95%] hover:text-blue-400'>CODEPEN</a> y mi <a className='font-bold border-b-white border-b-2 inline-block transition-all duration-200 hover:scale-[95%] hover:text-blue-400' href="https://www.instagram.com/zerpa.code/" target='/blank'>INSTAGRAM</a></p>}
          { language ==="EN" && <p className='text-sm'>Feel free to check my <a href="https://codepen.io/zerpa_coder" target='/blank' className='font-bold border-b-white border-b-2 inline-block transition-all duration-200 hover:scale-[95%] hover:text-blue-400 '>CODEPEN</a> and my <a className='font-bold border-b-white border-b-2 inline-block transition-all duration-200 hover:scale-[95%] hover:text-blue-400' href="https://www.instagram.com/zerpa.code/" target='/blank'>INSTAGRAM</a></p>}
        </div>


    </div>
  )
}

export default Projects