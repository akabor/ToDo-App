function TodoForm({addTodo}){
    const [value, setValue] = React.useState('');
    const handleSubmit = e => {
        e.preventDefault(); //default behavior is to reload page, this prevents it
        if (!value) return; //this is saying if value is empty then don't do anything
        addTodo(value);
        setValue(''); //clears out form to be empty again
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                value={value}
                placeholder="Add item then hit return or enter..."
                onChange={e => setValue(e.target.value)}
            />
        </form>
    );
}