import CompletedBtn from "./completed";
import DeleteBtn from "./delete";
import IncompletedBtn from "./incompleted";

function ToDoItem(props) {
  const { isCompleted = false, text = "Empty Task", id, onItemDelete , onComplete, onIncomplete} = props;

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        {isCompleted ?
         <CompletedBtn 
        onIncomplete={() => {
            onIncomplete(id);
         }}
         /> : 
         <IncompletedBtn
         onComplete={() => {
            onComplete(id);
         }}
         />}
        <span className="ms-2 mb-3">{text}{isCompleted}</span>
      </div>

      <DeleteBtn
    //  passing in the props in const and not the button^
        onItemDelete={() => {
          onItemDelete(id);
        }}
      />
    </li>
  );
}

export default ToDoItem;