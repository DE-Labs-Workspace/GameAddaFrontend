import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as fas from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
	const footerTitles = [
		{ icon: fas.faHouse, text: 'Home' },
		{ icon: fas.faSearch, text: 'Search' },
		{ icon: fas.faMedal, text: 'Wins' },
		{ icon: fas.faUser, text: 'Account' },
	];

	return (
		<footer style={{ position: 'sticky', zIndex: 100, bottom: 0 }}>
			<ul className='footer'>
				{footerTitles.map((f) => ListButton(f))}
				{/* <li style={{ flex: 1 }}>
					<FontAwesomeIcon icon={fas.faHouse} />
					&nbsp; Home
				</li>
				<li>
					<FontAwesomeIcon icon={fas.faSearch} />
					<div>&nbsp; Search</div>
				</li>
				<li>
					<FontAwesomeIcon icon={fas.faMedal} />
					&nbsp; Wins
				</li>
				<li>
					<FontAwesomeIcon icon={fas.faUser} />
					&nbsp; Account
				</li> */}
			</ul>
		</footer>
	);
};

// Component created to reduce redundancy
// Baar baar Li element mein changes naa karna pade
const ListButton = ({ icon, text }) => {
	return (
		<li>
			<FontAwesomeIcon icon={icon} className='footer-icon' />
			<div className='footer-title'>{text}</div>
			{/* <FontAwesomeIcon icon={icon} />
			&nbsp; {text} */}
		</li>
	);
};

export default Footer;
