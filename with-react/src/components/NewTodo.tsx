import { useRef } from 'react';
import styles from '../styles/NewTodo.module.css'


const NewTodo: React.FC<{onAddTodo: (text: string) =>  void}> = (props) => {
    
    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (e: React.FormEvent)=> {
        
        e.preventDefault();
        const enteredText = todoTextInputRef.current!.value;
      
//dann Textvalidation:
        if(enteredText.trim().length === 0){
            //throw error
            // noch hinzufügen
            return;
        }
        props.onAddTodo(enteredText);
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