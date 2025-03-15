import React from 'react';
import '../styles/MenuButton.css';

function MenuButton({ onClick, isActive }) {
	return (
		<div
			className={`btn ${isActive ? 'active' : 'not-active'}`}
			onClick={onClick}
		>
			<span></span>
			<span></span>
			<span></span>
		</div>
	);
}

export default MenuButton;
