import React,{useState} from "react";
import { Eye, EyeClosed,EyeIcon } from "lucide-react";

const FormValidate=()=> {
    const [psw,setPsw]=useState('');
    const [pswVisible,setPswVisible]=useState(false);
    const specialChars=['!','@','#','$','%','^','&','*'];

    const pswValidate=[
        {rule:'At least 8 characters',isValid:psw.length>=8},
        {rule:'At least one uppercase letter',isValid:[...psw].some(char=>char>= 'A' && char<='Z')},
        {rule:'At least one lowercase letter',isValid:[...psw].some(char=>char>= 'a' && char<='z')},
        {rule:'At least one number',isValid:[...psw].some(char=>char>= '0' && char<='9')}, 
        {
            rule:'At least one special character',
              isValid: [...psw].some(char =>
                    !(char >= 'A' && char <= 'Z' ||
                    char >= 'a' && char <= 'z' ||
                    char >= '0' && char <= '9')
                )},
         ];
    
    const handleChange=(e)=>{ 
        setPsw(e.target.value);
    }
    return (
        <div>
            <div className="flex flex-row">
                 <input type="password" value={psw} onChange={(e)=>handleChange(e)} placeholder="Enter your password"/>
                 {
                  pswVisible ? <EyeClosed className="ml-2 cursor-pointer" onClick={()=>setPswVisible(false)}/>
                  :<EyeIcon className="ml-2 cursor-pointer" onClick={()=>setPswVisible(true)}/>
                  }
            </div>
            <div>  
                <h2> Password Requirements</h2>
                <ul>
                    {pswValidate.map(rule=>(
                        <div>
                            <input type="radio" checked={rule.isValid} readOnly/>
                            <span>{rule.rule}</span>
                        </div>
                    ))}
                </ul>
            </div>
            <button className={`p-2 ${!pswValidate.every(rule=>rule.isValid) ? 'bg-gray-500' : 'bg-blue-500'} text-white rounded`} type="button"  disabled={!pswValidate.every(rule=>rule.isValid)}>Submit</button>
        </div>
    )
}
export default FormValidate;
