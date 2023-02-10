import React, {useContext, createContext, useState} from 'react'
const GlobalContext = createContext()
const GlobalContextProvider = ({children}) => {
    const [sidebar, setSidebar] = useState(false)
    const handleSidebar = () =>{
        setSidebar(!sidebar)
    }
  return (
    <GlobalContext.Provider value = {{handleSidebar, sidebar}}>
        {children}
    </GlobalContext.Provider>
  )
}
export const useGlobalContext = () =>{
    return useContext(GlobalContext)
}
export default GlobalContextProvider