import { useState } from "react";

import Todos from "./components/Todos";
import Todo from "./models/Todo";
import NewTodo from "./components/NewTodo";

function App() {
// const [todos, setTodos] = useState([]);
// state array mit einmal todos value also initial value die von innerhalb von useState gesetzt wird und dann die setTodo updater state func die dann mit TS eine Dispatch func is
// empty array geht mit TS erstmal nicht auch wenn wir erstmal ein leeres Array haben wollen - es muss mit ts definiert werden was die werte innerhalb des arrays sein könnten
// Alao auch hier generic func nutzen:
const [todos, setTodos] = useState<Todo[]>([]);
// jetzt ist klar dass dieser State ein Array von dem vordefinierten Model Todo verwalten soll - startwert ist also ein leeres Array dass aber Todo Items enthalten soll - also wie in Model mit class definiert

  
const addTodoHandler = (todoText: string )=> {
 const newTodo = new Todo(todoText); 
 setTodos((prevTodos)=> { return prevTodos.concat(newTodo)})
 
}

const deleteTodoHandler = (todoId: string) => {
  // func soll hier über id ausmachen welches Todo gelöscht werden soll
  setTodos((prevTodos)=> {
    return prevTodos.filter((todo)=> todo.id !== todoId)})
  // Zustand ändert sich ja weil die vorherigen States also die gerenderten Todos werden sich als Liste ändern
  //die vorherigen Todos mit Methode filter todos ansehen und dann über id filtern und mit der weitergegebenen Id vergleichen und die rausfiltern nicht die anderen

}
  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler}/>
     <Todos items={todos} deleteTodo={deleteTodoHandler}/>
     
    </div>
  );
}

export default App;
