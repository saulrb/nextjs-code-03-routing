import { useRouter } from 'next/router'
import { getAllEvents } from '../../dummy-date'
import EventList from '../../components/events/eventList'
import EventsSearch from '~/events/events-search'

const EventsPage = () => {
  const events = getAllEvents()
  const router = useRouter()

  const findEventEventsHandler = (year: any, month: any) => {
    const fullpath = `/events/${year}/${month}`
    router.push(fullpath)
  }

  return (
    <main>
      <EventsSearch onSearch={findEventEventsHandler} />
      <EventList items={events} />
    </main>
  )
}

export default EventsPage
