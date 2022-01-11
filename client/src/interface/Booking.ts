export interface Booking {
  _id: string;
  owner: { username: string; email: string; _id: string };
  sitter: { username: string; email: string; _id: string };
  duration: {
    _id?: string;
    start: Date;
    end: Date;
  };
  totalCost?: number;
  completed?: boolean;
  paid?: boolean;
  status: string;
}

export interface BookingApiData {
  error?: { message: string };
  success?: Booking[];
}
