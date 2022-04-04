import { ReactComponent as MenuIcon } from './MenuIcon.svg';
import Dropdown from './Dropdown_menu';
import { useState } from 'react';

function Menu({ id, lists, setLists }) {
	const [ displayMenu, setDisplayMenu ] = useState(false);

	return (
		<div className="menu-nav">
			<button
				className="menu btn"
				id={id}
				onClick={() => {
					setDisplayMenu(!displayMenu);
				}}
			>
				<MenuIcon />
			</button>

			{displayMenu ? <Dropdown id={id} lists={lists} setLists={setLists} /> : null}
		</div>
	);
}

export default Menu;
