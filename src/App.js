import React, { useState } from 'react';
import Context from './context/context';
import Home from './pages/Home';
import { images } from './assets';

function App() {
  const [language, setLanguage] = useState('ES');
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ES' ? 'EN' :'ES');
  }

  return (
    <Context.Provider value={{ language, toggleLanguage }}>
      <div className='w-full bg-center bg-no-repeat bg-cover' style={{ backgroundImage:`url(${images.headerBg})` }}>
        <Home />
      </div>
    </Context.Provider>
  );
}

export default App;
