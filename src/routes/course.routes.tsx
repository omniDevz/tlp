import Course from '../pages/Authorized/Course';
import CourseDetail from '../pages/Authorized/Course/pages/Detail';
import CourseBuy from '../pages/Authorized/Course/pages/Buy';

const CourseRoutes = [
  {
    path: '/course/buy',
    component: CourseBuy,
  },
  {
    path: '/course/:idCourse',
    component: CourseDetail,
  },
  {
    path: '/course',
    component: Course,
  },
];

export default CourseRoutes;
