import React from 'react'

const FooterLink = ({item}) => {
//  console.log(item)
 const linkElement = item.map((item, index)=>{
    const {link} = item
    return(
        <ul className='' key={index}>
            <li className='text-slate-200 text-sm sm:text-base '>{link}</li>
        </ul>
    )
 })
    // console.log(link)
  return (
    <div>
        {linkElement}
    </div>
  )
}

export default FooterLink