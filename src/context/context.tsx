import { useContext } from "react";
import CalendarContext, { CalendarContextType } from "./CalendarProvider";

const useCalendar = (): CalendarContextType => {
  const context = useContext(CalendarContext);
  if (!context) {
    throw new Error("useCalendar must be used within a CalendarProvider");
  }
  return context;
};

export default useCalendar;
