import React, { FC } from 'react'
import Event from '../../data-model/EventInt'

import AddressIcon from '../icons/address-icon'
import DateIcon from '../icons/date-icon'
import LogisticsItem from './logistics-item'
import classes from './event-logistics.module.css'

type Props = {
  data: Event
}

const EventLogistics: FC<Props> = ({ data }) => {
  const humanReadableDate = new Date(data.date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
  const addressText = data.location.replace(', ', '\n')

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <img src={`/${data.image}`} alt={data.title} />
      </div>
      <ul className={classes.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  )
}

export default EventLogistics
