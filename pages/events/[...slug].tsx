import { Fragment } from 'react'
import { useRouter } from 'next/router'
import EventList from '~/events/eventList'
import ResultsTitle from '~/events/results-title'
import Button from '~/ui/button'
import ErrorAlert from '~/ui/error-alert'

import { getFilteredEvents } from '../../dummy-date'

const FilteredEventsPage = () => {
  const router = useRouter()
  const filterData = router.query.slug
  console.log('Filtered data:', filterData)

  if (!filterData) {
    return <p className="center">Loading...</p>
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
  console.log('Year:', numYear, ' Month:', numMonth)
  const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth })
  const date = new Date(numYear, numMonth - 1)
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
  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  )
}

export default FilteredEventsPage
