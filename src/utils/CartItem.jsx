import React from 'react'
import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline'
const CartItem = () => {
  return (
    <div>
        <div>
            <img src="" alt="" />
            <div>
                <h1></h1>
            </div>
        </div>
        <div>
            <h1></h1>
            <p></p>
            <div>
                <div>
                    <MinusIcon className='icon-style'/>
                </div>
                <div>
                    {/* quantity */}
                </div>
                <div>
                    <PlusIcon className='icon-style'/>
                </div>
            </div>
        </div>
        <div>
            <h1></h1>
            <div>
                <TrashIcon className='icon-style'/>
            </div>
        </div>
    </div>
  )
}

export default CartItem