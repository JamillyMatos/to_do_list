import {useState} from 'react';
import './TodoApp.css';
import Todo from './Todo';
import TodoForm from './TodoForm';
import Busca from './Busca';
import Filter from './Filter';

const TodoApp = () => {
    //Lista de Tarefas
    const [todos, setTodos] = useState([
    {
      id:1,
      text: "criar funcionalidade x no sistema",
      categoria: "Trabalho",
      isCompleted: false,
    },
    {
      id:2,
      text: "Ir pra academia",
      categoria: "Pessoal",
      isCompleted: false,
    },
    {
      id:3,
      text: "Estudar React",
      categoria: "Estudos",
      isCompleted: false,
    }
    ]);

    // estado de texto da tarefa
    const addTodo = (text, categoria) => {
        const newTodos = [...todos, 
            {
            id:Math.floor(Math.random() * 1000),
            text,
            categoria,
            isCompleted: false
            },
        ];

        setTodos(newTodos);
    };

    const [busca, setBusca] = useState("");
    const [filter, setFilter] = useState("All");
    const [sort, setSort] = useState("Asc");

    const removeTodo = (id) => {
        const newTodos = [...todos];
        const filteredTodos = newTodos.filter((todo) => 
            todo.id !== id ? todo : null);
        setTodos(filteredTodos);
    };
    
    const completeTodo = (id) => {
        const newTodos = [...todos];
        newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo
    );
        setTodos(newTodos);
    };
    
    return(
        <div className='app'>
            <h1>Lista de Tarefas</h1>
            <Busca busca= {busca} setBusca={setBusca}/>
            <Filter filter = {filter} setFilter={setFilter} setSort={setSort} />
            <div className='todo-list'>
                {todos.filter((todo) => filter === "All" ? true : filter === "Completed" ? todo.isCompleted : !todo.isCompleted)
                .filter((todo) => todo.text.toLowerCase().includes(busca.toLowerCase()))
                .sort((a,b) => sort === "Asc" ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text))
                .map((todo) =>
                (
                    <Todo key={todo.id} todo = {todo} removeTodo = {removeTodo} completeTodo={completeTodo}/>
                ))}
            </div>
            <TodoForm addTodo = {addTodo}/>
        </div>
    );
}

export default TodoApp;