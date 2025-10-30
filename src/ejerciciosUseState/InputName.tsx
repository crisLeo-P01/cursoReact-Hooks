import { useState, type ChangeEvent } from "react"

export const InputName = () => {
  const [name, setName] = useState<string>('')

  /* el changeEvent es para tipar el evento que viene del input.
  * EL HTMLInputElement es el tipo específico para los elementos de entrada en React */
  const handleInputName = (event: ChangeEvent<HTMLInputElement>): void => {
    // accedemos al valor del input a través de event.target.value
    setName(event?.target.value)
  }

  return (
    <div className="text-center border-b-2 border-amber-400 pb-6 mb-6">
      <h1 className="text-2xl font-black mb-4">Ejercicio 3 — Input controlado</h1>
      <div className="flex flex-col items-center">
        <input 
          type="text"
          value={name}
          onChange={handleInputName}
          placeholder="Escriba su nombre por favor"
          style={{
            background: '#F9F9F9',
            color: '#333',
            borderRadius: '4px',
            padding: '4px 8px',
            minWidth: '100%',
            marginBottom: '8px'
          }}
        />

        <p>{name ? `Hola, ${name}` : 'Hola invitado'}</p>

      </div>
    </div>
  )
}