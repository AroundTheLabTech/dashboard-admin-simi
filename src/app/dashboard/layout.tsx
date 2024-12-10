import React from "react";
import styles from "@/styles/Dashboard.module.css";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <aside className={styles.sidenav}>
        <nav>
          <ul>
            <li><a href="/dashboard">Home</a></li>
            <li><a href="/dashboard/analytics">Analytics</a></li>
            <li><a href="/auth/login">Cerrar Sesión</a></li>
          </ul>
        </nav>
      </aside>
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
}
