import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <>
     <NavLink to='/counter'>UseReducer</NavLink>
        <NavLink to='/usememo'>UseReducer</NavLink>
    </>
  )
}

export default Nav