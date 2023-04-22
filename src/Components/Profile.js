import { useEffect ,useState} from "react";

import React from 'react'
import axios from "axios";
let stored_id=localStorage.getItem("id");
console.log(stored_id);
function Profile() {

  const [obj,setObj]=useState("dev")
  const myArray=[];
  const myArray2=[];
  

  useEffect(()=>{

    
        axios(`https://dummyjson.com/users/${stored_id}`)
        .then((response)=>{
          setObj(response.data)
          
        // let data=response.data;
        // setObj(data);
        // myArray.push(Object.values(data));
        // myArray2.push(Object.keys(data));
     
       
       
        // setObj(oldData => [ ...myArray[0]]);
       
        console.log("object is " ,obj);
        let div1=document.createElement("div");
        div1.innerHTML=myArray;
        
        })

      
        },[stored_id])
  
  
 
  
  return (
    <div id="profile-container container">
        
        <div className="holder-details">
          <h1 className="title-head">Profile Page</h1>
          <div ><span>User-Image</span><img src={obj.image}/></div>
          <div className="fields"><span className="keys">First name:</span> <span className="values">{obj.firstName}</span></div>
          <div className="fields"><span className="keys">LastName:</span> <span className="values">{obj.lastName}</span></div>
          <div className="fields"><span className="keys">maidenName:</span> <span className="values">{obj.maidenName}</span></div>
          <div className="fields"> <span className="keys">Age:</span> <span className="values">{obj.age}</span></div>
          <div className="fields"> <span className="keys">Gender:</span> <span className="values">{obj.gender}</span></div>
          <div className="fields"> <span className="keys">Email:</span> <span className="values">{obj.email}</span></div>
          <div className="fields"><span className="keys">Phone:</span> <span className="values">{obj.phone}</span></div>
          <div className="fields"><span className="keys">BirthDate:</span> <span className="values">{obj.birthDate}</span></div>
          <div className="fields"><span className="keys">BloodGroup:</span> <span className="values">{obj.bloodGroup}</span></div>
          <div className="fields"><span className="keys">Height:</span> <span className="values">{obj.height}</span></div>
          <div className="fields"><span className="keys">Weight:</span> <span className="values">{obj.weight}</span></div>
          <div className="fields"><span className="keys">EyeColor:</span> <span className="values">{obj.eyeColor}</span></div>

          <div className="fields"><span className="keys">Hair:</span> <span className="values">{JSON.stringify(obj.hair)}</span></div>
          <div className="fields"><span className="keys">Domain:</span> <span className="values">{obj.domain}</span></div>
          <div className="fields"><span className="keys">IP:</span> <span className="values">{obj.ip}</span></div>
          <div  className="fields"><span className="keys">Address:</span> <span className="values">{JSON.stringify(obj.address)}</span></div>
          <div className="fields"><span className="keys">MacAddress:</span> <span className="values">{obj.macAddress}</span></div>
          <div className="fields"><span className="keys">University:</span> <span className="values">{obj.university}</span></div>
          <div className="fields"><span className="keys">Bank:</span> <span className="values">{JSON.stringify(obj.bank)}</span></div>
          <div className="fields"><span className="keys">Company:</span> <span className="values">{JSON.stringify(obj.company)}</span></div>
          <div className="fields"><span className="keys">Ein:</span> <span className="values">{obj.ein}</span></div>
          <div className="fields"><span className="keys">Ssn:</span> <span className="values">{obj.ssn}</span></div>
          <div className="fields"><span className="keys">UserAgent:</span> <span className="values">{obj.userAgent}</span></div>
         
          
        </div>
    </div>
      
    
  )
}

export default Profile