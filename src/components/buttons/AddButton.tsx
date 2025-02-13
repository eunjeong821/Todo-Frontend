import { useNavigate } from "react-router-dom"
import { NoteAddIcon } from "../Icons"

const AddButton = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/create')
    }

    return(
        <button onClick={handleClick} className="bg-gray-800 text-white p-4 rounded-2xl gap-2 text-[24px]">
            <NoteAddIcon />
            할 일 생성
        </button>
    )
}

export default AddButton;