import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import SaveEditButton from '../components/buttons/SaveEditButton'
import axios from 'axios'

const MainEdit = () => {
    const [todo, setTodo] = useState<{ title: string; content: string } | null>(null);
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const params = useParams()
    const prdId: string = params.id || "";

    useEffect(() => {
        axios.get(`https://todo-api.mojan.kr/todo/${prdId}`)
            .then(response => {
                setTodo(response.data)
            }).catch(error => {
                console.error("GET 요청 실패:", error);
            })
    }, [prdId])

    useEffect(() => {
        if (todo) {
            setTitle(todo.title)
            setContent(todo.content)
        }
    }, [todo]);

    if (!todo) {
        return <div>Loading...</div>
    }

    const handleTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }

    const handleContent = (event: React.ChangeEvent<HTMLInputElement>) => {
        setContent(event.target.value)
    }

    return (
        <div>
            <input 
                type="text" 
                value={title}
                onChange={handleTitle}
             />
            <input 
                type="text" 
                value={content}
                onChange={handleContent}
             />
            <SaveEditButton 
                id = {prdId}
                title={title} 
                content={content}
            />
        </div>
    )
}

export default MainEdit