import React from 'react';

function ProjectCard({ img, alt, title, description, demoLink, repoLink }) {
	return (
		<div
			className="cards__proyectos"
			data-aos="zoom-in-up"
			data-aos-anchor-placement="center-bottom"
		>
			<div className="container__imgCard--proyectos">
				<img src={img} alt={alt} />
			</div>

			<div className="container__textCard--proyectos">
				<h2>{title}</h2>
				<p>{description}</p>
			</div>

			<div className="container__btn--proyectos">
				<a href={demoLink} target="_blank" rel="noopener noreferrer">
					<button className="btn__demo">
						<img src="/imagenes/icon-demoProyecto.png" alt="Demostración" />
						DEMO
					</button>
				</a>

				<a href={repoLink} target="_blank" rel="noopener noreferrer">
					<button className="btn__repo">
						<img src="/imagenes/icon-github.png" alt="Repositorio de GitHub" />
						REPO
					</button>
				</a>
			</div>
		</div>
	);
}

export default ProjectCard;
