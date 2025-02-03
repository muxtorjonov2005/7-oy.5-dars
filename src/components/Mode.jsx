import React, { useEffect } from 'react';
import useModeSwitcher from '../store/useModeSwitcher';

function Mode () {
  const { theme, toggleTheme, initializeTheme } = useModeSwitcher();

  useEffect(() => {
    initializeTheme();
  }, [initializeTheme]);

  return (
    <div className='w-[600px] h-[200px] mx-auto font-bold' style={{
      backgroundColor: theme === 'light' ? '#fff' : '#333',
      color: theme === 'light' ? '#000' : '#fff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <button onClick={toggleTheme}>
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
    </div>
  );
};

export default Mode
