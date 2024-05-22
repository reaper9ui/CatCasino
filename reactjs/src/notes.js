/* conditional rendering */
/* function App() {
  const users = [
    { name: "Gilbert", age: 29 },
    { name: "Papsmear", age: 14 },
    { name: "dog", age: 9 },
  ];

  return(
    <div className="App"> 
      {users.map((users, key) =>{
        return <User name = {users.name} age = {users.age} />
       })} 
    </div>
  ); 
}  */
/* conditional rendering */ 


/* terenary operator  */
/* age>= 18 ? console.log("Y") : console.log("N") */
/* if age is more than 18 print y if not print n  */


/* states  */
/* hook is a function that starts with the word "use" */
/* add age */
/* function App() {
    const [age, setAge] = useState(0);
  
    const increaseAge = () => {
      setAge(5);
    }
  
    return (
      <div className="App">
        {age}
        <button onClick={increaseAge}>Increase Age</button>
      </div>
    );
  } */

  /* text input */
/* import './App.css';
import { User } from './User';
import { useState } from "react"; 

function App() {
  const [inputValue, setInput] = useState("")

  const handleChange = (event) => {
      setInput(event.target.value);
  }; 
 
  return(
    <div className="App">
        
      <input type = "text" onChange={handleChange}></input>
      {inputValue}
    </div>
  ); 
} 

 *//* states  */ 
/* counter application 
 function App(){
    const[count , setCount] = useState(0);

 const IncreaseAge = () =>{
  setCount(count + 1); 
}
const DecreaseAge = () =>{
  setCount(count -1); 
}
const Reset = () =>{
  setCount(0); 
}
  return(
    <div className='App'> 
      <button onClick = {IncreaseAge}>Increase</button>
      <button onClick = {DecreaseAge}>Decrease</button>
      <button onClick = {Reset}>Set to Zero</button>
      {count}
    </div>
  ); 
}
counter application  */


/* task list application , just a brush up  */
/* function App(){

    const[todoList, setTodo] = useState([]);
    const[newTask, setTask] = useState(""); 
  
  const handleChange = (event) =>{
      setTask(event.target.value);
  };
  
  const addTask = () =>{
    const task = {
      id: todoList.length === 0 ? 1: todoList[todoList.length -1].id +1 , 
      taskName: newTask
    };
      
      setTodo([...todoList, task]);
  };
  
  const deleteTask = (id) =>{
    const newList = todoList.filter((task) => {
        return task.id !== id; 
    })
    setTodo(newList) 
  }
    return(
      <div className = "App">
        <div className='addTask'>
          <input onChange={handleChange} />
          <button onClick={addTask}>Add Task</button>
  
        </div>
        <div className="list">
            {todoList.map((task) => {
                return <div>
                  <h3>{task.taskName}</h3>
                  <button onClick ={() => deleteTask(task.id)}>X</button>
                </div> 
            })}
        </div>
      </div>
    ); 
  } */
/* NOTES FOR MINI PROJ  */
/*      the syntax here is rly weird, when you have a parameter in a function/compound, you need to do the () => shit inside of the { }  LINE : 126 */
/* Cutting this down into smaller pieces , is how to make it readible , for the ethods inside of the current return statement , use props . ?? , this can also work for the methods that are being called outside of it aswell  */

  /* task list application , just a brush up  */

            
            /* LifeCycle && Use Effect Hook */
/* 
    Lets you use axios and fetch data from external sources can implement it with onClicks 
Can use objects in useState to get more flexibility
use a ? market before ex. predictedage?.age to avoid null pointers 
Notes : UseEffects seem very crucial , need to definiently do more research 

*/ /* triggers when mounted , if [] triggers when  */
            /* LifeCycle && Use Effect Hook */
         /*    export  const Text = () => {
                const [text, setText] = useState("")
                useEffect(() =>{ 
                    console.log("COMPONENT MOUNTED");
                    return () => {
                      console.log("COMPONENT UNMOUNTED");
                    };
                  }, []);  
                return(
                  <div>
                    <input onChange={(event) => {
                      setText(event.target.value);
                    }}/>
                  <h2>{text}</h2>
                </div>
                );
              };
 */

            /*Routers && routes (moving between links) */
 /* Watch other video for more indepth  */


          /*   Components / Contexts  */
/*
    
    what is prop drilling and why do we want to avoid it ? 
    Create a context 


 
*/

/* Freestyles */
/* 
    - Custom Hooks  
    - Typescript , Type-safety 
    - Redux Toolkit

*/