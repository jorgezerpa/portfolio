import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import SocialWeb from '../components/SocialWeb';
import  Hero from '../components/Hero';
import Modal from '../components/Modal';

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const toggleModal = () => {
    setOpenModal(!openModal);
  }

  return (
    <div className='mx-auto container text-white min-h-screen'>
      <Navbar toggleModal={toggleModal} setModalContent={setModalContent} />
      <SocialWeb />
      <Hero openModal={openModal} />
      <Modal openModal={openModal} setOpenModal={setOpenModal} modalContent={modalContent} />

    </div>
  )
}

export default Home