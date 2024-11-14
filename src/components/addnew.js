import { useState } from "react";
// import ToDoItem from "./item";

function AddToDoForm(props){
  const { onNewItemAdded } = props;
  const [itemName,setItemName]=useState("")
    return(
        <div className="mt-4">
          <form className="d-flex justify-content-between align-items-center">
            <input
              type="text"
              className="form-control"
              placeholder="Add new item..."
              value={itemName}
              required
              onChange={(event) => {
                setItemName(event.target.value);
              }}
            />
            <button className="btn btn-primary btn-sm rounded ms-2" onClick={(event) => {
              event.preventDefault();
              if(itemName === ""){
                alert("ENTER TASK BEFORE YOU ADD LAHH!")
              }else{
                onNewItemAdded(itemName);
                setItemName("");
              }

            }}>Add</button>
          </form>
        </div>
    )
}

export default AddToDoForm;