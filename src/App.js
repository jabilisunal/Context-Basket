import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/Home';
import ContactPage from './pages/Contact';
import MainLayout from './layout/MainLayout';
import Login from './pages/Login';

function App() {
  return (
    < >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/basket" element={<Login />} />
            <Route path="/detail/:mehhemd" element={<ContactPage />} />
          </Route>
          <Route path="*" element={<h1>Not Found 404</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
