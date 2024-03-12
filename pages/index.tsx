import { get } from 'http'
import { getAllEvents } from '../dummy-date'
import EventList from '../components/events/eventList'
import Event from '../data-model/EventInt'

export default function HomePage() {
  const featuredEvents: Event[] = getAllEvents()
  return (
    <main>
      <h1>Home Page</h1>
      <EventList items={featuredEvents} />
    </main>
  )
}
