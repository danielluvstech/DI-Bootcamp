import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import FilterButtons from "./components/FilterButtons";

export default function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",    // ✅ centers all child components
        justifyContent: "flex-start",
        minHeight: "100vh",
        paddingTop: "50px",
        backgroundColor: "#f8f8f8",  // optional
        fontFamily: "Arial"
      }}
    >
      <h1>Task Manager</h1>
      <TaskInput />
      <FilterButtons />
      <TaskList />
    </div>
  );
}
