import { useRef } from "react";

const NewTodo = () => {
    const inputEnteredRef = useRef<HTMLInputElement>(null)

    const submetHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = inputEnteredRef.current!.value;
        if (enteredText.trim().length === 0) {
            return;
        }
    };

    return (
        <form onSubmit={submetHandler}>
            <label htmlFor="text">Todo text</label>
            <input type='text' id="text" ref={inputEnteredRef} />
            <button >Add Todo</button>
        </form>
    )
}
export default NewTodo;