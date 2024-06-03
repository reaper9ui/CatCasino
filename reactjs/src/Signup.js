
import './LoginSignup.css'; 
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import {useState, useRef} from 'react';
import { Form, Button, Input } from 'antd';
import { createUser } from './createUser';
import { errorNotification } from './Notification';
import { successNotification } from './Notification';

export const Signup = () => {

    const[action, setAction] = useState("Signup"); 
    const[submitting, setSubmitting] = useState(false);  
    const formRef = useRef(null); // Functional component with hooks

    const onFinish = user => {
        console.log("onFinish called with:", user);
        setSubmitting(true); 
        console.log(JSON.stringify(user , null, 2)); 
        createUser(user)
        .then(() => {
            console.log("user addede yayy :3"); 
            successNotification("yayayay"); 
        })
        .catch(err => { 
            console.log(err.response);
            err.response?.json().then(res=>{
                console.log(res);
                errorNotification("Try again later",); 
            });
        }).finally(()=>{
            setSubmitting(false);
        }); 
    };

const onFinishFailed = errorInfo => {
    alert(JSON.stringify(errorInfo, null, 2 ))} ;

    return(
        <div className= "container"> 
            <div className = "header">
                <div className="text"
                >{action}
                </div>
           
            </div>
     <Form
        ref={formRef}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        initialValues={{remember :true}}
     > 
        <div className = "inputs">   
        <div className="input" >
        <PersonIcon className="icon" />
    <Form.Item 
        className='forminput'
        name="username"
        rules={[
            {required:true, message: "Username required "},
        ]}>
        <input type='text' placeholder = "Name"></input>
    </Form.Item> 
        </div>
        {action === "Signup"? <div 
        className="input">
        <EmailIcon className="icon" />
    <Form.Item 
         className='forminput'
        name="email"
        rules={[
            {required:true, message: "Email required "},
            {type: "email", message: "must be valid email"}
        ]}>
        <input type='text' placeholder = "Email"></input>
    </Form.Item>
        </div> : <div></div>}

        <div className="input">
        <LockIcon className="icon" />
    <Form.Item 
         className='forminput'
        name="password"
        rules={[
            {required:true, message: "password required "},
            {type: "password", message: "must be valid password"}
        ]}>
        <input 
        type="password"
         placeholder = "Password">
         </input>
        </Form.Item> 
        </div>
        </div>
        {action === "Signup"? <div></div> :<div className = "forgot-password">Lost password? <span>Click here</span></div> }
      
        <div className ="submit-container">
            <button className=
            {action==="Login"?"submit gray":"submit"} 
            onClick={()=> {setAction("Signup")}}
            >Sign up </button>
           

         <button 
         className= "submission"
         type="primary" 
         htmlType="submit"
         >
         Submit
         </button>
      
            <button className=
             {action==="Signup"?"submit gray":"submit"}
            onClick={()=> {setAction("Login")}}
            >Login </button>
        </div>
        </Form> 
      {submitting}
        </div>
      
    );
}