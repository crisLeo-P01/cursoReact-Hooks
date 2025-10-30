import { useState } from "react"

export const ToggleText = () => {
  const [visible, setVisible] = useState<boolean>(false)

  const handleMostrarOcultar = (): void => {
    setVisible((preVisble) => !preVisble)
  }

  return (
    <div className="text-center border-b-2 border-amber-400 pb-6 mb-6">
      <h1 className="text-2xl font-black mb-4">Ejercicio 2 — Mostrar/Ocultar texto</h1>
      <div>
        <p className="text-2xl mb-3">{visible ? '👋 Hola React' : '🙅🏻‍♂️ Mensaje Oculto'}</p>
        <button className="bg-blue-500 rounded-md px-4 py-2 cursor-pointer" onClick={handleMostrarOcultar}>{visible ? 'Ocultar' : 'Mostrar'}</button>
      </div>
    </div>
  )
}