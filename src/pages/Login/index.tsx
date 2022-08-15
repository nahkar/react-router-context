import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/auth';

type Props = {};

export default function Login({}: Props) {
	const { login } = useContext(AuthContext);
	const navigate = useNavigate();
	const location = useLocation();

	const redirectPath: string = `${location.state || '/'}`;
	
	const onLogin = () => {
		login(true);
		navigate(redirectPath, { replace: true });
	};

	return (
		<div>
			<h1>Login</h1>
			<button onClick={onLogin}>Login</button>
		</div>
	);
}
