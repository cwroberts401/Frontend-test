import { ReactComponent as DeleteIcon } from './DeleteIcon.svg';

function Del({ id, lists, setLists }) {
	const handleClick = () => {
		const deletedList = lists.filter((list, index) => index !== id);
		setLists(deletedList);
	};

	return (
		<button className="del menu-option" onClick={handleClick}>
			<div className="icon-box">
				<DeleteIcon />
			</div>
			<span className="del btn-text">Delete</span>
		</button>
	);
}

export default Del;
