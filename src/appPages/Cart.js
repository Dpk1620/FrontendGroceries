import React, { useState,useEffect } from 'react'
import { useSelector } from 'react-redux'
import CartProducts from './CartProducts'

const Cart = () => {
  const productCartItem = useSelector((state)=>state.product.cartItem)
  const [color, setColor] = useState()
  const tick = () => {
      var R = Math.floor(Math.random() * 256);
      var G = Math.floor(Math.random() * 256);
      var B = Math.floor(Math.random() * 256);
      var randomcolor = "rgb(" + R + "," + G + "," + B + ")";
      if (randomcolor) {
          console.log(randomcolor)
        setColor(randomcolor)
      }
    }
    
    useEffect(() => {
      const timerID = setInterval(() => tick(), 4000)
      return () => {
        clearInterval(timerID)
      }
    }, [])
  console.log(productCartItem,"productItem")
  return (
    <div className='p-2 md:p-4'>
      <h2  className='text-lg md:text-2xl font-bold text-slate-600'>
        Your Cart Items here !
        <div className=''>

          {/* Display Your Cart Items */}
          <div>
            {productCartItem.map((item)=>
            <CartProducts key={item._id} color={color} _id={item._id}  name={item.name} image={item.image} category={item.category} price={item.price} description={item.description} qty={item.qty} total={item.total}/> 
            )}
          </div>
          {/* Display Your Cart Items */}
          <div></div> 
        </div>

      </h2>
    </div>
  )
}

export default Cart