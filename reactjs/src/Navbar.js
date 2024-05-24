import { Sidebar } from './Sidebar';
import {useState} from 'react'; 
import {Link} from "react-router-dom";

 export function Navbar(){
    const[isVisible, setVisible] = useState(false); 

    const changeVisibility = () => setVisible(!isVisible);


    return (
    <div>
    <nav className="nav">
      <div className="left">
      <ul>
        <li>
         <button 
         className='SidebarButton'
         onClick = {changeVisibility}
              >
             Sidebar 
        </button> 
      </li>
      <li>
        <a href="/" className="Title">Site Name</a>
        </li>
       </ul>
       </div> 
       <div className="right">
        <ul>
          
            <li>
            <Link to="/Login">Login</Link>
            </li>
            <li>
            <Link to ='/Signup'>Signup</Link>
            </li>
        </ul>
        </div>
    </nav>
    {isVisible && <Sidebar /> }  
    </div>
    ); 
}
