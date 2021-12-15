import { FetchOptions } from '../../interface/FetchOptions';
import { BookingApiData } from '../../interface/Booking';

export const fetchBookings = async (): Promise<BookingApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  };
  return await fetch(`/request`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export const updateBooking = async (bookingStatus: string, requestId: string): Promise<BookingApiData> => {
  const fetchOptions: FetchOptions = {
    method: 'PATCH',
    body: JSON.stringify({
      status: bookingStatus,
    }),
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  };
  return await fetch(`/request/${requestId}`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};
