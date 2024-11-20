import Todos from "./components/Todos";
import Todo from "./models/Todo";

function App() {
  const todos = [
  new Todo('Learn TypeScript'),
  new Todo('Learn Next'),
  new Todo('Learn ...'),

];
  return (
    <div>
     <Todos items={todos} />
     
    </div>
  );
}

export default App;
