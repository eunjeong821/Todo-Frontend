import { NoteMinusIcon } from "../Icons"
import { useParams } from "react-router-dom"
import axios from 'axios'

const TodoButton = () => {
    const params = useParams()
    const prdId = params.id;

    const updateData = {
        done: false
    };

    const handleClick = () => {
        axios.patch(`https://todo-api.mojan.kr/todo/${prdId}`, updateData)
            .then(response => {
                console.log("PATCH 요청 성공:", response);
            })
            .catch(error => {
                console.error("PATCH 요청 실패:", error.response ? error.response.data : error.message);
            });            
    }

    return(
        <button onClick={handleClick}>
            <NoteMinusIcon />
            이 일을 미완료로 표기
        </button>
    )

}

export default TodoButton