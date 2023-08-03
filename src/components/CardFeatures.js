import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"
import { useDispatch } from 'react-redux'
import { addCartItem } from '../redux/productSlice'

const CardFeatures = ({ data }) => {
    const dispatch = useDispatch()
    const handleCartItem = (e) =>{
        dispatch(addCartItem(e))
    }
    return (
        <>
            {data.length > 0 ? data.map((data, index) =>
                <Link key={index} to={`/menu/${data._id}`} onClick={()=> window.scrollTo({top:"0",behaviour:"smooth"})}>
                    <div className='w-full min-w-[200px] max-w-[200px] bg-white hover:shadow-lg drop-shadow-lg py-3 rounded-md px-2 cursor-pointer' >
                        <div className='h-28 flex flex-col justify-center items-center'>
                            <img src={data.image} alt="" className='h-full hover:scale-105 transition-all' />
                        </div>
                        <h3 className='font-semibold text-slate-600 capitalize text-lg mt-4'>{data.name}</h3>
                        <p className='text-slate-500 font-medium'>{data.category}</p>
                        <p className='font-bold'>₹{" "}{data.price}</p>
                        <button onClick={()=>handleCartItem(data)} className='hover:scale-105 transition-all bg-blue-300 font-bold text-sm hover:bg-green-600 hover:text-white w-full rounded-md py-0.5'>
                            Add Cart
                        </button>
                    </div>
                </Link>
            ) : <div className='flex justify-center items-center'>
                <div>
                    <h2 className='font-bold text-md'>...Loading</h2>
                </div>
            </div>}
        </>
    )
}

export default CardFeatures