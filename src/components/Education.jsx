import React from 'react';
import getEducationData from '../data/educationData';
import { useLanguage } from '../context/LanguageContext';
import '../styles/Education.css';

function Education() {
	const { texts } = useLanguage();
	const educationData = getEducationData(texts);

	return (
		<section className="formacion" id="formacion">
			<h1 data-aos="fade-up">{texts.education.title}</h1>
			<div className="cards__container--formacion">
				{educationData.map((edu) => (
					<div
						key={edu.id}
						className="cards__formacion"
						data-aos={edu.animation}
						data-aos-duration="500"
					>
						<img className="logo__formacion" src={edu.img} alt={edu.title} />
						<div className="container__texto--formacion">
							<p>{edu.title}</p>
							<p>{edu.status}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default Education;
