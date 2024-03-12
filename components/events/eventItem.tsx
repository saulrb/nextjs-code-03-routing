import React, { FC } from 'react'
import Image from 'next/image'
import Event from '../../data-model/EventInt'
import Button from '../ui/button'
import DateIcon from '../icons/date-icon'
import AddressIcon from '../icons/address-icon'
import ArrowRightIcon from '../icons/arrow-right-icon'

import classes from './eventItem.module.css'

type Props = {
  item: Event
}

const converDate = (date: string): string => {
  return new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}

const formatedAddress = (location: string): string => {
  return location.replace(', ', '\n')
}
const exploreLink = (id: string): string => {
  return `/events/${id}`
}
const EventItem: FC<Props> = ({ item }) => {
  return (
    <>
      <li className={classes.item}>
        <Image
          className={classes.image}
          src={`/${item.image}`}
          alt={`${item.title}`}
          width={100}
          height={100}
        />
        <div className={classes.content}>
          <div>
            <h2>{item.title}</h2>
          </div>
          <div className={classes.date}>
            <DateIcon />
            <time>{converDate(item.date)}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formatedAddress(item.location)}</address>
          </div>
          <div>
            <p>{item.description}</p>
          </div>
          <div className={classes.actions}>
            <Button link={exploreLink(item.id)}>
              <span>Exploring event</span>
              <span className={classes.icon}>
                <ArrowRightIcon />
              </span>
            </Button>
          </div>
        </div>
      </li>
    </>
  )
}

export default EventItem
