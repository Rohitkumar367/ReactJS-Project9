import React from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className='flex flex-row justify-between'>

        <NavLink to="/">
          <div>
            <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Fso%2Fcompany-name&psig=AOvVaw0Ll4R_OIVotlsMCGV21YiW&ust=1704606588863000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCLDhvsSIyIMDFQAAAAAdAAAAABAD" alt="Logo" />
          </div>
        </NavLink>

        <div>
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
          <NavLink to="/cart">
            <div>
              <FaShoppingCart></FaShoppingCart>
            </div>
          </NavLink>
        </div>

      </div>
    </div>
  )
}

export default Navbar
