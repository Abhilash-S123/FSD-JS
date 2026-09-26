import { useContext, useState } from 'react'
import User from './User'
import { AppContext } from './assets/context/ContextAPI'

function App() {
 
 const data = useContext(AppContext)
  return (
    <>
      <User></User>
      <h1>{data}</h1>
    </>
  )
}


export default App
