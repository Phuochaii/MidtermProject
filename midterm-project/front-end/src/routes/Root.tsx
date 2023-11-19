import { Outlet, redirect, useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import axiosClient from "../shared/lib/axios";

export default function Root() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const response: any = useLoaderData();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* <Navbar OnToggleSideBar={toggleSidebar} email={response.email} fullname={response.fullname}></Navbar> */}
      <Navbar
        OnToggleSideBar={toggleSidebar}
        fullname={response.fullname}
      ></Navbar>
      <div className="flex overflow-auto">
        <Sidebar isOpen={isSidebarOpen}></Sidebar>
        <div className="p-5 w-full">
          <Outlet context={[response]}></Outlet>
        </div>
      </div>
    </>
  );
}

export async function load() {
  console.log(123);
  const isLoggedIn = localStorage.getItem("token") !== null;
  if (!isLoggedIn) {
    return redirect(`/landingpage`);
  } else {
    const response = await axiosClient.get("/users/me");

    return response.data;
  }
}
