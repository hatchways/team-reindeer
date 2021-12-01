export interface Booking {
  userId?: string;
  sitterName: string;
  start: string;
  end: string;
  status: string;
}

export interface getBookings {
  bookings?: Booking[];
}
