import React, { useEffect } from 'react';
import './Model.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Modal = ({ event, setIsOpen }) => {
	useEffect(() => {
		Aos.init({
			offset: 200,
			duration: 600,
			easing: 'ease-in-sine',
			delay: 100,
		});
	});
	return (
		<div
			style={{
				marginTop: -2,
				position: 'absolute',
				display: 'flex',
				top: 3,
				left: 0,
				width: 1269,
				height: 500,
				backgroundImage: 'linear-gradient(to bottom right, rgba(10,10,25,0.9), rgba(255, 255, 255, 0.106))',
				backdropFilter: 'blur(10px)',
				boxShadow: '0 0 50px 15px #7E30E1',
				borderRadius: 15,
			}}
			data-aos="zoom-in-up"
		>
			<div style={{ position: 'relative', width: '100%', height: '100%', borderRadius: 20, textAlign: 'start', color: 'white' }}>
				<h1>{event.title}</h1>
				<p style={{ marginTop: 6, fontSize: 22, padding: 20 }}>{event.description}</p>
				<button onClick={() => setIsOpen(false)} style={{ color: 'white', backgroundColor: '#7E30E1', fontSize: 20, position: 'absolute', right: 12, top: 11, borderRadius: 7, border: 'none' }}>
					close
				</button>
			</div>
		</div>
	);
};

export default Modal;
