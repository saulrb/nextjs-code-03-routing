import React, { FC, useRef, useState } from 'react'
import Button from '~/ui/button'
import classes from './events-search.module.css'

type Props = {
  onSearch: any
}

const EventsSearch: FC<Props> = ({ onSearch }) => {
  const monthRef = useRef(null)
  const yearRef = useRef(null)
  const [selectedMonth, setSelectedMonth] = useState('')
  const [selectedYear, setSelectedYear] = useState('')

  const submitHandler = (event: any) => {
    event.preventDefault()
    onSearch(yearRef.current.value, monthRef.current.value)
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select name="yearSelected" id="year" ref={yearRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select name="monthSelected" id="month" ref={monthRef}>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <Button>Find event</Button>
    </form>
  )
}

export default EventsSearch
