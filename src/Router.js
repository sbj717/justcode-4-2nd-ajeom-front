import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Brunchbook from './pages/Brunchbook/Brunchbook';
import Main from './pages/Main/Main';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/book" element={<Brunchbook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
