import { useRef } from "react";
import classes from './NewTodo.module.css';

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
    const inputEnteredRef = useRef<HTMLInputElement>(null)

    const submetHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = inputEnteredRef.current!.value;
        if (enteredText.trim().length === 0) {
            return;
        }
        props.onAddTodo(enteredText)
    };

    return (
        <form className={classes.form} onSubmit={submetHandler}>
            <label htmlFor="text">Todo text</label>
            <input type='text' id="text" ref={inputEnteredRef} />
            <button >Add Todo</button>
        </form>
    )
}
export default NewTodo;