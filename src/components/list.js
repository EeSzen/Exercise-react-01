import ToDoItem from "./item";

function ToDoList(props){
    const { todos } = props;
    console.log(todos);

    return(
            <ul className="list-group">
                {todos.map((text) => (
                <ToDoItem  key={text.id} {...text} />
                ))}
            </ul>
    );
}

export default ToDoList;