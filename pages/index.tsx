import { get } from 'http'
import { getFeaturedEvents } from '../dummy-date'
import EventList from '../components/events/eventList'
import Event from '../data-model/EventInt'

export default function HomePage() {
  const featuredEvents: Event[] = getFeaturedEvents()
  return (
    <div>
      <main>
        <EventList items={featuredEvents} />
      </main>
    </div>
  )
}
