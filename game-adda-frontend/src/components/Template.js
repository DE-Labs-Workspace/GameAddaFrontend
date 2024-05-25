import React, { Fragment } from 'react';
import Header from './subs/Header';
import Dashboard from './subs/Dashboard';
import Footer from './subs/Footer';
import Main from './subs/Main';

const Template = () => {
	return (
		<Fragment>
			<Header bal='180' />
			{/* <Main />
			<Dashboard />
			<Footer /> */}
		</Fragment>
	);
};

export default Template;
