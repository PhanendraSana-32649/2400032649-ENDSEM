import React from "react";

const EventCard = ({ event, onBook }) => {
  console.log("%cRendering EventCard", "color: blue; font-weight: bold;");

  return (
    <div style={{ border: "1px solid gray", padding: 15, margin: 10 }}>
      <h3>{event.name}</h3>
      <p>Date: {event.date}</p>
      <button onClick={() => onBook(event.id)}>Book Event</button>
    </div>
  );
};

export default EventCard;
