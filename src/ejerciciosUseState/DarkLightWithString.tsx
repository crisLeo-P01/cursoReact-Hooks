import { useState } from "react"

export const DarkLightWithString = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  const toggleTheme = () => {
    setTheme((prevColor) => (prevColor === 'light' ? 'dark' : 'light'))
  }

  const themeStyle: React.CSSProperties = {
    backgroundColor: theme === "dark" ? "#232323" : "#F6F6F6",
    color: theme === "dark" ? "#F6F6F6" : "#232323",
    minHeight: "250px",
    minWidth: '500px',
    borderRadius: '15px',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease",
  }

  return (
    <div className="border-b-2 border-amber-400 pb-6 mb-6" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '8px'}}>
      <p className="text-2xl mb-2">Modo String</p>
      <div style={themeStyle}>
        <h1>{theme === 'dark' ? '🌒 Modo oscuro' : '☀️ Modo claro'}</h1>
        <button className={`px-4 py-2 rounded-md ${theme === 'dark' ? 'text-gray-900' : 'text-gray-400'} ${theme === 'dark' ? 'bg-gray-400' : 'bg-gray-900'}`} onClick={toggleTheme}>{theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}</button>
      </div>

    </div>
  );
}