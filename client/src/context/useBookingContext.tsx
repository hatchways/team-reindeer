import { useContext, createContext, FunctionComponent, useState, useEffect } from 'react';
import { Booking } from '../interface/Booking';
import sortedBookings from '../helpers/utils/sortBookings';

interface BookingContext {
  bookings: Booking[];
}

export const BookingContext = createContext<IBookingContext>({
  bookings: sortedBookings,
});

export const BookingProvider: FunctionComponent = ({ children }): JSX.Element => {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    setBookings(sortedBookings);
  }, []);

  return <BookingContext.Provider value={{ bookings }}>{children}</BookingContext.Provider>;
};

export function useRequest(): IBookingContext {
  return useContext(BookingContext);
}
