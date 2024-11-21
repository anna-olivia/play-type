import React from "react";
import Todo from "../models/Todo";
import TodoItem from './TodoItem';

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem key={item.id} text={item.text}/>
        // auch wenn beim TodoItem nur die text prop erwähnt wird - ist das key prop immer dabei und braucht keine unbedingte Erwähnung
      ))}
    </ul>
  );
};

export default Todos;
