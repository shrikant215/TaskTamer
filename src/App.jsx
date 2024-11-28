import React, { useContext, useEffect, useState } from "react";
import Login from "./componets/Auth/Login";
import Employeedashbord from "./componets/Auth/Dashbord/Employeedashbord";
import AdminDashbord from "./componets/Auth/Dashbord/AdminDashbord";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [logedInUserData, setLogedInUserData] = useState(null);

  const authdata = useContext(AuthContext);
  // setLocalStorage()
  useEffect(() => {
    
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userdata = JSON.parse(loggedInUser)
      setUser(userdata.role);
      setLogedInUserData(userdata.data)
    }
  }, [authdata]);

  const handleLogin = (email, password) => {
    if (email === "admin@example.com" && password === "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (  authdata ) {
      const employee = authdata.employee?.find( (e) => email === e.email && password === e.password  ) ;
        console.log(employee)
      if(employee){
        (employee)
        setUser("employee");
        localStorage.setItem(  "loggedInUser",  JSON.stringify({ role: "employee", data: employee }) );

      }
  
     
    } else {
      alert("Invalid Cradantials");
    }
  };


  // console.log(logedInUserData)

  return (
    <div>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user == "admin" ? (
        <AdminDashbord changeUser={setUser} data={logedInUserData} />
      ) : (
        <Employeedashbord changeUser={setUser} data={logedInUserData} />
      )}
    </div>
  );
};

export default App;
