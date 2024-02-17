import React, { useState, useEffect } from 'react';
import './Schedule.css';

const Schedule = () => {
    const [scheduleData, setScheduleData] = useState([]);

    useEffect(() => {
        const fetchScheduleData = async () => {
            try {
                const response = await fetch('http://localhost:3501/workshops');
                const data = await response.json();
                setScheduleData(data);
            } catch (error) {
                console.error('Failed to fetch schedule data:', error);
            }
        };

        fetchScheduleData();
    }, []);

    return (
        <>
            <div className="schedule-container">
                <h1 style={{fontWeight:"bolder",fontSize:50}}>SCHEDULE</h1>
                <div className="schedule-header">
                    <div>Date</div>
                    <div>Event</div>
                    <div>Time</div>
                    <div>Venue</div>
                </div>
                {scheduleData.map((item, index) => (
                    <div key={index} className="schedule-item">
                        <div>{item.date}</div>
                        <div>{item.speaker}</div>
                        <div>{item.time}</div>
                        <div>{item.venue}</div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Schedule;