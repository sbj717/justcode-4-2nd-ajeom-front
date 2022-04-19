import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Nav from './pages/components/Nav/Nav';
import Footer from './pages/components/Footer/Footer';
import Login from './pages/Login/Login';
function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="" element={<Main />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
