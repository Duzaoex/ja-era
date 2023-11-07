import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { DarkModeProvider, useDarkMode } from './Componentes/DarkModeContext/DarkModeContext';
import HomePage from './Pages/HomePage/HomePage';
import Projetos from './Pages/Projetos/Projetos';
import SobreMim from './Pages/SobreMim/SobreMim';
import style from './App.module.css'; // Importe o arquivo de módulo CSS

function App() {
  const { theme, setTheme } = useDarkMode();

  const toggleDarkMode = () => {
    // Alternar entre 'dark' e 'light'
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return (
    <div className={`${style.App} ${style[theme]}`}> {/* Use as classes do módulo CSS */}
      <button className={style.button} onClick={toggleDarkMode}>
        {theme === 'dark' ? 'Modo Claro' : 'Modo Escuro'}
      </button>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/SobreMim" element={<SobreMim />} />
      </Routes>
    </div>
  );
}

function AppWithDarkMode() {
  return (
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  );
}

export default AppWithDarkMode;
