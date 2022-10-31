import { Home } from './pages/Home/Home';
import { Polo } from './pages/Polo/Polo';
import { Navigate, Route, Routes } from 'react-router-dom';

import './global.css';

export function App() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" replace />} />
      <Route path="resilia-challenge-web" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="polos/:id" element={<Polo />} />
    </Routes>
  );
}
