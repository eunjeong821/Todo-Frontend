import React, { useState } from 'react'
import SaveCreateButton from '../components/buttons/SaveCreateButton'

const MainCreate = () => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const handleTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }

    const handleContent = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(event.target.value)
    }

    return (
        <div className='flex flex-col p-4 gap-4'>
            <input 
                type="text" 
                value={title}
                onChange={handleTitle}
                placeholder="제목을 입력하세요"
                className='text-[48px] p-2 bg-white'
             />
            <textarea 
                value={content}
                onChange={handleContent}
                placeholder="내용을 입력하세요"
                className='h-[500px] text-[32px] p-2 bg-white'
             />
            <SaveCreateButton 
                title={title} 
                content={content}
            />
        </div>
    )
}

export default MainCreate