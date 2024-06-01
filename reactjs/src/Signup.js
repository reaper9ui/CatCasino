
import './LoginSignup.css'; 
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import {useState, useRef} from 'react';
import { Form } from 'antd';
import { createUser } from './createUser';


export const Signup = () => {

    const[action, setAction] = useState("Signup"); 
    const[submitting, setSubmitting] = useState(false);  
    const formRef = useRef(null); // Functional component with hooks


    const onFinish = user => {
        setSubmitting(true); 
        console.log(JSON.stringify(user, null, 2)); 
        createUser(user)
        .then(() => {
            console.log("user addede yayy :3"); 
            //should add a success notification 
        }).catch(err => {
            console.log(err.response);
            err.response.json().then(res=>{
                console.log(res);
                errorNotification("Try again later",
            )})
        });    
    }

    const onFinishFailed = user =>{
        setSubmitting(false); 
        
    }

    return(
        <div className= "container"> 
            <div className = "header">
                <div className="text"
                >{action}
                </div>
           
            </div>
     <Form
        ref={formRef}
        onFinishFailed={onFinishFailed}
        onFinish={onFinish}
        initialValues={{remember :true}}
     > 
        <div className = "inputs">   
        <div className="input" >
        <PersonIcon className="icon" />
    <Form.Item 
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
        name="password"
        rules={[
            {required:true, message: "password required "},
            {type: "email", message: "must be valid email"}
        ]}>
        <input type='text' placeholder = "Password"></input>
        </Form.Item> 
        </div>
        </div>
    
    </Form> 
        {action === "Signup"? <div></div> :<div className = "forgot-password">Lost password? <span>Click here</span></div> }
      
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
      {submitting}
        </div>
      
    );
}