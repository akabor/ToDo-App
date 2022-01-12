function App() {
    const [todos, setTodos] = React.useState([
        {
            text: 'Build ToDo app',
            isComplete: false,
        }
    ]);

    const addTodo = text => {
        const newTodos = [...todos, {text:text, isComplete:false}]; //all the old todos plus the new one
        setTodos(newTodos); //replaces old todo list with new todo list that includes newest addition        
    }

    const removeToDo = index => {
        const temp = [...todos];
        temp.splice(index,1);
        setTodos(temp);
    }
    return (
        <div className="app">
            <TodoForm addTodo={addTodo}/>
            <br />
            <div className="todo-list">
                {todos.map((todo, i) =>
                    <Todo index={i} key={i} todo={todo} remove={removeToDo}/>
                )}
            </div>
            <div className="subtext">Click on item to remove</div>
        </div>
    );
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);