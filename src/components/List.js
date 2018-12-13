import React from 'react';

const List = ({ todos, onToggle, onRemove }) => {
    return (
        <div>
            {
                todos.map(todo =>
                    <div key={todo.id}>
                        <label>
                            <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)} />
                            {todo.title}
                        </label>
                        <button onClick={() => onRemove(todo.id)}>Delete</button>
                    </div>
                )
            }
        </div>
    )
};
export default List;