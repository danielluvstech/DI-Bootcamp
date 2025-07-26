import { useContext, useState, useRef } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskList() {
  const { state, dispatch } = useContext(TaskContext);
  const [editingId, setEditingId] = useState(null);
  const editRef = useRef();

  const handleToggle = (id) => {
    dispatch({ type: "TOGGLE_TASK", payload: id });
  };

  const handleEdit = (id, text) => {
    setEditingId(id);
    setTimeout(() => {
      editRef.current.value = text;
      editRef.current.focus();
    }, 0);
  };

  const handleSave = (id) => {
    dispatch({
      type: "EDIT_TASK",
      payload: { id, text: editRef.current.value }
    });
    setEditingId(null);
  };

  // Filter tasks
  const filteredTasks = state.tasks.filter(task => {
    if (state.filter === "ALL") return true;
    if (state.filter === "COMPLETED") return task.completed;
    if (state.filter === "ACTIVE") return !task.completed;
    return true;
  });

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {filteredTasks.map(task => (
        <li key={task.id} style={{ marginBottom: "8px" }}>
          {editingId === task.id ? (
            <>
              <input ref={editRef} defaultValue={task.text} />
              <button onClick={() => handleSave(task.id)}>Save</button>
            </>
          ) : (
            <>
              <span
                onClick={() => handleToggle(task.id)}
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                  cursor: "pointer",
                  marginRight: "10px"
                }}
              >
                {task.text}
              </span>
              <button onClick={() => handleEdit(task.id, task.text)}>Edit</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}