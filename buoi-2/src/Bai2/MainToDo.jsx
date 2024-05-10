import React, { useState } from "react";
import "./Todo.css"
import "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Todo = () => {
    const [TodoList, setTodoList] = useState([]);
    const [TodoTitle, setTodoTitle] = useState("");

    const AddTodo = () => {
        setTodoList([...TodoList, TodoTitle]);
        setTodoTitle("");
    }

    return (
        <div className="container">
            <div className="row pd-20 w-90">
                <div className="d-flex justify-content-center align-items-center bordered" >
                    <div className="col-6 ">
                        <h1>THING TO DO</h1>
                        <input className="w-90" type="text" value={TodoTitle} onChange={(e) => setTodoTitle(e.target.value)} />
                        <button onClick={AddTodo}>Add</button>
                        <ul>
                            {TodoList.map((todo, index) => {
                                return (
                                    <li key={index}><input type="checkbox" className="checkbox"/><span className="text pd-20">{todo}</span></li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Todo;