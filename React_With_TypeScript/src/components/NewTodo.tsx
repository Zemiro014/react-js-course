const NewTodo = () => {

    const submetHandler = (event: React.FormEvent) => {

    };

    return (
        <form onSubmit={submetHandler}>
            <label htmlFor="text">Todo text</label>
            <input type='text' id="text" />
            <button>Add Todo</button>
        </form>
    )
}
export default NewTodo;