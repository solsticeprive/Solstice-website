import { notFound } from "next/navigation";
import PageHeader from "@/components/admin/PageHeader/PageHeader";
import TripForm from "@/components/admin/TripForm/TripForm";
import { getTripById } from "@/lib/admin/data";
import { updateTripAction } from "@/lib/admin/actions";

export default async function EditTripPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const trip = await getTripById(id);

  if (!trip) {
    notFound();
  }

  const boundAction = updateTripAction.bind(null, trip.id);

  return (
    <>
      <PageHeader title="Edit Trip" description={`Update the listing for "${trip.title}".`} />
      <TripForm trip={trip} action={boundAction} />
    </>
  );
}
