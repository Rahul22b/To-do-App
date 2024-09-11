import { useState } from "react";

function AddTodo({addtodox}) {
const [task,settask]=useState();
const  [date,setdate]=useState();

  return (
    <div class="container flex justify-center ">
      <div className="grid sm:grid-cols-3 grid-rows-3 sm:grid-rows-1 justify-around w-3/4  flex-col gap-5 sm:flex-row border-2 sm:border-0 sm:border-y-2  border-black p-10">
        <div class="col-6">
          <input type="text" className="w-full h-10 border-2 rounded-md p-1" placeholder="Enter Todo Here" value={task}  onChange={(e)=>{
            {
              settask(e.target.value);
            }
          }}/>
        </div>
        <div class="col-4">
          <input type="date" className="w-full sm:w-40 h-10 border-2 rounded-md p-1" value={date}  onChange={(e)=>{
            {
             
              setdate(e.target.value);
            }
            
          }}/>
        </div>
        <div class="col-2">
          <button type="button" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"  onClick={()=>{
            addtodox(task,date);
            settask("");
            setdate("");

          }}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
