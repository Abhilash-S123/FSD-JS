import { useState } from 'react'
import useFetch from '../useFetch'


function App() {
  const [count, setCount] = useState(0)
  const { data, doSomething } = useFetch('abhilash')

  console.log(data, doSomething());
  console.log(count);
  
  

  return (
    <>
     <p>{data}</p>

    </>
  )
}

export default App
