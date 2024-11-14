function DeleteBtn(props) {
  const {/* wont need an id , acts as a function only */ onItemDelete } = props;
  return (
    <button
      className="btn btn-sm btn-danger"
      onClick={() => {
        const confirm = window.confirm("Delete?");
        if (confirm) {
          onItemDelete();
        }
      }}
    >
      <i className="bi bi-trash"></i>
    </button>
  );
}

export default DeleteBtn;
