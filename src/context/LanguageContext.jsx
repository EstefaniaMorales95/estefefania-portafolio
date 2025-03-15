import React, { createContext, useState, useContext } from 'react';
import es from '../languages/es.json';
import en from '../languages/en.json';

// Crear el contexto
const LanguageContext = createContext();

// Proveedor del contexto (envolverá toda la app)
export function LanguageProvider({ children }) {
	const [language, setLanguage] = useState('es');
	const texts = language === 'es' ? es : en;

	return (
		<LanguageContext.Provider value={{ language, setLanguage, texts }}>
			{children}
		</LanguageContext.Provider>
	);
}

// Hook para usar el contexto más fácilmente
export function useLanguage() {
	return useContext(LanguageContext);
}
