import { useState } from "react";
import { nanoid } from "nanoid";

import ToDoList from "./components/list";
import AddToDoForm from "./components/addnew";

function App() {
  const [todos, setTodos] = useState([]);
  /*=======================================================*/
  // Handle marking a todo as complete
  // const handleComplete = (id) => {
  //   const updatedTodos = todos.map((s) =>
  //     s.id === id ? { ...s, isCompleted: true } : s
  //   );
  //   setTodos(updatedTodos);
  // };

  // Handle marking a s as incomplete
  // const handleIncomplete = (id) => {
  //   const updatedTodos = todos.map((s) =>
  //     s.id === id ? { ...s, isCompleted: false } : s
  //   );
  //   setTodos(updatedTodos);
  // };
  /*=======================================================*/

  return (
    <div className="container">
      <div className="App">
        <div
          className="card rounded shadow-sm"
          style={{
            maxWidth: "500px",
            margin: "60px auto",
          }}
        >
          <div className="card-body">
            <h3 className="card-title mb-3">My Todo List</h3>

            <ToDoList
              todos={todos}
              // delete
              onItemDelete={(id) => {
                const newList = todos.filter((s) => s.id !== id);
                setTodos(newList);
              }}
              
              // change to true
              onComplete={(id) => {
                const updatedTodos = todos.map((s) =>
                  s.id === id ? { ...s, isCompleted: true } : s
                );
                setTodos(updatedTodos);
              }}

              // change to false
              onIncomplete={(id) => {
                const updatedTodos = todos.map((s) =>
                  s.id === id ? { ...s, isCompleted: false } : s
                );
                setTodos(updatedTodos);
              }}
              /*=======================================================*/
              // onComplete={handleComplete}
              // onIncomplete={handleIncomplete}
              /*=======================================================*/
            />
            <AddToDoForm
              onNewItemAdded={(itemName) => {
                const newList = [...todos];
                newList.push({
                  id: nanoid(),
                  text: itemName,
                });
                console.log("todos", todos);
                setTodos(newList);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
