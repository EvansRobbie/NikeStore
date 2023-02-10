import React from 'react'
import { StarIcon , ShoppingBagIcon } from '@heroicons/react/24/solid'
import {useGlobalContext} from '../context/GlobalContext'
const Item = ({ifExist,item}) => {
    const { title, text, rating, price, img, btn, color, shadow} = item
   const { addToCart} = useGlobalContext()
    return (
    <div className={` ${ ifExist ? 'grid-cols-2 sm:grid-cols-1 h-[20vh] lg:h-[25vh]  justify-between  py-2 px-5 md:py-4 ' : 'grid justify-items-center py-4'} grid items-center  w-full h-full rounded-xl bg-gradient-to-b ${color} ${shadow} hover:scale-105 transitions-theme relative`}>
        <div className={`${ifExist ? 'items-start ' : 'items-center'} flex flex-col justify-center w-full h-full `}>

            <h1 className=' text-slate-200 font-medium  filter drop-shadow-sm md:text-lg'>{title}</h1>
            <p className='text-slate-200 font-normal text-sm filter drop-shadow-sm md:text-base'>{text}</p>
            <div className=' flex items-center justify-between w-28 my-2'>
                <div className='bg-white/80 rounded text-sm filter blur-effect-theme drop-shadow  px-1  '>
                    <h1 className='font-medium text-slate-900 filter drop-shadow'>${price}</h1>
                </div>
                <div className='flex items-center justify-center gap-1'>
                    <StarIcon className='icon-style h-4 w-4'/>
                    <h1 className='text-slate-200 text-sm'>{rating}</h1>
                </div>
            </div>
            <div className='flex items-center justify-between w-28'>
                <div onClick={()=>addToCart(item)} className='flex items-center justify-center bg-white/80 rounded blur-effect-theme h-6 w-6'>
                    <ShoppingBagIcon className='icon-style h-5 w-5  text-slate-900'/>
                </div>
                <div className=' bg-white/80 blur-effect-theme rounded px-2 py-0.5'>

                <button className='text-sm font-medium'>{btn}</button>
                </div>
            </div>
            
        </div>
        <div className={`${ifExist ? 'w-[220px] flex items-center justify-end my-4 h-[15vh] lg:w-[250px] lg:h-[18vh]  absolute top-0 right-0' : 'w-[250px] lg:w-[220px] '} h-full`}>
                <img className={`${ifExist ? '-rotate-[30deg] lg:-rotate-[35deg] py-1 hover:-rotate-[10deg] object-fill  ' : 'hover:-rotate-[15deg] object-fill' } w-auto h-full   transitions-theme duration-700`} src={img} alt={title} />
            </div>
    </div>
  )
}

export default Item