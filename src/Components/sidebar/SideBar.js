// Utils
import { time } from "../../utils/time"

// Styles
import "./styles.css"

export default function SideBar({ name, timePurchased, expectedTime }) {
  const timeToComplete = expectedTime ? 
    expectedTime
    :
    time(timePurchased + (1000 * 60 * 3))

  console.log(timeToComplete)



  return (
    <section className="sidebar">
      <div className='time'>{timeToComplete.hours}:{timeToComplete.minutes} {timeToComplete.AMPM}</div>
      <div className="order active">{name}</div>
    </section>
  )
}
