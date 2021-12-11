import { FetchOptions } from '../../interface/FetchOptions';
import { Booking } from '../../interface/Booking';

export const fetchBookings = async (): Promise<Booking[]> => {
  const fetchOptions: FetchOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  };
  return await fetch(`/request`, fetchOptions)
    .then((res) => res.json())
    .then((data) => {
      const bookingList = data.success.requests;
      return bookingList;
    })
    .catch(() => {
      error: {
        message: 'Unable to connect to server. Please try again';
      }
    });
};

export const updateBooking = async (bookingStatus: string, requestId: string): Promise<Booking[]> => {
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
    .then((data) => {
      const updatedBookingList = data.success.requests;
      return updatedBookingList;
    })
    .catch(() => {
      error: {
        message: 'Unable to connect to server. Please try again';
      }
    });
};
