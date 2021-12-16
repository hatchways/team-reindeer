import { useRequest } from '../../context/useBookingContext';
import { Calendar } from 'react-multi-date-picker';
import 'react-multi-date-picker/styles/colors/red.css';
import { Booking } from '../../interface/Booking';

const BookingCalendar = (): JSX.Element => {
  const { bookings } = useRequest();
  const bookedDates = bookings && bookings.map((booking: Booking) => booking.duration.start);
  return <Calendar readOnly className="red" minDate={Date.now()} value={bookedDates} />;
};

export default BookingCalendar;
