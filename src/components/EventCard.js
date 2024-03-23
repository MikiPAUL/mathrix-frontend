import React from 'react';
import './EventCard.css';

const EventCard = (props) => {
	const handleClick = () => {
		props.setIsOpen(true);
		window.scrollTo({ top: 0, behavior: 'smooth' });
		console.log(props);
		props.setEvent({
			title: props.title,
			description: props.description,
			posterUrl: props.posterUrl,
		});
	};
	return (
		<>
			<div className="col" style={{ padding: 10 }}>
				<div onClick={handleClick}>
					<div
						id="card"
						className="card animate__animated animate__flip animate__delay-0.9s"
						style={{ height: 400, width: 275, cursor: 'pointer', backgroundColor: '#291a39', borderWidth: 5, borderColor: '#7e36c7' }}
					>
						<img pointer style={{ pointerEvents: 'none', height: 150 }} src={props.posterUrl} className="card-img-top" alt="..." />
						<div className="card-body" style={{ color: 'white', textAlign: 'start' }}>
							<h5 className="card-title" style={{ fontSize: 18 }}>
								{props.title}
							</h5>
							<p className="card-text" style={{ height: 150, overflow: 'hidden' }}>
								{props.description}
							</p>
						</div>
					</div>
				</div>
				{/* <Modal /> */}
			</div>
		</>
	);
};

export default EventCard;
