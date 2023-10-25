import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import Projetos from './Pages/Projetos/Projetos';
import SobreMim from './Pages/SobreMim/SobreMim';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projetos" element={<Projetos />} />
      <Route path="/SobreMim" element={<SobreMim />} />
    </Routes>
  );
}

export default App;
