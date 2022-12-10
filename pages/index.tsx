import { useRouter } from 'next/router';
import { useEffect } from 'react';

import styles from '../styles/General.module.css';
import LoginMenu from './loginMenu';

export default function Home(props: any) {
	const router = useRouter();

	const requestLogin = (username: string, password: string) => {
		router.push( {
			pathname: '/user',
			query: { 
				username: username,
				password: password
			}
		}, '/user');
	};
	
	return (
	<div className={styles.main}>
		<LoginMenu requestLogin={requestLogin} />
	</div>);
}






