export type BookingStatus = "confirmed" | "pending" | "cancelled" | "refunded";

export interface Booking {
  id: string;
  customerName: string;
  email: string;
  tripId: string;
  tripTitle: string;
  travelDate: string;
  guests: number;
  amount: number;
  status: BookingStatus;
  createdAt: string;
}

export type TripStatus = "draft" | "published" | "sold_out" | "archived";

export interface Trip {
  id: string;
  title: string;
  tag: string;
  location: string;
  description: string;
  startDate: string;
  endDate: string;
  capacity: number;
  booked: number;
  price: number;
  status: TripStatus;
  image: string;
}

export interface TripInput {
  title: string;
  tag: string;
  location: string;
  description: string;
  startDate: string;
  endDate: string;
  capacity: number;
  price: number;
  status: TripStatus;
  image: string;
}

export interface WaitlistSignup {
  id: string;
  name: string;
  email: string;
  interest: string;
  signedUpAt: string;
}
