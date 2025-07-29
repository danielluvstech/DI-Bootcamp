import React from "react";
import { useSelector } from "react-redux";

export default function TaskList({ selectedDate }) {
  const tasks = useSelector((state) => state.tasks.tasksByDate[selectedDate] || []);

  return (
    <div>
      <h3>Tasks for {selectedDate}</h3>
      {tasks.length === 0 ? (
        <p>No tasks for this day.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>{task.text}</li>
          ))}
        </ul>
      )}
    </div>
  );
}