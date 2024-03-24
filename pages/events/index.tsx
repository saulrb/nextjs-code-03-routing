import { useRouter } from 'next/router'
import { getAllEvents } from '../../helpers/api-util'
import EventList from '../../components/events/eventList'
import EventsSearch from '~/events/events-search'

const EventsPage = (props: any) => {
  const { events } = props
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

export async function getStaticProps() {
  const events = await getAllEvents()

  return {
    props: {
      events: events
    },
    revalidate: 60
  }
}
export default EventsPage
