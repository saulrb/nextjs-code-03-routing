import React, { FC, ReactElement } from 'react'

import classes from './error-alert.module.css'

type Props = {
  children: ReactElement
}
const ErrorAlert: FC<Props> = ({ children }) => {
  return <div className={classes.alert}>{children}</div>
}

export default ErrorAlert
