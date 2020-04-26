import React from 'react'

const Day = ({ day, info }: any) => {
  return (
    <div className="day">
      <h4 className="day__title">{day}</h4>
      <p className="day__info">{info}</p>
    </div>
  )
}

export default Day
