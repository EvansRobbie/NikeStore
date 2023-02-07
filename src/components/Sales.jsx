import React from 'react'
import Item from '../utils/Item'

const Sales = ({ifExist, endpoint:{title,items}}) => {
//   console.log(title)
    return (
    <div className={`nike-container`}>
        <h1 className='text-3xl font-bold text-slate-900 filter drop-shadow-sm  md:text-4xl lg:text-5xl'>{title}</h1>
        <div className= {`${ ifExist ? 'grid sm:grid-cols-2 xl:grid-cols-3' : ' sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'} gap-5 grid  items-center justify-items-center py-8`} >
            {items?.map((item, index)=>(
                <Item key={index} item = {item} ifExist = {ifExist}/>
            ))}
        </div>
    </div>
  )
}

export default Sales