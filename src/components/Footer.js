import React from 'react'
import { Typography } from "@material-tailwind/react";
import imgFooter from "../assets/Screenshot 2023-07-25 174259.png"
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="flex flex-col w-full bg-slate-700 p-5 m-0">
        <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-white text-center md:justify-between">
          <img src={imgFooter} alt="logo-ct" className="w-28 hover:scale-105 transition-all" />
          <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
            <li>
              <Link to={"about"}>
              <Typography
                className="font-normal hover:text-2xl transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                About Us
              </Typography>
              </Link>
            </li>
            <li>
            <Link to={"about"}>
              <Typography
                className="font-normal hover:text-2xl transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                License
              </Typography>
              </Link>
            </li>
            <li>
            <Link to={"about"}>
              <Typography
                className="font-normal hover:text-2xl transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                Contribute
              </Typography>
              </Link >
            </li>
            <li>
            <Link to={"about"}>
              <Typography
                color="blue-gray"
                className="font-normal hover:text-2xl transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                Contact Us
              </Typography>
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-3 border-blue-gray-50"/>
        <Typography color="white" className="text-center hover:text-2xl font-normal">
          &copy; {currentYear} Groceries For Us
        </Typography>
      </footer>

    )
}

export default Footer