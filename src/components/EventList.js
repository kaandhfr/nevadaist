import EventCard from "./EventCard";

const EventList = ({ events }) => {
  return (
    <div className="event-list grid grid-cols-12 gap-6">
      {events.map((event) => (
        <div className="col-span-12 md:col-span-6 lg:col-span-4" key={event.userId}>
          <EventCard event={event} />
        </div>
      ))}
    </div>
  );
};

export default EventList;
