import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";


export default function HomePage(){
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
      };    

    return(<>
        <Navbar OnToggleSideBar={toggleSidebar}></Navbar>

        <div className="flex">
            <Sidebar isOpen={isSidebarOpen}></Sidebar>

        </div>
    </>)
}