

import './LoginSignup.css'; 
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import {useState, useRef} from 'react';
import { Form, Button, Input } from 'antd';
import { checkUser } from './createUser';
 

export const Login = () => {

    const[action, setAction] = useState("Login"); 
    const[submitted, setSubmitted] = useState(false); 
    const formRef = useRef(null);

    const onFinish = user =>{
        console.log("we have entered the on finish :O" , user);

        checkUser(user) 
        .then(() => {
            console.log("return", user.username);
        }).finally( ()=> {
            setSubmitted(false);
        }); 
    }

    const onFinishFailed = user =>{
        console.log("womp womp little fella")
    }

    return(

        
        <div className= "container"> 
            <Form
            ref={formRef} 
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            initialValues={{remember :true}}
            >

            <div className = "header">
                <div className="text"
                >{action}
                </div>
           
            </div>
        <div className = "inputs">
        
        <div className="input" >
       
        <PersonIcon className="icon" />
        
        <Form.Item
                name = "username"
                
        >
    
        <input type='text' placeholder = "Name"></input>
       </Form.Item>
        </div>
       
    
        <div className="input">
        <LockIcon className="icon" />
        
        <Form.Item>
        <input type='password' placeholder = "Password"></input>
        </Form.Item>

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
            <button
             className='submit'
             type="primary" 
             htmlType="submit"
             >Submit</button>
        </div>

        </Form>     
        </div>
    );
}