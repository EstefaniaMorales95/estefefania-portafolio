import React from 'react';
import '../styles/SocialLinks.css';

const socialLinks = [
	{
		href: 'https://www.linkedin.com/in/estefania-morales-a5a399332/',
		imgSrc: '/imagenes/linkediN.jpg',
		alt: 'LinkedIn',
	},
	{
		href: 'https://github.com/EstefaniaMorales95',
		imgSrc: '/imagenes/icon-github.png',
		alt: 'GitHub',
	},
	{
		href: 'https://wa.me/50762786640',
		imgSrc: '/imagenes/whatsapp.jpg',
		alt: 'WhatsApp',
	},
	{
		href: 'mailto:estefamorales.restrepo@gmail.com',
		imgSrc: '/imagenes/gmail.jpg',
		alt: 'Gmail',
	},
];

function SocialLinks() {
	return (
		<div className="links">
			{socialLinks.map(({ href, imgSrc, alt }) => (
				<a key={alt} href={href} target="_blank" rel="noopener noreferrer">
					<img src={imgSrc} alt={alt} className="icon" />
				</a>
			))}
		</div>
	);
}

export default SocialLinks;
