import { useRouter } from 'next/router';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import { userResponse } from '../pages/api/fcdb';

type authContextType = {
    user: userResponse | null;
    logIn: (username: string, password: string) => void;
    logOut: () => void;
		setUser: (user: userResponse) => void;
};
const authContextDefaultValues: authContextType = {
    user: null,
    logIn: () => {},
    logOut: () => {},
		setUser: () => {}
};
const AuthContext = createContext<authContextType>(authContextDefaultValues);

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [ user, setUser ] = useState<userResponse | null>(null);
	const [ cookies, setCookie ] = useCookies(['user']);
	const router = useRouter();

	useEffect(() => {
		setUser(cookies.user);	
	});

  const logIn = (username: string, password: string) => {			
  	const href = './user/' + username;
	
		router.push({
			pathname: href,
			query: {
				username: username,
				password: password
			}
		}, href);

	};
  const logOut = () => {
    setUser(null);
		setCookie('user', null);
		router.push('../');
  };
	const setUser1 = (user: userResponse) => {
		setUser(user);
	};
  const value = {
    user,
    logIn,
    logOut,
		setUser: setUser1
 	};

  return (
  	<AuthContext.Provider value={value}>
	  	{children}
    </AuthContext.Provider>
	);
}

