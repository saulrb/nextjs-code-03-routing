import { Fragment, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import Head from 'next/head'

import { getFilteredEvents } from '../../helpers/api-util'
import EventList from '~/events/eventList'
import ResultsTitle from '~/events/results-title'
import Button from '~/ui/button'
import ErrorAlert from '~/ui/error-alert'

const FilteredEventsPage = () => {
  const [loadedEvents, setLoadedEvents] = useState<any[]>()

  const router = useRouter()
  const filterData = router.query.slug

  const { data, error } = useSWR(
    'https://next-js-course-14ac5-default-rtdb.firebaseio.com/events.json',
    url => fetch(url).then(res => res.json())
  )

  useEffect(() => {
    if (data) {
      const events = []

      for (const key in data) {
        events.push({
          id: key,
          ...data[key]
        })
      }

      setLoadedEvents(events)
    }
  }, [data])

  if (!loadedEvents) {
    return <p className="center">Loading...</p>
  }

  if (!filterData) {
    return <p className="center">Page not found...</p>
  }

  const filteredYaer = filterData[0]
  const filteredMonth = filterData[1]
  const numYear = +filteredYaer
  const numMonth = +filteredMonth

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <Fragment>
        <div className="center">
          <ErrorAlert>
            <p> Invalid filter. Please Adjust your values </p>
          </ErrorAlert>
          <Button link="/events"> Show All Events</Button>
        </div>
      </Fragment>
    )
  }

  const filteredEvents = loadedEvents.filter(event => {
    const eventDate = new Date(event.date)
    return eventDate.getFullYear() === numYear && eventDate.getMonth() === numMonth - 1
  })

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <div className="center">
          <ErrorAlert>
            <p> No events found for the chosen filter!</p>
          </ErrorAlert>
          <Button link="/events"> Show All Events</Button>
        </div>
      </Fragment>
    )
  }

  const date = new Date(numYear, numMonth - 1)

  return (
    <Fragment>
      <Head>
        <title>Filtered Events</title>
        <meta name="description" content={`All events for ${numMonth}/${numYear}`} />
      </Head>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  )
}

// export async function getServerSideProps(context) {
//   const { params } = context;

//   const filterData = params.slug;

//   const filteredYear = filterData[0];
//   const filteredMonth = filterData[1];

//   const numYear = +filteredYear;
//   const numMonth = +filteredMonth;

//   if (
//     isNaN(numYear) ||
//     isNaN(numMonth) ||
//     numYear > 2030 ||
//     numYear < 2021 ||
//     numMonth < 1 ||
//     numMonth > 12
//   ) {
//     return {
//       props: { hasError: true },
//       // notFound: true,
//       // redirect: {
//       //   destination: '/error'
//       // }
//     };
//   }

//   const filteredEvents = await getFilteredEvents({
//     year: numYear,
//     month: numMonth,
//   });

//   return {
//     props: {
//       events: filteredEvents,
//       date: {
//         year: numYear,
//         month: numMonth,
//       },
//     },
//   };

export default FilteredEventsPage
