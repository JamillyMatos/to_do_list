import {useState} from 'react';
import './TodoApp.css';

const TodoApp = () => {
    //Lista de Tarefas
    const [todos, setTodos] = useState([]);

    // estado de texto da tarefa
    const [inputValue, setInputValue] = useState("");

    // add tarefas
    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim() !== ""){
            const newTodo = {
                id: Date.now(),
                text: inputValue,
            };

            setTodos((prevTodos) => [...prevTodos, newTodo]);
            setInputValue("");
        };
    };

    return(
        <div className='app-container'>
            <h1 className='titulo'>Lista de Tarefas</h1>
            {/*Form para adicionar as tarefas*/}
            <form onSubmit={handleSubmit} className='form-container'>
                <input type="text" className='input-field' placeholder='Adicione uma tarefa...' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <button type='submit' className='add-button'>Adicionar tarefa</button>
            </form>

            {/*Lista de tarefas*/}
            {todos.length === 0 && <p className='empty'>Não há tarefas</p> }

            <ul className='todo-list'>
                {todos.map((todo) => (
                    <li key={todo.id} className='todo-item'>
                        {todo.text}
                        <button className='delete-button'>Excluir tarefa</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoApp;