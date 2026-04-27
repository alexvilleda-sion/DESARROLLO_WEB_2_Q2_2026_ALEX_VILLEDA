import React from 'react'

export default function ListaResultados(props: { resultados: ResultadoTemperatura[] }) {
  return (
    <ul>
      {props.resultados.map((item, index) => (
        <li key={index}>
          {item.etiqueta}: {item.valor}
        </li>
      ))}
    </ul>
  )
}