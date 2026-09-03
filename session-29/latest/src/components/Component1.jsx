import React, {useState} from 'react'


const Component1 = () => {
  const [isLoggedin, setIsLoggedin] = useState(false)
  //const isLoggedIn = true
  const cart = [1,2,3,4,5]

  return (    
    <>
     {isLoggedin &&  <h1>hello</h1>}
     { isLoggedin ? <h1>hello</h1> : ''}   
     
     {cart.length > 0 &&  (<h1>{cart.length} available</h1>) } 
     <button onClick={() => setIsLoggedin(!isLoggedin)}>{ isLoggedin ? 'logout' : 'login' }</button>
    </>
  )
}

export default Component1