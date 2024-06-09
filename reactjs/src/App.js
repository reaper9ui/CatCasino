
import './App.css';
import {Navbar} from './Navbar';
import { Main } from './Main';
import { UserProvider } from './userContext';
function App(){

return(
      
      <div className='App'>
          <Navbar />
    
      <UserProvider>
        <main>
          <Main />
        </main>
      </UserProvider>
  
      </div>
          );
      }
   
  
export default App;
