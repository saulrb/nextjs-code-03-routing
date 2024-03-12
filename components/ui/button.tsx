import React, { FC } from 'react'
import Link from 'next/link'
import classes from './button.module.css'

type Props = {
  link: string
  children: React.ReactNode
}

const Button: FC<Props> = ({ link, children }) => {
  return (
    <>
      <Link className={classes.btn} href={link}>
        {children}
      </Link>
    </>
  )
}

export default Button
