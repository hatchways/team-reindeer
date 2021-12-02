import Booking from './Booking';
import { useRequest } from '../../context/useBookingContext';
import { booking } from '../../helpers/utils/sortBookings';

const NextBooking = (): JSX.Element => {
  //   const request = useRequest();
  //   finding the next booking
  //   console.log(booking);
  return <Booking bookingType="next" sitterName={booking.sitterName} start={booking.start} />;
};

export default NextBooking;
