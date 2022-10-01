import React from 'react';

const SignedInMenu = ({ logout }) => {
	return (
		<li onClick={logout}>
			<a>Logout</a>
		</li>
	);
};

export default SignedInMenu;
