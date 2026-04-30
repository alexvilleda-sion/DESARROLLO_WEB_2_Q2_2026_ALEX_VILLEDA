'use client';

import { useState } from 'react';
// CORRECCIÓN 1: Importación sin extensión .tsx
import { LanguageButton } from '../components/LanguageButton';
import wordsData from '../data/words.json';

interface WordEntry {
  es: string;
  en: string;
}

type Language = 'es' | 'en';

export default function App() {
  // Solo necesitamos un estado: el idioma
  const [language, setLanguage] = useState<Language>('es');

  // CORRECCIÓN 2: Estado derivado. 
  // Calculamos la lista directamente en el cuerpo de la función.
  // Esto es mucho más eficiente que usar useEffect.
  const displayList = wordsData.map((item: WordEntry) => item[language]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial' }}>
      <h1>Diccionario Dinámico</h1>
      
      <div>
        <LanguageButton 
          label="Cambiar Idioma Español" 
          onClick={() => setLanguage('es')} 
        />
        <LanguageButton 
          label="Cambiar Idioma Inglés" 
          onClick={() => setLanguage('en')} 
        />
      </div>

      <h3>Idioma actual: {language === 'es' ? 'Español' : 'Inglés'}</h3>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {displayList.map((word, index) => (
          <li key={index} style={{ fontSize: '1.2rem', margin: '5px' }}>
            {word}
          </li>
        ))}
      </ul>
    </div>
  );
}