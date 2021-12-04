import { useRequest } from '../../context/useBookingContext';
import { Calendar } from 'react-multi-date-picker';
import 'react-multi-date-picker/styles/colors/red.css';

const Calender = (): JSX.Element => {
  const { bookings } = useRequest();
  const bookedDates = bookings.map((booking) => booking.start);
  return <Calendar className="red" minDate={Date.now()} value={bookedDates} />;
};

export default Calender;
