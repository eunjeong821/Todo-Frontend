import { CheckboxBlankCircleIcon } from "./Icons"
import TodoWrapper from "../components/TodoWrapper"

const Todo = () => {
    return(
        <div>
            <CheckboxBlankCircleIcon/>
            할 일(3개)
            <TodoWrapper done={false} />
        </div>
    )
}

export default Todo;