import { useRouter } from 'next/router'
import Head from 'next/head'
import { Fragment } from 'react'

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
    <Fragment>
      <Head>
        <title> Events application</title>
        <meta name="description" content="Showing the best events for networking " />
      </Head>
      <EventsSearch onSearch={findEventEventsHandler} />
      <EventList items={events} />
    </Fragment>
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
