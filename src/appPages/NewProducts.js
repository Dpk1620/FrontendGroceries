import React, { useState } from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai'
import { ImagetoBase64 } from '../converter/Base64Image'
import { toast } from 'react-hot-toast';


const NewProducts = () => {
  const [data, setData] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
    category: "",
  });
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value
      }
    })
  }
  const handleOnSubmit = async (e) => {
    e.preventDefault()
    const Server = process.env.REACT_APP_SERVER_DOMAIN?process.env.REACT_APP_SERVER_DOMAIN:"https://groceries-yipj.onrender.com"
    const { name, price, category, image, description } = data
    if (name && price && category && image && description) {
      const fetchData = await fetch(`${Server}/createproduct`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data)
      })
      const resData = fetchData.json()
      setData(() => {
        return {
          name: "",
          price: "",
          description: "",
          image: "",
          category: "",
        }
      })
      toast(resData.message)
    } else {
      toast("Please select all fields")
    }

  }
  const uploadImage = async (e) => {
    const data = await ImagetoBase64(e.target.files[0])

    setData((preve) => {
      return {
        ...preve,
        image: data
      }
    })
  }

  return (
    <div className='p-4'>
      <form className='m-auto w-full max-w-md flex flex-col shadow p-3 bg-white'  onSubmit={handleOnSubmit}>
        <label htmlFor='name' className='hover:font-bold'>
          Product Name
        </label>
        <input type={"text"} name='name' required className='bg-slate-200 p-1 my-1' onChange={handleOnChange} value={data.name} />
        <label htmlFor='category' className='hover:font-bold'>Category</label>
        <select className='bg-slate-200 p-1 my-1' name='category' required onChange={handleOnChange} value={data.category}>
          <option value="other">Select Category</option>
          <option value="Vegetabeles">Vegetabeles</option>
          <option value="Fruits">Fruits</option>
          <option value="Snacks">Snacks</option>
          <option value="Party-Eats">Party-Eats</option>
          <option value="Dairy">Dairy</option>
        </select>
        <label htmlFor='image' className='hover:font-bold mt-1'>Image
          <div className='w-full h-40 bg-slate-200 rounded  flex cursor-pointer items-center justify-center'>
            {data.image ?
              <img src={data.image} className='h-full' alt="" />
              : <span className='text-5xl hover:text-2xl'>
                <AiOutlineCloudUpload />
              </span>
            }
            <input type={"file"} accept="image/*" id="image" onChange={uploadImage} required className="hidden" />
          </div>
        </label>
        <label htmlFor='price' className='hover:font-bold mt-2'>
          Price
        </label>
        <input value={data.price} type={"text"} name='price' className='bg-slate-200 p-1 my-1' required onChange={handleOnChange} />
        <label htmlFor='description' className='hover:font-bold' >Description</label>
        <textarea row={2} value={data.description} onChange={handleOnChange} required name='description' className='bg-slate-200 rounded resize-none p-1 my-1' />
        <button disabled={!data.description && !data.name && !data.image && !data.price && !data.category} className='bg-slate-500 hover:bg-green-600 rounded my-2 p-0.5 text-white font-size-medium font-bold hover:text-black '>
          Save
        </button>
      </form> 
    </div>
  )
}

export default NewProducts