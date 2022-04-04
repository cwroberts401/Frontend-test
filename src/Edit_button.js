import { ReactComponent as EditIcon } from './EditIcon.svg';
import { useNavigate } from 'react-router-dom';

function Edit({ id, lists, setLists }) {
	const navigate = useNavigate();

	function clickHandler({ target }) {
		navigate(`/edit/${id}`);
	}

	return (
		<button className="edit menu-option" onClick={clickHandler} id={id}>
			<div className="icon-box">
				<EditIcon />
			</div>
			<span className="edit btn-text">Edit</span>
		</button>
	);
}

export default Edit;
