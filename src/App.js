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
import Library from './pages/home/library/Library';
import Certificates from './pages/home/certificates/Certificates';
import Performance from './pages/home/performance/Performance';
import Preferences from './pages/home/preferences/Preferences';
import Account from './pages/home/preferences/account/Account';
import Profile from './pages/home/preferences/profile/Profile';
import Admin from './pages/admin/Admin';

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
          <Route path="home/library" element={<Library />} />
          <Route path="home/certificates" element={<Certificates />} />
          <Route path="home/performance" element={<Performance />} />
          <Route path="home/preferences" element={<Preferences />} />
          <Route path="home/preferences/account" element={<Account />} />
          <Route path="home/preferences/profile" element={<Profile />} />
        </Route>
        <Route path="admin" element={<Admin />} />
        <Route path="admin/home" element={<Root />}>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
