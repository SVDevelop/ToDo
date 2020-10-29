import React, {useState} from 'react'
import PropTypes from 'prop-types'

function AddTodo ({ onCreate}) {
    const [value, setValue] = useState('')

    function submitHandler (e) {
        e.preventDefault()
        if (value.trim()) {
            onCreate(value)
            setValue('')
        }
    }

    return (

        <form onSubmit={submitHandler} className="form">
            <input name="task" className="new-todo todo-input" type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="new-todo" />
            <button className="btn" type="submit">Add</button>
        </form>
    )
}

AddTodo.protoType = {
    onCreate: PropTypes.func.isRequired
}
export default AddTodo