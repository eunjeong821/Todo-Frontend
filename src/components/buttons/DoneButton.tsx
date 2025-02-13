import { NoteCheckIcon } from "../Icons"
import { useParams } from "react-router-dom"
import axios from 'axios'

const DoneButton = () => {
    const params = useParams()
    const prdId = params.id;

    const updateData = {
        done: true
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
            <NoteCheckIcon />
            이 일을 완료로 표기
        </button>
    )

}

export default DoneButton