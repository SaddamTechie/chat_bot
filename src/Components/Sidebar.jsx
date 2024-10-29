import React from 'react'
import DarkModeToggle from '../DarkModeToggle'

const Sidebar = () => {
  return (

    <nav className="dark:bg-primary-dark dark:text-dark-theme-text  w-1/5 bg-primary text-light-theme-text p-4 sticky top-0 z-10">
    <h2 className="text-lg font-bold">LeeGPT</h2>
    <button onClick={()=>{window.location.reload()}} className='border dark:border-white border-black rounded-md p-2'>New thread</button>
    <ul class="mt-4">
    <DarkModeToggle/>
        <li className="my-2 hover:underline">Home</li>
        <li className="my-2 hover:underline">Discover</li>
        <li className="my-2 hover:underline">Library</li>
    </ul>
</nav>
  )
}

export default Sidebar