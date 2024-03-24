import { getFeaturedEvents } from '../helpers/api-util'
import EventList from '../components/events/eventList'
import Event from '../data-model/EventInt'

export default function HomePage(props: any) {
  return (
    <div>
      <main>
        <EventList items={props.events} />
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents()

  return {
    props: {
      events: featuredEvents
    },
    revalidate: 1800
  }
}
