"use client"

import React, { useState } from "react";
import styles from "@/styles/Dashboard.module.css";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isActive, setIsActive] = useState(false);

  const toggleSidenav = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={styles.container}>
      <button onClick={toggleSidenav} className={styles.sidenavToggle}>
        ☰
      </button>
      <aside className={`${styles.sidenav} ${isActive ? styles.active : ""}`}>

        <nav>
          <ul>
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
