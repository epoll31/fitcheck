import { useState, FC } from 'react';

import LoginPage from './login';
import styles from '../styles/General.module.css';
import SignUpPage from './signUp';

export const pages = {
	login: 'login',
	signUp: 'signUp'
}

export default function Home() {
	const [activePage, setActivePage] = useState(pages.login);

	let page;
	switch (activePage) {
		case pages.login: 
			page = <LoginPage setSignUpPageActive={() => setActivePage(pages.signUp)}/>;
			break;
		case pages.signUp:
			page = <SignUpPage setHomePageActive={() => setActivePage(pages.login)}/>;
			break;
	}

	return (
	<div className={styles.main}>
		{ page }
	</div>);
}
