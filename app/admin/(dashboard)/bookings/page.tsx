import PageHeader from "@/components/admin/PageHeader/PageHeader";
import BookingsTable from "@/components/admin/BookingsTable/BookingsTable";
import { getBookings } from "@/lib/admin/data";

export default async function AdminBookingsPage() {
  const bookings = (await getBookings()).sort((a, b) =>
    a.createdAt < b.createdAt ? 1 : -1
  );

  return (
    <>
      <PageHeader
        title="Bookings"
        description="Every booking made across your trip listings, newest first."
      />
      <BookingsTable bookings={bookings} />
    </>
  );
}
