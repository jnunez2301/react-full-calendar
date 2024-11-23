import { useState } from "react";
import "./calendar.style.css";
import useCalendar from "../context/context";


interface CalendarProps {
  hideTitle?: boolean;
  datesData?: Date[];
}
/**
 * @param hideTitle - Hide the middle title in case you don't want it
 * @param datesData - Calendar accepts an array of dates to display selected days in the calendar, this can be useful if you are planning to load events and then firing a modal for example
 * @example
 * const date1 = new Date();
 * const date2 = new Date();
 * date2.setDate(date2.getDate() +1)
 * <Calendar
 *  hideTitle={true}
 *  datesData=[date1, date2]
 * />
 *  */
const Calendar = ({ hideTitle = false, datesData }: CalendarProps) => {
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [month, setMonth] = useState<number>(new Date().getMonth());
  const daysInMonth = (year: number, month: number) =>
    new Date(year, month + 1, 0).getDate();
  const startDayOfMonth = new Date(year, month, 1).getDay();
  const { selectDay, selectedDay } = useCalendar();
  const generateCalendar = () => {
    const totalDays = daysInMonth(year, month);
    const daysArray = [];
    const totalSlots = 28;

    const isDateSelected = (date: Date): boolean => {
      return (
        datesData?.some(
          (d) =>
            new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime() ===
            date.getTime()
        ) || false
      );
    };

    for (let i = 0; i < startDayOfMonth; i++) {
      daysArray.push(<div key={`empty-${i}`} className="empty-slot"></div>);
    }

    for (let day = 1; day <= totalDays; day++) {
      const currentDay = new Date(year, month, day);
      const isSelected =
        selectedDay && selectedDay.getTime() === currentDay.getTime();
      const isHighlighted = isDateSelected(currentDay);

      daysArray.push(
        <div
          key={day}
          className={`cell ${isSelected ? "selected" : ""} ${
            isHighlighted ? "highlighted" : ""
          }`}
          onClick={() => selectDay(currentDay)}
        >
          {day}
        </div>
      );
    }

    while (daysArray.length < totalSlots) {
      daysArray.push(
        <div
          key={`empty-after-${daysArray.length}`}
          className="empty-slot"
        ></div>
      );
    }

    return daysArray;
  };

  const handlePrevMonth = () => {
    setMonth((prev) => (prev === 0 ? 11 : prev - 1));
    if (month === 0) setYear((prev) => prev - 1);
  };

  const handleNextMonth = () => {
    setMonth((prev) => (prev === 11 ? 0 : prev + 1));
    if (month === 11) setYear((prev) => prev + 1);
  };
  const weekDayBackgroundColor = "#2517a1";
  return (
    <div className="calendar-container">
      <div className="header">
        <button className="calendar-month-btn" onClick={handlePrevMonth}>
          Prev
        </button>
        <h2 className="current-month-year">
          {hideTitle ? "" : `${year} - ${month + 1}`}
        </h2>
        <button className="calendar-month-btn" onClick={handleNextMonth}>
          Next
        </button>
      </div>

      <div className="calendar-grid">
        <div
          className="weekday"
          style={{ backgroundColor: weekDayBackgroundColor }}
        >
          Sun
        </div>
        <div
          className="weekday"
          style={{ backgroundColor: weekDayBackgroundColor }}
        >
          Mon
        </div>
        <div
          className="weekday"
          style={{ backgroundColor: weekDayBackgroundColor }}
        >
          Tue
        </div>
        <div
          className="weekday"
          style={{ backgroundColor: weekDayBackgroundColor }}
        >
          Wed
        </div>
        <div
          className="weekday"
          style={{ backgroundColor: weekDayBackgroundColor }}
        >
          Thu
        </div>
        <div
          className="weekday"
          style={{ backgroundColor: weekDayBackgroundColor }}
        >
          Fri
        </div>
        <div
          className="weekday"
          style={{ backgroundColor: weekDayBackgroundColor }}
        >
          Sat
        </div>

        {generateCalendar()}
      </div>
    </div>
  );
};

export default Calendar;
