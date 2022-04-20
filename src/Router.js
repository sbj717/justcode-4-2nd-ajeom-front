import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Nav from './pages/components/Nav/Nav';
import Footer from './pages/components/Footer/Footer';
import List from './pages/List/List';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="" element={<Main />} />
        <Route path="/list" element={<List />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
