import { useState } from 'react'

import './App.css'

function App() {
  const [cound, setCound] = useState(0)
  

  const handlecount = () => {
    setCound(cound + 1)
    // cound ++
    console.log(cound);
    
  }
  return (
    <>
      <button onClick={handlecount} >increment</button>
      <p>{cound}</p>
    </>
  )
}

export default App
