import { ReactComponent as BackArrow } from './BackArrow.svg';
import { useNavigate } from 'react-router-dom';

function Cancel() {
	const navigate = useNavigate();

	return (
		<button className="no-background text-only" onClick={() => navigate('/')}>
			<BackArrow style={{ marginRight: 4 }} />
			Cancel
		</button>
	);
}

export default Cancel;
