
import { useRouter } from "next/router";
import { userResponse, getUser } from "./api/fcdb";
import styles from "../styles/User.module.css";

export async function getServerSideProps(context: any) {
		
	const query = context.query;

	const id = +query.id;

	const user = await getUser(id);

  return {
    props: user, // will be passed to the page component as props
  }
};

const Closet = (props: userResponse) => {
	const router = useRouter();


	if (props.id == null || props.username == null) {
		//(() => { router.replace('./') })();
	}
	//console.log(props.id);

	return (<div className={styles.content}> 
		<h1>Closet.</h1>
		{ JSON.stringify(props) }
	</div>);
};

export default Closet;
