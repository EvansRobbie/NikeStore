import React from 'react'

const Description = ({ifExist, endpoint:{heading, title, text, btn, url, img}}) => {
  return (
    <div className={` ${ifExist ? 'lg:flex-row-reverse' : 'lg:flex-row' } relative nike-container flex flex-col items-center justify-center  lg:justify-between`}>
        <div className='flex flex-col items-center justify-center lg:items-start lg:max-w-lg    '>
            <h1 className='text-3xl sm:text-4xl font-bold text-gradient  transitions-theme '>{heading}</h1>
            <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center lg:text-start  font-bold text-slate-900 transitions-theme'>{title}</h1>
            <p className='text-sm py-4 text-center md:text-start text-slate-900 lg:text-base '>{text}</p>
            <a href={url} className='button-theme bg-slate-900 text-slate-200 text-sm  py-1.5  filter drop-shadow shadow-slate-900 blur-effect-theme lg:text-base'>{btn}</a>
        </div>
        <div className={`${ifExist ? 'rotate-[10deg] hover:rotate-[-10deg]' : 'rotate-[15deg] hover:rotate-[10deg]'} h-full w-[300px] sm:w-[450px] md:w-[500px] lg:w-[550px] lg:h-[vh]  py-2  transitions-theme duration-700`}>
            <img src={img} alt="" className='h-full w-full object-cover lg:object-fill z-20'/>
        </div>
    </div>
  )
}

export default Description