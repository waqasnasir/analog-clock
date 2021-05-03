import React, { useState } from "react"
import { calculateAngle } from "./utils"
import "./home.css"

const Home = () => {
  const [hours, setHours] = useState("23")
  const [minutes, setMinutes] = useState("59")
  const [hourToMinute, setHourToMinute] = useState("")
  const [minuteToHour, setMinuteToHour] = useState("")

  const handleInputChange = (e) => {
    setHourToMinute("")
    setMinuteToHour("")
    const { value, name } = e.target
    let updatedValue = value
    // Always 2 digits pick last two digits
    if (value.length >= 2) updatedValue = value.slice(-2)
    // 0 on the left (doesn't work on FF)
    if (value.length === 1) updatedValue = `0${value}`
    // Avoiding letters on FF
    if (!value) updatedValue = "00"
    if (name === "minutes" && parseInt(updatedValue, 10) <= 59) {
      setMinutes(updatedValue)
    }
    if (name === "hours" && parseInt(updatedValue, 10) <= 23) {
      setHours(updatedValue)
    }
  }
  const handleCalculateAngle = () => {
    setHourToMinute("")
    setMinuteToHour("")
    // calculate angle for hours
    const hoursAngle = calculateAngle(
      parseInt(hours, 10),
      parseInt(minutes, 10)
    )
    setHourToMinute(hoursAngle)
    const minutesAngle = 360 - hoursAngle
    setMinuteToHour(minutesAngle)
  }

  return (
    <div className="homeContainer">
      <div className="card">
        <div className="cardTitle">Enter Time (24 hours)</div>
        <div className="cardBody">
          <div className="inputContainer">
            <input
              className="timeInput"
              type="number"
              name="hours"
              min="0"
              max="23"
              placeholder="23"
              value={hours}
              onChange={handleInputChange}
            />
            <span>:</span>
            <input
              className="timeInput"
              type="number"
              name="minutes"
              min="0"
              max="59"
              placeholder="00"
              value={minutes}
              onChange={handleInputChange}
            />
          </div>
          <div className="result">
            Angle from hours to minutes: {hourToMinute}
          </div>
          <div className="result">
            {" "}
            Angle from minutes to hours: {minuteToHour}
          </div>
        </div>

        <button
          type="submit"
          className="cardActionButton"
          onClick={handleCalculateAngle}
        >
          Calculate Angle
        </button>
      </div>
    </div>
  )
}

export default Home
