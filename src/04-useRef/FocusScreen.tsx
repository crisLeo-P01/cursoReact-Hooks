import { useRef } from 'react';

export const FocusScreen = () => {
  /* useRef nos permite crear una referencia a un elemento del DOM
   * y manipularlo directamente sin necesidad de usar estados.
   * En este caso, creamos una referencia a un input y al hacer click
   * en el botón, seleccionamos el texto del input y mostramos su valor
   * en la consola.
   */
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    console.log(inputRef.current?.value);
    inputRef.current?.select();
  };

  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="text-2xl font-thin text-white">Focus Screen</h1>

      {/* El atributo ref nos permite asociar la referencia al input */}
      <input
        ref={inputRef}
        type="text"
        className="bg-white text-black px-4 py-2 rounded-md"
        autoFocus
      />

      {/* El atributo ref nos permite asociar la referencia al input */}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={handleClick}
      >
        Set Focus
      </button>
    </div>
  );
};
