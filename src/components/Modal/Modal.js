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
			className="absolute flex top-3 w-[1176px] h-[400px] transition-all ease-in-out duration-200"
			style={{
				marginTop: 30,
				backgroundImage: 'linear-gradient(to bottom right, rgba(10,10,25,0.9), rgba(255, 255, 255, 0.143))',
				backdropFilter: 'blur(20px)',
				boxShadow: '0 0 50px 15px #7E30E1',
				borderRadius: 15,
			}}
			data-aos="zoom-in-up"
		>
			<div className="relative w-full h-full text-start rounded-xl  text-white px-10">
				<h1 className="text-4xl">{event.title}</h1>
				<p className="mt-6 text-lg">{event.description}</p>
				<button onClick={() => setIsOpen(false)} className="right-6 top-4 absolute px-2 py-1 bg-[#7E30E1] rounded-md text-white">
					close
				</button>
			</div>
		</div>
	);
};

export default Modal;
