import { useState } from "react";

const StepCounter: React.FC = () => {
  // Estado para el contador
  const [count, setCount] = useState<number>(0);

  // Estado para el paso (lo que se suma o resta)
  const [step, setStep] = useState<number>(1);

  // Incrementa según el paso actual
  const incrementar = (): void => setCount((prev) => prev + step);

  // Decrementa según el paso actual
  const decrementar = (): void => setCount((prev) => prev - step);

  // Actualiza el valor del paso (conversión a número)
  const handleStepChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const nuevoPaso = Number(e.target.value);
    if (!isNaN(nuevoPaso)) setStep(nuevoPaso);
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        fontFamily: "sans-serif",
      }}
    >
      <h1>🧮 Contador con paso</h1>

      <p style={{ fontSize: "2rem" }}>{count}</p>

      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="step">Paso: </label>
        <input
          id="step"
          type="number"
          value={step}
          onChange={handleStepChange}
          style={{
            width: "60px",
            textAlign: "center",
            marginLeft: "8px",
            padding: "4px",
          }}
        />
      </div>

      <button
        onClick={decrementar}
        style={{
          marginRight: "10px",
          padding: "10px 20px",
          border: "none",
          backgroundColor: "#ff595e",
          color: "white",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        -{step}
      </button>

      <button
        onClick={incrementar}
        style={{
          padding: "10px 20px",
          border: "none",
          backgroundColor: "#1982c4",
          color: "white",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        +{step}
      </button>
    </div>
  );
};

export default StepCounter;
