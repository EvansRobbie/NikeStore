import React from 'react'
import { ArrowLeftIcon} from '@heroicons/react/24/outline'
import emptybag from '../assets/emptybag.png'
import { useGlobalContext } from '../context/GlobalContext'
export const CartEmpty = () => {
    const {handleSidebar} = useGlobalContext()
  return (
    <div className='h-screen w-full flex items-center flex-col justify-center '>
        <div className='flex flex-col justify-between items-center gap-1 h-[40vh] md:h-[45vh]'>
        <div className='w-[120px] h-[25vh] sm:h-[30vh] sm:w-[150px] md:h-[35vh] md:w-[150px] hover:scale-110 transitions-theme '>
            <img className='w-full h-full object-fill' src={emptybag} alt="emptybag" />
        </div>
        <div onClick={handleSidebar} className='flex bg-orange-500 rounded button-theme items-center gap-2 py-1.5 w-full px-4 shadow-orange-500 shadow-lg'>
            <ArrowLeftIcon className='icon-style h-5 w-5 text-slate-900'/>
            <h1 className='text-sm text-slate-900 font-semibold capitalize'>Back to nike store</h1>
        </div>
        </div>
    </div>
  )
}
