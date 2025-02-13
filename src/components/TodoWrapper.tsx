import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { CheckboxBlankCircleIcon } from "./Icons"
import { CheckboxMarkedCircleIcon } from "./Icons"
import axios from 'axios';

interface TodoWrapperProps {
    done: boolean;
}

const TodoWrapper: React.FC<TodoWrapperProps> = ({ done }) => {
    const [todos, setTodos] = useState<any[]>([]);

    useEffect(() => {
        axios.get('https://todo-api.mojan.kr/todo')
            .then(response => {
                setTodos(response.data);
            }).catch(error => {
                console.error("GET 요청 실패:", error);
            })
    }, [])

    const filteredTodos = todos.filter(todo => todo.done === done);

    return (
        <div>
            {done ? 
                <div><CheckboxMarkedCircleIcon /> 한 일({filteredTodos.length}개)</div> :
                <div><CheckboxBlankCircleIcon /> 할 일({filteredTodos.length}개)</div> 
            }
            <ul>
                {filteredTodos.map((todo) => (
                    <li key={todo.id}>
                        <Link to={`/${todo.id}`}>{todo.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoWrapper;
