import { useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { ImagetoBase64 } from "../converter/Base64Image";
import { toast } from "react-hot-toast"

const SignUp = () => {
  const navigate = useNavigate();
  const [passwordIcon, setPasswordIcon] = useState(false);
  const [confirmPasswordIcon, setConfirmPasswordIcon] = useState(false);
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    profileImage: "",
  });

  const handlePasswordIcon = () => {
    setPasswordIcon((passwordIcon) => !passwordIcon);
    setTimeout(() => {
      setPasswordIcon((passwordIcon) => !passwordIcon);
    }, 1000);
  };
  const handleConfirmPasswordIcon = () => {
    setConfirmPasswordIcon((confirmPasswordIcon) => !confirmPasswordIcon);
    setTimeout(() => {
      setPasswordIcon((confirmPasswordIcon) => !confirmPasswordIcon);
    }, 1000);
  };
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };
  const handleUploadProfileImage = async (e) => {
    const profImage = await ImagetoBase64(e.target.files[0]);
    setUserDetails((preve) => {
      return {
        ...preve,
        profileImage: profImage,
      };
    });
    console.log(e.target.files[0]);
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password, confirmPassword } =
      userDetails;
    if (firstName && lastName && email && password && confirmPassword) {
      if (password === confirmPassword) {
        let server = process.env.REACT_APP_SERVER_DOMAIN?process.env.REACT_APP_SERVER_DOMAIN:"https://groceries-yipj.onrender.com"
        const FetchData = await fetch(`${server}/signup`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(userDetails)
        })
        // Storing data in form of JSON
        var data = await FetchData.json();
        toast(data.message)
        if (data.alert) {
          navigate("/login");

        }
      } else {
        alert("Password Didn't match with Confirm Password");
      }
    } else {
      alert("Please Fill all required fields");
    }
  };

  return (
    <div className="p-2 md:p-4 card elevation-5">
      <div className="w-full max-w-sm bg-white m-auto bg-white flex items-center flex-col p-4">
        <h1 className="text-center text-2xl font-bold">Sign up</h1>
        <div className="w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto relative border mt-2">
          <img
            src={
              userDetails.profileImage
                ? userDetails.profileImage
                : "https://www.inklar.com/wp-content/uploads/2020/05/dummy_user-370x300-1.png"
            }
            alt=""
            className="w-full h-full"
          />
          <label htmlFor="profileImage">
            <div className="absolute bottom-0 h-1/3 bg-slate-500 w-full text-center cursor-pointer">
              <p className="text-sm  text-white">Profile</p>
              <input
                type={"file"}
                id="profileImage"
                accept="image/*"
                className="hidden"
                onChange={handleUploadProfileImage}
              ></input>
            </div>
          </label>
        </div>
        <form className="w-full py-3 flex flex-col" onSubmit={handleFormSubmit}>
          <label htmlFor="firstName"> First Name</label>
          <input
            type={"text"}
            onChange={handleOnChange}
            value={userDetails.firstName}
            id="firstName"
            name="firstName"
            className="w-full rounded mt-1 mb-2 bg-slate-200 px-2 py-1 focus-within:outline-blue-300"
          ></input>
          <label htmlFor="lastName"> Last Name</label>
          <input
            type={"text"}
            onChange={handleOnChange}
            value={userDetails.lastName}
            id="lastName"
            name="lastName"
            className="w-full rounded mt-1 mb-2 bg-slate-200 px-2 py-1"
          ></input>
          <label htmlFor="email">Email</label>

          <input
            type={"text"}
            onChange={handleOnChange}
            id="email"
            name="email"
            className="w-full rounded mt-1 mb-1 bg-slate-200 px-2 py-1"
          ></input>
          <label htmlFor="password">Password</label>
          <div className="flex px-2 py-1.5 bg-slate-200 rounded mt-1 mb-2 focus-within:outline  focus-within:outline-blue-300">
            <input
              onChange={handleOnChange}
              value={userDetails.password}
              type={passwordIcon ? "text" : "password"}
              id="password"
              name="password"
              className="w-full rounded bg-slate-200   focus-within:outline-none"
            ></input>
            <span className="flex text-xl" onClick={handlePasswordIcon}>
              {passwordIcon ? <BiShow /> : <BiHide />}
            </span>
          </div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <div className="flex px-2 py-1.5 bg-slate-200 rounded mt-1 mb-1 focus-within:outline  focus-within:outline-blue-300">
            <input
              onChange={handleOnChange}
              value={userDetails.confirmPassword}
              type={confirmPasswordIcon ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              className="w-full rounded bg-slate-200   focus-within:outline-none"
            ></input>
            <span className="flex text-xl" onClick={handleConfirmPasswordIcon}>
              {confirmPasswordIcon ? <BiShow /> : <BiHide />}
            </span>
          </div>
          <button className="w-full max-w-[150px] m-auto mt-3 py-1 bg-blue-500 hover:bg-blue-600 rounded-full  text-white text-xl font-medium">
            Sign Up
          </button>
          <p className="flex text-left text-sm mt-4">
            Already have account ?
            <Link
              to={"/login"}
              className="ml-2 text-blue-500 font-bold underline"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
