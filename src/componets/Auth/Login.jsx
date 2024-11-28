import React, { useState } from "react";
// import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

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
      <div className="flex flex-col  items-center justify-center w-full h-full bg-gray-800">
    <h1 className="font-medium text-gray-700 text-3xl text-center">Employee Mangement System</h1>
    {/* <AccountCircleRoundedIcon /> */}
      <div className=" p-20 rounded-2xl">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col item-center justify-center"
        >
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            className="font-medium text-gray-500 outline-none bg-transparent placeholder-gray border-2 border-black-900 rounded-full py-3 px-5"
            type="email"
            placeholder="Enter your email"
          />
          <input
          onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            className="font-medium text-gray-500 outline-none bg-transparent placeholder-gray border-2 border-black-900 rounded-full mt-5 py-3 px-5"
            type="password"
            placeholder="Enter your password"
          />
          <button className="font-medium text-white outline-none placeholder-white border-2 bg-emerald-600 rounded-full  mt-5 py-3 px-5">
            Log in
          </button>
        </form>
      </div>
      </div>

      <div className="w-full">
        <img className="w-[70%] h-auto" src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg?t=st=1732632447~exp=1732636047~hmac=91b2522ed8ab71d620717de6785062364209cdb395176a2ca45748e933f10d45&w=740" alt="" />
      </div>
    </div>
  );
};

export default Login;
