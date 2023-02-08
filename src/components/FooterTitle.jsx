import React from 'react'

const FooterTitle = ({item}) => {
    const {title} = item
  return (
    <div className=''>
        <h1 className='uppercase text-slate-200 font-bold md:text-lg xl:text-xl'>{title}</h1>
    </div>
  )
}

export default FooterTitle