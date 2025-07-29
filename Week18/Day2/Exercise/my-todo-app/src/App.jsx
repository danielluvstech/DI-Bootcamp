import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Redux Toolkit Todo List</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default App;
