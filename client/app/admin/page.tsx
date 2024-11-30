<<<<<<< HEAD
=======
"use client";
>>>>>>> c95c476f1d9f25d0da395b2d851672b8df9baf5d
import React from "react";
import Heading from "../Utils/Heading";
import AdminSidebar from "../components/Admin/sidebar/AdminSidebar";
import AdminProtected from "../hooks/adminProtected";
import DashboadrHero from "../components/Admin/DashboardHero";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <AdminProtected>
        <Heading
          title="Học Trực Tuyến"
          description="nền tảng để học sinh học tập và nhận sự trợ giúp từ giáo viên"
          keyword="Lập trình, MERN, Redux, Học máy"
        />
        <div className="flex h-[200vh]">
          <div className="1500px:w-[20%] w-1/5">
            <AdminSidebar />
          </div>
          <div className="w-[85%] ">
<<<<<<< HEAD
            <DashboadrHero />
=======
            <DashboadrHero isDashboard ={true} />
>>>>>>> c95c476f1d9f25d0da395b2d851672b8df9baf5d
          </div>
        </div>
      </AdminProtected>
    </div>
  );
};

export default page;
