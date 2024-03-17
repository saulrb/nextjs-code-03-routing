import { useRouter } from 'next/router'
import { Fragment } from 'react'

import { getEventById } from '../../../dummy-date'
import EventSummary from '../../../components/events/event-summary'
import EventLogistics from '../../../components/events/event-logistics'
import EventContent from '../../../components/events/event-content'
import ErrorAlert from '~/ui/error-alert'

const EventDetailPage = () => {
  const router = useRouter()
  const eventId = router.query.id
  const eventData = getEventById(eventId)

  if (!eventData) {
    return (
      <ErrorAlert>
        <p>No event found!</p>
      </ErrorAlert>
    )
  }

  return (
    <Fragment>
      <EventSummary title={eventData.title} />
      <EventLogistics data={eventData} />
      <EventContent>
        <p>{eventData.description}</p>
      </EventContent>
    </Fragment>
  )
}

export default EventDetailPage
