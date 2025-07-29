import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

export default function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const selectedDateKey = format(selectedDate, "yyyy-MM-dd");

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>📅 Daily Planner</h1>
      <DatePicker selected={selectedDate} onChange={setSelectedDate} inline />
      
      <AddTask selectedDate={selectedDateKey} />
      <TaskList selectedDate={selectedDateKey} />
    </div>
  );
}

