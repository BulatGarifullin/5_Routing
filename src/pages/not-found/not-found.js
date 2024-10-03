import { ControlPanel, Button } from '../../components';
import { Link } from 'react-router-dom';
import styles from './not-found.module.css';

export const NotFound = () => (
	<>
		<ControlPanel>
			<Button>
				<Link to="/">
					<b>&larr;</b>
				</Link>
			</Button>
		</ControlPanel>
		<div className={styles.wrapper}>Такая страница не найдена</div>
	</>
);
