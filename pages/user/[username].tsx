import { useRouter } from "next/router";
import menu from "../../styles/Menu.module.css";
import { useAuth } from "../../utils/useAuth";
import { userExists } from "../api/fcdb";

export async function getServerSideProps(context: any) {
	const { username } = context.query;

	if (await userExists(username)) {
		return {
			props: {
				user: {
					username: username
				},
				error: {
					code: 0,
					value: 'none'
				}
			}
		};
	}
	return {
		props: {
			user: {
				username: username
			},
			error: {
				code: -1,
				value: 'user not found.'
			}
		}
	};
}

const User = (props: any) => {
	const { user, logOut, setUser } = useAuth();
	const { error } = props;
	if (error.code == -1) {
		return <div className={menu.content}> 
			<h1>{props.username}</h1>
			<p>{error.value}</p>
		</div>;
	}
	setUser(props.user);

	const closet = () => {};

	return <div className={menu.content}> 
		<h1>{user?.username}</h1>
		<button onClick={closet}>Closet.</button>
		<button onClick={logOut}>LogOut.</button>
	</div>;
};

export default User;
