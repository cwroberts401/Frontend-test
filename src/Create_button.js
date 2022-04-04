import { ReactComponent as CreateIcon } from './CreateIcon.svg';
import { useNavigate } from 'react-router-dom';

function Create() {
	const navigate = useNavigate();

	return (
		<button className="header-right btn create" onClick={() => navigate('/new')}>
			<CreateIcon />
		</button>
	);
}

export default Create;
