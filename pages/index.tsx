import { useState } from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';


import LoginMenu from './loginMenu';
import styles from '../styles/General.module.css';
import SignUpPage from './signUp';

import { validateUser, userRequest, userResponse } from '../utils/fcdb';
import { warn } from 'console';


let request: userRequest | null = null;
export const pages = {
	login: 'login',
	signUp: 'signUp'
}

export const getServerSideProps: GetServerSideProps = async (_) => {
	let response = request;

	//request = null;

	return {
		props: {
			response: request 
		}
	};

/*
	if (request) {
		response = JSON.parse(await validateUser(request));
		request = null;
	}


	return {
		props: {
			response: response
		}
	};
*/
}

export default function Home(props: any) {
	const router = useRouter();
	
	console.log(props);	
	
	const requestLogin = (username: string, password: string) => {
		request = {
			username: username,
			password: password
		};
		console.log('login requested: ', request);
		
		router.replace({
			pathname: './',
			query: {
				username: 'edog',
				email: '',
				phone: ''
			}
		}, '/login');
	};

	return (
	<div className={styles.main}>
		<LoginMenu requestLogin={requestLogin} />
	</div>);
}
