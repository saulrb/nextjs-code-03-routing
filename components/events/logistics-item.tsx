import React, { FC, ReactElement } from 'react'

import classes from './logistics-item.module.css'

type Props = {
  icon: any
  children: ReactElement
}
const LogisticsItem: FC<Props> = ({ icon: Icon, children }) => {
  return (
    <li className={classes.item}>
      <span className={classes.icon}>
        <Icon />
      </span>
      <span className={classes.content}>{children}</span>
    </li>
  )
}

export default LogisticsItem
