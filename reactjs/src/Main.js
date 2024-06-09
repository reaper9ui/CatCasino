import './Main.css';
import axios from 'axios';
import {useState, useEffect} from 'react';
import catButton from './imgs/catbutton.png'; 
import catergamble from "./imgs/catergamble.jpg";
import catClose from './imgs/catsuper.avif'; 
import{Link} from "react-router-dom"; 
import { UserContext } from './userContext';


export function Main() {
    const [ catFact, setFact] = useState(""); 
    const [Register, SetRegister] = useState(false); 
    const { user } = useContext(UserContext);

    const fetchFact = () => {
        axios.get("https://catfact.ninja/fact").then((res) => {
        setFact(res.data.fact); 
        });
    }

    useEffect(() => {
        fetchFact(); 
    }, []);
    

    return(
    <div className =
    "main"> 

    <div className = "welcome">
    
    {Register === false ? <div className = "login">

    <div className='boxone'>
    <div className='boxoneb'>
        <div className="heada">
            Play Now
        </div>
        <div className='redirect'>
            <Link to ='/Signup'>Register Today</Link>
        </div>
        <div className='option'>
        </div>
    </div>
    </div>    

    <div className='superborder'>

    <div className ="overlaytext">
            Never Give Up
        </div>  
        <img
          src={catergamble} 
          alt="CatPic"
          className ="catpic"
          style={{width:"100%", height: '100%'}}        
        />    
    </div>

        </div>:
    <h1>Welcome {user.username}</h1> 
    
    
    
    
    
    }
    </div>
    <div>
        <hr/>
    </div>
    <div className = "factContainer">
        <h2>Click Cat :3</h2>
        {catFact}
        <img
         src={catButton} 
         alt="Cat Button"
         onClick={fetchFact}
         className ="catbutt"
         style={{width:"90px", height: '90px'}}
         /> 
    </div>

    </div>
    ); 

}