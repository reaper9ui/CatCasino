import { Sidebar } from './Sidebar';
import {useState} from 'react'; 
import {Link} from "react-router-dom";
import SegmentIcon from '@mui/icons-material/Segment'; 
import CloseIcon from '@mui/icons-material/Close'; 
import { SidebarData } from './SidebarData';
import "./Navbar.css"; 


 export function Navbar(){
    const[isVisible, setVisible] = useState(false); 

    return (

    <div>
    <nav className="nav">
      <div className="left">
      <ul>
        <li>
          <Link to="#" className="menu-bars">
           
            <SegmentIcon
             onClick={()=> setVisible(!isVisible)} />
          </Link>
      </li>
      <li>
  <Link to="/">SiteName</Link>
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

     {/*  part 2 , side bar  */}

    <nav className={isVisible ? 'sidebar-menu active': "sidebar-menu"}>
      <ul className = 'sidebar-menu-items'
       onClick={()=> setVisible(!isVisible)}>
          <li className = 'sidebar-toggle'>
            <Link to="#" className ="menu-bars">
            <CloseIcon /> 
            </Link>
          </li>
          {SidebarData.map((val, key) => {
        return(
            <li key={key}
            className='row'
            id = {window.location.pathname == val.link ? "active":""}
             onClick = {()=> window.location.pathname = val.link}>
                <div id="icon">{val.icon} </div>
                <div id="title">{val.title} </div>
                </li>
              );
            })}
         
        
      </ul>
    </nav>
    </div>
    ); 
}
