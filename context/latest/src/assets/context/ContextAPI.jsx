import React, { useState } from 'react'
import { createContext } from 'react'
import User from '../../User'

export const AppContext = createContext()

 export const AppProvider = ({children}) => {
    const [name, setName] = useState('Abhilash')
    return (
        <AppContext.Provider value={name}>
            {children}
        </AppContext.Provider>
    )
}

        
           
   