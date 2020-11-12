import MyCourses from '../pages/Authorized/MyCourses';
import MyCoursesDetail from '../pages/Authorized/MyCourses/pages/Detail';

const MyCoursesRoutes = [
  {
    path: '/myCourses/:idMyCourse',
    component: MyCoursesDetail,
  },
  {
    path: '/myCourses',
    component: MyCourses,
  },
];

export default MyCoursesRoutes;
