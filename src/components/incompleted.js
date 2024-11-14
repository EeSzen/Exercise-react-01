function IncompletedBtn(props){
    const {onComplete} = props;
    return(

            <button 
            className="btn btn-sm"
            onClick={() => {
                onComplete();
                console.log("im empty");
             }}
             >
                <i className="bi bi-square"></i>
            </button>

    )
}

export default IncompletedBtn;