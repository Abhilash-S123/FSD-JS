import React, { useContext } from 'react'
import { AppContext } from './assets/context/ContextAPI'


const User = () => {
   
   const value = useContext(AppContext)
  return (
    <>
      <p>{value}</p>
    </>
  )
}

export default User