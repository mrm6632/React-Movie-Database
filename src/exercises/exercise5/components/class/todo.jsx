import React, { Component } from 'react';

class Todo extends Component {
    render() {
        return (
            <React.Fragment >
                <td style={{ width: 10 }} className="text-center">
                    {this.props.index}
                </td>
                <td style={{ width: 15 }} className="text-center">
                    <input type="checkbox" defaultChecked={this.props.todo.isDone} onChange={() => this.props.handleDone(this.props.todo)} />
                </td>
                <td className={this.props.todo.isDone ? 'strike-through' : ''}>{this.props.todo.task}</td>
                <td style={{ width: 100 }} className="text-center">
                    <button onClick={() => this.props.handleDelete(this.props.todo.id)} className="btn btn-danger btn-sm">Delete</button>
                </td>
            </React.Fragment>
        );
    }
}

export default Todo;