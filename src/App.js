import './App.css';
import Header from './components/header';
import { Outlet } from "react-router-dom"
import { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { setProductData } from './redux/productSlice';
import { useDispatch } from 'react-redux';
import Footer from './components/Footer';
// import Chatbot from 'react-chatbot-kit';
// import ActionProvider from './chatbot/ActionProvider';
// import MessageParser from './chatbot/MessageParser';
// import config from './chatbot/config';



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
        <Toaster position="top-center" reverseOrder={true} />
        <div className='overflow-visible'>
          <Header />
          <main className='pt-16 bg-rose-50 min-h-[calc(100vh)]'>
            {/* <div className='chatbotDesign'>
        <Chatbot  config={config} actionProvider={ActionProvider}  messageParser={MessageParser}/>
            </div> */}
            <Outlet />
          </main>
          <Footer/>
        </div>

      </>

  );
}

export default App;
