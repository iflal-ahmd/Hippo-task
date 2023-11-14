import React from 'react';
import Nav from "../molecules/nav";
import Logo from "../molecules/logo";

function Header() {
	return (
		<div className={"flex flex-row items-center justify-between h-12 my-2"}>
			<Logo />
			<Nav/>
		</div>
	);
}

export default Header;
