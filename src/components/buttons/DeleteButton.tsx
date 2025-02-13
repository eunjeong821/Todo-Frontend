import { NoteRemoveIcon } from "../Icons"
import { useParams } from "react-router-dom"
import axios from 'axios'

const DeleteButton = () => {
    const params = useParams()
    const prdId = params.id;

    const handleClick = () => {
        axios.delete(`https://todo-api.mojan.kr/todo/${prdId}`)
            .then(response => {
                console.log("DELETE 요청 성공:", response);
            }).catch(error => {
                console.error("DELETE 요청 실패:", error);
            })
    }

    return(
        <button onClick={handleClick}>
            <NoteRemoveIcon />
            삭제
        </button>
    )

}

export default DeleteButton