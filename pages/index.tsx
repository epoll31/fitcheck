import { useRouter } from 'next/router';
import { useEffect } from 'react';


export default function Home(props: any) {
	const router = useRouter();
	useEffect(() => {router.replace('./login'); });	
}



