import React from 'react';

import Todo from './todo';
import AddTodo from './addtodo';

class Todos extends React.Component {
    state = {
        todos: [
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
        ]
    }

    handleDelete = todo => {
        const todos = this.state.todos.filter((t) => {
            return t.id !== todo
        });
        this.setState({ todos });
    }

    handleDone = todo => {
        const todos = [...this.state.todos];
        todos.map((t) => {
            if (t.id === todo.id) {
                t.isDone = !t.isDone;
            }
            return t;
        });
        this.setState({ todos });
    }

    addNewTodo = task => {
        const todos = [...this.state.todos];
        todos.push(
            {
                id: new Date().getTime(),
                task: task,
                isDone: false
            }
        );
        this.setState({ todos })
    }

    render() {
        return (
            <React.Fragment>
                <h1 className="text-center">You have {this.state.todos.length} task(s) left to do!</h1>
                <AddTodo addNewTodo={this.addNewTodo} />
                <table className="table">
                    <tbody>
                        {this.state.todos.map((todo, index) => (
                            <tr key={todo.id}>
                                <Todo index={index + 1}
                                    todo={todo}
                                    handleDelete={this.handleDelete}
                                    handleDone={this.handleDone} />
                            </tr>
                        ))}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

export default Todos;