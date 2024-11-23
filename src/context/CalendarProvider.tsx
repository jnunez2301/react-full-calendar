import { createContext, useState, ReactNode } from "react";

interface CalendarContextType {
  selectedDay: Date | null;
  selectDay: (currentDay: Date) => void;
  clearSelectedDay: () => void;
}

const CalendarContext = createContext<CalendarContextType | undefined>(undefined);

export const CalendarProvider = ({ children }: { children: ReactNode }) => {
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

export type { CalendarContextType };
export default CalendarContext;