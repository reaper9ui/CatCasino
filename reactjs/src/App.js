
import './App.css';
/* import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; */
import {Navbar} from './Navbar';
import { Sidebar } from './Sidebar';
import { Main } from './Main';

function App(){

return(
      <div className='App'>
          <Navbar />
          <Main />
      </div>
          );
      }
   
  
export default App;
