import { useRouter } from "next/router";
import { validateUser, userResponse } from "../utils/fcdb";


export async function getServerSideProps(context: any) {
		
	const request = context.query;

	const user = await validateUser(request);

  return {
    props: JSON.parse(user) as userResponse, // will be passed to the page component as props
  }
};

const User = (props: userResponse) => {
	const router = useRouter();

	if (props.id == null || props.username == null) {
		router.replace('./');
	}


	return <div> 
		<h1>{props.username}</h1>
	</div>;
};

export default User;
