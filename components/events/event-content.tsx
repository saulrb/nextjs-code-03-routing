import React, { FC, ReactNode } from 'react'

import classes from './event-content.module.css'

type Props = {
  children: ReactNode
}

const EventContent: FC<Props> = ({ children }) => {
  return (
    <>
      <section className={classes.content}>{children}</section>
    </>
  )
}

export default EventContent
