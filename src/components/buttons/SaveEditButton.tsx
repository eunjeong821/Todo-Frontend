import React from 'react';
import axios from 'axios';
import { NoteCheckIcon } from "../Icons"

interface SaveEditButtonProps {
    id: string;
    title: string;  
    content: string; 
}

const SaveEditButton: React.FC<SaveEditButtonProps> = ({ id, title, content }) => { 
    const handleClick = () => {
        const updateData = {
            title: title,
            content: content
        };

        axios.patch(`https://todo-api.mojan.kr/todo/${id}`, updateData)
            .then(response => {
                console.log("PATCH 요청 성공:", response);
            })
            .catch(error => {
                console.error("PATCH 요청 실패:", error.response ? error.response.data : error.message);
            });            
    }

    return (
        <button onClick={handleClick} className="bg-green-500 text-white p-4 rounded-2xl gap-4 text-[24px] w-[114px]">
            <NoteCheckIcon />
            저장
        </button>
    )
}

export default SaveEditButton