import { useState } from "react";
import './App.css';
import Task from "./Components/Task";
function App() {
  const [taskname,settaskname] = useState("");
  const [time,settime] = useState("");
  const [tasklist, settasklist] = useState([]);
  const addTask = () =>{
    settasklist([...tasklist, { task: taskname,time: time }]);
    settaskname('');
    settime('');
  };
  return (
    <div className="App"> 
    <h1>Todo List</h1>
    <label>Task Name:</label>
    <input type="text" id="task" placeholder="enter task.." onChange={(e) =>{
      settaskname(e.target.value)
    }}/>
    <label>Time:</label>
    <input type="text" id="time" placeholder="enter time.." onChange={(e) =>{
      settime(e.target.value)
    }}/>
    <button onClick={addTask}>Add</button>
    {tasklist.map((task) =>{
      return <Task taskname={task.task} time={task.time}/>
    })}
    </div>
  );
}

export default App;
