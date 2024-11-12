import ToDoItem from "./item";

function ToDoList(props){
    const { todos } = props;
    console.log(todos);

    return(
        <div>
            <ul className="list-group">
                {todos.map((text) => (
                <ToDoItem {...text} />
                ))}
            </ul>
        </div>
    );
}


export default ToDoList;