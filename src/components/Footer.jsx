import React from 'react'
import FooterLink from '../utils/FooterLink'
import FooterTitle from './FooterTitle'

const Footer = ({footerAPI: {titles, links}}) => {
    const today = new Date()
    // console.log(links)
  return (
    <footer className='bg-theme relative mt-4'>
        <div className='nike-container py-8 flex  flex-col justify-around  gap-6 lg:gap-0 max-w-[900px] '>

            <div className='grid grid-cols-3 gap-4'>
                {titles?.map((item, index)=>(
                    <FooterTitle key={index} item = {item}/>
                ))}
            </div>
            <div className='grid grid-cols-3 gap-4  '>
                {links?.map((item, index)=>(
                    <FooterLink key={index} item= {item} index = {index}/>
                ))}
            </div>
            <div className='flex text-slate-200 items-center justify-center '>
            <h1 className=''>&copy; Copyright</h1>
            <p className='px-2'>All Rights Reserved</p>
            <p className='font-bold text-lg'>Robbievans {today.getFullYear()}</p>
        </div>
        </div>
       
    </footer>
  )
}

export default Footer