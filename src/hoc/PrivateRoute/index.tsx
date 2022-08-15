import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/auth';

type Props = {
	children: JSX.Element;
};

export function PrivateRoute({ children }: Props) {
	const { isLogin } = useContext(AuthContext);
	const location = useLocation();

	if (location.pathname === '/login') {
		return !isLogin ? children : <Navigate to="/" replace />;
	}

	return isLogin ? children : <Navigate to="/login" state={location.pathname} />;
}
