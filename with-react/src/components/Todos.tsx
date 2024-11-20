import React from "react";
import Todo from "../models/Todo";


const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item.id}>{item.text}</li>
        // weil jetzt ein Objekt ist dann key nicht das objekt sondern die id vom object und was gerendert werden soll dann der text vom objekt
      ))}
    </ul>
  );
};

export default Todos;
