
import React, {useContext} from "react";
import { TodosContext } from "../store/todos-context";
// hier wird context nicht provider importiert damit man unten useContext mit todosContext verwenden kann bzw Zugang bekommt
import TodoItem from './TodoItem';
import styles from '../styles/Todos.module.css'

const Todos: React.FC = () => {

  const todosCtx = useContext(TodosContext);
  // hier verwendet vom import und weiß sofort welche typdefinition gefragt ist (drüber hovern) nämlich TodosContextObj also welchen Typus es braucht und dann anstatt props die todosCtx nutzen
// props kann also raus also dann auh die props definition nacj React.FC
  return (
    <ul className={styles.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem key={item.id} text={item.text} onDeleteTodo={todosCtx.deleteTodo.bind(null, item.id)}/>
      ))}
    </ul>
  );
};

export default Todos;
