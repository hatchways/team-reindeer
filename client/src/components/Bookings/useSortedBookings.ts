import { useRequest } from '../../context/useBookingContext';
import { Booking, BookingApiData } from '../../interface/Booking';

const useSortedBookings = (): BookingApiData['success'] => {
  const { bookings } = useRequest();
  const sortedBookings =
    bookings &&
    bookings.sort((a: Booking, b: Booking) => {
      return new Date(a.duration.start).getTime() - new Date(b.duration.start).getTime();
    });
  return sortedBookings;
};

export default useSortedBookings;
