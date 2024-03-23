import React from 'react';
import colors from '../constants/colors';
import './Navbar.css';
import mathLogo from './../assets/index';

const Navbar = () => {
	return (
		<div id="navbar" style={{ flexDirection: 'row', background: colors.bg }}>
			<nav className="navbar navbar-light navbar-expand-lg bg-body-tertiary">
				<div id="c" className="container-fluid ">
					<img style={{ pointerEvents: 'none' }} id="nim" src={mathLogo} alt="" />
					<a className="navbar-brand" id="mathrix" href="/">
						MATHRIX 2024
					</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span id="nbti" className="navbar-toggler-icon"></span>
					</button>
					<div className="container col-6 col-md-4">
						<div className="collapse navbar-collapse" id="navbarNav">
							<ul className="navbar-nav">
								<li className="nav-item">
									<a className={'nav-link'} style={{ fontSize: 20, color: colors.grey }} href="/about" aria-current="page">
										ABOUT
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" style={{ fontSize: 20, color: colors.grey }} href="/events">
										EVENTS
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" style={{ fontSize: 20, color: colors.grey }} href="/schedule">
										SCHEDULE
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" style={{ fontSize: 20, color: colors.grey }} href="/workshop">
										WORKSHOP
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" style={{ fontSize: 20, color: colors.grey }} href="/">
										CONTACTS
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div id="buttn" style={{ fontSize: 16 }}>
						<button style={{ background: colors.buttons }} type="button" className="btn btn-dark animate__animated animate__heartBeat">
							March 16 & 17, 2024
						</button>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
