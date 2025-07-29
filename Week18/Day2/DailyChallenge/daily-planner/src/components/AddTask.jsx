import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/tasksSlice";

export default function AddTask({ selectedDate }) {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (!task.trim()) return;
    dispatch(addTask({ date: selectedDate, task }));
    setTask(""); // clear input after adding
  };

  return (
    <div style={{ margin: "20px 0" }}>
      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={{ padding: "8px", width: "250px", marginRight: "8px" }}
      />
      <button onClick={handleAdd} style={{ padding: "8px 12px" }}>Add Task</button>
    </div>
  );
}