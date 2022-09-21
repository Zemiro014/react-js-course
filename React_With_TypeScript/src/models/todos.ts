class Todo {
    id: string;
    text: string;

    constructor(todoText: string) {
        this.text = todoText;
        this.id = (Math.random()*16).toString();
    }
}

export default Todo;