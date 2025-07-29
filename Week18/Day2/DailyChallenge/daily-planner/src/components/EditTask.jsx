import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../features/tasks/tasksSlice";

export default function EditTask({ task, day, onFinish }) {
  const [newText, setNewText] = useState(task.text);
  const dispatch = useDispatch();

  const handleSave = () => {
    if (newText.trim() === "") return;
    dispatch(editTask({ date, id: task.id, newText }));
    onFinish(); // Exit edit mode
  };

  return (
    <div style={{ display: "flex", gap: "8px" }}>
      <input
        type="text"
        value={newText}
        onChange={(e) => setNewText(e.target.value)}
        style={{ padding: "6px", flex: 1 }}
      />
      <button onClick={handleSave} style={{ padding: "6px 12px" }}>💾 Save</button>
    </div>
  );
}