import { useRouter } from "next/router";
import { userResponse, validateUser } from "./api/fcdb";
import styles from "../styles/User.module.css";

export async function getServerSideProps(context: any) {
		
	const request = context.query;

	const user = await validateUser(request);

  return {
    props: user, // will be passed to the page component as props
  }
};

const User = (props: userResponse) => {
	const router = useRouter();

	if (props.id == null || props.username == null) {
		router.replace('./');
	}

	const logOut = () => router.replace('./');
	const closet = () => router.replace({
		pathname: './closet',
		query: {
			id: props.id
		}
	}, './closet');

	return <div className={styles.content}> 
		<h1>{props.username}</h1>
		<button onClick={closet}>Closet.</button>
		<button onClick={logOut}>LogOut.</button>
	</div>;
};

export default User;
