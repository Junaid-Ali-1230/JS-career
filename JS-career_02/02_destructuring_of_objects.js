const course = {
    course_name: "Trading",
    instructor_name: "Badar_Tanveer",
    price_of_course: 9999
}
//common
console.log(course.course_name)
//destructuring method
const {course_name: crs} = course
console.log(crs)
// It create short hands for long names.