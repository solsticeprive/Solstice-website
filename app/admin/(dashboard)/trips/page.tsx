import PageHeader from "@/components/admin/PageHeader/PageHeader";
import TripsTable from "@/components/admin/TripsTable/TripsTable";
import { LinkButton } from "@/components/admin/Button/Button";
import { PlusIcon } from "@/components/admin/icons/AdminIcons";
import { getTrips } from "@/lib/admin/data";

export default async function AdminTripsPage() {
  const trips = (await getTrips()).sort((a, b) => (a.startDate < b.startDate ? -1 : 1));

  return (
    <>
      <PageHeader
        title="Trips"
        description="Manage the trip listings shown in Featured Experiences on the live site."
        action={
          <LinkButton href="/admin/trips/new">
            <PlusIcon />
            Add Trip
          </LinkButton>
        }
      />
      <TripsTable trips={trips} />
    </>
  );
}
