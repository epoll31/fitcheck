
import { useState } from 'react';
import styles from '../styles/General.module.css';
import Footer from './footer';

export default function SignUpPage(props: {
	setHomePageActive: Function
}) {

	return (<div className={styles.content + ' ' + styles.signUp}> 
		<div className={styles.signUp}>	
			<h1>FitCheck.</h1>

			<input id='username' type='text' placeholder='username.'/>
			<input id='password' type='password' placeholder='password.'/>
			<input id='email' type='email' placeholder='email.'/>
			<input id='phone' type='phone' placeholder='phone number.'/>
		
			<button id='signUpBtn'>SignUp.</button>
		</div>
		<Footer setHomePageActive={props.setHomePageActive} />
		</div>);
};


