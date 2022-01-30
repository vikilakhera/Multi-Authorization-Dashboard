import React, {useState, useEffect } from "react";
import {useParams, useHistory} from "react-router-dom";
import "./login.css";

function Login() {
    const [user_id, setUserId] = useState("");
    const [password, setUserPassword] = useState("");
    const params = useParams();
    const history = useHistory();
    
    useEffect(() => {
      let token = null;
      if(params.userType === "customer"){
        token = localStorage.getItem("cust_id");
      }
      else if(params.userType === "admin"){
        token = localStorage.getItem("admin_id"); 
      }
      else if(params.userType === "tl"){
       token = localStorage.getItem("tl_id");
      }
      else if(params.userType === "tp"){
        token = localStorage.getItem("tp_id");
      }
      if(token){
        history.push(`/${params.userType}/dashboard`);
      }
    },[]);
  
    function login(e){
      if(params.userType === "customer" && user_id === "customer" && password === "12345"){
        localStorage.setItem("cust_id", user_id);
        history.push(`/${params.userType}/dashboard`);
      }
      else if(params.userType === "admin" && user_id === "admin" && password === "12345"){
        localStorage.setItem("admin_id", user_id); 
        history.push(`/${params.userType}/dashboard`);
      }
      else if(params.userType === "tl" && user_id === "teamleader" && password === "12345"){
        localStorage.setItem("tl_id", user_id);
        history.push(`/${params.userType}/dashboard`);
      }
      else if(params.userType === "tp" && user_id === "teamperson" && password === "12345"){
        localStorage.setItem("tp_id", user_id);
        history.push(`/${params.userType}/dashboard`);
      }
      else{
        alert("Please enter valid credentials!");
      }
      
    }

    
    return (
      <div className="container ">
        <form onSubmit={login} className="form-signin login-box">
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
          <div className="row">
            <div className="col input">
              <label><h4>Email</h4></label>
              <input
                className="email"
                type="text"
                name="user_id"
                onChange={(event) => {setUserId(event.target.value)}}
                placeholder="Enter Email"
              />
              <label><h4>Password</h4></label>
              <input
                className="email"
                type="password"
                name="user_password"
                onChange={(event) => {setUserPassword(event.target.value)}}
                placeholder="Enter Password"
              />
              <br/>
              <input className="sign-in-btn" type="submit" value="Sign In" />
            </div>
          </div>
        </form>
      </div>
    );
  
}
export default Login;
