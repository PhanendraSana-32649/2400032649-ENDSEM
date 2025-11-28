import React, { useState, useCallback } from "react";
import EventCard from "../components/EventCard";

const EventBooking = () => {
  const [events] = useState([
    { id: 1, name: "Tech Conference", date: "2025-12-05" },
    { id: 2, name: "AI Workshop", date: "2025-12-10" },
    { id: 3, name: "Startup Pitch Fest", date: "2025-12-20" },
  ]);

  const [booked, setBooked] = useState([]);

  const handleBookEvent = useCallback((eventID) => {
    console.time("Booking Performance");

    setBooked((prev) => [...prev, eventID]);
    console.log("Booked Event ID:", eventID);

    console.timeEnd("Booking Performance");
  }, []);

  return (
    <div>
      <h2>Available Events</h2>

      {events.map((event) => (
        <EventCard key={event.id} event={event} onBook={handleBookEvent} />
      ))}

      <h2>Booked Events</h2>
      <ul>
        {booked.map((id) => (
          <li key={id}>Event ID {id} booked ✔</li>
        ))}
      </ul>
    </div>
  );
};

export default EventBooking;
