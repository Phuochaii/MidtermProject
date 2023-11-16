import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import CourseList from "../components/Homepage/CourseList";


export default function HomePage(){
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
      };    

    return(<>
        <Navbar OnToggleSideBar={toggleSidebar}></Navbar>

        <div className="flex overflow-auto">
            <Sidebar isOpen={isSidebarOpen}></Sidebar>
            <div className="p-5">
                <CourseList></CourseList>
            </div>
        </div>
    </>)
}