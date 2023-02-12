import React from 'react'
import { useGlobalContext } from '../context/GlobalContext'
import { ChevronDoubleLeftIcon, XMarkIcon} from '@heroicons/react/24/outline'
import CartItem from '../utils/CartItem'
import { CartEmpty } from '../utils/CartEmpty'
const Cart = () => {
    const {sidebar, handleSidebar, removeAll, itemQuantity, totalPrice} = useGlobalContext()
    sidebar ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'scroll'
  return (
    <>
    <div className={`${sidebar ? 'right-0 ' : '-right-full'} fixed top-0 h-screen bg-slate-200/10 w-full opacity-100 z-[200] blur-effect-theme transitions-theme `}/>
    <div className={`${sidebar ? 'right-0 duration-700' : '-right-full'} fixed top-0 h-screen bg-slate-200/10 w-full opacity-100 z-[200] blur-ffect-theme transitions-theme max-w-[550px]`}>
        
        <div className='w-full h-12 blur-effect-theme flex items-center justify-between px-2 bg-slate-200/70'>
            <ul className='flex items-center gap-2' >
                <li onClick={handleSidebar}>
                    <ChevronDoubleLeftIcon className='icon-style hover:text-orange-500 text-slate-900 font-medium h-5 w-5'/>
                </li>
                <li className='capitalize text-slate-900 text-sm md:text-base font-medium'>your cart</li>
                <li className=' py-0.5 px-1 font-medium text-sm rounded-lg bg-slate-900 text-slate-200'>({itemQuantity} Items)</li>

            </ul>
            <button onClick={removeAll} className='button-theme p-0 bg-slate-900'>
                <XMarkIcon className='icon-style h-6 w-6 text-slate-200'/>
            </button>
        </div>
        {itemQuantity > 0 ? (
            <div>
                <div className='overflow-y-auto overflow-x-hidden h-[76vh]  scroll-hiden scroll-style '>
                {<CartItem/>}
           </div>
           <div className='flex flex-col items-center justify-center h-auto w-full px-6 bg-slate-900/30 py-2'>
               <div className='flex items-center justify-between w-full h-full '>
                   <h1 className='uppercase font-semibold text-base text-slate-200'>Subtotal</h1>
                   <p className='bg-slate-900 text-slate-200 rounded px-2 text-sm py-0.5'>${totalPrice}</p>
               </div>
               <p className='capitalize text-slate-200 text-sm font-medium md:text-base'>Taxes and shipping will calculate at shipping</p>
               <button className='capitalize button-theme bg-slate-900 text-slate-200 w-full my-2 text-sm md:text-base'>check out</button>
           </div>
           </div>
        ) : (<CartEmpty/>) }
        
    </div>
    
    </>
  )
}

export default Cart