import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as fas from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ sidebar }) => {
	const handleOpenSidebar = (e) => {
		setFooterTitles([
			footerTitles[0],
			{
				icon: fas.faXmark,
				text: null,
				className: 'nav',
				handleClick: handleCloseSidebar,
			},
		]);
		sidebar(true);
	};

	const handleCloseSidebar = (e) => {
		setFooterTitles([
			footerTitles[0],
			{
				icon: fas.faBars,
				text: null,
				className: 'nav',
				handleClick: handleOpenSidebar,
			},
		]);
		sidebar(false);
	};

	const [footerTitles, setFooterTitles] = useState([
		{ icon: null, text: 'GameAdda', className: 'brand', handleClick: null },
		{
			icon: fas.faBars,
			text: null,
			className: 'nav',
			handleClick: handleOpenSidebar,
		},
	]);

	return (
		<div style={{ position: 'sticky', zIndex: 100, top: 0 }}>
			<ul className='navbar'>
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
		</div>
	);
};

// Component created to reduce redundancy
// Baar baar Li element mein changes naa karna pade
const ListButton = ({ icon, text, className, handleClick }) => {
	return (
		<li className={className} onClick={handleClick}>
			<FontAwesomeIcon icon={icon} className='navbar-icon' />
			<div className='navbar-title'>{text}</div>
			{/* <FontAwesomeIcon icon={icon} />
			&nbsp; {text} */}
		</li>
	);
};

export default Navbar;
