
import { useState } from 'react';
import styles from '../styles/General.module.css';

interface LoginPageProps {

}
export default function LoginPage(props: LoginPageProps) {

	return (<div className={styles.content + ' ' + styles.login}> 
		
		<h1>FitCheck.</h1>

		<input type='text' placeholder='username.'/>
		<input type='password' placeholder='password.'/>
		<button id='loginBtn'>Login.</button>
		<button id='signUpBtn'>SignUp.</button>


		</div>);
};


