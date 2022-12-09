import { useState } from 'react';
import { GetServerSideProps } from 'next';

import LoginPage from './login';
import styles from '../styles/General.module.css';
import SignUpPage from './signUp';

import fcdb from '../utils/fcdb';

export const pages = {
	login: 'login',
	signUp: 'signUp'
}
export const getServerSideProps: GetServerSideProps = async (context) => {
	const users = JSON.parse(await fcdb.getUsers());
	
	//console.log(users);

	return {
		props: {
			users: users
		}
	};
}

export default function Home(users: any) {
	const [activePage, setActivePage] = useState(pages.login);

	console.log(users);

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
