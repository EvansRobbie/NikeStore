import React from 'react'
import { useGlobalContext } from '../context/GlobalContext'
import { ChevronDoubleLeftIcon, XMarkIcon} from '@heroicons/react/24/outline'
import CartItem from '../utils/CartItem'
const Cart = () => {
    const {sidebar, handleSidebar} = useGlobalContext()
  return (
    <>
    <div className={`${sidebar ? 'right-0 ' : '-right-full'} fixed top-0 h-screen bg-slate-200/10 w-full opacity-100 z-[200] blur-effect-theme transitions-theme `}/>
    <div className={`${sidebar ? 'right-0 duration-700' : '-right-full'} fixed top-0 h-screen bg-slate-200/10 w-full opacity-100 z-[200] blur-effect-theme transitions-theme max-w-[650px]`}>
        
        <div className='w-full h-12 blur-effect-theme flex items-center justify-between px-2 bg-slate-200/70'>
            <ul className='flex items-center gap-2' >
                <li onClick={handleSidebar}>
                    <ChevronDoubleLeftIcon className='icon-style hover:text-orange-500 text-slate-900 font-medium h-6 w-6'/>
                </li>
                <li className='capitalize text-slate-900 text-lg font-medium'>your cart</li>
                <li className=' py-0.5 px-1 font-medium text-base rounded-lg bg-slate-900 text-slate-200'>(0 Items)</li>

            </ul>
            <button className='button-theme p-0 bg-slate-900'>
                <XMarkIcon className='icon-style h-6 w-6 text-slate-200'/>
            </button>
        </div>
        <div>
             <CartItem/>
        </div>
    </div>
    
    </>
  )
}

export default Cart