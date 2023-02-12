import React from 'react'
import { HeartIcon,  HashtagIcon, } from '@heroicons/react/24/solid'
import {ClockIcon,}  from '@heroicons/react/24/outline'


const StoryItem = ({item}) => {
   
    const {title, text, img, url, like, time, by, btn} = item
    // console.log(title)
    
    const truncate = (str, num) =>{
        if (str.length > num){
            return str.slice(0, num) + '....'
        }else{
            return str
        }
    }
    return (
    <div className='flex flex-col border rounded-xl '>
        <div className={`w-[17rem] h-[25vh] sm:h-[30vh] rounded-t-xl overflow-hidden`}>
            <img className='h-full w-full object-fill ' src={img} alt={title} />
        </div>
        <div className='flex items-center justify-between mx-4 py-4'>
            <div className='flex items-center gap-1'>
                {/* like */}
                <HeartIcon className='icon-style text-red-500 h-5 w-5'/>
                <span className='text-sm font-bold filter drop-shadow'>{like}</span>

            </div>
            <div className='flex items-center gap-1' >
                {/* time */}
                <ClockIcon className='icon-style text-slate-900 h-4 w-4'/>
                <span className='text-slate-900 text-sm font-bold'>{time}</span>
            </div>
            <div className='flex items-center gap-1'>
                {/* by */}
                <HashtagIcon className='icon-style text-blue-600 h-5 w-5'/>
                <span className='text-sm font-bold text-blue-600'>{by}</span>
            </div>
        </div>
        <div className='flex flex-col items-start justify-center px-4 '>
            <h1 className='text-base font-bold'>{title}</h1>
            <p className='text-xs leading-[1.6] tracking-wide text-justify md:text-sm'>{truncate(text,175)}</p>
            <a href={url} target='_blank' rel='noreferrer' className='flex items-center justify-center w-full h-full bg-slate-900 shadow-md rounded shadow-slate-900 mt-4 mb-2'>
                <button className='button-theme text-slate-200 filter drop-shadow text-base md:text-lg md:py-1.5 '>{btn}</button>
            </a>
           
            </div>
        
    </div>
  )
}

export default StoryItem