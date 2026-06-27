import PageHeader from "@/components/admin/PageHeader/PageHeader";
import WaitlistTable from "@/components/admin/WaitlistTable/WaitlistTable";
import { getWaitlistSignups } from "@/lib/admin/data";

export default async function AdminWaitlistPage() {
  const signups = (await getWaitlistSignups()).sort((a, b) =>
    a.signedUpAt < b.signedUpAt ? 1 : -1
  );

  return (
    <>
      <PageHeader
        title="Waitlist"
        description="Everyone who joined the VIP waitlist from the live site, newest first."
      />
      <WaitlistTable signups={signups} />
    </>
  );
}
