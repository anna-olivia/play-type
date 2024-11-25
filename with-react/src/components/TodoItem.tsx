
import styles from '../styles/TodoItem.module.css'


const TodoItem: React.FC<{text:string; onDeleteTodo: () => void}> = (props)=> {
// als zweites Prop geben wir zählen wir mit ; auf und geben dann die onDeleteTodo func an die  nichts zurückgeben also void
// wir brauchen auch keine argument oder optional event




    return (
        <li className={styles.item}>
        {props.text}

    <button onClick={props.onDeleteTodo}>Delete</button>
        </li>
    )
}

export default TodoItem;