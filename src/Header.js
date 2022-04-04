import Avatar from './Avatar';
import Create from './Create_button';
import Cancel from './Cancel_button';
import Done from './Done_button';
import { useLocation } from 'react-router-dom';

function Header() {
	const location = useLocation();
	const page = location.pathname;

	return (
		<div className="header">
			{page === '/' ? <Avatar /> : <Cancel />}
			{page === '/' ? <h1>Lists</h1> : null}
			{page === '/' ? <Create /> : <Done />}
		</div>
	);
}

export default Header;
