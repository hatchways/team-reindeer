import { bookingsList } from '../../mocks/bookingsList';

const sortedBookings = bookingsList.sort((a, b) => Date.parse(a.start) - Date.parse(b.start));
export const booking = sortedBookings.find((booking) => Date.parse(booking.start) > Date.now());

export default sortedBookings;
