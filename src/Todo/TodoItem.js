import React, {useContext} from 'react'
import PropTypes from "prop-types"
import Context from '../context'

function TodoItem ({todo, index, onChange}) {
    const {removeTodo} =useContext(Context)
    const classes = ['todo-item']
console.log(todo)
    if (todo.completed) {
        classes.push('todo-done')
    }

    return (
        <li className={classes.join(' ')}>
            <div className="todo-view" onClick={()=> onChange(todo.id)}>
                <label className="todo-label">
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={()=> onChange(todo.id)}
                    />
                    {index + 1}
                    &nbsp;
                    <span className="todo-content">{todo.title}</span>
                </label>
            </div>
            <button href="/" className="todo-remove" onClick={() => removeTodo(todo.id)}>удалить</button>
        </li>
    )
}

TodoItem.protoTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}

export default  TodoItem