import React from 'react'
import {PiForkKnifeFill} from "react-icons/pi"

const filterProduct = ({category,onClick,isActive}) => {
    return (
        <div onClick={onClick}>
        <div className={`hover:scale-105  transition-all text-3xl p-6 my-3 rounded-xl cursor-pointer ${isActive?"bg-green-700 text-white": "bg-blue-300"}`}>
          <PiForkKnifeFill />
        </div>
        <p className="text-center font-sm my-1">{category}</p>
      </div>
    )
}

export default filterProduct