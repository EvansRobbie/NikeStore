import React from 'react'
import { useGlobalContext } from '../context/GlobalContext'
import { ChevronDoubleLeftIcon, XMarkIcon} from '@heroicons/react/24/outline'
import CartItem from '../utils/CartItem'
const Cart = () => {
    const {sidebar, handleSidebar, removeAll} = useGlobalContext()
  return (
    <>
    <div className={`${sidebar ? 'right-0 ' : '-right-full'} fixed top-0 h-screen bg-slate-200/10 w-full opacity-100 z-[200] blur-effect-theme transitions-theme `}/>
    <div className={`${sidebar ? 'right-0 duration-700' : '-right-full'} fixed top-0 h-screen bg-slate-200/10 w-full opacity-100 z-[200] blur-ffect-theme transitions-theme max-w-[550px]`}>
        
        <div className='w-full h-12 blur-effect-theme flex items-center justify-between px-2 bg-slate-200/70'>
            <ul className='flex items-center gap-2' >
                <li onClick={handleSidebar}>
                    <ChevronDoubleLeftIcon className='icon-style hover:text-orange-500 text-slate-900 font-medium h-6 w-6'/>
                </li>
                <li className='capitalize text-slate-900 text-base font-medium'>your cart</li>
                <li className=' py-0.5 px-1 font-medium text-sm rounded-lg bg-slate-900 text-slate-200'>(0 Items)</li>

            </ul>
            <button onClick={removeAll} className='button-theme p-0 bg-slate-900'>
                <XMarkIcon className='icon-style h-6 w-6 text-slate-200'/>
            </button>
        </div>
        <div className='overflow-y-auto overflow-x-hidden h-[78vh] scroll-hidden '>
             <CartItem/>
        </div>
        <div className='flex flex-col items-center justify-center h-auto w-full px-6 bg-slate-900/30 py-2'>
            <div className='flex items-center justify-between w-full h-full '>
                <h1 className='uppercase font-semibold text-base text-slate-200'>Subtotal</h1>
                <p className='bg-slate-900 text-slate-200 rounded px-2 text-sm py-0.5'>$1600</p>
            </div>
            <p className='capitalize text-slate-200 text-sm font-medium md:text-base'>Taxes and shipping will calculate at shipping</p>
            <button className='capitalize button-theme bg-slate-900 text-slate-200 w-full my-2'>check out</button>
        </div>
    </div>
    
    </>
  )
}

export default Cart