function CompletedBtn(props){
    const {onIncomplete} = props;
    return(
            <button
             className="btn btn-sm btn-success"
             onClick={() => {
                onIncomplete();
                console.log("im green");
             }}
             >
                <i className="bi bi-check-square"></i>
            </button>
    )
}

export default CompletedBtn;