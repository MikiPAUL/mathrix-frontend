import React from 'react';
import colors from '../constants/colors';
import './Welcome.css';
import { useNavigate } from 'react-router-dom';

export default function Welcome() {
	const navigate = useNavigate();
	return (
		<div
			id="home"
			className="container animate__animated animate__pulse pb-8"
			style={{
				marginTop: 60,
				backgroundImage: 'linear-gradient(to bottom right, rgba(10,10,25,0.9), rgba(255, 255, 255, 0.143))',
				backdropFilter: 'blur(10px)',
				boxShadow: '0 0 50px 15px #7E30E1',
				borderRadius: 15,
			}}
		>
			<div id="welcome" style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
				<div>
					<h1 id="h1tags">MATHRIX 2024</h1>
					<h1 id="h1tags" className="pt-4">
						Inter College Math-Tech Symposium
					</h1>
					{/* <h1 id="h1tags" className="pt-4">
						Symposium
					</h1> */}
					<p style={{ marginTop: 16, color: 'GrayText' }}>FROM EPSILON TO INFINITY</p>
				</div>
				<div style={{ marginTop: 20 }}>
					<div className="row" style={{ padding: 15, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
						<button onClick={() => navigate('/events')} id="bN" style={{ width: 400, height: 45, background: colors.buttons, fontSize: 16, borderRadius: 10 }} type="button" className="btn btn-dark">
							CHECK OUT THE EVENTS LIST HERE
						</button>
					</div>
					<div className="row" style={{ padding: 15, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
						<button onClick={() => navigate('/login')} id="bN" style={{ width: 400, height: 45, background: colors.buttons, fontSize: 16, borderRadius: 10 }} type="button" className="btn btn-dark">
							REGISTER/LOGIN
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
