import { useNavigate } from "react-router-dom"
import { NoteAddIcon } from "../Icons"

const AddButton = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/create')
    }

    return(
        <button onClick={handleClick}>
            <NoteAddIcon />
            할 일 생성
        </button>
    )
}

export default AddButton;