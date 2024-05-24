import { Link } from 'react-router-dom';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {SidebarData} from "./SidebarData";
import {useState} from 'react'; 



export function Sidebar(){

    return <div className='Sidebar'> 
    <ul className ="SidebarList" >
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
     </ul></div>

}

