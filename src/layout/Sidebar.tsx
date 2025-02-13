import Logo from "../components/Logo";
// import Todo from "../components/Todo";
import Done from "../components/Done";
import TodoWrapper from "../components/TodoWrapper"

const Sidebar = () => {
    return (
        <aside className="flex flex-col w-[400px] gap-4 p-4 bg-white">
            <Logo />
            <TodoWrapper done={false} />
            <TodoWrapper done={true} />
        </aside>
    )
}
export default Sidebar;