import React from 'react';
import { Persona } from '../models/types';

interface PersonaCardProps {
  data: Persona;
}

const PersonaCard: React.FC<PersonaCardProps> = ({ data }) => {
  return (
    <div style={{
      border: '1px solid #007acc',
      borderRadius: '12px',
      padding: '20px',
      margin: '15px',
      width: '220px',
      backgroundColor: '#ffffff',
      boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
    }}>
      <h3 style={{ color: '#007acc', marginBottom: '15px' }}>{data.nombre}</h3>
      
      {/* Cambiamos el color de los datos internos */}
      <p style={{ color: '#555', fontSize: '0.9rem' }}>
        <strong style={{ color: '#2c3e50' }}>Ocupación:</strong> 
        <span style={{ color: '#e67e22', marginLeft: '5px' }}>{data.ocupacion}</span>
      </p>
      
      <p style={{ color: '#555', fontSize: '0.9rem' }}>
        <strong style={{ color: '#2c3e50' }}>País:</strong> 
        <span style={{ color: '#27ae60', marginLeft: '5px' }}>{data.pais}</span>
      </p>
    </div>
  );
};

export default PersonaCard;