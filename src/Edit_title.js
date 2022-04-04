import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Title({ lists, setLists }) {
	const [ formData, setFormData ] = useState('');
	const navigate = useNavigate();
	const { list_id } = useParams();

	useEffect(
		() => {
			if (list_id) {
				setFormData(lists[list_id]);
			}   
		},
		[ list_id, lists ]
	);

	const handleChange = ({ target }) => {
		setFormData(target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (list_id) {
			const array = lists;
			array.splice(list_id, 1, formData);
			setLists(array);
		} else {
			setLists((prevLists) => [ ...prevLists, formData ]);
		}
		navigate('/');
	};

	return (
		<form id="list-title" onSubmit={handleSubmit} className="header">
			<input
				value={formData}
				type="text"
				placeholder="List title"
				className="create-list"
				onChange={handleChange}
			/>
		</form>
	);
}

export default Title;
