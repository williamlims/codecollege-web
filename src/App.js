import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/login/Login';
import Register from './pages/register/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<Login />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
