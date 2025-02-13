import React, { useState } from 'react'
import SaveCreateButton from '../components/buttons/SaveCreateButton'

const MainCreate = () => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

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
                placeholder="제목을 입력하세요"
             />
            <input 
                type="text" 
                value={content}
                onChange={handleContent}
                placeholder="내용을 입력하세요"
             />
            <SaveCreateButton 
                title={title} 
                content={content}
            />
        </div>
    )
}

export default MainCreate