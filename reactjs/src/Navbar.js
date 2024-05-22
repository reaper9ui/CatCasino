import { Sidebar } from './Sidebar';
import { useState } from 'react'; 





 export function Navbar(){
    return <nav className="nav">
      
      <div className="left">
      <ul>
        <li>
         <button 
              className='SidebarButton'
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
                <a href = "/Login">Login</a>
            </li>
            <li>
            <a href = "/Signup">Sign up</a>
            </li>
        </ul>
        </div>
   
    </nav>

}