import { Outlet, redirect } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

export default function Root() {
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
      };    

    return(<>
        <Navbar OnToggleSideBar={toggleSidebar}></Navbar>

        <div className="flex overflow-auto">
            <Sidebar isOpen={isSidebarOpen}></Sidebar>
            <div className="p-5">
                <Outlet></Outlet>
            </div>
        </div>
    </>)
}

export function load(){
    const isLoggedIn = localStorage.getItem('token') !== null;
    if(!isLoggedIn){
        redirect(`/landingpage`);
    }
  } 