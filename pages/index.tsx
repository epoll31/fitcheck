import React, { useState } from 'react';
//import Head from 'next/head'
//import Image from 'next/image'
import LoginPage from './login';
import styles from '../styles/General.module.css';

interface FooterProps {
	hide: boolean;
}
function Footer(props: FooterProps) {

	return (
	<div className={styles.footer + (props.hide ? (' ' + styles.nodisp) : '')}>
			
		<button className={styles.home} >
		</button>
	</div>);
}



export default function Home() {
	const [hideFooter, setHideFooter] = useState(true);

	return (
	<div className={styles.main}>
		<LoginPage />

		<Footer hide={hideFooter} /> 
	</div>);
}
