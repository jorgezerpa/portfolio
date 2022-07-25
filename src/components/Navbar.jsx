import React, { useContext } from 'react';
import Context from '../context/context';
import { texts } from '../constants';
import { icons } from '../assets';

const Navbar = ({ toggleModal, setModalContent }) => {
  const { language, toggleLanguage } = useContext(Context);

  const handleShowModal = (content) => {
    setModalContent(content)
    toggleModal();
  }

  return (
    <div className='z-10 text-white absolute w-[90%] flex justify-between p-4'>
      <div className=''></div>
      <ul className='columns-3 w-[90%] sm:w-1/3'>
        <li className='text-center'>
          <button onClick={toggleLanguage} className='w-[23px] h-[23px] rounded-[50%] bg-center bg-no-repeat bg-cover' style={{backgroundImage: `url(${language !== 'ES' ? icons.spanish : icons.english })`}} ></button>
        </li>
        { texts.menu.map(text=>(
          <li key={text.EN + text.ES} onClick={()=>handleShowModal(text.EN)} className='text-center text-sm hover:shadow-sm hover:scale-[1.1] hover:translate-y-[5px] transition-all hover:shadow-gray-600'>
            { text[language] }
          </li>
        ))}
        <li></li>
      </ul>
    </div>
  )
}

export default Navbar