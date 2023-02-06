import React from 'react'
import { PlayIcon } from '@heroicons/react/24/solid'

const Video = ({video}) => {
    const {imgsrc, clip} = video
    
  return (
    <div className='relative h-14 rounded-xl overflow-hidden w-16 group md:h-24 md:w-28 sm:h-20 sm:w-24 lg:w-32 lg:h-28 transition-all duration-300 cursor-pointer '>
            
            <img src={imgsrc} alt='' className='w-full h-full object-cover absolute opacity-100 z-10 top-0 left-0' />
            
            <video src={clip} className='w-full h-full group-hover:z-50  absolute top-0 left-0 object-fill transition-all duration-700 ' loop='true' autoPlay='true'></video>
            <div className='absolute  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50 w-5 h-5 md:h-7 md:w-7 flex items-center justify-center  bg-slate-200/90 rounded-full opacity-100'>
                <PlayIcon className=' icon-style  h-3 w-3 md:w-4 md:h-4 text-slate-900/70 ' />
            </div>
    </div>
  )
}

export default Video