import { useContext, createContext, FunctionComponent, useState, useEffect } from 'react';
import { Booking } from '../interface/Booking';
import sortedBookings from '../helpers/utils/sortBookings';

interface BookingContext {
  bookings: Booking[];
}

export const BookingContext = createContext<BookingContext>({
  bookings: sortedBookings,
});

export const BookingProvider: FunctionComponent = ({ children }): JSX.Element => {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    setBookings(sortedBookings);
  }, []);

  return <BookingContext.Provider value={{ bookings }}>{children}</BookingContext.Provider>;
};

export function useRequest(): BookingContext {
  return useContext(BookingContext);
}
