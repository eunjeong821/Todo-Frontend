import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import AddButton from "../components/buttons/AddButton"
import TodoButton from '../components/buttons/TodoButton'
import DoneButton from '../components/buttons/DoneButton'
import EditButton from '../components/buttons/EditButton'
import DeleteButton from '../components/buttons/DeleteButton'
import axios from 'axios'

const MainLayout = () => {
    const [todo, setTodo] = useState(null);
    const params = useParams()
    const prdId = params.id

    useEffect(() => {
        axios.get(`https://todo-api.mojan.kr/todo/${prdId}`)
            .then(response => {
                setTodo(response.data);
            }).catch(error => {
                console.error("GET 요청 실패:", error);
            })
    }, [prdId])

    if (!todo) {
        return <div>Loading...</div>;
    }
    
    return (
        <div className='flex flex-col p-4 gap-4'>
            {todo.done ? <div className='w-[959px] text-[48px] p-2 line-through text-gray-400'>{todo.title}</div> : <div className='w-[959px] text-[48px] p-2 text-gray-800'>{todo.title}</div>}
            <div className='h-[751px] w-[959px] text-[32px] p-2 text-gray-800'>{todo.content}</div>
            <div className='flex gap-4'>
                <AddButton />
                {todo.done ? <TodoButton /> : <DoneButton />}
                <EditButton />
                <DeleteButton />
            </div>
        </div>
    )
}

export default MainLayout