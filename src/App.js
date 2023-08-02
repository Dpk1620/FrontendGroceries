import './App.css';
import Header from './components/header';
import { Outlet } from "react-router-dom"
import { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { setProductData } from './redux/productSlice';
import { useDispatch ,useSelector} from 'react-redux';

function App() {
  const dispatch = useDispatch()
  const [data,setData ] = useState([])
  const allProducts = useSelector((state) => state.product)

  async function fetchProduct(){
    const Server = process.env.REACT_APP_SERVER_DOMAIN ? process.env.REACT_APP_SERVER_DOMAIN : "https://groceries-yipj.onrender.com"
    const res = await fetch(`${Server}/product`, {
      method: "GET",
      headers: {
        "content-type": "application/json"
      },
    })
    const resData = await res.json()
    dispatch(setProductData(resData))
  }
  useEffect(() => {
   fetchProduct()
   setData(allProducts)
  }, [data])
  

  return (
    <>
      <Toaster />
      <div >
        <Header />
        <main className='pt-16 bg-rose-50 min-h-[calc(100vh)]'>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
