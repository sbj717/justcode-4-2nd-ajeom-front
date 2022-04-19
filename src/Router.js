import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BrunchbookTop from './pages/Brunchbook/BrunchbookTop';
import Main from './pages/Main/Main';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="" element={<BrunchbookTop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
