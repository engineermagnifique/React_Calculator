import React,{useState} from "react";

const Challenge1 = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [showPsw,setShowPsw]=useState(false);
    return (
        <div>
           <p>Login Form</p>
           <input type="text"
           value={email}
           onChange={(e)=>setEmail(e.target.value)}
           placeholder="Enter Email please"
           />
           <input type={showPsw?'text':'password'}
           value={password}
           onChange={(e)=>setPassword(e.target.value)}
           placeholder="Enter a password"
           />
           <button className="p-4 text-blue-900 b-5" type="button" onClick={()=>setShowPsw(prev=>!prev)}>{showPsw? 'Hide':'Show'}</button>
           {
             password.length<6 &&
             (
                <p>Password less than 6 characters</p>
             )
           }
        </div>
    )
}
export default Challenge1;