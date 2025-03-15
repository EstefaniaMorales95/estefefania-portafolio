import React from 'react';
import Nav from './components/Nav';
import './styles/global.css';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';

function App() {
	return (
		<div className="container__loader">
			<LanguageProvider>
				<Nav />
				<Home />
				<Skills />
				<AboutMe />
				<Education />
				<Projects />
				<Contact />
				<Footer />
			</LanguageProvider>
		</div>
	);
}

export default App;
