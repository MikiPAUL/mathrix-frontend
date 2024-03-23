import React from 'react';
import colors from '../constants/colors';
import './About.css';
export default function About() {
	return (
		<div
			className="container animate__animated animate__pulse"
			style={{
				marginTop: 70,
				backgroundImage: 'linear-gradient(to bottom right, rgba(10,10,25,0.9), rgba(255, 255, 255, 0.143))',
				backdropFilter: 'blur(10px)',
				boxShadow: '0 0 50px 15px #7E30E1',
				borderRadius: 15,
				padding: 25,
				marginLeft: 40,
				width: 1900,
			}}
		>
			<div style={{ flexDirection: 'row' }}>
				<div className="container text-center">
					<div className="row align-items-center">
						<div className="col">
							<div style={{ textAlign: 'start' }}>
								<h1 style={{ color: 'white', fontSize: 30 }}>About Mathrix</h1>
								<h5 style={{ color: '#7E30E1' }}>
									The department of Mathematics imparts consistent training and platform for research to the students. It provides state of the art facilities to the students enabling them to stay a
									step ahead. They are exposed to various opportunities such as inplant training, internships, and workshops during their course of study.
								</h5>
							</div>
							<div style={{ textAlign: 'start' }}>
								<p style={{ color: colors.grey, fontSize: 17 }}>
									The department has been conducting an Intercollegiate Symposium for more than three decades and we take pride in presenting its 36th edition MATHRIX 2024.
								</p>
							</div>
						</div>
						<div className="col">
							<div className="card" style={{ backgroundColor: '#212134', borderWidth: 5, borderColor: '#7e36c7' }}>
								<div className="row">
									<div className="col-sm-10" style={{ marginRight: 0 }}>
										<div style={{ padding: 25 }}>
											<p style={{ color: '#A366FF', textAlign: 'justify', fontWeight: '900' }}>
												Anna University, located at the heart of Chennai city, is a prestigious university that has bagged numerous accolades and has been striving hard towards producing professionals
												with high technical expertise and ethical values. It's main campus, College of Engineering Guindy takes pride in celebrating its 225 Years of alliance with collegiate education
												that has carved a niche for itself in our nation captivated by engineering. Its continuous pursuance of technical excellence has fortified its position among the premier
												engineering colleges in the country. The college provides a conducive atmosphere for the holistic development of students and producing the best talents every year.
											</p>
										</div>
									</div>
									<div className="col-sm-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
										<div className="col" style={{ color: 'white', fontWeight: 'bold' }}>
											<h1 className="row" id="li">
												C
											</h1>
											<h1 className="row" id="li">
												E
											</h1>
											<h1 className="row" id="li">
												G
											</h1>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
