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
        <div>
            <div>제목: {todo.title}</div>
            <div>내용: {todo.content}</div>
            <AddButton />
            {todo.done ? <TodoButton /> : <DoneButton />}
            <EditButton />
            <DeleteButton />
        </div>
    )
}

export default MainLayout