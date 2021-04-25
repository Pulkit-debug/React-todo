import React from 'react'
import { TodoItem } from "./TodoItem"

export const Todos = (props) => {
    let myStyle = {
        minHeight: "70vh",
    }
    return (
        <div className="container my-3" style={myStyle}>
            <h3 className="text-center my-3">All Todo's</h3>
            {/* {props.todos} */}
            {props.todos.length === 0 ? "No Todo's to Display" :
                props.todos.map((todo) => {
                    return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
                })
            }
        </div>
    )
}
