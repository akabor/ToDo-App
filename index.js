function App() {
    const [todos, setTodos] = React.useState([
        {
            text: 'Build ToDo app',
            isComplete: false,
        }
    ]);
    const [value, setValue] = React.useState('');
    const handleSubmit = e => {
        e.preventDefault(); //default behavior is to reload page, this prevents it
        if (!value) return; //this is saying if value is empty then don't do anything
        const newTodos = [...todos, {text:value, isComplete:false}]; //all the old todos plus the new one
        setTodos(newTodos); //replaces old todo list with new todo list that includes newest addition
        setValue(''); //clears out form to be empty again
    }
    const removeToDo = e => {
        const index = Number(e.target.id);
        let temp = [...todos];
        temp.splice(index,1);
        setTodos(temp);
    }
    return (<>
        {todos.map((todo, i) => 
        <div className="todo" key={i} id={i} onClick={removeToDo}>{todo.text}</div>)}
        <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="input"
              value={value}
              placeholder="Add item then hit return or enter..."
              onChange={e => setValue(e.target.value)}
              />
        </form>
        <div className="subtext">Click on item to remove</div>
    </>);
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);