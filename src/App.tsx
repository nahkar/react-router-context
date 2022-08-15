import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SinglePost from './components/SinglePost';
import { AuthContext, AuthProvider } from './context/auth';
import { PrivateRoute } from './hoc/PrivateRoute';
import MainLayout from './Layout/Main';
import About from './pages/About';
import Contact from './pages/Contact';
import { Home } from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Post from './pages/Post';

function App() {
	return (
		<AuthProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<MainLayout />}>
						<Route index element={<Home />} />
						<Route path="about" element={<About />} />
						<Route path="contact" element={<Contact />} />
						<Route
							path="post"
							element={
								<PrivateRoute>
									<Post />
								</PrivateRoute>
							}
						/>
						<Route path="post/:id" element={<SinglePost />} />
						<Route
							path="login"
							element={
								<PrivateRoute>
									<Login />
								</PrivateRoute>
							}
						/>
						<Route path="*" element={<NotFound />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</AuthProvider>
	);
}

export default App;
