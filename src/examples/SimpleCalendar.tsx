import Calendar from "../components/Calendar";
import useCalendar from "../context/context";

const SimpleCalendar = () => {
  const { selectedDay } = useCalendar();
  // This is an example where you can use <Calendar /> to show something based on the picked date
  // This could work to fire a Modal that displays the date or shows all events from a specific date
  // You can fancy as you want you are not forced to follow this up 100% maybe you can make more complex things
  return (
    <div>
      <Calendar />
      <h1>If the day is today on any month, say hi: </h1>
      <p>{selectedDay?.getDate() === new Date().getDate() ? "Hi! you picked the right date!" : "Incorrect date"}</p>
    </div>
  )
}

export default SimpleCalendar