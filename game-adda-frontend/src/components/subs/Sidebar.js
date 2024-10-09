import React from 'react';
import classNames from 'classnames';

function Sidebar({ open }) {
	return (
		<div className={classNames('sidebar', { show: open })}>
			<h1>
				<br />
				Sidebar
			</h1>
			<p>
				Id nulla tempor in deserunt excepteur fugiat qui deserunt dolor
				reprehenderit. Sunt aliquip elit sit tempor voluptate pariatur ipsum in.
				Nulla incididunt fugiat occaecat qui. Proident ea tempor cillum aute
				sint. Culpa elit consectetur culpa et excepteur occaecat minim fugiat.
				Enim fugiat ipsum Lorem minim reprehenderit esse deserunt proident.
				Consectetur dolor voluptate commodo ad proident. Aliquip aute officia
				deserunt magna excepteur laborum dolor ea cupidatat cupidatat. Magna
				labore mollit quis qui mollit voluptate. Consectetur laboris veniam in
				laboris nulla consectetur eu occaecat tempor esse commodo. Enim velit
				labore anim commodo veniam sit qui exercitation ad. Labore nisi enim sit
				cupidatat elit ad excepteur eu. Ad reprehenderit aliqua id incididunt Id
				nulla tempor in deserunt excepteur fugiat qui deserunt dolor
				reprehenderit. Sunt aliquip elit sit tempor voluptate pariatur ipsum in.
				Nulla incididunt fugiat occaecat qui. Proident ea tempor cillum aute
				sint. Culpa elit consectetur culpa et excepteur occaecat minim fugiat.
				Enim fugiat ipsum Lorem minim reprehenderit esse deserunt proident.
				Consectetur dolor voluptate commodo ad proident. Aliquip aute officia
				deserunt magna excepteur laborum dolor ea cupidatat cupidatat. Magna
				labore mollit quis qui mollit voluptate. Consectetur laboris veniam in
				laboris nulla consectetur eu occaecat tempor esse commodo. Enim velit
				labore anim commodo veniam sit qui exercitation ad. Labore nisi enim sit
				cupidatat elit ad excepteur eu. Ad reprehenderit aliqua id incididunt
			</p>
		</div>
	);
}

export default Sidebar;
