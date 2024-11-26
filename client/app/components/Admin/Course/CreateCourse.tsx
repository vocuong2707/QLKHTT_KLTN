'use client02'
import React, { useState } from 'react'
import CourseInformat from "./CourseInformat"
import CourseOptions from "./CourseOptions"
import CourseData from "./CourseData"
import CourseContent from "./CourseContent"
import CoursePreview from "./CoursePreview"

type Props = {}

const CreateCourse = (props: Props) => {

    const [active, setActive] = useState(0);
    const [courseInfo, setCourseInfo] = useState({
        name: "",
        description: "",
        price : "",
        estimatedPrice: "",
        tages: "",
        level: "",
        demoUrl: "",
        thumbnail: "",
    })

    const [benefits, setBebefits] = useState([{title: ""}]);
    const [prerequisites, setPrerequisites] = useState([{title: ""}]);
    const [courseContentData, setCourseContentData] = useState([{
        videoUrl: "",
        title: "",
        description: "",
        videoSection: "Untitled Section",
        links: [
            {
                title: "",
                url: "",
            },
        ],
        suggestion: "",
    },
]);

    
 const[courseData, setCourseData] = useState({});

    const handleSubmit= async () => {
       //format benefits array
       const formattedBenefits = benefits.map((benefits) => ({title:benefits.title}));
       //format prerequisites
       const formattedPrerequisites = prerequisites.map((prerequisites) => ({title:prerequisites.title}));
       //format course content array
       const formattedcourseContentData = courseContentData.map((courseContent) => ({
        videoUrl: courseContent.videoUrl,
        title: courseContent.title,
        description: courseContent.description,
        videoSection: courseContent.videoSection,
        links: courseContent.links.map((link) => ({
            title: link.title,
            url: link.url,
        })),
        suggestion: courseContent.suggestion,
       }));
       //prepare ourr data object
       const data = {
        name: courseInfo.name,
        description: courseInfo.description,
        price: courseInfo.price,
        estimatedPrice:courseInfo.estimatedPrice,
        tags:courseInfo.tages,
        thumbnail: courseInfo.thumbnail,
        level: courseInfo.level,
        demoUr: courseInfo.demoUrl,
        totaVideos: courseContentData.length,
        benefits: formattedBenefits,
        prerequisites:formattedPrerequisites,
        courseContent: formattedcourseContentData,
       };
       setCourseData(data);

    };

    console.log(courseData);

    const handleCourseCreate = async (e:any) => {
        const data = courseData;
    }

    return ( 
        <div className="w-full flex min-h-screen">
            <div className="w-[80%]">
                {
                    active === 0 && (
                        <CourseInformat
                        courseInfo={courseInfo}
                        setCourseInfo={setCourseInfo}
                        active={active}
                        setActive={setActive}
                        />
                    )
                }
                {
                    active === 1 && (
                        <CourseData
                        benefits={benefits}
                        setBenefits={setBebefits}
                        prerequisites={prerequisites}
                        setPrerequisites={setPrerequisites}
                        active={active}
                        setActive={setActive}
                        />
                    )
                }
                 {
                    active === 2  && (
                        <CourseContent
                        active={active}
                        setActive={setActive}
                        courseContentData={courseContentData}
                        setCourseContentData={setCourseContentData}
                        handleSubmit={handleSubmit}
                        />
                    )
                }
                {
                    active === 3  && (
                        <CoursePreview
                        active={active}
                        setActive={setActive}
                        courseData={courseData}
                        handleCourseCreate={handleCourseCreate}
                        />
                    )
                }
            </div>
            <div className="w-[20%] mt-[100px] h-screen fixed z-[-1] top-18 right-0">
                <CourseOptions active={active} setActive={setActive} />
            </div>
        </div>
    )
}

export default CreateCourse