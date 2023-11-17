import { useState } from "react"
import CourseCard from "./CourseCard";


export default function CourseList(){
    const [courses,setCourses] = useState ([1,2,3,4,5,6,7,8,9]);
    return (
        <div className="">
            <h1 className="text-2xl font-semibold mb-4">Danh sách khóa học</h1>
            <div className="flex space-gap-5 flex-wrap justify-between">
                {courses.map((course) => (
                <CourseCard key={course}
                    
                />
                ))}
            </div>
        </div>
    )
}