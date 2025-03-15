import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/AboutMe.css';
import { useLanguage } from '../context/LanguageContext';

function AboutMe() {
	const { texts } = useLanguage();

	useEffect(() => {
		AOS.init({ duration: 1000, once: true });
	}, []);

	return (
		<section className="sobreMi" id="sobreMi">
			<h1 className="sobreMi__title" data-aos="fade-up">
				{texts.aboutMe.title}
			</h1>

			<div className="container__content--sobreMi">
				<div className="container__texto--sobreMi" data-aos="fade-right">
					<div className="texto__sobreMi">
						<p>{texts.aboutMe.description1}</p>
						<p>{texts.aboutMe.description2}</p>
					</div>
				</div>

				<picture className="container__image--sobreMi" data-aos="fade-left">
					<img
						className="image__sobreMi"
						src="/imagenes/image-sobremi.png"
						alt={texts.aboutMe.imageAlt}
					/>
				</picture>
			</div>
		</section>
	);
}

export default AboutMe;
