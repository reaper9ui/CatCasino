import './Main.css';
import axios from 'axios';
import {useState, useEffect} from 'react';
import catButton from './imgs/catbutton.png'; 
import catClose from './imgs/catsuper.avif'; 

export function Main() {
    const [ catFact, setFact] = useState(""); 

    
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
    <h1>Welcome _____ To Cat Casino</h1>
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