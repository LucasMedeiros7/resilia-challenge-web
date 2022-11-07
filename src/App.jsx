import { Home } from './pages/Home/Home';
import { Polo } from './pages/Polo/Polo';
import { Navigate, Route, Routes } from 'react-router-dom';

import './global.css';

export function App() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/resilia-challenge-web" replace />} />
      <Route path="/resilia-challenge-web" element={<Home />} />
      <Route path="/resilia-challenge-web/polos/:id" element={<Polo />} />
    </Routes>
  );
}
