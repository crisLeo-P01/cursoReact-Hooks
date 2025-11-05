import { useState } from "react"

export const DarkLightWithBoolean = () => {
  // Estado para manejar el tema actual
  const [isDark, setIsDark] = useState<boolean>(false);

  // Cambiar tema
  const toggleTheme = (): void => {
    setIsDark((prev) => !prev);
  };

  // Estilos dinámicos según el tema
  const themeStyles: React.CSSProperties = {
    backgroundColor: isDark ? "#232323" : "#F6F6F6",
    color: isDark ? "#F6F6F6" : "#232323",
    minWidth: "500px",
    minHeight: "250px",
    borderRadius: '15px',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease",
  };

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <h2 className="text-2xl font-black mb-4">Ejercicio 6 — Cambiar tema (dark / light)</h2>
      <p className="text-2xl mb-2">Modo Boolean</p>
      <div style={themeStyles}>
        <h1>{isDark ? "🌙 Modo Oscuro" : "☀️ Modo Claro"}</h1>
        <button
          onClick={toggleTheme}
          style={{
            padding: "10px 16px",
            borderRadius: "6px",
            border: "none",
            backgroundColor: isDark ? "#F6F6F6" : "#232323",
            color: isDark ? "#232323" : "#F6F6F6",
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
        >
          Cambiar tema
        </button>
      </div>
    </div>
  );
}