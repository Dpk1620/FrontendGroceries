import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { LiaOpencart } from "react-icons/lia";
import Logo from "../assets/Screenshot 2023-07-25 174259.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutRedux } from "../redux/userSlice";
import { toast } from "react-hot-toast";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Tooltip,
  Avatar,
  Typography,
} from "@material-tailwind/react";
const Header = () => {
  const [openPopover, setOpenPopover] = React.useState(false);
  const triggers = {
    onMouseEnter: () => setOpenPopover(true),
    onMouseLeave: () => setOpenPopover(false),
  };
  const [userMenu, setUserMenu] = useState(false);
  const userData = useSelector((state) => state.user);
  const cartItem = useSelector((state) => state.product.cartItem);
  console.log(cartItem);
  const dispatch = useDispatch();
  const handleUserMenu = () => {
    setUserMenu((item) => !item);
  };
  const handleLogout = () => {
    dispatch(logoutRedux());
    toast("Logout successFully");
  };
  return (
    <header className="fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-rose-50">
      {/* desktop */}

      <div className="flex items-center h-full justify-between">
        <Link to={""}>
          <div className="innnerDivClass h-12" style={{ position: "relative" }}>
            <Tooltip
              placement="bottom"
              className="border rounded-md border-blue-gray-50 bg-white px-4 py-3 shadow-xl shadow-black/10"
              content={
                <div className="w-80">
                  <Typography color="black" className="font-medium">
                    Groceries Logo Design
                  </Typography>
                  <Typography
                    variant="small"
                    color="black"
                    className="font-normal opacity-80"
                  >
                    Material Tailwind is an easy to use components library for
                    Tailwind CSS and Material Design.
                  </Typography>
                </div>
              }
            >
              <img src={Logo} className="h-full" alt="" />
            </Tooltip>
          </div>
        </Link>

        <div className="flex items-center gap-4 md:gap-7">
          <nav className="gap-4 md:gap-7 md:text-lg hidden md:flex">
            <Link to={""} className=" hover:font-bold">
              Home
            </Link>
            <Link
              to={"menu/64c90e73a64b74aa5949c91d"}
              className=" hover:font-bold"
            >
              Menu
            </Link>
            <Link to={"about"} className=" hover:font-bold">
              About
            </Link>
            {userData.profileImage ? (
              <Link to={"contact"}>
                <Popover open={openPopover} handler={setOpenPopover}>
                  <PopoverHandler {...triggers}>
                    <p variant="text" className=" hover:font-bold">
                      Profile
                    </p>
                  </PopoverHandler>
                  <PopoverContent {...triggers} className="max-w-[20rem]">
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <Avatar
                        size="md"
                        variant="circular"
                        alt=""
                        src={userData.profileImage}
                      />
                       <Typography
                      variant="h6"
                      color="blue-gray"
                      className="mb-2 flex items-center gap-2 font-medium"
                    >
                      <span>{userData.firstName}{" "}{userData.lastName}</span>{" "}
                    </Typography>
                      {/* <button
                        color="blue-500"
                        className="font-medium capitalize"
                      ></button> */}
                      {/* <button
                        type="button"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                        class="mb-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                        style={{backgroundColor: "#0077b5"}}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                        </svg>
                      </button> */}
                    </div>
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-normal"
                    >
                      Frontend Developer • Major interest in Web Development:
                      motivated to achieve measurable results, to deepen my
                      knowledge and improve my skills.
                    </Typography>
                    <div className="mt-6 flex items-center gap-8 border-t border-blue-gray-50 pt-4">
                      <Typography
                        variant="small"
                        color="gray"
                        className="flex items-center gap-1 text-xs font-normal"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          className="-mt-0.5 h-3.5 w-3.5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                          />
                        </svg>
                        United Kingdom
                      </Typography>
                      <Typography
                        variant="small"
                        color="gray"
                        className="flex items-center gap-1 text-xs font-normal"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          className="-mt-0.5 h-3.5 w-3.5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                          />
                        </svg>
                        Material Tailwind
                      </Typography>
                    </div>
                  </PopoverContent>
                </Popover>
              </Link>
            ) : (
              <Link to={"contact"}>
                <p>Contact</p>
              </Link>
            )}
          </nav>
          <div className="text-3xl hover:text-green-600 relative">
            <Link to={"cart"}>
              <LiaOpencart />
              {cartItem.length > 0 ? (
                <div className="absolute -top-2 -right-1 text-white bg-red-500 h-5 w-4 rounded-full m-0 p-0  text-sm text-center">
                  {cartItem.length}{" "}
                </div>
              ) : (
                ""
              )}
            </Link>
          </div>
          <div onClick={handleUserMenu}>
            <div className="text-3xl cursor-pointer  w-8 h-8 rounded-full overflow-hidden drop-shadow-md">
              {userData.profileImage ? (
                <img
                  src={userData.profileImage}
                  className="h-full w-full"
                  alt=""
                />
              ) : (
                <FaUserCircle />
              )}
            </div>
            {userMenu && (
              <div className="absolute right-2 bg-white py-2 px-2 shadow drop-shadow-md flex flex-col min-w-[120px] text-center">
                {userData.email === process.env.REACT_APP_ADMIN_EMAIL && (
                  <Link
                    to={"newproducts"}
                    className="whitespace-nowrap cursur-pointer hover:text-black-600 hover:font-bold"
                  >
                    New Product
                  </Link>
                )}
                {userData.profileImage ? (
                  <p
                    className="cursur-pointer hover:text-red-600 hover:font-bold "
                    onClick={handleLogout}
                  >
                    Logout ({userData.firstName})
                  </p>
                ) : (
                  <Link
                    to={"login"}
                    className="whitespace-nowrap cursur-pointer"
                  >
                    Login
                  </Link>
                )}
                <nav className="md:gap-6 text-base md:text-lg flex flex-col md:hidden rounded-md">
                  <Link to={""} className="py-1">
                    Home
                  </Link>
                  <Link to={"menu/64c68f902644d35fab60bd53"} className="py-1">
                    Menu
                  </Link>
                  <Link to={"about"} className="py-1">
                    About
                  </Link>
                  <Link to={"contact"} className="py-1">
                    Contact
                  </Link>
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
