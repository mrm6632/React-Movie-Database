import React, { useState } from 'react';

import Todo from './todo';
import AddTodo from './addtodo';


const Todos = (props) => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            task: "Help Mary",
            isDone: false
        },
        {
            id: 2,
            task: "Talk to Daniel",
            isDone: true
        },
        {
            id: 3,
            task: "Walk Happy",
            isDone: false
        }
    ]);

    const handleDelete = todo => {
        const updatedTodos = todos.filter((t) => {
            return t.id !== todo
        });
        setTodos(updatedTodos)
    }

    const handleDone = todo => {
        const updatedTodos = [...todos];
        updatedTodos.map((t) => {
            if (t.id === todo.id) {
                t.isDone = !t.isDone;
            }
            return t;
        });
        setTodos(updatedTodos);
    }

    const addNewTodo = task => {
        const updatedTodos = [...todos];
        updatedTodos.push(
            {
                id: new Date().getTime(),
                task: task,
                isDone: false
            }
        );
        setTodos(updatedTodos);
    }


    return (
        <React.Fragment>
            <h1 className="text-center">You have {todos.length} task(s) left to do!</h1>
            <AddTodo addNewTodo={addNewTodo} />
            <table className="table">
                <tbody>
                    {todos.map((todo, index) => (
                        <tr key={todo.id}>
                            <Todo index={index + 1}
                                todo={todo}
                                handleDelete={handleDelete}
                                handleDone={handleDone} />
                        </tr>
                    ))}
                </tbody>
            </table>
        </React.Fragment>
    );

}

export default Todos;