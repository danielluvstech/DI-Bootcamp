import { useDispatch } from "react-redux";
import { toggleTodo, removeTodo } from "../features/todos/todoSlice";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <li style={{ marginBottom: "10px" }}>
      <span
        onClick={() => dispatch(toggleTodo(todo.id))}
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer",
          marginRight: "10px"
        }}
      >
        {todo.text}
      </span>
      <button onClick={() => dispatch(removeTodo(todo.id))}>❌</button>
    </li>
  );
};

export default TodoItem;