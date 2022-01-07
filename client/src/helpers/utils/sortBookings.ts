import { mockBookingData } from '../../pages/Bookings/mockBookingData';

const sortedBookings = mockBookingData.sort((a, b) => a.start.getTime() - b.start.getTime());

export default sortedBookings;
