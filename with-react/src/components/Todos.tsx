
import React from "react";
import Todo from "../models/Todo";
import TodoItem from './TodoItem';
import styles from '../styles/Todos.module.css'

const Todos: React.FC<{ items: Todo[]; deleteTodo: (id: string)=> void }> = (props) => {


  return (
    <ul className={styles.todos}>
      {props.items.map((item) => (
        <TodoItem key={item.id} text={item.text} onDeleteTodo={props.deleteTodo.bind(null, item.id)}/>
        // // Todos sind in App.tsx verwaltet deswegen hier prop onDeleteTodo nur wieder als prop weitergeben
        //  bind() als standard methode um eine func vorzuddfineren wenn sie zukünftig aufgerufen wird 
      // erstes argument was das this referres - hier null weil es egal aber als 2. arg was dann von deleteTodoHandler als argument bekommen soll und das ist die id  
      ))}
    </ul>
  );
};

export default Todos;
