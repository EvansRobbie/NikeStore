import React from 'react'

const Sociallinks = ({link}) => {
   const {icon} = link
  return (
    <div>
        <img src={icon} alt="social/icon" className='w-5 h-5 md:h-6 md:w-6 lg:w-8 lg:h-8 cursor-pointer' />
    </div>
  )
}

export default Sociallinks