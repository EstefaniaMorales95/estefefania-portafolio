import React from 'react';
import ProjectCard from './ProjectCard';
import { useLanguage } from '../context/LanguageContext';
import '../styles/Projects.css';

function Projects() {
	const { texts } = useLanguage(); // Obtener los textos según el idioma

	return (
		<section className="proyectos" id="proyectos">
			<h1 data-aos="fade-up">{texts.projects.title}</h1> {/* Título dinámico */}
			<div className="cards__container--proyectos">
				{texts.projects.list.map((project) => (
					<ProjectCard key={project.id} {...project} />
				))}
			</div>
		</section>
	);
}

export default Projects;
