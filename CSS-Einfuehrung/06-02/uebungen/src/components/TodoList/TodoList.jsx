import { useState } from "react";
import Todo from "./Todo";

const TodoList = () => {
    const [todos, setTodos] = useState([])
    const [value, setValue] = useState("");

    const addTodo = () => {
        setTodos(prev => [{beschreibung: value}, ...prev])
        //setValue()
    }

    return ( 
        <>
        <label htmlFor="todos">Todos</label>
        <input onChange={(e) => setValue(e.target.value)} type="text" name="todos" id="todos" />
        <button onClick={addTodo}>Add</button>

        {todos.map((todo, index) => <Todo beschreibung={todo.beschreibung} key={index} />)}
        </>
     );
}
 
export default TodoList;