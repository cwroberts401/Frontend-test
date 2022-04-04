import { ReactComponent as AddIcon } from './AddIcon.svg';
import { useNavigate } from 'react-router-dom';

function Add() {
	const navigate = useNavigate();

	return (
		<button className="menu btn" onClick={() => navigate('/new')}>
			<AddIcon />
		</button>
	);
}

export default Add;
