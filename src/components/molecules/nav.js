import React from 'react';

function Nav() {
	return (
		<nav className=" flex flex-row justify-end">
			<ul className="flex flex-row">
				<li className="mr-2"><a href="#">Register</a></li>
				<li>|</li>
				<li className="ml-2"><a href="#">Login</a></li>
			</ul>
		</nav>
	);
}

export default Nav;
