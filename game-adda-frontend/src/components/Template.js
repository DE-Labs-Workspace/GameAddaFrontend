import React, { Fragment, useState } from 'react';
import Header from './subs/Header';
import Dashboard from './subs/Dashboard';
import Footer from './subs/Footer';
import Main from './subs/Main';
import Navbar from './subs/Navbar';
import Sidebar from './subs/Sidebar';

const Template = () => {
	const [openSidebar, setOpenSidebar] = useState(false);

	return (
		<Fragment style={{ display: 'content' }}>
			<Navbar sidebar={setOpenSidebar} />
			<Header bal='180' />
			<Main />
			<Dashboard />
			<Footer />
			<Sidebar open={openSidebar} />
		</Fragment>
	);
};

export default Template;
