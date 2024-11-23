import { useContext } from "react";
import CalendarContext from "./CalendarProvider";

const useCalendar = () => {
  const context = useContext(CalendarContext);
  if (!context) {
    throw new Error("useCalendarContext must be used within a CalendarProvider");
  }
  return context;
};

export default useCalendar;
