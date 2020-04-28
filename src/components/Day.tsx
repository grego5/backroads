import React, { useState } from 'react'
import { FaAngleDown } from 'react-icons/fa'

const Day = ({ day, info }: any) => {
  const [showInfo, setInfo] = useState(false)
  const toggleInfo = () => {
    setInfo(showInfo => !showInfo)
  }

  return (
    <div className="day">
      <h4 className="day__title" onClick={toggleInfo}>
        {day}
        <button className={`day__btn${showInfo ? ' day__btn--open' : ''}`}>
          <FaAngleDown></FaAngleDown>
        </button>
      </h4>
      <p className={`day__info${showInfo ? ' day__info--open' : ''}`}>{info}</p>
    </div>
  )
}

export default Day
