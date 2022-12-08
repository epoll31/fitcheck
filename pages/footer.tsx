

import styles from '../styles/General.module.css';

export default function Footer(props: {
	setHomePageActive: Function
}) {

	return (
	<div className={styles.footer}>
			
		<button className={styles.home} 
						onClick={(_) => props.setHomePageActive()}>
		</button>
	</div>);
}


