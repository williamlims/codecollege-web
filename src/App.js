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
import NewClass from './pages/admin/courses/newclass/NewClass';
import TutorialsList from './pages/admin/tutorials/TutorialsList';
import NewTutorial from './pages/admin/tutorials/newtutorial/NewTutorial';
import FreeClasses from './pages/admin/freeclasses/FreeClasses';
import NewFreeClass from './pages/admin/freeclasses/newfreeclass/NewFreeClass';
import Registers from './pages/admin/library/Registers';
import NewRegister from './pages/admin/library/newregister/NewRegister';
import Groups from './pages/admin/groups/Groups';
import NewGroup from './pages/admin/groups/newgroup/NewGroup';
import UsersReport from './pages/admin/reports/users/UsersReport';
import CoursesReport from './pages/admin/reports/courses/CoursesReport';
import ClassesReport from './pages/admin/reports/classes/ClassesReport';
import DocumentsReport from './pages/admin/reports/documents/DocumentsReport';
import GroupsReport from './pages/admin/reports/groups/GroupsReport';

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
          <Route index path="users/register" element={<UserRegister />} />
          <Route index path="courses" element={<CoursesList />} />
          <Route index path="courses/register" element={<NewCourse />} />
          <Route index path="courses/register/class" element={<NewClass />} />
          <Route index path="tutorials" element={<TutorialsList />} />
          <Route index path="tutorials/register" element={<NewTutorial />} />
          <Route index path="classes" element={<FreeClasses />} />
          <Route index path="classes/register" element={<NewFreeClass />} />
          <Route index path="registers" element={<Registers />} />
          <Route index path="registers/register" element={<NewRegister />} />
          <Route index path="groups" element={<Groups />} />
          <Route index path="groups/register" element={<NewGroup />} />
          <Route index path="groups" element={<Groups />} />
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
