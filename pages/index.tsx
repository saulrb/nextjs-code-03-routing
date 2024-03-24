import Head from 'next/head'

import { getFeaturedEvents } from '../helpers/api-util'
import EventList from '../components/events/eventList'

export default function HomePage(props: any) {
  return (
    <div>
      <Head>
        <title> Events application</title>
        <meta name="description" content="Showing the best events for networking " />
      </Head>
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
