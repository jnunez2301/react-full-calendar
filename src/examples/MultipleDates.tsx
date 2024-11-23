import Calendar from "../Calendar";

const MultipleDates = () => {
  const date1 = new Date();
  const date2 = new Date();
  date2.setDate(date2.getDate() + 3);
  return <Calendar datesData={[date1, date2]} />;
};

export default MultipleDates;
