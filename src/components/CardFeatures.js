import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"
import { useDispatch } from 'react-redux'
import { addCartItem } from '../redux/productSlice'

const CardFeatures = ({ image, name, price, category, loading, id }) => {
    const dispatch = useDispatch()
    const handleCartItem = () => {
            dispatch(addCartItem({
              _id : id,
              name : name,
              price : price,
              category : category,
              image : image
            }))
    }
    
    return (
        <>
               <div className="w-full  min-w-[190px] max-w-[190px] bg-white hover:shadow-lg drop-shadow-lg py-5 px-4 cursor-pointer flex flex-col ">
      {image ? (
        <>
          <Link
            to={`/menu/${id}`}
            onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}
          >
            <div className="h-28 flex flex-col justify-center items-center">
              <img src={image} className="h-full  hover:scale-105 transition-all " alt=''/>
            </div>
            <h3 className="font-semibold text-slate-600  capitalize text-lg mt-4 whitespace-nowrap overflow-hidden">
              {name}
            </h3>
            <p className="text-slate-500  font-medium">{category}</p>
            <p className="font-bold">
              <span className="text-red-500">₹</span>
              <span>{price}</span>
            </p>
          </Link>
          <button
            className="bg-blue-300 py-1 mt-2 rounded hover:bg-blue-400 w-full"
            onClick={handleCartItem}
          >
            Add Cart
          </button>
        </>
      ) : (
        <div className="min-h-[150px] flex justify-center items-center">
          <p>{loading}</p>
        </div>
      )}
    </div>
        </>
    )
}

export default CardFeatures