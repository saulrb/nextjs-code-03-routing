import React, { FC } from 'react'
import Link from 'next/link'
import classes from './button.module.css'

type Props = {
  link?: string
  children: React.ReactNode
  onClick?: any
}

const Button: FC<Props> = ({ link, children, onClick }) => {
  if (link) {
    return (
      <>
        <Link className={classes.btn} href={link}>
          {children}
        </Link>
      </>
    )
  }

  return (
    <button className={classes.btn} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
