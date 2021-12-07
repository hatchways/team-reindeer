export interface Booking {
  requestId: string;
  userId: string;
  sitterId: string;
  start: Date;
  end: Date;
  status: string;
}
