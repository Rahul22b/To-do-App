
// Example usage:




import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem1 from "./components/TodoItem1";

import "./App.css";
import { useState } from "react";
import WelcomeMsg from "./components/WelcomeMsg";

function App() {



const [todolist,settodolist]=useState([]);

function  addTodo(task,duedate){
  settodolist([...todolist,{task,duedate}]);
}

function deletetodo(task){
const a= todolist.filter((e)=>e.task!==task)

settodolist(a);
}

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo addtodox={addTodo}/>

    
      {todolist.length===0 && <WelcomeMsg/>}
      <div className="w-4/5">   
        {todolist.map((e)=>{
        return <TodoItem1  task={e.task} dueDate={e.duedate} deletetodo={deletetodo}/> 
        })}
      </div>
        <div className="mt-20 font-bold text-violet-950">Made with ❤️ Rahul</div>
    </center>
  );
}

export default App;
