### 🧩 Ejercicio 1 — Contador básico

**Objetivo:** Manejar un número con useState.

Crea un componente Counter.

Muestra un número en pantalla (por ejemplo, 0).

Agrega dos botones: Incrementar y Decrementar.

Cada clic cambia el valor del contador.

💡 Concepto: uso básico de useState y actualización del estado numérico.

---

### 🧩 Ejercicio 2 — Mostrar/Ocultar texto

**Objetivo:** Alternar visibilidad con un booleano.

Crea un componente ToggleText.

Ten un texto (por ejemplo: “Hola React”) y un botón “Mostrar/Ocultar”.

Cada clic cambia si el texto se muestra o no.

💡 Concepto: estado booleano y renderizado condicional.

---

### 🧩 Ejercicio 3 — Input controlado

**Objetivo:** Enlazar un input con el estado.

Crea un componente InputName.

Usa un input tipo texto y guarda su valor en un useState.

Muestra debajo lo que el usuario va escribiendo.

💡 Concepto: inputs controlados.

---

### 🧩 Ejercicio 4 — Lista dinámica (añadir ítems)

**Objetivo:** Trabajar con arrays en el estado.

Crea un componente TaskList.

Ten un input y un botón “Agregar”.

Cada vez que haces clic, agrega el valor a una lista visible.

No permitas agregar cadenas vacías.

💡 Concepto: actualizar arrays en useState.

---

### 🧩 Ejercicio 5 — Eliminar ítem de una lista

**Objetivo:** Modificar el array filtrando elementos.

A partir del ejercicio anterior, agrega un botón “❌” a cada tarea.

Al hacer clic, elimina esa tarea del estado.

💡 Concepto: uso de filter() con useState.

---

### 🧩 Ejercicio 6 — Cambiar tema (dark / light)

Objetivo: Cambiar estilos según el estado.

Crea un botón “Cambiar tema”.

Usa un booleano o string en el estado para alternar entre “light” y “dark”.

Cambia el color de fondo y texto según el estado.

💡 Concepto: aplicar clases dinámicas con el estado.

---

### 🧩 Ejercicio 7 — Contador con pasos

**Objetivo:** Actualizar el estado usando su valor previo.

Crea un contador que se incremente de a N pasos (por ejemplo, +2 o +5).

Usa setCount(prev => prev + step).

💡 Concepto: actualización basada en el valor anterior.

---

### 🧩 Ejercicio 8 — Formulario con varios campos

**Objetivo:** Manejar un objeto con varios valores.

Crea un formulario con nombre, email y edad.

Guarda todos los valores en un único useState({}).

Muestra en tiempo real los valores ingresados.

💡 Concepto: uso de objetos en el estado y “spread operator”.

---

### 🧩 Ejercicio 9 — Checkbox múltiple

**Objetivo:** Manejar una lista de seleccionados.

Crea una lista de hobbies con checkbox.

Guarda en el estado un array de hobbies seleccionados.

Muestra debajo los que el usuario eligió.

💡 Concepto: estado complejo con arrays y condicionales.

---

### 🧩 Ejercicio 10 — Temporizador con start/stop

**Objetivo:** Integrar useState con setInterval.

Crea un temporizador que muestre segundos transcurridos.

Botones: Iniciar, Detener y Reiniciar.

Usa useState para el tiempo y useEffect para el intervalo.

💡 Concepto: estado + efectos colaterales.