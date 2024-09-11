


function TodoItem1({task,dueDate,deletetodo}) {


  return (
    <div class="container flex justify-center flex-col mt-10 border-2 border-violet-950 px-10 py-4" >
      <p className="font-semibold font-mono shadow-md">your task</p>

      <div class="grid sm:grid-cols-3 grid-rows-3 sm:grid-rows-1 my-10 sm:gap-16  p-3 w-full  text-balance border-2">
        <div class="inline-block text-balance font-semibold text-lg ">{task}</div>
        <div class="inline-block">{dueDate}</div>
        <div class="inline-block">
        <button onClick={()=>deletetodo(task)} type="button" class=" text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Delete</button> 
        </div>
      </div>

    </div>
  );
}

export default TodoItem1;
