import Sidebar from "@/components/admin/Sidebar/Sidebar";
import Topbar from "@/components/admin/Topbar/Topbar";
import styles from "./admin-shell.module.css";

export default function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.shell}>
      <Sidebar />
      <div className={styles.content}>
        <Topbar />
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
}
