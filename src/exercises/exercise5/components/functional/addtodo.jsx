
const AddTodo = (props) => {
    const addTodo = () => {
        const field = document.getElementById("todoValue");
        if (!field.value) {
            alert("Please Add Todo Text");
            return;
        }
        props.addNewTodo(field.value);
        field.value = "";
    }

    return (
        <div className="input-group mb-3">
            <input type="text" className="form-control" id="todoValue" placeholder="ToDo" />
            <div className="input-group-append">
                <button onClick={addTodo} className="btn btn-outline-secondary" type="button" id="button-addon2">Add New ToDo</button>
            </div>
        </div>
    );

}

export default AddTodo;