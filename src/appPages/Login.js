import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BiHide, BiShow } from "react-icons/bi"
import userSignUpGif from "../assets/icons8-person.gif"
import { toast } from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { loginRedux } from '../redux/userSlice'
const Login = () => {
  document.title ="Groceries - LOGIN" 
  const navigate = useNavigate();
  const [passwordIcon, setPasswordIcon] = useState(false)
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  })
  const dispatch = useDispatch()
  const handlePasswordIcon = () => {
    setPasswordIcon(passwordIcon => !passwordIcon)
    setTimeout(() => {
      setPasswordIcon(passwordIcon => !passwordIcon)
    }, 1000)
  }
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };
  const showMsg = async (data) => {
    toast(data.message)
  }
  const handleFormSubmit = async (e) => {
    e.preventDefault()
    const { email, password } = userDetails
    if (email && password) {
    const Server = process.env.REACT_APP_SERVER_DOMAIN ? process.env.REACT_APP_SERVER_DOMAIN : "https://groceries-yipj.onrender.com"
      const FetchData = await fetch(`${Server}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userDetails)
      })
      // Storing data in form of JSON
      var data = await FetchData.json();
      if (data.alert) {
        dispatch(loginRedux(data))
        await showMsg(data)
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    } else {
      toast(data.message)
    }
  }
  return (
    <div className='p-2 md:p-4 card elevation-5'>
      <div className='w-full max-w-sm bg-white m-auto bg-white flex items-center flex-col p-4'>
        <h1 className='text-center text-2xl font-bold' >
          Login
        </h1>
        <div className='w-16 overflow-hidden rounded-full drop-shadow-md shadow-md m-2'>
          <img src={userSignUpGif} alt="" className='w-full' />
        </div>
        <form className='w-full py-3 flex flex-col' onSubmit={handleFormSubmit} >
          <label htmlFor='email'>Email</label>
          <input type={"text"} onChange={handleOnChange} id="email" name="email" className='focus-within:outline-blue-300 w-full rounded mt-1 mb-1 bg-slate-200 px-2 py-1'></input>
          <label htmlFor='password'>Password</label>
          <div className='flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline  focus-within:outline-blue-300'>
            <input onChange={handleOnChange} value={userDetails.password} type={passwordIcon ? "text" : "password"} id="password" name="password" className='w-full rounded bg-slate-200   focus-within:outline-none'></input>
            <span className='flex text-xl' onClick={handlePasswordIcon}>
              {passwordIcon ? <BiShow /> : <BiHide />}
            </span>
          </div>
          <button className='w-full max-w-[150px] m-auto mt-3 py-1 bg-blue-500 hover:bg-blue-600 rounded-full  text-white text-xl font-medium'>Login
          </button>
          <p className='flex text-left text-sm mt-4'>Don't have account ?<Link to={"/signup"} className='ml-2 text-blue-500 font-bold underline' >
            Sign Up
          </Link></p>
        </form>
      </div>

    </div>
  )
}

export default Login