import { useContext, createContext, FunctionComponent, useState, useEffect } from 'react';
import { Booking } from '../interface/Booking';
import { fetchBookings, updateBooking } from '../helpers/APICalls/booking';

interface IBookingContext {
  bookings: Booking[];
  updateBookings: (bookingStatus: string, requestId: string) => void;
}

export const BookingContext = createContext<IBookingContext>({
  bookings: [],
  updateBookings: () => null,
});

export const BookingProvider: FunctionComponent = ({ children }): JSX.Element => {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    const checkFetchBookings = async () => {
      await fetchBookings().then((data) => {
        setBookings(data);
      });
    };
    checkFetchBookings();
  }, [setBookings]);

  const updateBookings = async (bookingStatus: string, requestId: string) => {
    const updated = await updateBooking(bookingStatus, requestId);
    setBookings(updated);
  };

  return <BookingContext.Provider value={{ bookings, updateBookings }}>{children}</BookingContext.Provider>;
};

export function useRequest(): IBookingContext {
  return useContext(BookingContext);
}
