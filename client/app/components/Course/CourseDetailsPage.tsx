"use client";
import { useGetCoursesDetailsQuery } from "@/redux/features/courses/coursesApi";
import React, { useState } from "react";
import Loader from "../Loader/Loader";
import Heading from "@/app/Utils/Heading";
import Header from "../Header";
import Footer from "../Footer";
import CourseDetails from "./CourseDetails"

type Props = {
  id: string;
};

const CourseDetailsPage = ({ id }: Props) => {
  const [route, setRoute] = useState("login");
  const [open, setOpen] = useState(false);
  const { data, isLoading } = useGetCoursesDetailsQuery(id);
  console.log("data course:Aa", data);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Heading
            title={data.course.name + "Học Trực Tuyến"}
            description="nền tảng để học sinh học tập và nhận sự trợ giúp từ giáo viên"
            keyword={data?.course?.tags}
          />
          <Header
            route={route}
            setRoute={setRoute}
            open={open}
            setOpen={setOpen}
            activeItem={1}
          />
            <CourseDetails  data ={data.course}/>
            <Footer/>
        </div>
      )}
    </>
  );
};

export default CourseDetailsPage;
