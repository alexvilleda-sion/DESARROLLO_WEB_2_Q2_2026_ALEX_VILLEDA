import Image from "next/image";
import ListaResultados from "./components/ListaResultados";

export default function Home() {

  // 1. Valor inicial
  const temperatura = 25;

  // 2. Unidad base (puedes cambiarla para probar)
  const unidad = "Celsius";

  // 3. Variables para resultados
  let celsius = 0;
  let fahrenheit = 0;
  let kelvin = 0;

  // 4. Condiciones
  if (unidad === "Celsius") {
    celsius = temperatura;
    fahrenheit = (temperatura * 9/5) + 32;
    kelvin = temperatura + 273.15;
  } 
  else if (unidad === "Fahrenheit") {
    fahrenheit = temperatura;
    celsius = (temperatura - 32) * 5/9;
    kelvin = (temperatura - 32) * 5/9 + 273.15;
  } 
  else if (unidad === "Kelvin") {
    kelvin = temperatura;
    celsius = temperatura - 273.15;
    fahrenheit = (temperatura - 273.15) * 9/5 + 32;
  }

  // 5. Arreglo de resultados
  const resultados = [
    { etiqueta: "Celsius", valor: celsius },
    { etiqueta: "Fahrenheit", valor: fahrenheit },
    { etiqueta: "Kelvin", valor: kelvin }
  ];

  return (
    <div>
      <h1>Conversión de Temperatura</h1>

      <ListaResultados resultados={resultados} />

    </div>
  );
}