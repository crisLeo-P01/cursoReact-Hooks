import { useState, type ChangeEvent } from "react"

export const TaskList = () => {
  const [tarea, setTarea] = useState<string>('')

  const [listTarea, setListTarea] = useState<string[]>([])

  const handleAgregarTarea = (event: ChangeEvent<HTMLInputElement>) => {
    setTarea(event?.target.value)
  }

  const tareaAgregada = () => {
    // Evitar agregar tareas vacías o solo con espacios
    const trimmed = tarea.trim()

    if(trimmed === '') return

    // Agregar la tarea a la lista
    setListTarea((prevTask) => [...prevTask, trimmed])

    // Limpiar el campo de entrada después de agregar la tarea
    setTarea('')
  }

  // Función para eliminar una tarea por su índice
  const eliminarTarea = (indexToRemove: number): void => {
    // Filtrar la lista para eliminar la tarea en el índice especificado
    setListTarea((prevTasks) => prevTasks.filter((_, index) => index !== indexToRemove)) // “Mantené todos los elementos excepto aquel cuyo índice sea igual al que quiero eliminar”
  }

  return (
    <div className="text-center border-b-2 border-amber-400 pb-6 mb-6">
      <h2 className="text-2xl font-black mb-4">Ejercicio 4 — Lista dinámica (añadir ítems)</h2>

      <div>
        <input
          type="text"
          value={tarea}
          onChange={handleAgregarTarea}
          placeholder="Agrega una tarea a la lista"
          style={{
            background: '#F9F9F9',
            color: '#333',
            borderRadius: '4px',
            padding: '4px 8px',
            minWidth: '100%',
            marginBottom: '8px'
          }}
        />
        <button className="bg-blue-500 rounded-md px-4 py-2 cursor-pointer" onClick={tareaAgregada}>Agregar Tarea</button>
        <ul>
          {
            listTarea.map((tarea, index) => (
              <li className="mb-4 text-left" key={index}>{tarea}<button className="bg-red-500 py-1 px-3 rounded-md cursor-pointer" onClick={() => eliminarTarea(index)}>❌ Eliminar</button></li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}