import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../../context/auth';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Nav from '../../components/Nav';

type Props = {};

export default function MainLayout({}: Props) {
	const { isLogin, login } = useContext(AuthContext);
	return (
		<div>
			<Header isLogin={isLogin} login={login} />
			<Nav isLogin={isLogin} />
			<Outlet />
			<Footer />
		</div>
	);
}
