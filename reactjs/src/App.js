
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {Navbar} from './Navbar';
import { Sidebar } from './Sidebar';

function App(){



return(
      <div className='App'>
        
        <Navbar />
      {/*   {isVisible && <Sidebar />} */}
      </div>
          );
      }
   
  
export default App;
