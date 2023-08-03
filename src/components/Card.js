import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ data, color }) => {
    return (
        <>
            {data.length>0?
            data.map((data) =>
                <Link key={data._id} to={`/menu/${data._id}`} onClick={()=> window.scrollTo({top:"0",behaviour:"smooth"})}>

                    <div className='bg-white shadow-md p-2 rounded' >
                        <div className='w-40 h-40'>
                            <img src={data.image} alt='' className='h-full w-full hover:scale-105 transition-all' />
                        </div>
                        <h3 className='font-semibold text-slate-600 text-center capitalize text-lg' >{data.name}</h3>
                        <p className='text-center text-slate-500 font-medium'>{data.category}</p>
                        <p className='text-center text-slate-500 font-medium'>₹<b style={{ color: color }}>{data.price}</b></p>
                    </div>
            </Link>
                ):
            <div className='flex justify-center items-center'>
                <div>
                    <h2 className='font-bold text-md'>...Loading</h2>
                </div>

            </div>}
        </>


    )
}

export default Card