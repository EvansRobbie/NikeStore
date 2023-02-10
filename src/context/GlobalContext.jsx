
import React, {useContext, createContext, useState, useReducer} from 'react'
const GlobalContext = createContext()

export const ACTION = {
  ADD_TO_CART : 'addToCart',
  REMOVE_FROM_CART: 'removeFromCart',
  INCREASE_QUANTITY: 'increaseQuantity',
  DECREASE_QUANTITY: 'decreaseQuantity',
  REMOVE_ALL: 'removeAll'

}
const reducer = (cart,action) =>{
  switch(action.type){
    case ACTION.ADD_TO_CART: {
      return {...cart, items:[...cart.items, {...action.payload, qty: 1}]}
    }
    case ACTION.REMOVE_FROM_CART:{
      return {...cart, items:cart.items.filter((item)=> item.id !== action.payload.id)}
    }
    case ACTION.INCREASE_QUANTITY:{
      return {...cart, items:cart.items.filter((item)=>{
        if (item.id === action.payload.id){
          // console.log(item.qty)
          return({...item, qty:item.qty += 1})
          
        }
        return item
      })}
    }
    case ACTION.DECREASE_QUANTITY:{
      return {...cart, items:cart.items.filter((item)=>{
        if (item.id === action.payload.id){
          // console.log(item.qty)
          if (item.qty > 1){
            return {...item, qty:item.qty -= 1}
          }
          return item
        }
        return item
      })}

    }
    case ACTION.REMOVE_ALL:{
      return {cart, items: []}
    }
    default:
      return cart
  }
}
// const newCart = (cart) =>{
//   return {cart: cart, qty:+1}
// }
const GlobalContextProvider = ({children}) => {
    const [sidebar, setSidebar] = useState(false)
    const [cart, dispatch] = useReducer(reducer,{items: []})
    const handleSidebar = () =>{
        setSidebar(!sidebar)
    }
    const addToCart = (item) =>{
      dispatch({type:ACTION.ADD_TO_CART, payload:item})
    }
    const removeFromCart = (id) =>{
      dispatch({type:ACTION.REMOVE_FROM_CART, payload:{id : id }})
    }
    const increaseQuantity = (id) =>{
      dispatch({type:ACTION.INCREASE_QUANTITY, payload:{id:id}})
    }
    const decreaseQuantity = (id) =>{
      dispatch({type:ACTION.DECREASE_QUANTITY, payload:{id:id}})
    }
    const removeAll =() =>{
      dispatch({type:ACTION.REMOVE_ALL})
    }
  return (
    <GlobalContext.Provider value = {{handleSidebar, sidebar, addToCart, cart, removeFromCart, increaseQuantity, decreaseQuantity, removeAll }}>
        {children}
    </GlobalContext.Provider>
  )
}
export const useGlobalContext = () =>{
    return useContext(GlobalContext)
}
export default GlobalContextProvider