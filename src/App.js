import './App.css';
import Header from './components/header';
import { Outlet } from "react-router-dom"
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { setProductData } from './redux/productSlice';
import { useDispatch } from 'react-redux';
import { Translation } from "react-i18next";



function App() {
  const dispatch = useDispatch()
  const getProducts = async () => {
    const Server = process.env.REACT_APP_SERVER_DOMAIN ? process.env.REACT_APP_SERVER_DOMAIN : "https://groceries-yipj.onrender.com"
    const res = await fetch(`${Server}/product`, {
      method: "GET",
      headers: {
        "content-type": "application/json"
      },
    })
    const resData = await res.json()
    console.log("resDaaaatttt", resData)
    dispatch(setProductData(resData))
  }
  useEffect(() => {
    const getValue = () => getProducts()
    getValue()
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <Translation>{t => <>
        <Toaster position="top-center" reverseOrder={true} />
        <div >
          <Header t={t} />
          <main className='pt-16 bg-rose-50 min-h-[calc(100vh)]'>
            <Outlet />
          </main>
        </div>
      </>
      }
      </Translation>
    </>

  );
}

export default App;
