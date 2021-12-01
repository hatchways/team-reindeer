import { useContext, createContext, FunctionComponent, useState, useEffect } from 'react';
import { Booking } from '../interface/Booking';

const bookingsList = [
  {
    sitterName: 'John',
    start: '2021-12-04',
    end: '2021-12-04',
    status: 'accepted',
  },
  {
    sitterName: 'John',
    start: '2021-12-06',
    end: '2021-12-06',
    status: 'accepted',
  },
  {
    sitterName: 'John',
    start: '2021-12-08',
    end: '2021-12-08',
    status: 'accepted',
  },
];

interface IBookingContext {
  bookings: Booking[];
}

export const BookingContext = createContext<IBookingContext>({
  bookings: bookingsList,
});

export const BookingProvider: FunctionComponent = ({ children }): JSX.Element => {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    setBookings(bookingsList);
  }, [bookings]);

  return <BookingContext.Provider value={{ bookings }}>{children}</BookingContext.Provider>;
};

export function useRequest(): IBookingContext {
  return useContext(BookingContext);
}
