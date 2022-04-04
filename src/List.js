import Menu from './Menu_button';
import Add from './Add_button';
import { useNavigate } from 'react-router-dom';

function List({ lists, setLists }) {
	let displayLists = '';
	const navigate = useNavigate();

	/* React docs reccomend not using index as key value
    used here for demonstration purposes only */

	if (lists.length) {
		displayLists = lists.map((list, index) => (
			<div className="list" key={index}>
				<div className="list-item">
					<h2>{list}</h2>
				</div>
				<div className="margin-right">
					<Menu id={index} lists={lists} setLists={setLists} />
				</div>
			</div>
		));
	}

	return (
		<div className="center">
			{lists.length ? (
				displayLists
			) : (
				<div className="list" onClick={() => navigate('/new')}>
					<div className="list-item">
						<h2>Create a list</h2>
					</div>
					<div className="margin-right">
						<Add />
					</div>
				</div>
			)}
		</div>
	);
}

export default List;
