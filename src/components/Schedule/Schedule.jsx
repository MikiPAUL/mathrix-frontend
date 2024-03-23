import React, { useState, useEffect } from 'react';
import './Schedule.css';
import schedule from '../../constants/data';

const Schedule = () => {
	return (
		<>
			<div className="schedule-container">
				<h1 style={{ fontWeight: 'bolder', fontSize: 50 }}>SCHEDULE</h1>
				<div className="schedule-header">
					<div>Event</div>
					<div>Date</div>
					<div>Time</div>
					<div>Venue</div>
				</div>
				{schedule.map((item, index) => (
					<div key={index} className="schedule-item">
						<div>{item.title}</div>
						<div>{item.date}</div>
						<div>{item.time}</div>
						<div>{item.venue}</div>
					</div>
				))}
			</div>
		</>
	);
};

export default Schedule;
