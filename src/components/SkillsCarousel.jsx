import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/SkillsCarousel.css'; // Asegúrate de tener los estilos
import skillsData from '../data/skillsData';

const SkillsCarousel = () => {
	useEffect(() => {
		AOS.init({ duration: 1000 });
	}, []);

	return (
		<div className="carousel__container">
			<div className="carousel__track">
				{skillsData.concat(skillsData).map((skill, index) => (
					<div key={index} className="carousel__item" data-aos="fade-up">
						<img src={skill.img} alt={skill.name} />
						<p>{skill.name}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default SkillsCarousel;
