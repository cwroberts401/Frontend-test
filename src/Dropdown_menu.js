import DeleteButton from './Delete_button';
import Edit from './Edit_button';

function Dropdown({ id, lists, setLists }) {
	return (
		<div className="dropdown">
			<Edit id={id} lists={lists} setLists={setLists} />
			<DeleteButton id={id} lists={lists} setLists={setLists} />
		</div>
	);
}

export default Dropdown;
