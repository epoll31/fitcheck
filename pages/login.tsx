//import styles from '../styles/General.module.css';
import menu from '../styles/Menu.module.css';
import { useAuth } from '../utils/useAuth';

export default function Login(props: {}) {

	const { user, logIn} = useAuth();

	const handleLogin = (_: any) => {
		const username = document.getElementById('username') as HTMLInputElement;
		const password = document.getElementById('password') as HTMLInputElement;

		if (username?.checkValidity() && password?.checkValidity()) {
			logIn(username.value, password.value);
		}
	};

	return (<div className={menu.content}> 
		
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
		{ JSON.stringify(user) }

		</div>);
};


