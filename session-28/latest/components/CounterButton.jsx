import React from 'react'

const CounterButton = ({handleCount, label}) => {
  return (
    <>
        <button onClick={handleCount}>{label}</button>
    </>
  )
}

export default CounterButton