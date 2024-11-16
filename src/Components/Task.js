import React from 'react';
import '../App.css';
export default function Task({taskname,time}) {
  return (
    <div className="task">
        <h3>TaskName: {taskname}</h3>
        <h3>Time: {time}</h3>
    </div>
  )
}
