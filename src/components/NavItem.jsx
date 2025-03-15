import React from 'react';

function NavItem({ href, label, onClick }) {
	return (
		<a href={href} className="nav__link" onClick={onClick}>
			{label}
		</a>
	);
}

export default NavItem;
