import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLanguage } from '../context/LanguageContext';
import SocialLinks from './SocialLinks';
import '../styles/Home.css';
function Home() {
	const { texts } = useLanguage();
	useEffect(() => {
		AOS.init({ duration: 1000, once: true });
	}, []);

	return (
		<section className="home" id="home">
			<div className="meteors__container"></div>

			<picture className="container__image--home" data-aos="fade-right">
				<img className="image__home" src="/imagenes/logo2.png" alt="logo" />
			</picture>

			<div className="home__info">
				<div className="container__text--info">
					<p className="home__text--1">{texts.home.hello}</p>
					<p className="home__text--2">{texts.home.name}</p>
				</div>

				<div className="container__button">
					<a
						href="/public/imagenes/Estefania Cv human.pdf"
						target="_blank"
						rel="noopener noreferrer"
					>
						<button className="cv__button">{texts.home.downloadCV}</button>
					</a>

					<a href="#contacto">
						<button className="contact__button">{texts.home.contact}</button>
					</a>
				</div>
			</div>
			<SocialLinks />
		</section>
	);
}

export default Home;
