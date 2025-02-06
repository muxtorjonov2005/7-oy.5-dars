import React, { useEffect } from 'react';
import useModeSwitcher from '../store/useModeSwitcher';

function Mode () {
  const { theme, toggleTheme, initializeTheme } = useModeSwitcher();

  useEffect(() => {
    initializeTheme();
  }, [initializeTheme]);
  
  useEffect(() => {
    document.body.style.backgroundColor = theme === 'light' ? '#fff' : '#333';
    document.body.style.color = theme === 'light' ? '#000' : '#E5E7EB';
  }, [theme]);

  return (
    <div className='mx-auto font-bold' >
      <button onClick={toggleTheme}>
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
    </div>
  );
};

export default Mode
