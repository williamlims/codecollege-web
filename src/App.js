import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />}>
        <Route path="messages" element={<Login />} />
        <Route path="tasks" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
