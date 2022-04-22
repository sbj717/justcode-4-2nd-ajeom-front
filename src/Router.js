import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Brunchbook from './pages/Brunchbook/Brunchbook';
import Main from './pages/Main/Main';
import Profile from './pages/Profile/Profile';
import Login from './pages/Login/Login';
import List from './pages/List/List';
import Auth from './pages/Login/Auth';
import Request from './pages/Request/Request';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Main />} />
        <Route path="/request" element={<Request />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/oauth/kakao" element={<Auth />} />
        <Route path="/list" element={<List />} />
        <Route path="/book" element={<Brunchbook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
