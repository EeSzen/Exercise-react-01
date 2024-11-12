import CompletedBtn from "./completed";
import DeleteBtn from "./delete";
import IncompletedBtn from "./incompleted";

function ToDoItem(props){
    const { isCompleted = false , text = "Empty Task" }= props;

    return(
                <li
                    className="list-group-item d-flex justify-content-between align-items-center"
                >
                    <div>
                       {isCompleted ?(
                        <CompletedBtn />
                    ) : (
                        <IncompletedBtn/>
                    )}
                        <span className="ms-2 mb-3">{text}</span>  
                    </div>
                          
                    <DeleteBtn /> 
                </li>
    )
}

export default ToDoItem;