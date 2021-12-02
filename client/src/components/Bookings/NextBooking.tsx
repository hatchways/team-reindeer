import { useState, useEffect } from 'react';
import BookingCard from './BookingCard';
import { Booking } from '../../interface/Booking';
import { useRequest } from '../../context/useBookingContext';

const NextBooking = (): JSX.Element => {
  const [booking, setBooking] = useState<Booking | undefined>();
  const request = useRequest();

  useEffect(() => {
    if (request.bookings) {
      setBooking(request.bookings.find((booking) => booking.start.getTime() > Date.now()));
    }
  });

  console.log(booking);

  //   finding the next booking
  return <BookingCard bookingType="next" start={booking.start} />;
};

export default NextBooking;
