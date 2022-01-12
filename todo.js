function Todo({todo, index, remove}) {
    function handle(index) {
        remove(index);
    }
    return <div className="todo" onClick={handle}> - {todo.text}</div>
}