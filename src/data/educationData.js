const getEducationData = (texts) => [
	{
		id: 1,
		img: '/imagenes/academlo_logo.jpeg',
		title: texts.education.academloTitle,
		status: texts.education.academloStatus,
		animation: 'fade-down',
	},
	{
		id: 2,
		img: '/imagenes/udemy.png',
		title: texts.education.udemyTitle,
		status: texts.education.udemyStatus,
		animation: 'fade-up',
	},
];

export default getEducationData;
