import { createSignal, For } from 'solid-js';

import { EventsData } from '../data/events';

import './Events.css';

export default function Events() {
  const [upcomingEvents, setUpcomingEvents] = createSignal(
    EventsData.filter((event) => event.past === false)
  );

  const [pastEvents, setPastEvents] = createSignal(
    EventsData.filter((event) => event.past === true)
  );

  console.log(pastEvents());
  console.log(upcomingEvents());

  return (
    <div class='Events'>
      <h3>Upcoming Events</h3>
      <For each={upcomingEvents()}>
        {(event, i) => (
          <div class='event'>
            <img src={event.image} alt='' class='event-image' />
            <p class='event-detail'>
              {event.title}, {event.label}, {event.date}
            </p>
          </div>
        )}
      </For>

      <h3>Past Events</h3>
      <For each={pastEvents()}>
        {(event, i) => (
          <div class='event'>
            <img src={event.image} alt='' class='event-image' />
            <p class='event-detail'>
              {event.title}, {event.label}, {event.date}
            </p>
          </div>
        )}
      </For>
    </div>
  );
}
