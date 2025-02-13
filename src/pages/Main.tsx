import { ClickIcon } from "../components/Icons"

const Main = () => {
    return(
        <div className="flex flex-col justify-center items-center h-screen font-gray-400 text-gray-400">
            <ClickIcon className="w-[256px] h-[256px]" />
            <div className="text-[40px] font-bold">왼쪽 목록에서 할 일을 선택해 주세요!</div>
        </div>
    )
}

export default Main