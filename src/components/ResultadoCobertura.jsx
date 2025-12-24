export default function ResultadoCobertura({ subtotal, extras, total }) {
  if (!subtotal) return null;

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-md mt-4">
      <h2 className="text-lg font-semibold text-purple-500 mb-3">Resultado</h2>
      <div className="space-y-1 text-sm">
        <p>
          <span className="font-medium">Precio base calculado:</span>{" "}
          ${subtotal.toLocaleString("es-AR")}
        </p>
        <p>
          <span className="font-medium">Incendio:</span>{" "}
          ${extras.incendio.toLocaleString("es-AR")}
        </p>
        <p>
          <span className="font-medium">Robo:</span>{" "}
          ${extras.robo.toLocaleString("es-AR")}
        </p>
        <p>
          <span className="font-medium">Responsabilidad civil:</span>{" "}
          ${extras.rcivil.toLocaleString("es-AR")}
        </p>
      </div>
      <p className="mt-3 text-purple-500 text-lg font-bold">
        Total estimado: $
        {total.toLocaleString("es-AR", { minimumFractionDigits: 2 })}
      </p>
    </div>
  );
}

