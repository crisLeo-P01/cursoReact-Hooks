import { useState } from "react";

export const Hobbies = () => {
  const hobbiesDisponibles = ["Música", "Deporte", "Lectura", "Videojuegos", "Viajar"];

  // Estado que guarda los hobbies seleccionados
  const [hobbiesSeleccionados, setHobbiesSeleccionados] = useState<string[]>([]);

  // Maneja el cambio de cada checkbox
  const handleCheckboxChange = (hobby: string): void => {
    setHobbiesSeleccionados((prev) =>
      prev.includes(hobby) // si el hobby ya estaba seleccionado
        ? prev.filter((item) => item !== hobby) // si ya estaba, lo quitamos
        : [...prev, hobby] // si no estaba, lo agregamos
    );
  };

  return (
    <div
      className="text-center border-b-2 border-amber-400 pb-6 mb-6"
      style={{
        fontFamily: "sans-serif",
        maxWidth: "400px",
        margin: "50px auto",
      }}
    >
      <h1>🎯 Selecciona tus hobbies</h1>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {hobbiesDisponibles.map((hobby) => (
          <li key={hobby} style={{ marginBottom: "8px" }}>
            <label>
              <input
                type="checkbox"
                checked={hobbiesSeleccionados.includes(hobby)}
                onChange={() => handleCheckboxChange(hobby)}
              />{" "}
              {hobby}
            </label>
          </li>
        ))}
      </ul>

      <hr />

      <h3>✅ Hobbies seleccionados:</h3>
      {hobbiesSeleccionados.length > 0 ? (
        <ul>
          {hobbiesSeleccionados.map((hobby) => (
            <li key={hobby}>{hobby}</li>
          ))}
        </ul>
      ) : (
        <p style={{ color: "#666" }}>Ninguno todavía.</p>
      )}
    </div>
  );
};