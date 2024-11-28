import React, { useState } from "react";
import { getLocalStorage, setLocalStorage } from "../../utils/LocalStorage";

function TaskAssign() {
  const [assignTo, setAssignTo] =useState("");
 const [ formData, setFormData] = useState({
  title : "",
  date: "",
  category: "",
  description: "",
  active: true,
  completed: false,
  failed: false,
  newTask: true,
 });

 const handleOnChange =(e) => {
const {name, value} = e.target;
setFormData((prev) => ({
  ...prev,
  [name] : value,
}));

 };


 const submitFormData =(e) => {
  e.preventDefault()

  const data = JSON.parse(localStorage.getItem('employees'))
  console.log(data);
 
  data.forEach((elem) => {
   if(assignTo === elem.firstName){
     elem.tasks.push(formData)
     elem.taskCount.active += 1;
     elem.taskCount.newTask += 1;
    //  console.log(elem.taskCount.active+1)
   }
   console.log(data)
   localStorage.setItem("employees",JSON.stringify(data))
  
  })

 }

  return (
    <div className="flex item-end justify-between p-5">
      <form  className=" w-[45%] p-5 font-medium flex flex-col gap-4">
        <div className="gap-2 flex flex-col">
          <h1>Task Title</h1>
          <input
          name="title"
          onChange={handleOnChange}
          value={formData.title}
            className="w-[100%] p-2 bg-transparent  border  rounded"
            type="text"
            placeholder="Task title"
          />
        </div>
        <div className="gap-2 flex flex-col">
          <h1>date</h1>
          <input
          name="date"
          onChange={handleOnChange}
           value={formData.date}
            className="w-[100%] p-2 bg-transparent border rounded"
            type="date"
            placeholder="Task title"
          />
        </div>
        <div className="gap-2 flex flex-col">
          <h1>Assign To</h1>
          <input
          name="assignTo"
          onChange={(e) => setAssignTo(e.target.value)}
           value={assignTo}
            className="w-[100%] p-2 bg-transparent border rounded"
            type="text"
            placeholder="Task title"
          />
        </div>
        <div className="gap-2 flex flex-col">
          <h1>Catagory</h1>
          <input
          name="category"
          onChange={ handleOnChange}
           value={formData.category}
            className="w-[100%] p-2 bg-transparent border  rounded"
            type="text"
            placeholder="Task title"
          />
        </div>
      </form>
      <div className="w-[45%] flex flex-col font-medium">
        <h1>Discription</h1>
        <div className=" w-[100%] h-[100%] p-4 flex item-center justify-center rounded-xl flex-col">
          <textarea
          name="description"
          onChange={handleOnChange}
           value={formData.description}
            className="w-[100%] h-full rounded bg-transparent border p-5 font-medium"
            type="text"
          />
          <button onClick={submitFormData} type="submit" className="bg-green-600 p-4 mt-7 rounded-xl font-bold" >Create Task</button>
        </div>
      </div>
    </div>
  );
}

export default TaskAssign;
