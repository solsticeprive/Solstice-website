import type { Booking, BookingStatus, Trip, TripInput, WaitlistSignup } from "./types";

// Mock data store. Swap these accessors for real API/database calls later —
// the function signatures are already async so call sites won't need to change.

const trips: Trip[] = [
  {
    id: "trip-1",
    title: "Passport to Detty",
    tag: "Nigeria & Ghana",
    location: "Lagos & Accra",
    description:
      "Celebrate culture, music, food, and nightlife during the most exciting season in West Africa.",
    startDate: "2026-12-18",
    endDate: "2026-12-28",
    capacity: 40,
    booked: 34,
    price: 4200,
    status: "published",
    image: "https://images.unsplash.com/photo-1660675133902-acd1b057f75d?w=900&q=80",
  },
  {
    id: "trip-2",
    title: "Second Chapter Society",
    tag: "Singles 40+",
    location: "Lisbon, Portugal",
    description:
      "For accomplished men and women ready to meet, travel, connect, and create new possibilities.",
    startDate: "2026-09-10",
    endDate: "2026-09-17",
    capacity: 24,
    booked: 18,
    price: 3600,
    status: "published",
    image: "https://images.unsplash.com/photo-1645518044910-8223215a9909?w=900&q=80",
  },
  {
    id: "trip-3",
    title: "Velvet Vows Retreat",
    tag: "Couples Escapes",
    location: "Santorini, Greece",
    description: "Luxury retreats for couples who want to reconnect, recharge, and rediscover each other.",
    startDate: "2026-10-05",
    endDate: "2026-10-12",
    capacity: 20,
    booked: 20,
    price: 5200,
    status: "sold_out",
    image: "https://images.unsplash.com/photo-1496602910407-bacda74a0fe4?w=900&q=80",
  },
  {
    id: "trip-4",
    title: "Golden Horizons Club",
    tag: "Active Retirees",
    location: "Kyoto, Japan",
    description:
      "Because retirement is not the end of the adventure. It's the beginning of your next chapter.",
    startDate: "2027-01-14",
    endDate: "2027-01-24",
    capacity: 30,
    booked: 0,
    price: 3100,
    status: "draft",
    image: "https://images.unsplash.com/photo-1748969721837-2b290323022b?w=900&q=80",
  },
  {
    id: "trip-5",
    title: "Renew You Journey",
    tag: "Medical & Wellness",
    location: "Bali, Indonesia",
    description: "World-class healthcare, wellness experiences, and recovery retreats in select destinations.",
    startDate: "2026-08-03",
    endDate: "2026-08-10",
    capacity: 16,
    booked: 9,
    price: 6800,
    status: "published",
    image: "https://images.unsplash.com/photo-1630595271375-5073a6c0638b?w=900&q=80",
  },
  {
    id: "trip-6",
    title: "Black Excellence Experiences",
    tag: "Leaders & Founders",
    location: "Dubai, UAE",
    description: "Curated luxury travel celebrating culture, achievement, networking, and legacy.",
    startDate: "2026-11-12",
    endDate: "2026-11-18",
    capacity: 35,
    booked: 31,
    price: 4900,
    status: "published",
    image: "https://images.unsplash.com/photo-1573164574511-73c773193279?w=900&q=80",
  },
  {
    id: "trip-7",
    title: "Passport & Prosecco",
    tag: "Women's Getaways",
    location: "Cartagena, Colombia",
    description:
      "Travel, laughter, friendship, and unforgettable experiences with women ready to live boldly.",
    startDate: "2026-03-06",
    endDate: "2026-03-13",
    capacity: 28,
    booked: 28,
    price: 3400,
    status: "archived",
    image: "https://images.unsplash.com/photo-1649019182102-dea1e156d94f?w=900&q=80",
  },
];

const bookings: Booking[] = [
  { id: "bk-1001", customerName: "Amara Okafor", email: "amara.okafor@example.com", tripId: "trip-1", tripTitle: "Passport to Detty", travelDate: "2026-12-18", guests: 2, amount: 8400, status: "confirmed", createdAt: "2026-06-02" },
  { id: "bk-1002", customerName: "Derek Simmons", email: "derek.simmons@example.com", tripId: "trip-3", tripTitle: "Velvet Vows Retreat", travelDate: "2026-10-05", guests: 2, amount: 10400, status: "confirmed", createdAt: "2026-05-28" },
  { id: "bk-1003", customerName: "Funmi Adeyemi", email: "funmi.adeyemi@example.com", tripId: "trip-6", tripTitle: "Black Excellence Experiences", travelDate: "2026-11-12", guests: 1, amount: 4900, status: "confirmed", createdAt: "2026-06-10" },
  { id: "bk-1004", customerName: "Priya Nair", email: "priya.nair@example.com", tripId: "trip-5", tripTitle: "Renew You Journey", travelDate: "2026-08-03", guests: 1, amount: 6800, status: "pending", createdAt: "2026-06-18" },
  { id: "bk-1005", customerName: "Marcus Bell", email: "marcus.bell@example.com", tripId: "trip-2", tripTitle: "Second Chapter Society", travelDate: "2026-09-10", guests: 1, amount: 3600, status: "confirmed", createdAt: "2026-05-15" },
  { id: "bk-1006", customerName: "Chiamaka Eze", email: "chiamaka.eze@example.com", tripId: "trip-1", tripTitle: "Passport to Detty", travelDate: "2026-12-18", guests: 4, amount: 16800, status: "confirmed", createdAt: "2026-06-05" },
  { id: "bk-1007", customerName: "Olivia Bennett", email: "olivia.bennett@example.com", tripId: "trip-7", tripTitle: "Passport & Prosecco", travelDate: "2026-03-06", guests: 3, amount: 10200, status: "refunded", createdAt: "2026-02-20" },
  { id: "bk-1008", customerName: "Tariq Hassan", email: "tariq.hassan@example.com", tripId: "trip-6", tripTitle: "Black Excellence Experiences", travelDate: "2026-11-12", guests: 2, amount: 9800, status: "pending", createdAt: "2026-06-20" },
  { id: "bk-1009", customerName: "Grace Mensah", email: "grace.mensah@example.com", tripId: "trip-2", tripTitle: "Second Chapter Society", travelDate: "2026-09-10", guests: 1, amount: 3600, status: "cancelled", createdAt: "2026-05-30" },
  { id: "bk-1010", customerName: "Jasmine Carter", email: "jasmine.carter@example.com", tripId: "trip-3", tripTitle: "Velvet Vows Retreat", travelDate: "2026-10-05", guests: 2, amount: 10400, status: "confirmed", createdAt: "2026-04-22" },
  { id: "bk-1011", customerName: "Kwame Boateng", email: "kwame.boateng@example.com", tripId: "trip-1", tripTitle: "Passport to Detty", travelDate: "2026-12-18", guests: 2, amount: 8400, status: "confirmed", createdAt: "2026-06-12" },
  { id: "bk-1012", customerName: "Nia Thompson", email: "nia.thompson@example.com", tripId: "trip-5", tripTitle: "Renew You Journey", travelDate: "2026-08-03", guests: 1, amount: 6800, status: "confirmed", createdAt: "2026-06-08" },
  { id: "bk-1013", customerName: "Victor Adesina", email: "victor.adesina@example.com", tripId: "trip-6", tripTitle: "Black Excellence Experiences", travelDate: "2026-11-12", guests: 1, amount: 4900, status: "confirmed", createdAt: "2026-06-14" },
  { id: "bk-1014", customerName: "Sophie Laurent", email: "sophie.laurent@example.com", tripId: "trip-7", tripTitle: "Passport & Prosecco", travelDate: "2026-03-06", guests: 2, amount: 6800, status: "confirmed", createdAt: "2026-02-10" },
  { id: "bk-1015", customerName: "Daniel Osei", email: "daniel.osei@example.com", tripId: "trip-2", tripTitle: "Second Chapter Society", travelDate: "2026-09-10", guests: 1, amount: 3600, status: "pending", createdAt: "2026-06-21" },
  { id: "bk-1016", customerName: "Imani Walker", email: "imani.walker@example.com", tripId: "trip-3", tripTitle: "Velvet Vows Retreat", travelDate: "2026-10-05", guests: 2, amount: 10400, status: "cancelled", createdAt: "2026-05-02" },
];

export async function getTrips(): Promise<Trip[]> {
  return trips;
}

export async function getTripById(id: string): Promise<Trip | undefined> {
  return trips.find((trip) => trip.id === id);
}

export async function createTrip(input: TripInput): Promise<Trip> {
  const trip: Trip = { ...input, id: `trip-${trips.length + 1}`, booked: 0 };
  trips.push(trip);
  return trip;
}

export async function updateTrip(id: string, input: TripInput): Promise<Trip | undefined> {
  const existing = trips.find((trip) => trip.id === id);
  if (!existing) return undefined;
  Object.assign(existing, input);
  return existing;
}

export async function getBookings(): Promise<Booking[]> {
  return bookings;
}

export async function getBookingById(id: string): Promise<Booking | undefined> {
  return bookings.find((booking) => booking.id === id);
}

export async function updateBookingStatus(
  id: string,
  status: BookingStatus
): Promise<Booking | undefined> {
  const existing = bookings.find((booking) => booking.id === id);
  if (!existing) return undefined;
  existing.status = status;
  return existing;
}

const waitlistSignups: WaitlistSignup[] = [
  { id: "wl-1", name: "Tobi Adeyemi", email: "tobi.adeyemi@example.com", interest: "Passport to Detty", signedUpAt: "2026-06-19" },
  { id: "wl-2", name: "Layla Hassan", email: "layla.hassan@example.com", interest: "Velvet Vows Retreat", signedUpAt: "2026-06-17" },
  { id: "wl-3", name: "Brandon Cole", email: "brandon.cole@example.com", interest: "Golden Horizons Club", signedUpAt: "2026-06-15" },
  { id: "wl-4", name: "Zainab Yusuf", email: "zainab.yusuf@example.com", interest: "Black Excellence Experiences", signedUpAt: "2026-06-14" },
  { id: "wl-5", name: "Megan Brooks", email: "megan.brooks@example.com", interest: "Passport & Prosecco", signedUpAt: "2026-06-12" },
  { id: "wl-6", name: "Chuka Nnamdi", email: "chuka.nnamdi@example.com", interest: "General", signedUpAt: "2026-06-10" },
  { id: "wl-7", name: "Hannah Reyes", email: "hannah.reyes@example.com", interest: "Renew You Journey", signedUpAt: "2026-06-08" },
  { id: "wl-8", name: "Femi Okonjo", email: "femi.okonjo@example.com", interest: "Second Chapter Society", signedUpAt: "2026-06-05" },
  { id: "wl-9", name: "Aisha Bello", email: "aisha.bello@example.com", interest: "General", signedUpAt: "2026-06-03" },
  { id: "wl-10", name: "Connor Walsh", email: "connor.walsh@example.com", interest: "Golden Horizons Club", signedUpAt: "2026-05-30" },
];

export async function getWaitlistSignups(): Promise<WaitlistSignup[]> {
  return waitlistSignups;
}

export async function addWaitlistSignup(input: {
  name: string;
  email: string;
  interest: string;
}): Promise<WaitlistSignup> {
  const signup: WaitlistSignup = {
    id: `wl-${waitlistSignups.length + 1}`,
    name: input.name,
    email: input.email,
    interest: input.interest || "General",
    signedUpAt: new Date().toISOString().slice(0, 10),
  };
  waitlistSignups.unshift(signup);
  return signup;
}

export interface DashboardStats {
  totalBookings: number;
  totalRevenue: number;
  pendingBookings: number;
  upcomingTrips: number;
  waitlistSignups: number;
}

export async function getDashboardStats(): Promise<DashboardStats> {
  const totalBookings = bookings.length;
  const totalRevenue = bookings
    .filter((b) => b.status === "confirmed")
    .reduce((sum, b) => sum + b.amount, 0);
  const pendingBookings = bookings.filter((b) => b.status === "pending").length;
  const upcomingTrips = trips.filter((t) => t.status === "published").length;

  return {
    totalBookings,
    totalRevenue,
    pendingBookings,
    upcomingTrips,
    waitlistSignups: waitlistSignups.length,
  };
}
