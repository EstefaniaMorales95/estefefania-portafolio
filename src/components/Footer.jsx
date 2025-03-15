import React from 'react';
import '../styles/Footer.css';
import SocialLinks from './SocialLinks';
import { useLanguage } from '../context/LanguageContext';
function Footer() {
	const { texts } = useLanguage();
	return (
		<footer>
			<div className="container__footer">
				<SocialLinks />
				<div className="container__text--footer">
					<span>{texts.footer.copyright}</span>
					<span>💜</span>
					<span>{texts.footer.name}</span>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
