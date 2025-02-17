import React, { useState } from "react";
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import PasswordIcon from '@mui/icons-material/Password';

const Login = ({handleLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("email is: " , email);
    console.log("password is: " , password);
    handleLogin(email,password)
    setEmail("");
    setPassword("")

  };
  return (
    <div className="flex h-screen w-screen items-center justify-evenly bg-white font-medium flex-row gap-[3rem]  ">
      <div className="flex flex-col  items-center justify-center w-full h-full bg-[#15171E]">
    <h1 className="font-medium text-purple-500 text-5xl text-center">TaskTamer</h1>
    <h1 className="font-medium text-white-500 mt-2 text-l text-center">Welcome back to TaskTamer!</h1>
      <div className=" p-5 bg-[#1C1E27] rounded-xl mt-6 w-[32%] shadow-[0_4px_10px_rgba(0,0,0,0.3)]">
        <div className="m-2 mb-8 text-xl">Signin</div>
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col item-center justify-star"
        >
          <div id="inputs" className="py-3 flex gap-4 p-3 border-black-900 rounded-xl placeholder-gray border mb-2">
          <LocalPostOfficeIcon />

          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            className="font-medium text-white outline-none bg-transparent   "
            type="email"
            placeholder="Email"
         />
          </div>

          <div className="py-3 flex gap-4 p-3 border-black-900 rounded-xl placeholder-gray border ">
            <PasswordIcon />
          <input
          onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            className="font-medium text-white outline-none bg-transparent "
            type="password"
            placeholder="Password"
          />
          </div>
          <button id="signinButton" className=" font-bold text-xl text-purple-800  outline-none placeholder-white border-2 bg-white rounded-xl  mt-5 py-3 ">
            SignIn
          </button>
          <div className="flex items-center justify-center m-3 gap-2">Don't have an account? <span className="text-purple-500 font-bold">Sing Up</span></div>

        </form>
      </div>
      </div>
    </div>
  );
};

export default Login;
