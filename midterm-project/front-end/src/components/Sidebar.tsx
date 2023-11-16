
interface SidebarProp{
    isOpen: boolean;
}

export default function Sidebar({isOpen}:SidebarProp){
    return (
        <div className={`w-[300px] pt-2 border-r-2 border-emerald-300 min-h-screen ${isOpen? '' :'hidden ' }`} >
            <div className="fixed">
                <ul className="flex flex-col space-y-4 p-4 text-lg">
                    <li>
                        <a className={`hover:bg-slate-200 p-2 rounded-full`}>Trang chủ</a>
                    </li>
                    <li>
                        <a className={`hover:bg-slate-200 p-2 rounded-full`}>Bài tập</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}