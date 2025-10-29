import { useState } from 'react';

const colors = {
  red: 'bg-red-500 animate-pulse',
  yellow: 'bg-yellow-500 animate-pulse',
  green: 'bg-green-500 animate-pulse',
  blue: 'bg-blue-500 animate-pulse',
  pink: 'bg-pink-500 animate-pulse',
};

/* Alternativa usando un union type. Pero si agregamos un nuevo color
 * al objeto colors, tendríamos que actualizar el type manualmente. */

// type TrafficLightColor = 'red' | 'yellow' | 'green';

/*  Usando keyof typeof para obtener los keys del objeto colors.
 *  Si luego agregamos un nuevo color al objeto colors, el type
 *  TrafficLightColor se actualizará automáticamente. */

type TrafficLightColor = keyof typeof colors;

export const TrafficLight = () => {
  // el TrafficLightColor nos ayuda a restringir los valores posibles
  const [light, setLight] = useState<TrafficLightColor>('red');

  /* Con handleColorChange con el argumento color en tipo TrafficLightColor
   *  nos aseguramos de que solo se puedan pasar valores válidos */
  const handleColorChange = (color: TrafficLightColor) => {
    setLight(prev => {
      console.log(prev);
      return color;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-8">
        <div
          className={`w-32 h-32 ${light === 'red' ? colors[light] : 'bg-gray-500'} rounded-full`}
        ></div>
        <div
          className={`w-32 h-32 ${light === 'yellow' ? colors[light] : 'bg-gray-500'} rounded-full`}
        ></div>
        <div
          className={`w-32 h-32 ${light === 'green' ? colors[light] : 'bg-gray-500'} rounded-full`}
        ></div>

        {/* Botón para cambiar el estado de la luz */}
        <div className="flex gap-2">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer"
            onClick={() => handleColorChange('red')}
          >
            Rojo
          </button>
          <button
            className="bg-yellow-500 text-white px-4 py-2 rounded-md cursor-pointer"
            onClick={() => handleColorChange('yellow')}
          >
            Amarillo
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer"
            onClick={() => handleColorChange('green')}
          >
            Verde
          </button>
        </div>
      </div>
    </div>
  );
};
