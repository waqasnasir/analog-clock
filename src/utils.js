// there are 360 degrees in a clock. and there are 12 hours in an analog clock.  degree for an hour can be calculated by following formula
// 360/12 => 30
export const DEGREE_PER_HOUR = 30

// as there are 60 minutes in an hour we will divide 60
// 360/60 => 6
export const DEGREE_PER_MINUTE = 6

export const calculateAngle = (hour, minutes) => {
  // if hours and minutes are valid
  if (hour >= 0 && hour <= 23 && minutes >= 0 && minutes <= 59) {
    // hour % 12 => converting 24 hours to 12 hours
    // 0.5 * minutes => as hour hand moves 0.5 degree every minutes
    const hoursAngle = DEGREE_PER_HOUR * (hour % 12) + 0.5 * minutes
    const minutesAngle = DEGREE_PER_MINUTE * minutes

    // if hours hand angle is less than calculate the absolute diff otherwise subtract hourangle from 360 and add minutes angle
    if (hoursAngle <= minutesAngle) {
      return Math.abs(hoursAngle - minutesAngle)
    }
    return 360 - hoursAngle + minutesAngle
  }
  return 0
}
