import { useContext, useRef } from "react";
import { TodosContext } from "../store/todos-context";
import classes from './NewTodo.module.css';

const NewTodo: React.FC = () => {
    const { addTodo } = useContext(TodosContext)
    const inputEnteredRef = useRef<HTMLInputElement>(null)

    const submetHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = inputEnteredRef.current!.value;
        if (enteredText.trim().length === 0) {
            return;
        }
        addTodo(enteredText)
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