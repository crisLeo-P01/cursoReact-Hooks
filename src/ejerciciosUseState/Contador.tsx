import { useState } from "react";

export const Contador = () => {
  const [counter, setCounter] = useState<number>(0)

  const handleIncrementar = () => {
    setCounter(counter + 1)
  }

  const handleDecrementar = () => {
    setCounter(counter - 1)
  }

  return (
    <div className="text-center border-b-2 border-amber-400 pb-6 mb-6">
      <h2 className="text-2xl font-black mb-4">Ejercicio 1 - Contador básico</h2>

      <div className="flex gap-2 items-center">
        <button className="bg-blue-500 rounded-md px-4 py-2 cursor-pointer" onClick={handleDecrementar}>Decrementar</button>
        <p>Contador en: {counter}</p>
        <button className="bg-blue-500 rounded-md px-4 py-2 cursor-pointer" onClick={handleIncrementar}>Incrementar</button>
      </div>
    </div>
  )
}