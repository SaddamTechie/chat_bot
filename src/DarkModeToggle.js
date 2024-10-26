import React, { useEffect } from 'react'

const DarkModeToggle = () => {
    const [enabled,setEnabled] = useLocalStorage('dark-theme')
    const isEnabled = typeof enabledState === 'undefined' && enabled;

    useEffect(()=>{
        const className = 'dark';
        const bodyClass = window.document.body.classList;

        isEnabled?bodyClass.add(className): bodyClass.remove(className);
    },[enabled,isEnabled])
  return [enabled,setEnabled]
}

export default DarkModeToggle
