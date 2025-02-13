import React from 'react';
import axios from 'axios';
import { NoteCheckIcon } from "../Icons"

interface SaveCreateButtonProps {
    title: string;  
    content: string; 
}

const SaveCreateButton: React.FC<SaveCreateButtonProps> = ({ title, content }) => {
    const handleClick = () => {
        const newData = {
            title: title,
            content: content
        };

        axios.post('https://todo-api.mojan.kr/todo', newData)
            .then(response => {
                console.log("POST 요청 성공:", response);
            })
            .catch(error => {
                console.error("POST 요청 실패:", error);
            });
    }

    return (
        <button onClick={handleClick}>
            <NoteCheckIcon />
            저장
        </button>
    )
}

export default SaveCreateButton