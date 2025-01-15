import { useState } from "react";
import { nanoid } from "nanoid";

import ToDoList from "./components/list";
import AddToDoForm from "./components/addnew";
import IncompletedBtn from "./components/incompleted";

function App() {
  // const stringTodos = localStorage.getItem("todos");
  // // convert the string version of Todos into array
  // let todos = JSON.parse(stringTodos);

  // // if Todos is not found, set it as empty array
  // if (!todos) {
  //   todos = [];
  // }

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
  const stringTodos = localStorage.getItem("todos");
  const [todos, setTodos] = useState(
    JSON.parse(stringTodos) ? JSON.parse(stringTodos) : null
  );

  // if (!todos) {
  //   todos = [];
  // }

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
                let convertedPosts = JSON.stringify(newList);
                localStorage.setItem("todos", convertedPosts);
              }}
              // change to true
              onComplete={(id) => {
                const newList = todos.map((s) =>
                  s.id === id ? { ...s, isCompleted: true } : s
                );
                setTodos(newList);
                let convertedPosts = JSON.stringify(newList);
                localStorage.setItem("todos", convertedPosts);
              }}
              // change to false
              onIncomplete={(id) => {
                const newList = todos.map((s) =>
                  s.id === id ? { ...s, isCompleted: false } : s
                );
                setTodos(newList);
                let convertedPosts = JSON.stringify(newList);
                localStorage.setItem("todos", convertedPosts);
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
                  isCompleted: false,
                });
                setTodos(newList);
                let convertedPosts = JSON.stringify(newList);
                localStorage.setItem("todos", convertedPosts);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
