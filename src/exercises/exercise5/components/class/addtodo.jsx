import React, { Component } from 'react';

class AddTodo extends Component {
    addTodo = () => {
        const field = document.getElementById("todoValue");
        if (!field.value) {
            alert("Please Add Todo Text");
            return;
        }
        this.props.addNewTodo(field.value);
        field.value = "";
    }

    render() {
        return (
            <div className="input-group mb-3">
                <input type="text" className="form-control" id="todoValue" placeholder="ToDo" />
                <div className="input-group-append">
                    <button onClick={this.addTodo} className="btn btn-outline-secondary" type="button" id="button-addon2">Add New ToDo</button>
                </div>
            </div>
        );
    }
}

export default AddTodo;