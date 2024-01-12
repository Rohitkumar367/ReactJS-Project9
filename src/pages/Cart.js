import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {

  const {cart} = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(
      cart.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0)
    )
  },[cart])

  return (
    <div>
      {
        cart.length > 0 ?
        (
          <div>

            <div>
              {
                cart.map((curElem, index) => {
                  return (
                    <CartItem key={curElem.id} item={curElem} itemIndex={index}></CartItem>
                  )
                })
              }
            </div>

            <div>

              <div>
                <div>Your Cart</div>
                <div>Summary</div>
                <p>
                  <span>Total Items: {cart.length}</span>
                </p>
              </div>

              <div>
                <p>Total Amount: {totalAmount}</p>
                <button>
                  Checkout Now
                </button>
              </div>

            </div>

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
