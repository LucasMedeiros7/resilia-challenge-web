import { Home } from './pages/Home';

import './global.css';
import { Polo } from './pages/Polo';
import { Navigate, Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" replace />} />
      <Route path="/" element={<Home />} />
      <Route path="/polos/:id" element={<Polo />} />
    </Routes>
  );
}
