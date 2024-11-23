import React, { createContext, useState } from "react";

interface CalendarContextType {
  selectedDay: Date | null;
  selectDay: (currentDay: Date) => void;
  clearSelectedDay: () => void;
}

const CalendarContext = createContext<CalendarContextType | null>(null);

export const CalendarProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedDay, setSelectedDay] = useState<Date | null>(null);

  function clearSelectedDay() {
    setSelectedDay(null);
  }

  function selectDay(currentDay: Date) {
    if (selectedDay && currentDay.getTime() === selectedDay.getTime()) {
      setSelectedDay(null);
    } else {
      setSelectedDay(currentDay);
    }
  }

  return (
    <CalendarContext.Provider value={{ selectedDay, selectDay, clearSelectedDay }}>
      {children}
    </CalendarContext.Provider>
  );
};

export default CalendarContext;
