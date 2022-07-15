import React from 'react';

const Todo = (props) => {
    return (
        <React.Fragment >
            <td style={{ width: 10 }} className="text-center">
                {props.index}
            </td>
            <td style={{ width: 15 }} className="text-center">
                <input type="checkbox" defaultChecked={props.todo.isDone} onChange={() => props.handleDone(props.todo)} />
            </td>
            <td className={props.todo.isDone ? 'strike-through' : ''}>{props.todo.task}</td>
            <td style={{ width: 100 }} className="text-center">
                <button onClick={() => props.handleDelete(props.todo.id)} className="btn btn-danger btn-sm">Delete</button>
            </td>
        </React.Fragment>
    );
}

export default Todo;