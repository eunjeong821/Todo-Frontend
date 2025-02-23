import { useParams, useNavigate } from "react-router-dom";
import { NoteEditIcon } from "../Icons"

const EditButton = () => {
    const navigate = useNavigate();
    const params = useParams()
    const prdId = params.id

    const handleClick = () => {
        navigate(`/${prdId}/edit`)
    }

    return(
        <button onClick={handleClick} className="bg-blue-400 text-white p-4 rounded-2xl gap-2 text-[24px]">
            <NoteEditIcon />
            수정
        </button>
    )

}

export default EditButton