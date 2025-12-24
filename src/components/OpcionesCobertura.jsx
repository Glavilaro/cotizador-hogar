// src/components/OpcionesCobertura.jsx
export default function OpcionesCobertura({ coberturas, onChange }) {
  const handleToggle = (key) => onChange({ ...coberturas, [key]: !coberturas[key] });

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-md mt-4">
      <h2 className="text-lg font-semibold text-purple-500 mb-3">Opciones de cobertura</h2>
      <div className="space-y-2">
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={coberturas.incendio} onChange={() => handleToggle("incendio")} />
          <span>Incendio (+12% del subtotal)</span>
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={coberturas.robo} onChange={() => handleToggle("robo")} />
          <span>Robo (+8% del subtotal)</span>
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={coberturas.rcivil} onChange={() => handleToggle("rcivil")} />
          <span>Responsabilidad civil (+$600)</span>
        </label>
      </div>
    </div>
  );
}
