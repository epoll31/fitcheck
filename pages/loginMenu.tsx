import styles from '../styles/General.module.css';

interface loginProps {
	requestLogin: (username: string, password: string) => void	
};

export default function LoginMenu(props: loginProps) {

	const handleLogin = (_: any) => {
		const username = document.getElementById('username') as HTMLInputElement;
		const password = document.getElementById('password') as HTMLInputElement;

		if (username?.checkValidity() && password?.checkValidity()) {
			props.requestLogin(username?.value, password?.value);
		}
	};

	return (<div className={styles.content + ' ' + styles.login}> 
		
		<h1>FitCheck.</h1>

		<input 	id='username' 
						type='text' 
						placeholder='username.'
						required	
						/>
		<input 	id='password' 
						type='password' 
						placeholder='password.'
						required
						/>
		<button id='loginBtn' 
						onClick={handleLogin} >Login.</button>
		<button id='signUpBtn' >SignUp. </button>

		</div>);
};


