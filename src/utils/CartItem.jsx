import React from 'react'
import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline'
import { useGlobalContext } from '../context/GlobalContext'
const CartItem = () => {
    const {cart:{items}, removeFromCart, increaseQuantity,decreaseQuantity } = useGlobalContext()
    // console.log(items)
    const cartElement = items.map((item)=>{
        const {id, title, text, img, price, qty,  color, shadow} = item
    return (
        <div className='flex    items-center justify-between w-full h-full px-6 py-3' key={id}>
            <div className='flex items-center gap-6'>
                <div className={`h-[12vh] relative w-[130px] md:h-[15vh] md:w-[180px] rounded bg-gradient-to-b ${color} ${shadow} flex items-center justify-center hover:scale-105 transitions-theme duration-700`}>
                    <img className=' w-32 h-[9vh] md:h-[12vh] md:w-[150px] object-fit' src={img} alt="" />
                    <div className=' absolute top-1 left-[5.5rem] md:left-[8.75rem] opacity-100 z-[200] rounded-md bg-slate-200/80 px-1'>
                        <h1 className='text-xs'>${price}</h1>
                    </div>
                </div>
                <div className='flex flex-col '>
                    <h1 className='text-slate-900 font-medium text-sm md:text-lg'>{title}</h1>
                    <p className='text-xs md:text-sm'>{text}</p>
                    <div className='flex items-center justify-between pt-4 px-3 '>
                        <div  onClick={()=>decreaseQuantity(id)} className='bg-slate-900 rounded h-5 w-5 md:h-6 md:w-6 flex items-center justify-center '>
                            <MinusIcon className='icon-style text-slate-200 h-4 w-4 md:h-5 md:w-5'/>
                        </div>
                        <div className='bg-slate-900 rounded  h-5 w-5 flex  justify-center md:h-6 md:w-6 '>
                            {/* quantity */}
                            <p className=' text-slate-200 text-sm h-4 w-4 md:h-5 md:w-5 text-center md:text-base'>{qty}</p>
                        </div>
                        <div onClick={()=>increaseQuantity(id) } className='bg-slate-900 rounded  h-5 w-5 flex items-center justify-center md:h-6 md:w-6  '>
                            <PlusIcon className='icon-style text-slate-200 h-4 w-4 md:h-5 md:w-5'/>
                        </div>
                    </div>
                </div>
            </div>
        <div className='flex flex-col items-center h-20 justify-between'>
            <h1 className='text-slate-900 font-medium text-base md:text-lg'>${price * qty}</h1>
            <div onClick={()=>removeFromCart(id, title)} className='bg-slate-900 rounded flex items-center justify-center h-6 w-6 md:h-7 md:w-7'>
                <TrashIcon className='icon-style text-slate-200 h-5 w-5 md:h-6 md:w-6'/>
            </div>
        </div>
        
        </div>
        
    )
    })
    
 
  return (
    <div className='w-full flex flex-col items-center justify-center blur-effect-theme py-4 '>
        {cartElement}
    </div>
    
  )
}

export default CartItem