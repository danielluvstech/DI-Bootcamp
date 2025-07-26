import { useContext, useRef } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskInput() {
  const { dispatch } = useContext(TaskContext);
  const inputRef = useRef();

  const handleAdd = () => {
    const text = inputRef.current.value.trim();
    if (text) {
      dispatch({
        type: "ADD_TASK",
        payload: { id: Date.now(), text, completed: false }
      });
      inputRef.current.value = "";
    }
  };

  return (
    <div style={{ marginBottom: "15px" }}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter a task"
        style={{ padding: "8px", width: "250px" }}
      />
      <button
        onClick={handleAdd}
        style={{ marginLeft: "10px", padding: "8px 12px" }}
      >
        Add Task
      </button>
    </div>
  );
}