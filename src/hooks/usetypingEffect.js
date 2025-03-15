import { useState, useEffect } from 'react';

export function useTypingEffect(text, speed = 100) {
	const [typedText, setTypedText] = useState('');
	const [index, setIndex] = useState(0);

	useEffect(() => {
		if (index < text.length) {
			const timeout = setTimeout(() => {
				setTypedText((prev) => prev + text[index]);
				setIndex(index + 1);
			}, speed);
			return () => clearTimeout(timeout);
		}
	}, [index, text, speed]);

	return typedText;
}
