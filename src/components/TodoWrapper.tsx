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
        <div className='flex flex-col text-[24px] p-4 gap-4'>
            {done ? 
                <div><CheckboxMarkedCircleIcon /> 한 일({filteredTodos.length}개)</div> :
                <div><CheckboxBlankCircleIcon /> 할 일({filteredTodos.length}개)</div> 
            }
            {done?
                <div className='line-through text-gray-400'> 
                    <ul>
                        {filteredTodos.map((todo) => (
                            <li key={todo.id} className='p-2'>
                                <Link to={`/${todo.id}`}>{todo.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div> :
                <div> 
                    <ul>
                        {filteredTodos.map((todo) => (
                            <li key={todo.id} className='p-2'>
                                <Link to={`/${todo.id}`}>{todo.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            }
        </div>
    );
};

export default TodoWrapper;
