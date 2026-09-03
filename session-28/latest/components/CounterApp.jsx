import { useState } from 'react'
import App from '../src/App'
import CounterButton from './CounterButton'

function CounterApp() {
  const [cound, setCound] = useState(0)
  

  // const handlecount = () => {
  //   setCound(cound + 1)
  //   // cound ++
  //   console.log(cound);
    
  // }
  return (
    <>
      {/* <button onClick={() => setCound(cound + 1)} >increment</button>
      <button onClick={() => setCound(cound - 1)} >decrement</button>
      <button onClick={() => setCound(0)} >reset</button> */}
      <CounterButton handleCount={() => setCound(cound + 1)} label={'increment'}/>
      <CounterButton handleCount={() => setCound(cound - 1)} label={'decrement'}/>
      <CounterButton handleCount={() => setCound(0)} label={'reset'}/>

      <p>{cound}</p>
    </>
  )
}

export default CounterApp
