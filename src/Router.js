import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Brunchbook from './pages/Brunchbook/Brunchbook';
import Main from './pages/Main/Main';
import Profile from './pages/Profile/Profile';
import Login from './pages/Login/Login';
import List from './pages/List/List';
import Detail from './pages/Detail/Detail';
import Auth from './pages/Login/Auth';
import Write from './pages/PostEditor/Editor';
import BookEditor from './pages/BookEditor/BookEditor';
import Request from './pages/Request/Request';
import Drawer from './pages/Drawer/DrawerLayout';

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
        <Route path="/detail" element={<Detail />} />
        <Route path="/book" element={<Brunchbook />} />
        <Route path="/write" element={<Write />} />
        <Route path="/bookeditor" element={<BookEditor />} />
        <Route path="/drawer" element={<Drawer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
