import React, { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

function TodoList() {
    const [todos, setTodos] = useState([]);

    // Adding a new todo
    const create = newTodo => {
        setTodos(todos => [...todos, newTodo]);
    };

    // Update a todo with updatedTask
    const update = (id, updatedTask) => {
        setTodos(todos => 
            todos.map(todo =>
                todo.id === id ? { ...todo, task: updatedTask } : todo
            )
        );
    };

    // Delete a todo by id
    const remove = id => {
        // filter through each todo, if the current todo.id is not equal to remove id, then return false and move on to the next todo. If todo.id is equal to remove id then return false and remove that todo
        setTodos(todos => todos.filter(todo => todo.id !== id));
    };

    const todoComponents = todos.map(todo => (
        <Todo 
            remove={remove}
            key={todo.id}
            id={todo.id}
            task={todo.task}
            update={update}
        />
    ));

    return (
        <div>
            <NewTodoForm createTodo={create} />
            <ul>{todoComponents}</ul>
        </div>
    );
}

export default TodoList;