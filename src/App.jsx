import { Home } from './pages/Home/Home';
import { Polo } from './pages/Polo/Polo';
import { Navigate, Route, Routes } from 'react-router-dom';

import './global.css';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="polos/:id" element={<Polo />} />
    </Routes>
  );
}
