import { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import FormCotizador from "./components/FormCotizador";
import Historial from "./components/Historial";
import { calcularCotizacion } from "./utils/calcularCotizacion";
import { guardarEnHistorial, obtenerHistorial } from "./utils/guardarEnHistorial";
import "./index.css";

function App() {
  const [precio, setPrecio] = useState(0);
  const [historial, setHistorial] = useState(obtenerHistorial());
  const navigate = useNavigate();

  const manejarCotizacion = (datos) => {
    const resultado = calcularCotizacion(datos);
    setPrecio(resultado.total);
    guardarEnHistorial(resultado);
    setHistorial(obtenerHistorial()); // update state
  };

  const refreshHistorial = () => {
    setHistorial(obtenerHistorial());
  };

  const handleRestore = (item) => {
    if (item) {
      setPrecio(item.total || item.subtotal || 0);
      navigate('/');
    } else {
      refreshHistorial();
    }
  };

  const handleClose = () => {
    navigate('/');
  };

  return (
    <Routes>
      <Route path="/" element={
        <main className="min-h-screen bg-purple-300">
          <header className="text-center py-6">
            <h1 className="text-4xl font-bold text-white">Seguros del hogar 🏡</h1>
            <div className="mt-2">
              <Link to="/historial" className="text-2xl text-purple-600 hover:text-purple-800">📑</Link>
            </div>
          </header>
          <div className="flex items-center justify-center px-4">
            <FormCotizador onCotizar={manejarCotizacion} precio={precio} />
          </div>
        </main>
      } />
      <Route path="/historial" element={
        <main className="min-h-screen bg-purple-300">
          <header className="text-center py-6">
            <h1 className="text-3xl font-bold text-purple-700">Ver Historial 📋</h1>
            <Link to="/" className="mt-4 inline-block text-sm bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition">VOLVER</Link>
          </header>
          <div className="flex items-center justify-center px-4">
            <Historial historial={historial} onRestore={handleRestore} onClose={handleClose} showButtons={true} />
          </div>
        </main>
      } />
    </Routes>
  );
}

export default App;