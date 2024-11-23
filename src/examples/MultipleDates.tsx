import Calendar from "../components/Calendar";

const MultipleDates = () => {
  const date1 = new Date();
  const date2 = new Date();
  date2.setDate(date2.getDate() + 3);
  return (
    <div>
      <Calendar datesData={[date1, date2]} />
    </div>
  );
};

export default MultipleDates;
