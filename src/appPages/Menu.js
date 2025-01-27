import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addCartItem } from "../redux/productSlice";
import AllProductsList from '../components/allProductsList';
import "../App.css"

const Menu = () => {
  const { filterby } = useParams()
  const dispatch = useDispatch()
  const allProducts = useSelector((state) => state.product.productList)
  // const cartItem = useSelector((state)=>state.product.cartItem)
  const showProduct = allProducts.filter(el => el._id === filterby)[0]
  
  const handleAddCartProduct = (e) => {
    dispatch(addCartItem(showProduct))
  };

  const handleBuy = ()=>{
    dispatch(addCartItem(showProduct))
      // navigate("/cart")
  }
  document.title ="Groceries - MENU" 
  return (
    <div className="p-2 md:p-4 ">
    <div className="w-full max-w-3xl m-auto md:flex bg-white justify-center">
      <div className="max-w-sm max-h-sm  overflow-hidden  w-full p-5">
        <img
          src={showProduct.image}
          className="rotatenewClass"
          alt=''
        />
      </div>
      <div className="flex flex-col gap-1 p-3">
        <h3 className="font-semibold text-slate-600  capitalize text-2xl md:text-4xl">
          {showProduct.name}
        </h3>
        <p className=" text-slate-500  font-medium text-2xl">{showProduct.category}</p>
        <p className=" font-bold md:text-2xl">
        ₹
          <span>{showProduct.price}</span>
        </p>
        <div className="flex gap-3">
        <button onClick={handleBuy} className="hover:scale-105 transition-all  bg-blue-400 py-1 mt-2 rounded hover:bg-blue-500 min-w-[100px]" >Buy</button>
        <button onClick={handleAddCartProduct} className=" hover:scale-105 transition-all  bg-blue-400 py-1 mt-2 rounded hover:bg-blue-500 min-w-[100px]">Add Cart</button>
        </div>
        <div>
          <p className="text-slate-600 font-medium">Description : </p>
          <p>{showProduct.description}</p>
        </div>
      </div>
    </div>
    <AllProductsList heading={"Related Product"}/>
  </div>
     
  )
}

export default Menu