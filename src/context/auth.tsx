import { createContext, Dispatch, SetStateAction, useState } from 'react';

type Props = {
	children: React.ReactNode;
};

type Context = {
	isLogin: boolean;
	login: (active: boolean) => void;
};

export const AuthContext = createContext<Context>({} as Context);

export const AuthProvider = ({ children }: Props) => {
	const [isLogin, setIsLogin] = useState(false);

	return <AuthContext.Provider value={{ isLogin, login: setIsLogin }}>{children}</AuthContext.Provider>;
};
