import PageHeader from "@/components/admin/PageHeader/PageHeader";
import TripForm from "@/components/admin/TripForm/TripForm";
import { createTripAction } from "@/lib/admin/actions";

export default function NewTripPage() {
  return (
    <>
      <PageHeader title="Add Trip" description="Create a new trip listing for the live site." />
      <TripForm action={createTripAction} />
    </>
  );
}
