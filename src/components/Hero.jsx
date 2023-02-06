import React from 'react'
import Sociallinks from '../utils/Sociallinks'
import Video from '../utils/Video'

const Hero = ({heroapi: {title, subtitle, img,btntext, videos,sociallinks}}) => {

  return (
    <div className=' relative  flex w-auto h-auto flex-col'>
        <div className='w-full mx-auto bg-theme clip-path h-[55vh] sm:h-[65vh] md:h-[65vh] lg:h-[85vh] absolute top-0 left-0 opacity-100 z-10'/>
            <div className='relative opacity-100 z-20 flex flex-col items-center justify-center nike-container'>
                <div className='flex items-center justify-center mt-24 sm:mt-28 md:mt-[25] flex-col '>
                    <h1 className='text-3xl md:text-5xl xl:text-6xl font-extrabold text-slate-200 drop-shadow-md filter '>{title}</h1>
                    <h1 className='text-3xl md:text-5xl xl:text-6xl font-extrabold text-slate-200 drop-shadow-sm filter'>{subtitle}</h1>
                    <button className='button-theme bg-slate-200 rounded-xl my-5 filter shadow-md shadow-slate-200 text-sm'>{btntext}</button>
                    <div className='absolute top-[27vh] md:top-[33vh] xl:left-[11%] left-0 grid items-center gap-3 lg:gap-4 justify-items-center duration-700 ease-in  '>
                    {/* social icons */}
                    {videos?.map((video, index) =>
                        <Video key={index} video= {video}/>
                    )}
                    </div>
                    <div className='absolute top-[27vh] md:top-[33vh]  right-0 grid items-center gap-3 lg:gap-4 justify-items-center '>
                        {/* media */}
                        {sociallinks?.map((link, index)=>(
                            <Sociallinks key={index} link = {link} />

                        ))}
                    </div>
                </div>
                <div className='flex items-center' >
                    <img className='w-auto h-[20vh] sm:h-[25vh] md:h-[30vh] lg:h-[43vh]  -rotate-[30deg] hover:rotate-0 transitions-theme object-fill ' src={img} alt={title} />
                </div>
            </div>
            
    </div>
  )
}

export default Hero