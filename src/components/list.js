import ToDoItem from "./item";

function ToDoList(props) {
  const { isCompleted, todos, onItemDelete, onComplete, onIncomplete } = props;
  console.log(todos);

  return (
    <ul className="list-group">
      {/* {todos.map((text) => (
        <ToDoItem
          key={text.id}
          {...text}
          onIncomplete={(id) => {
            onIncomplete(id);
         }}
         onComplete={(id) => {
            onComplete(id);
         }}
          onItemDelete={(id) => {
            onItemDelete(id);
          }}
        />
      ))} */}
      {/* {todos.map((text) => (
        <ToDoItem
          key={text.id}
          {...text}
          onIncomplete={(id) => {
            onIncomplete(id);
          }}
          onComplete={(id) => {
            onComplete(id);
          }}
          onItemDelete={(id) => {
            onItemDelete(id);
          }}
        />
      ))} */}
      {todos.map((text) => (
        <ToDoItem
          key={text.id}
          {...text} // always return the item in .map
          onItemDelete={(id) => onItemDelete(id)}
          onComplete={(id) => {
            if (!isCompleted) {
              onComplete(id); // Only allow onComplete when not completed
            }
          }}
          onIncomplete={(id) => {
            if (!isCompleted) {
              onIncomplete(id); // Only allow onIncomplete when completed
            }
          }}
        />
      ))}
    </ul>
  );
}

export default ToDoList;
