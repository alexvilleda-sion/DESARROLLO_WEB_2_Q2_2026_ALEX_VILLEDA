"use client";

import React, { useState, useEffect } from 'react';
import { Persona } from './models/types';
import PersonaCard from './components/PersonaCard';

const App: React.FC = () => {
  const [listaPersonas, setListaPersonas] = useState<Persona[]>([]);

  useEffect(() => {
    const datosCargados: Persona[] = [
      { id: 1, nombre: "Carlos Zelaya", ocupacion: "Analista de Datos", pais: "Honduras" },
      { id: 2, nombre: "Lucía Méndez", ocupacion: "Ing. de Software", pais: "Guatemala" },
      { id: 3, nombre: "Roberto Sosa", ocupacion: "DBA", pais: "El Salvador" },
      { id: 4, nombre: "Elena Paz", ocupacion: "Ciberseguridad", pais: "Panamá" },
      { id: 5, nombre: "Mario Ruiz", ocupacion: "Fullstack Dev", pais: "Costa Rica" }
    ];

    
    const timer = setTimeout(() => {
      setListaPersonas(datosCargados);
    }, 100);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div style={{ padding: '40px', textAlign: 'center', backgroundColor: '#f4f7f6', minHeight: '100vh' }}>
      <h1 style={{ color: '#2c3e50', marginBottom: '30px' }}>Directorio de Profesionales</h1>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {listaPersonas.length > 0 ? (
          listaPersonas.map((persona) => (
            <PersonaCard key={persona.id} data={persona} />
          ))
        ) : (
          <p>Cargando profesionales...</p>
        )}
      </div>
    </div>
  );
};

export default App;