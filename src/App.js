import './App.css';
import Header from './components/header';
import { Outlet } from "react-router-dom"
import { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { setProductData } from './redux/productSlice';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch()
  const [data,setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
    const Server = process.env.REACT_APP_SERVER_DOMAIN ? process.env.REACT_APP_SERVER_DOMAIN : "https://groceries-yipj.onrender.com"
        try {
            const response = await fetch(`${Server}/product`);
            const json = await response.json();
            console.log(json)
            dispatch(setProductData(json))
            setData(json);
        } catch (error) {
            console.log("error", error);
        }
    }
    fetchData()
  },[]);


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
