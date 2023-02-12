import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid'
import React from 'react'
import StoryItem from '../utils/StoryItem'

const Stories = ({story:{title, news}}) => {
    const slideLeft = () =>{
        const slider = document.getElementById('slider')
        slider.scrollLeft = (slider.scrollLeft - 300 + slider.scrollWidth) % slider.scrollWidth
    }
    const slideRight = () =>{
        const slider = document.getElementById('slider')
        slider.scrollLeft = (slider.scrollLeft + 500 + slider.scrollWidth) % slider.scrollWidth
    }
    // console.log(news)
  return (
    <div className='relative max-w-[1200px] w-full px-10 h-auto group flex flex-col items-center'>
        <div className='flex items-start justify-start w-full'>
            <h1 className='text-3xl font-bold text-slate-900 filter drop-shadow'>{title}</h1>
        </div>
        <div className='flex overflow-x-scroll   scroll-hidden py-8 max-w-[350px] sm:max-w-[600px] md:max-w-[750px] lg:max-w-[960px] xl:max-w-[1260px] h-full gap-4  scroll-smooth transitions-theme duration-700' id={'slider'}>
            {news.map((item, index)=>(
                <StoryItem key = {index} item = {item}/>
            ))}
        </div>
        <div onClick={slideLeft} className='bg-slate-900/70 flex items-center opacity-0 justify-center  rounded-full h-10 w-10 group-hover:opacity-100 z-20 absolute top-[50%] left-10 translate-x-[-50%] translate-y-[-50%] transitions-theme duration-700 delay-100 '>
            <ArrowLeftIcon className=' icon-style text-slate-200 h-6 w-6  '/>
            </div>
            <div onClick={slideRight} className='bg-slate-900/70 flex items-center justify-center  rounded-full h-10 w-10 opacity-0 group-hover:opacity-100 z-20 absolute top-[50%] right-4 translate-x-[-50%] translate-y-[-50%] transitions-theme duration-700 delay-100'>
             <ArrowRightIcon className=' icon-style text-slate-200 h-6 w-6  '/>
        </div>
    </div>
  )
}

export default Stories