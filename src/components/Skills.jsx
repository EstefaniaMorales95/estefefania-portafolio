import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import skillsData from '../data/skillsData';
import '../styles/Skills.css';
import SkillsCarousel from './SkillsCarousel'; // Importa el carrusel
import { useLanguage } from '../context/LanguageContext';
function Skills() {
	const { texts } = useLanguage();
	useEffect(() => {
		AOS.init({ duration: 1000 });
	}, []);

	return (
		<section className="habilidades" id="habilidades">
			<h1 className="habilidades__titulo">{texts.skills.title}</h1>

			<SkillsCarousel />
		</section>
	);
}

export default Skills;
