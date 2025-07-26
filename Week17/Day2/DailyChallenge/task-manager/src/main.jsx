import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TaskProvider } from "./context/TaskContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TaskProvider>
    <App />
  </TaskProvider>
);
