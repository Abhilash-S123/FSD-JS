import React from 'react'

const Navbar = ({name, price, inStock}) => {
  return (
    <>
     <div> {name} </div>
     <p>{price}</p>
     <p>{inStock ? 'instock' : 'out of stock'}</p>
    </>
  )
}

export default Navbar