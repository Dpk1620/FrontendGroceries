import React from 'react'
import {PiForkKnifeFill} from "react-icons/pi"

const filterProduct = ({category,onClick}) => {
    return (
        <div onClick={onClick}>
        <div className='hover:scale-105 transition-all text-3xl p-6 my-3 bg-blue-300 rounded-xl cursor-pointer active:bg-green-600'>
          <PiForkKnifeFill />
        </div>
        <p className="text-center font-sm my-1">{category}</p>
      </div>
    )
}

export default filterProduct