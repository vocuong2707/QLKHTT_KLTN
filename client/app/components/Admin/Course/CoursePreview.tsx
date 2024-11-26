import React, { FC } from 'react'
import CoursePlayer from "../../../Utils/CoursePlayer"

type Props = {
    active: number;
    setActive: (active: number) => void;
    courseData: any
    handleCourseCreate: any;
}

const CoursePreview:FC<Props> = ({active,handleCourseCreate,courseData,setActive }) => {

    console.log("courseData aaaa:" ,courseData.courseContent[0].videoUrl)

    return ( 
        <div className='w-[90%] m-auto py-5 mb-5'>
            <div className='w-full relative'>
                <div className='w-full mt-10'>
                    <CoursePlayer 
                        videoUrl={courseData?.courseContent[0].videoUrl}
                        title={courseData?.title}
                    />
                </div>
            </div>
        </div>
    )
}

export default CoursePreview