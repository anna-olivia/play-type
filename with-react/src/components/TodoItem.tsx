import styles from "../styles/TodoItem.module.css";

const TodoItem: React.FC<{ text: string; onDeleteTodo: () => void }> = (
  props
) => {
  return (
    <li className={styles.item}>
      {props.text}

      <button onClick={props.onDeleteTodo}>Delete</button>
    </li>
  );
};

export default TodoItem;
