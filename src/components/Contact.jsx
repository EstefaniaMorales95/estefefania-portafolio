import React from 'react';
import '../styles/Contact.css';
import { useLanguage } from '../context/LanguageContext';

function Contact() {
	const { texts } = useLanguage();

	return (
		<section className="contacto" id="contacto">
			<h1 data-aos="fade-up">{texts.contact.title}</h1>
			<div
				className="container__box--contacto"
				data-aos="fade-up"
				data-aos-anchor-placement="center-bottom"
			>
				<div className="container__contacto">
					<div className="container__text--contacto">
						<p>{texts.contact.text}</p>
					</div>

					<form
						className="form__contact"
						action="https://formspree.io/f/xdkaqrzo"
						method="POST"
					>
						<input
							type="text"
							name="name"
							placeholder={texts.contact.name}
							required
						/>
						<input
							type="email"
							name="email"
							placeholder={texts.contact.email}
							required
						/>
						<input
							type="text"
							name="subject"
							placeholder={texts.contact.subject}
							required
						/>
						<textarea
							name="message"
							placeholder={texts.contact.message}
							required
						></textarea>
						<div className="btn__form--contacto">
							<button type="submit">{texts.contact.send}</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
}

export default Contact;
