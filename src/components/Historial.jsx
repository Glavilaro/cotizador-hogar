import {
  eliminarCotizacion,
  limpiarHistorial,
} from "../utils/GuardarEnHistorial";

export default function Historial({ historial, onRestore, onClose, showButtons = true }) {

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-xl mt-8">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-purple-500">
         HISTORIAL DE COTIZACIONES
        </h2>
        <div className="flex gap-2">
          <button
            className="text-sm bg-red-600 text-white px-3 py-1 rounded hover:bg-red-600 transition"
            onClick={() => {
              limpiarHistorial();
              onRestore(); 
            }}
          >
            Limpiar
          </button>
          <button
            className="text-sm bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600 transition"
            onClick={onClose}
          >
            Cerrar
          </button>
        </div>
      </div>

      {historial.length === 0 ? (
        <p className="text-gray-600 mt-3">No hay cotizaciones guardadas</p>
      ) : (
        <ul className="divide-y mt-3">
          {historial.map((item) => (
            <li
              key={item.id}
              className="py-3 flex items-center justify-between"
            >
              <div className="text-sm">
                <p className="font-medium">
                  {item.tipoPropiedad || 'N/A'} - {item.ubicacion || 'N/A'} -{" "}
                  {item.metrosCuadrados || 0} m²
                </p>
                <p className="text-gray-600">
                  Subtotal: ${(item.subtotal || 0).toLocaleString("es-AR")}
                </p>
                <p className="text-gray-600">
                  Total: ${(item.total || item.subtotal || 0).toLocaleString("es-AR")}
                </p>
                <p className="text-gray-500">Fecha: {item.fecha || 'N/A'}</p>
              </div>
              {showButtons && (
                <div className="flex items-center gap-2">
                  <button
                    className="text-xs bg-purple-300 text-white px-2 py-1 rounded hover:bg-purple-500 transition"
                    onClick={() => onRestore(item)}
                  >
                    Restaurar
                  </button>
                  <button
                    className="text-xs bg-gray-300 px-2 py-1 rounded hover:bg-gray-400 transition"
                    onClick={() => {
                      eliminarCotizacion(item.id);
                      onRestore();
                    }}
                  >
                    Eliminar cotizaciones
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
