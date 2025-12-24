const KEY = "historialCotizaciones";

export function obtenerHistorial() {
  try {
    const data = JSON.parse(localStorage.getItem(KEY)) || [];
    return data.map(item => {
      if (item.detalle) {
       
        return { ...item.detalle, subtotal: item.subtotal, id: item.id, fecha: item.fecha };
      }
      return item;
    });
  } catch {
    return [];
  }
}

export function guardarEnHistorial(item) {
  const historial = obtenerHistorial();
  historial.push({
    id: crypto.randomUUID(),
    fecha: new Date().toLocaleString("es-AR"),
    ...item,
  });
  localStorage.setItem(KEY, JSON.stringify(historial));
}

export function eliminarCotizacion(id) {
  const historial = obtenerHistorial().filter((x) => x.id !== id);
  localStorage.setItem(KEY, JSON.stringify(historial));
}

export function limpiarHistorial() {
  localStorage.setItem(KEY, JSON.stringify([]));
}
