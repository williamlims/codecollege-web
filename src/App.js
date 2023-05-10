import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Root from './components/root/Root';
import RecoverPassword from './pages/recover/RecoverPassword';
import Confirmation from './pages/confirmation/Confirmation';
import Home from './pages/home/Home';
import Courses from './pages/home/courses/Courses';
import Course from './pages/home/courses/course/Course';
import Class from './pages/home/courses/course/class/Class';
import Tutorials from './pages/home/tutorials/Tutorials';
import Classes from './pages/home/classes/Classes';
import ClassFree from './pages/home/classes/classFree/ClassFree';
import Library from './pages/home/library/Library';
import Certificates from './pages/home/certificates/Certificates';
import Performance from './pages/home/performance/Performance';
import Preferences from './pages/home/preferences/Preferences';
import Account from './pages/home/preferences/account/Account';
import Profile from './pages/home/preferences/profile/Profile';
import Admin from './pages/admin/Admin';
import AdminRoot from './components/root/AdminRoot';
import Dashboard from './pages/admin/dashboard/Dashboard';
import Users from './pages/admin/users/Users';
import UserRegister from './pages/admin/users/register/UserRegister';
import CoursesList from './pages/admin/courses/CoursesList';
import NewCourse from './pages/admin/courses/newcourse/NewCourse';
import ClassesList from './pages/admin/courses/classes/ClassesList';
import ClassEdit from './pages/admin/courses/editclass/ClassEdit';
import CourseEdit from './pages/admin/courses/editcourse/CourseEdit';
import NewClass from './pages/admin/courses/newclass/NewClass';
import TutorialsList from './pages/admin/tutorials/TutorialsList';
import TutorialEdit from './pages/admin/tutorials/edittutorial/TutorialEdit';
import NewTutorial from './pages/admin/tutorials/newtutorial/NewTutorial';
import FreeClasses from './pages/admin/freeclasses/FreeClasses';
import FreeClassEdit from './pages/admin/freeclasses/editfreeclass/FreeClassEdit';
import NewFreeClass from './pages/admin/freeclasses/newfreeclass/NewFreeClass';
import Registers from './pages/admin/library/Registers';
import RegisterEdit from './pages/admin/library/editregister/RegisterEdit';
import NewRegister from './pages/admin/library/newregister/NewRegister';
import Groups from './pages/admin/groups/Groups';
import GroupsUsers from './pages/admin/groups/seegroup/GroupsUsers';
import GroupsCourses from './pages/admin/groups/seegroup/GroupsCourses';
import GroupsTutorials from './pages/admin/groups/seegroup/GroupsTutorials';
import GroupsClasses from './pages/admin/groups/seegroup/GroupsClasses';
import GroupsDocuments from './pages/admin/groups/seegroup/GroupsDocuments';
import NewGroup from './pages/admin/groups/newgroup/NewGroup';
import UsersReport from './pages/admin/reports/users/UsersReport';
import CoursesReport from './pages/admin/reports/courses/CoursesReport';
import ClassesReport from './pages/admin/reports/classes/ClassesReport';
import DocumentsReport from './pages/admin/reports/documents/DocumentsReport';
import GroupsReport from './pages/admin/reports/groups/GroupsReport';
import UserEdit from './pages/admin/users/edit/UserEdit';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/" element={<Root />}>
          <Route index path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="recover-password" element={<RecoverPassword />} />
          <Route path="confirmation/:id" element={<Confirmation />} />
          <Route path="home" element={<Home />} />
          <Route path="home/courses" element={<Courses />} />
          <Route path="home/courses/:id" element={<Course />} />
          <Route path="home/courses/:id/class/:id" element={<Class />} />
          <Route path="home/tutorials" element={<Tutorials />} />
          <Route path="home/classes" element={<Classes />} />
          <Route path="home/classes/:id" element={<ClassFree />} />
          <Route path="home/library" element={<Library />} />
          <Route path="home/certificates" element={<Certificates />} />
          <Route path="home/performance" element={<Performance />} />
          <Route path="home/preferences" element={<Preferences />} />
          <Route path="home/preferences/account" element={<Account />} />
          <Route path="home/preferences/profile" element={<Profile />} />
        </Route>
        <Route path="admin" element={<Admin />} />
        <Route path="admin/home" element={<Navigate to="dashboard" />} />
        <Route path="admin/home" element={<AdminRoot />}>
          <Route index path="dashboard" element={<Dashboard />} />
          <Route index path="users" element={<Users />} />
          <Route index path="users/edit/:id" element={<UserEdit />} />
          <Route index path="users/register" element={<UserRegister />} />
          <Route index path="courses" element={<CoursesList />} />
          <Route index path="courses/register" element={<NewCourse />} />
          <Route index path="courses/classes" element={<ClassesList />} />
          <Route index path="courses/classes/edit/:id" element={<ClassEdit />} />
          <Route index path="courses/register/class" element={<NewClass />} />
          <Route index path="courses/edit/:id" element={<CourseEdit />} />
          <Route index path="tutorials" element={<TutorialsList />} />
          <Route index path="tutorials/edit/:id" element={<TutorialEdit />} />
          <Route index path="tutorials/register" element={<NewTutorial />} />
          <Route index path="classes" element={<FreeClasses />} />
          <Route index path="classes/edit/:id" element={<FreeClassEdit />} />
          <Route index path="classes/register" element={<NewFreeClass />} />
          <Route index path="registers" element={<Registers />} />
          <Route index path="registers/edit/:id" element={<RegisterEdit />} />
          <Route index path="registers/register" element={<NewRegister />} />
          <Route index path="groups" element={<Groups />} />
          <Route index path="groups/register" element={<NewGroup />} />
          <Route index path="groups" element={<Groups />} />
          <Route index path="groups/users/:id" element={<GroupsUsers />} />
          <Route index path="groups/courses/:id" element={<GroupsCourses />} />
          <Route index path="groups/tutorials/:id" element={<GroupsTutorials />} />
          <Route index path="groups/classes/:id" element={<GroupsClasses />} />
          <Route index path="groups/documents/:id" element={<GroupsDocuments />} />
          <Route index path="groups/register" element={<NewGroup />} />
          <Route index path="reports/users" element={<UsersReport />} />
          <Route index path="reports/courses" element={<CoursesReport />} />
          <Route index path="reports/classes" element={<ClassesReport />} />
          <Route index path="reports/documents" element={<DocumentsReport />} />
          <Route index path="reports/groups" element={<GroupsReport />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
