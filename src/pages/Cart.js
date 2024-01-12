import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {

  const {cart} = useSelector((state) => state);

  return (
    <div>
      {
        cart.length > 0 ?
        (
          <div>
            {
              cart.map((curElem, index) => {
                return (
                  <CartItem key={curElem.id} item={curElem} itemIndex={index}></CartItem>
                )
              })
            }
          </div>
        )
         : 
        (
          <div>
            <h1>Cart Empty</h1>
            <Link to="/">
              <button>
                Shop Now
              </button>
            </Link>
          </div>
        )
      }
      
    </div>
  )
}

export default Cart
