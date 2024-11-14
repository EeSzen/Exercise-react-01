import ToDoItem from "./item";

function ToDoList(props) {
  const { isCompleted,todos, onItemDelete, onComplete, onIncomplete } = props;
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
      {todos.map((text) => (
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
      ))}
    </ul>
  );
}

export default ToDoList;
