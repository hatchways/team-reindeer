import { useContext, createContext, FunctionComponent, useState, useEffect } from 'react';
import { BookingApiData } from '../interface/Booking';
import { fetchBookings, updateBooking } from '../helpers/APICalls/booking';
import { useSnackBar } from './useSnackbarContext';

interface BookingContext {
  bookings: BookingApiData['success'];
  updateBookings: (bookingStatus: string, requestId: string) => void;
}

export const BookingContext = createContext<BookingContext>({
  bookings: [],
  updateBookings: () => null,
});

export const BookingProvider: FunctionComponent = ({ children }): JSX.Element => {
  const [bookings, setBookings] = useState<BookingApiData['success']>([]);
  const { updateSnackBarMessage } = useSnackBar();

  useEffect(() => {
    const checkFetchBookings = async () => {
      await fetchBookings()
        .then((data) => {
          if (data.success) {
            setBookings(data.success);
          }
        })
        .catch((e) => {
          updateSnackBarMessage(e.message);
        });
    };
    checkFetchBookings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setBookings]);

  const updateBookings = async (bookingStatus: string, requestId: string) => {
    await updateBooking(bookingStatus, requestId)
      .then((data) => {
        if (data.success) {
          setBookings(data.success);
        }
        if (data.error) {
          updateSnackBarMessage('Unable to connect to server. Please try again');
          throw new Error(data.error.message);
        }
      })
      .catch((e) => {
        updateSnackBarMessage(e.message);
      });
  };
  return <BookingContext.Provider value={{ bookings, updateBookings }}>{children}</BookingContext.Provider>;
};

export function useRequest(): BookingContext {
  return useContext(BookingContext);
}
