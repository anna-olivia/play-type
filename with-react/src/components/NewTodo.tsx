import { useRef } from 'react';
import Todo from '../models/Todo';

const NewTodo: React.FC<{}> = () => {
    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (e: React.FormEvent)=> {
        // event muss klar definiert sein bei TypeScript dafür gibts ein extra FormEvent
        e.preventDefault();
        const enteredText = todoTextInputRef.current!.value;
//dann Textvalidation:
        if(enteredText.trim().length === 0){
            //throw error
            return;
        }
        // dann wollen wir das neue Todo in die Liste packen - also zu App.tsx
    }
   const cancelHandler = (e: React.MouseEvent) => {
    console.log(e, "clicked");
   }
    return (
        <form onSubmit={submitHandler}>
            <div>
            <label htmlFor='text'>Füge ein Todo hinzu:</label>
            <input id='text' type="text" ref={todoTextInputRef}/>
            </div>
            <div>
                <button type="submit">Submit</button>
                <button onClick={cancelHandler}>Cancel</button>
            </div>
        </form>
    )
}

export default NewTodo;