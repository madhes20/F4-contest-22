import React from 'react'
import { useNavigate, useNavigation } from 'react-router-dom';
import { useState,useEffect } from 'react'
import Profile from './Profile';

let user_credentials=[
    {id: 1,Username : "atuny0" , Password : "9uQFF1Lh"},
    {id:2 , Username : "hbingley1" , Password : "CQutx25i8r"},
    {id:3 , Username : "rshawe2" , Password : "OWsTbMUgFc"},
    {id:4,Username:"kminchelle", Password:"0lelplR"}
]
let fetch_id="";

function fetch_fun(username_state,password_state)
{
    fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({    
                    username:`${username_state}`,     
                        // 'kminchelle',
                    password:`${password_state}` 
                    // '0lelplR',
                    // expiresInMins: 60, // optional
                })
                })
                .then(res => res.json())
                .then(console.log);

}

function Login() {
    const [username_state,setUsername]=useState("");
    const [password_state,setPassword]=useState("");
    
    const navigate=useNavigate()

 

    function Login_verify(){         
            // console.log(user_credentials[0]);
            console.log("Entered username : " ,username_state ,password_state);
            for(let i=0;i<user_credentials.length;i++)
            {
                
                if(user_credentials[i].Username==username_state && user_credentials[i].Password==password_state)
                {
                    console.log("hi");
                    // console.log(user_credentials[i].id);
                    fetch_id=user_credentials[i].id;

                    localStorage.setItem("id" ,`${fetch_id}`)
                    fetch_fun(username_state,password_state);  
                    navigate("Profile");
                    
                    // <Profile Id={fetch_id}/>
                }
            }
        }
        
       

  return (
    <div className="form">
        <h1 className='title-head'>Login Page</h1>
        <form className='form-container'>
            <label htmlFor="username">User Name :</label>
            <input   onChange={(e)=>{setUsername(e.target.value)}} type="text" id='username'/>
            <label htmlFor="password">Password :</label>
            <input  onChange={(e)=>{setPassword(e.target.value)}} type="password" id='password'  />
            <button onClick={Login_verify} type='button'>Login</button>
        </form>
    </div>
    
  )
}

export default Login