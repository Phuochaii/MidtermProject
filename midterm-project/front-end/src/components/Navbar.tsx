import { useState } from "react";

interface NavbarProp{
    OnToggleSideBar: ()=>void;
}

export default function Navbar({OnToggleSideBar}:NavbarProp){
    const [isDropdownOpen, setDropdownOpen] = useState(false);


    return(
        <div className="flex justify-between p-4 border-b-2 border-emerald-300">
            <div className="flex items-center space-x-4 ">
                <div className='hover:bg-emerald-50 rounded-full p-2 text-emerald-500' onClick={OnToggleSideBar}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>

                <div className="pointer-events-none">
                    <img className="w-[50px]" src ="/logo.png"alt="logo"></img>
                </div>

                <div className='text-emerald-500 text-xl'>
                    Khóa học
                </div>

            </div>

            <div className="flex items-center space-x-4 relative ">
                <div className='p-2 bg-emerald-500 rounded-full' onClick={()=>setDropdownOpen(!isDropdownOpen)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                </div>
                {isDropdownOpen && (
                    <div className="absolute top-14 right-0 bg-white border border-gray-300 rounded-md p-4 ">
                            <ul className="flex flex-col space-y-4">
                                <li>
                                    <a className="whitespace-nowrap hover:bg-slate-200 p-2 rounded-lg">Chỉnh sửa thông tin</a>
                                </li>
                                <li>
                                    <a className="whitespace-nowrap hover:bg-slate-200 p-2 rounded-lg">Đăng Xuất</a>
                                </li>
                            </ul>
                    </div>
                )}
            </div>  
        </div>
    )
}