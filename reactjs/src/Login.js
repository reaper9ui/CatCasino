

import './LoginSignup.css'; 
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import {useState} from 'react';


 

export const Login = () => {

    const[action, setAction] = useState("Login"); 


    return(
        <div className= "container"> 
            <div className = "header">
                <div className="text"
                >{action}
                </div>
           
            </div>
        <div className = "inputs">
        <div className="input" >
        <PersonIcon className="icon" />
        <input type='text' placeholder = "Name"></input>
        </div>
       
        {action === "Signup"? <div className="input">
        <EmailIcon className="icon" />
        <input type='text' placeholder = "Email"></input>
        </div> : <div></div>}

        <div className="input">
        <LockIcon className="icon" />
        <input type='password' placeholder = "Password"></input>
      
        </div>
        </div>
        {action === "Signup"? <div></div> :<div className = "forgot-password">Forgot password? <span>Click here</span></div> }
      
        <div className ="submit-container">
            <div className=
            {action==="Login"?"submit gray":"submit"} 
            onClick={()=> {setAction("Signup")}}
            >Sign up </div>
            <div className=
            {action==="Signup"?"submit gray":"submit"}
            onClick={()=> {setAction("Login")}}
            >Login </div>
        </div>


        </div>
    );
}