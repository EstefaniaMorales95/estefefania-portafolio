import React, { useState, useEffect } from 'react';
import NavItem from './NavItem';
import Language from './Language';
import MenuButton from './MenuButton';
import { useLanguage } from '../context/LanguageContext';
import '../styles/Nav.css';

function Nav() {
	const { texts, setLanguage } = useLanguage();
	const [menuOpen, setMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const handleNavClick = () => {
		setMenuOpen(false);
	};

	const navLinks = [
		{ href: '#home', label: texts.nav.home },
		{ href: '#sobreMi', label: texts.nav.about },
		{ href: '#habilidades', label: texts.nav.skills },
		{ href: '#formacion', label: texts.nav.education },
		{ href: '#proyectos', label: texts.nav.projects },
		{ href: '#contacto', label: texts.nav.contact },
	];

	return (
		<header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
			<nav className="nav__container">
				<div className="menu-button-container">
					<MenuButton
						onClick={() => setMenuOpen(!menuOpen)}
						isActive={menuOpen}
					/>
				</div>

				<div className={`nav__menu ${menuOpen ? 'open' : ''}`}>
					{navLinks.map((link) => (
						<NavItem
							key={link.href}
							href={link.href}
							label={link.label}
							onClick={handleNavClick}
						/>
					))}
					<Language />
				</div>
			</nav>
		</header>
	);
}

export default Nav;
