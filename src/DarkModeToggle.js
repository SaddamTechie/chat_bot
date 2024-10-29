import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import React, { useEffect } from 'react';
import useLocalStorage from 'use-local-storage';

const DarkModeToggle = () => {
  const [enabled, setEnabled] = useLocalStorage('dark-theme', false);

  useEffect(() => {
    const className = 'dark';
    const bodyClass = window.document.body.classList;

    if (enabled) {
      bodyClass.add(className);
    } else {
      bodyClass.remove(className);
    }
  }, [enabled]);

  const toggleDarkMode = () => {
    setEnabled(prev => !prev);
  };

  return (
      <button  onClick={toggleDarkMode} className="p-0 border-none">
       {enabled?<CiLight size={20} />:<CiDark size={20}/>} 
      </button>
  );
};

export default DarkModeToggle;