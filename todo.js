function Todo({todo, index, remove}) {
    function handle() {
        remove(index);
    }
    return <li className="todo" onClick={handle}>{todo.text}</li>
}