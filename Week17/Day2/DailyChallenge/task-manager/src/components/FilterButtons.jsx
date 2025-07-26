import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function FilterButtons() {
  const { dispatch, state } = useContext(TaskContext);

  return (
    <div style={{ marginBottom: "15px" }}>
      {["ALL", "ACTIVE", "COMPLETED"].map(f => (
        <button
          key={f}
          onClick={() => dispatch({ type: "FILTER_TASKS", payload: f })}
          style={{
            margin: "0 5px",
            padding: "8px",
            backgroundColor: state.filter === f ? "#444" : "#ddd",
            color: state.filter === f ? "#fff" : "#000",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          {f}
        </button>
      ))}
    </div>
  );
}