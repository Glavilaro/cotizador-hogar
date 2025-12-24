// src/components/FormCotizador.jsx
import { useState } from "react";

export default function FormCotizador({ onCotizar, precio }) {
  const [tipoPropiedad, setTipoPropiedad] = useState("");   // vacío
  const [ubicacion, setUbicacion] = useState("");           
  const [metrosCuadrados, setMetrosCuadrados] = useState(""); 
  const [showMessage, setShowMessage] = useState(false);
  const [messageText, setMessageText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const m2 = Number(metrosCuadrados);
    if (!tipoPropiedad || !ubicacion || isNaN(m2) || m2 <= 0) {
      setMessageText("No se cargaron datos! Por favor, complete todos los campos");
      setShowMessage(true);
      return;
    }
    onCotizar({ tipoPropiedad, ubicacion, metrosCuadrados: m2 });
    setMessageText("Sus datos fueron cargados correctamente");
    setShowMessage(true);
  };

  return (
    <div className="relative">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-xl"
      >
        <h2 className="text-xl text-gray-600 mb-4 text-center">
          COMPLETA LOS DATOS SOLICITADOS PARA COTIZAR
        </h2>

        <div className="space-y-4">
          {/* Tipo de propiedad */}
          <div>
            <label className="block text-center mb-1 text-sm font-medium">
              TIPO DE PROPIEDAD
            </label>
            <select
              value={tipoPropiedad}
              onChange={(e) => setTipoPropiedad(e.target.value)}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Seleccione una opción</option>
              <option value="casa">Casa</option>
              <option value="departamento">Departamento</option>
              <option value="ph">PH</option>
              <option value="deposito logistica">Depósito Logística</option>
              <option value="depto edificio">Depto Edificio</option>
              <option value="barrio privado">Barrio Privado</option>
              <option value="oficina">Oficina</option>
              <option value="local comercial">Local Comercial</option>
            </select>
          </div>

          {/* Ubicación */}
          <div>
            <label className="block mb-1 text-center text-sm font-medium">
              UBICACIÓN DE LA PROPIEDAD
            </label>
            <select
              value={ubicacion}
              onChange={(e) => setUbicacion(e.target.value)}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Seleccione una ubicación</option>
              <option value="caba">Ciudad Autónoma de Bs. As.</option>
              <option value="norte">Zona Norte</option>
              <option value="sur">Zona Sur</option>
              <option value="oeste">Zona Oeste</option>
              <option value="la plata">La Plata</option>
              <option value="mar del plata">Mar del Plata</option>
              <option value="rosario">Rosario</option>
              <option value="cordoba">Córdoba</option>
              <option value="mendoza">Mendoza</option>
              <option value="tucuman">Tucumán</option>
            </select>
          </div>

          {/* Metros cuadrados */}
          <div>
            <label className="block mb-1 text-center text-sm font-medium">
              INGRESE LOS METROS CUADRADOS
            </label>
            <input
              type="number"
              value={metrosCuadrados}
              onChange={(e) => setMetrosCuadrados(e.target.value)}
              className="w-full p-2 border rounded"
              min={0}
              required
              placeholder="Ingrese los m²"
            />
          </div>
        </div>

        {/* Botón */}
        <button
          type="submit"
          className="mt-6 bg-white text-purple-600 border border-purple-700 text-lg px-6 py-3 rounded hover:bg-purple-100 transition w-full"
        >
          COTIZAR
        </button>

        {/* Precio estimado */}
        <div className="mt-4 text-center">
          <p className="text-lg font-semibold text-purple-700">
            PRECIO ESTIMADO: $ {precio.toFixed(2)}
          </p>
        </div>
      </form>

      {/* Mensajes */}
      {showMessage && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-white border rounded-lg p-4 max-w-sm shadow-lg">
          <p
            className={`text-center text-sm ${
              messageText.includes("No se cargaron")
                ? "text-yellow-600"
                : "text-green-600"
            }`}
          >
            {messageText}
          </p>
          <button
            className="absolute top-2 right-2 text-gray-300 hover:text-gray-700 text-2xl"
            onClick={() => setShowMessage(false)}
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
}
