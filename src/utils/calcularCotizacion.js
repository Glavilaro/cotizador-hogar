// src/utils/calcularCotizacion.js
export function calcularCotizacion({ tipoPropiedad, ubicacion, metrosCuadrados }, coberturas = {}) {
  let base = 1000;

  // Ajuste por tipo de propiedad
  if (tipoPropiedad === "casa") base += 2000;
  if (tipoPropiedad === "departamento") base += 1200;
  if (tipoPropiedad === "ph") base += 1600;

  // Ajuste por ubicación
  if (ubicacion === "caba") base += 1500;
  if (ubicacion === "norte") base += 1200;
  if (ubicacion === "oeste") base += 900;
  if (ubicacion === "sur") base += 800;

  // Ajuste por metros cuadrados
  base += Number(metrosCuadrados || 0) * 10;

  // Coberturas adicionales
  const extras = {
    incendio: coberturas?.incendio ? Math.round(base * 0.12) : 0,
    robo: coberturas?.robo ? Math.round(base * 0.08) : 0,
    rcivil: coberturas?.rcivil ? 600 : 0,
  };

  const subtotal = Math.round(base);
  const total = subtotal + extras.incendio + extras.robo + extras.rcivil;

  return {
    subtotal,
    extras,
    total,
    detalle: {
      tipoPropiedad,
      ubicacion,
      metrosCuadrados: Number(metrosCuadrados || 0),
      coberturas,
    },
  };
}
