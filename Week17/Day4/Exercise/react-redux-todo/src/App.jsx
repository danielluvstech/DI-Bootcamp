import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

export default function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>React Redux Todo List</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
}
