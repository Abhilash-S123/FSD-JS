import { useState } from 'react'
import Counter from './Counter'
import { Routes , Route } from 'react-router-dom'
import Nav from './Nav'
import UseMemo from './UseMemo'


function App() {
  

  return (
    <>
    <Nav></Nav>
    <Routes>
       <Route path='/counter' element={<Counter/>} />
       <Route path='/usememo' element={<UseMemo/>}></Route>
    </Routes>
    </>
  )
}

export default App
