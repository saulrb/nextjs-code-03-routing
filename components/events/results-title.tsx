import React, { FC } from 'react'
import Button from '../ui/button'
import classes from './results-title.module.css'

type Props = {
  date: Date
}

const ResultsTitle: FC<Props> = ({ date }) => {
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric'
  })

  return (
    <section className={classes.title}>
      <h1>Events in {humanReadableDate}</h1>
      <Button link="/events"> Show All Events</Button>
    </section>
  )
}

export default ResultsTitle
