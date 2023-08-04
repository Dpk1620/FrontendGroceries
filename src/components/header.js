// import React from 'react';
// import { Link } from "react-router-dom"
import { GrUserManager } from "react-icons/gr"
import { LiaOpencart } from "react-icons/lia"
import Logo from "../assets/Screenshot 2023-07-25 174259.png"
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutRedux } from "../redux/userSlice";
import { toast } from "react-hot-toast";

const Header = () => {
    const [userMenu, setUserMenu] = useState(false)
    const userData = useSelector((state) => state.user)
    const cartItem = useSelector((state)=>state.product.cartItem)
    console.log(cartItem)
    const dispatch = useDispatch()
    const handleUserMenu = () => {
        setUserMenu(item => !item);
    }
    const handleLogout = () => {
        dispatch(logoutRedux())
        toast("Logout successFully")
    }
    return (
        <header className="fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-slate-50">
            {/* desktop */}

            <div className="flex items-center h-full justify-between">
                <Link to={""}>
                    <div className="innnerDivClass h-12" style={{position:"relative"}}>
                        <img src={Logo} className="h-full" alt="" />
                    </div>
                </Link>

                <div className="flex items-center gap-4 md:gap-7">
                    <nav className="gap-4 md:gap-6 text-base md:text-lg hidden md:flex">
                        <Link to={""}>Home</Link>
                        <Link to={"menu/64c90e73a64b74aa5949c91d"}>Menu</Link>
                        <Link to={"about"}>About</Link>
                        <Link to={"contact"}>Contact</Link>
                    </nav>
                    <div className="text-3xl text-slate-600 relative">
                        <Link to={"cart"}>
                            <LiaOpencart />
                            {cartItem.length>0? <div className="absolute -top-2 -right-1 text-white bg-red-500 h-5 w-4 rounded-full m-0 p-0  text-sm text-center  ">
                              {cartItem.length}  </div>:""}
                           
                        </Link>
                    </div>
                    <div className="text-slate-600" onClick={handleUserMenu}>
                        <div className="text-3xl cursor-pointer  w-8 h-8 rounded-full overflow-hidden drop-shadow-md">
                            {userData.profileImage ? <img src={userData.profileImage} className="h-full w-full" alt="" /> :
                                <GrUserManager />}
                        </div>
                        {userMenu && (
                            <div className="absolute right-2 bg-white py-2 px-2 shadow drop-shadow-md flex flex-col min-w-[120px] text-center">
                                {
                                    userData.email === process.env.REACT_APP_ADMIN_EMAIL && <Link to={"newproducts"} className="whitespace-nowrap cursur-pointer hover:text-black-600 hover:font-bold">
                                        New Product
                                    </Link>
                                }
                                {userData.profileImage ? <p className="cursur-pointer hover:text-red-600 hover:font-bold " onClick={handleLogout}>Logout{" "}({userData.firstName})</p> : <Link to={"login"} className="whitespace-nowrap cursur-pointer">
                                    Login
                                </Link>}
                                <nav className="md:gap-6 text-base md:text-lg flex flex-col md:hidden rounded-md">
                                    <Link to={""} className="py-1">Home</Link>
                                    <Link to={"menu/64c68f902644d35fab60bd53"} className="py-1">Menu</Link>
                                    <Link to={"about"} className="py-1">About</Link>
                                    <Link to={"contact"} className="py-1">Contact</Link>
                                </nav>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;