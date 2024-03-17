import React, { useEffect, useState } from 'react'
import EventCard from '../components/EventCard'
import { eventList } from '../api'
import { redirect } from 'react-router-dom'

function EventScreen() {
  const [events, setEvents] = useState([])

  useEffect(() => {
    const fetchEvents = async () => {
      const eventResponse = await eventList()
      if (eventResponse.error) {
        redirect('/error')
      }
      setEvents(eventResponse.data.events)
    }
    fetchEvents()
  }, [])

  return (
    <div className="container animate__animated animate__pulse" style={{ marginTop: 50, backgroundImage: 'linear-gradient(to bottom right, rgba(10,10,25,0.9), rgba(255, 255, 255, 0.143))', backdropFilter: "blur(10px)", boxShadow: "0 0 50px 15px #7E30E1", borderRadius: 15, padding: 50 }}>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {events.map((e) => (
          <EventCard key={e.key} title={e.title} description={e.description} img={e.img} url={e.url} />
        ))}
      </div>
    </div>
  )
}

export default EventScreen