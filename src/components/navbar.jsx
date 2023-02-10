import React, { useEffect, useState } from 'react'
import Logo from '../assets/logo.png'
import { HeartIcon, MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/react/24/outline' 
import { useGlobalContext } from '../context/GlobalContext'
const Navbar = () => {
  const {handleSidebar} = useGlobalContext()
  const [nav, setNav] = useState(false)
   const navScroll = () =>{
    window.scrollY > 30 ? setNav(true) : setNav(false)
   }
useEffect (() =>{
  window.addEventListener('scroll', navScroll)
  return () =>{
    window.removeEventListener('scroll', navScroll)
  }
}, [])
  return (
    <div className={` ${ !nav ? 'absolute bg-transparent top-4' : 'fixed bg-slate-200/20  blur-effect-theme'} w-full h-[9vh] top-0 left-0 opacity-100 z-[200] flex items-center justify-center duration-700 transitions-theme `}>
      <div className='nike-container flex items-center justify-between'>

        <div className='w-16  h-auto'>
          <img className={`${nav? 'filter brightness-0' : 'filter-none'} w-full h-full object-fill transitions-theme`}  src={Logo} alt="logo" />
        </div>
        <ul className='flex items-center justify-between gap-2'>
          <li className='flex items-center'>
            {/* Search */}
            <MagnifyingGlassIcon className={`icon-style h-6 w-6 sm:h-7 sm:w-7 font-bold filter drop-shadow duration-700 transitions-theme ${ nav ? 'text-slate-900 ': 'text-slate-200'}`}/>
          </li>
          <li>
            {/* saved */}
            <HeartIcon className={`icon-style h-6 w-6 sm:h-7 sm:w-7 font-bold filter drop-shadow duration-700 transitions-theme ${ nav ? 'text-slate-900 ': 'text-slate-200'}`}/>
          </li>
          <li className='group cursor-pointer' onClick={handleSidebar}>
            {/* shopping bag */}
            <ShoppingBagIcon className={`icon-style h-6 w-6 sm:h-7 sm:w-7  font-bold filter drop-shadow duration-700 transitions-theme ${ nav ? 'text-slate-900 ': 'text-slate-200'}`}/>
            <div className={`${nav ? 'bg-slate-900' : 'bg-slate-200'} absolute top-9  rounded-full h-5 w-5 right-5 sm:right-6 md:right-8 lg:right-11 xl:right-14 flex items-center justify-center blur-effect-theme group-hover:scale-50 active:scale-100 cursor-pointer transition-all duration-300`}>
              <span className={`${nav ? 'text-slate-200' : 'text-slate-900'} text-xs  font-semibold`} >0</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar