import ProfilePic from './profilePic.png';

function Avatar() {
	return (
		<div className="circle-crop">
			<img src={ProfilePic} alt="headshot" className="pic" />
		</div>
	);
}

export default Avatar;
