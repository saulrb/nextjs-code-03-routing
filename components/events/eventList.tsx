import React, { FC } from 'react'
import EventItem from './eventItem'
import Event from '../../data-model/EventInt'
import classes from './eventList.module.css'

type Props = {
  items: Event[]
}
const EventList: FC<Props> = ({ items }) => {
  return (
    <>
      <ul className={classes.list}>
        {items.map(event => (
          <EventItem item={event} />
        ))}
      </ul>
    </>
  )
}

export default EventList
