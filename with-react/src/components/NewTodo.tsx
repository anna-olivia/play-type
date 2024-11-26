import { useContext, useRef } from 'react';
import styles from '../styles/NewTodo.module.css'
import { TodosContext } from '../store/todos-context';

const NewTodo: React.FC = () => {
   
    const todoCtx = useContext(TodosContext); 
    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (e: React.FormEvent)=> {
        
        e.preventDefault();
        const enteredText = todoTextInputRef.current!.value;
      

        if(enteredText.trim().length === 0){
            //throw error
            // noch hinzufügen
            return;
        }
        todoCtx.addTodo(enteredText);
    }
  
    return (
        <form onSubmit={submitHandler} className={styles.form}>
            <div>
            <label htmlFor='text'>Füge ein Todo hinzu:</label>
            <input id='text' type="text" ref={todoTextInputRef}/>
            </div>
            <div>
                <button type="submit">Submit</button>
                
            </div>
        </form>
    )
}

export default NewTodo;