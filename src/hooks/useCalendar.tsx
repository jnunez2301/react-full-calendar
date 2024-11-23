import { useState } from "react";

const useCalendar = () => {
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

  return {
    selectedDay,
    selectDay,
    clearSelectedDay,
  };
};

export default useCalendar;
