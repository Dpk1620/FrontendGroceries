import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import i18n from "../src/converter/LangConfig";
import App from './App';
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from "react-router-dom";
import Menu from './appPages/Menu';
import About from './appPages/About';
import Contact from './appPages/Contact';
import Home from './appPages/Home';
import Cart from './appPages/Cart';
import Login from './appPages/Login';
import NewProducts from './appPages/NewProducts';
import SignUp from './appPages/SignUp';
import {store} from "./redux/config";
import { Provider } from 'react-redux';


const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route  index element={<Home/>}/>
      <Route  path='menu/:filterby' element={<Menu/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='cart' element={<Cart/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='newproducts' element={<NewProducts/>}/>
      <Route path='signup' element={<SignUp/>}/>
      <Route/>
    </Route>
  )
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={Router}/>
  </Provider>
);
