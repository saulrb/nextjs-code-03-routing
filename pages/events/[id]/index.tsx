import { Fragment } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { getEventById, getFeaturedEvents } from '../../../helpers/api-util'
import EventSummary from '../../../components/events/event-summary'
import EventLogistics from '../../../components/events/event-logistics'
import EventContent from '../../../components/events/event-content'
import ErrorAlert from '~/ui/error-alert'

const EventDetailPage = (props: any) => {
  const router = useRouter()

  const event = props.selectedEvent

  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found!</p>
      </ErrorAlert>
    )
  }

  return (
    <Fragment>
      <Head>
        <title> {event.title}</title>
        <meta name="description" content={event.description} />
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics data={event} />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  )
}

export async function getStaticProps(context: any) {
  const eventId = context.params.id

  const event = await getEventById(eventId)

  return {
    props: {
      selectedEvent: event
    },
    revalidate: 30
  }
}

export async function getStaticPaths() {
  const events = await getFeaturedEvents()
  const paths = events.map(event => ({ params: { id: event.id } }))

  return {
    paths: paths,
    fallback: 'blocking'
  }
}
export default EventDetailPage
