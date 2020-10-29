import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

function TodoList (props) {
    const {error} = props
    const {isLoaded} = props

    if (error) {
        return <div>Ошибка: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Загрузка...</div>;
      } else {
        return (
            <>
                <ul  className="todo-list">
                    { props.todos.map((todo, i) => {
                        return (
                        <TodoItem
                            todo={todo}
                            key={todo.id}
                            index={i}
                            onChange={props.onToggle}
                        />
                        )
                    }) }
                </ul>
                <div className="todo-stats">{"всего "+props.todos.length} </div>
            </>
        )
      }
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
}
export default TodoList