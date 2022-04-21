import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BrunchbookTop from './pages/Brunchbook/BrunchbookTop';
import Main from './pages/Main/Main';
import Nav from './pages/components/Nav/Nav';
import Footer from './pages/components/Footer/Footer';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="" element={<Main />} />
        <Route path="/book" element={<BrunchbookTop />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
