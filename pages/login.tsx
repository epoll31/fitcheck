import styles from '../styles/General.module.css';

export default function LoginPage(props: {
	setSignUpPageActive: Function
}) {


	return (<div className={styles.content + ' ' + styles.login}> 
		
		<h1>FitCheck.</h1>

		<input type='text' placeholder='username.'/>
		<input type='password' placeholder='password.'/>
		<button id='loginBtn'>Login.</button>
		<button id='signUpBtn' 
		onClick={(_) => props.setSignUpPageActive()}>SignUp. </button>

		</div>);
};


