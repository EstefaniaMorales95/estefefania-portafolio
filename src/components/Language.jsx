import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import '../styles/Language.css';

function Language() {
	const { language, setLanguage } = useLanguage();

	return (
		<div className="flags">
			<div className="flags__item" onClick={() => setLanguage('es')}>
				<img src="/imagenes/icon-spain.png" alt="Español" />
			</div>
			<div className="flags__item" onClick={() => setLanguage('en')}>
				<img src="/imagenes/icon-en.png" alt="Inglés" />
			</div>
		</div>
	);
}

export default Language;
