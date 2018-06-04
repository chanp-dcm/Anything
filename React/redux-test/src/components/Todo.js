import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({onClick, completed, text}) => (
    <li onClick={onClick}
        style={ {
            textDecoration: completed ? 'line-thorough' : 'none'
        } }
    >
        {text}
    </li>
)

Todo.propTypes = {
    onlick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo
