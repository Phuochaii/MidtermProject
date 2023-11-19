import axios from "axios";
import { useState } from "react";
import { Link, redirect } from "react-router-dom";
import axiosClient from "../shared/lib/axios";

interface NavbarProp{
    OnToggleSideBar: ()=>void;
    fullname : string;
    email: string;
}

export default function Navbar({OnToggleSideBar,fullname,email}:NavbarProp){

    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const logoutHandle = async ()=>{
        try{
           await axiosClient.post('/auth/logout');
           localStorage.removeItem('token');
           localStorage.removeItem('refreshToken');
           console.log(1);
           window.location.href= '/landingpage'

        }catch(e){
            console.log(e);
        }
        

    }

    return(
        <div className="flex justify-between bg-white p-4 border-b-2 border-emerald-300 w-screen sticky top-0 z-10">
            <div className="flex items-center space-x-4 ">
                <div className='hover:bg-emerald-50 rounded-full p-2 text-emerald-500' onClick={OnToggleSideBar}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>

                <div className="pointer-events-none">
                    <img className="w-[50px]" src ="/logo.png"alt="logo"></img>
                </div>

                <Link to={`/`} className='text-emerald-500 text-xl'>
                    Khóa học
                </Link>

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
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 m-auto bg-zinc-600 rounded-full">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                    </svg>
                                </li>
                                <li>
                                    <div className="text-center">Hello {fullname}</div>
                                </li>
                                <li>
                                    <Link to="/auth/edit" className="whitespace-nowrap hover:bg-slate-200 p-2 rounded-lg">Chỉnh sửa thông tin</Link>
                                </li>
                                <li>
                                    <button className="whitespace-nowrap hover:bg-slate-200 p-2 rounded-lg" onClick={logoutHandle}>Đăng Xuất</button>
                                </li>
                            </ul>
                    </div>
                )}
            </div>  
        </div>
    )
}