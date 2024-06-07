

import './LoginSignup.css'; 
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import {useState, useRef, createContext, useContext} from 'react'; 
import { Form, Button, Input } from 'antd';
import { checkUser } from './createUser';
import {Link} from 'react-router-dom';


export const Login = () => {

    const[action, setAction] = useState("Login"); 
    const[submitted, setSubmitted] = useState(false); 
    const formRef = useRef(null);
    

    const onFinish = user =>{
        console.log("we have entered the on finish :O" , user);

        checkUser(user) 
    
        .then(() => {
            console.log("return", user.username);
            setSubmitted(true);
        });
    }

    const onFinishFailed = errorInfo =>{
          alert(JSON.stringify(errorInfo, null, 2 ))} ;


    return(

    submitted === false ?        
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
            <Button
             className='submit'
             type="primary" 
             htmlType="submit"
             >Submit</Button>
        </div>

        </Form>     
        </div>
        : <div> You have Sucessfully Loggied in
                   <Link to="/">Take Me Home Babygirl</Link>
        </div>
    );
}