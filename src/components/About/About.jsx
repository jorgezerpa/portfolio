import React, { useContext } from 'react';
import Context from '../../context/context';
import Rings from '../animations/Rings/Rings';
import { texts } from '../../constants';

const About = () => {
  const { language } = useContext(Context);
  const { about } = texts;

  return (
    <div className='px-2 sm:px-28 pb-[100px]'>
      <h3 className='text-4xl text-center mb-10 font-bold'>{ about.title[language] }</h3>
      <div className='columns-1 md:columns-2 mb-10'>
          <div className='flex justify-center h-[220px] '>
              <Rings />
          </div>
          <div className='flex flex-col justify-center md:h-[220px] mt-5 md:mt-0'>
            <p className='text-sm'>{ about.text[language] }</p>
          </div>
      </div>


      <div className='flex justify-center flex-col md:flex-row gap-2 md:gap-36'>
          <div className='mb-5'>
            <h5 className='mb-2 font-bold'>{ about.abilities.development.title[language] }</h5>
            <div className='columns-3'>
                {about.abilities.development.items.map(item=>(
                  <p key={item} className='text-sm list-item'>{ item }</p>
                ))}
            </div>
          </div>

          
          <div className='flex gap-4 flex-col'>
            <div className='mb-5'>
              <h5 className='mb-2  font-bold'>{ about.abilities.design.title[language] }</h5>
              <div className='columns-3'>
                  {about.abilities.design.items.map(item=>(
                    <p key={item} className='text-sm list-item'>{ item }</p>
                  ))}
              </div>
            </div>
            <div>
              <h5 className='mb-2  font-bold'>{ about.abilities.languages.title[language] }</h5>
              <div className='columns-3'>
                  {about.abilities.languages.items.map(item=>(
                    <p key={item.EN} className='text-sm list-item'>{ item[language] }</p>
                  ))}
              </div>
            </div>
          </div>

          
      </div>
    </div>
  )
}

export default About