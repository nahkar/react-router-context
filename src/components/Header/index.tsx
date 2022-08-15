import React from 'react';
import Login from '../../pages/Login';

type Props = {
	isLogin: boolean;
	login: (isLogin: boolean) => void;
};

export default function Header({ isLogin, login }: Props) {
	const onLogout = () => {
		login(false);
	};
	return (
		<footer>
			<h4>
				Header
				{isLogin && <button onClick={onLogout}>LogOut</button>}
			</h4>
		</footer>
	);
}
