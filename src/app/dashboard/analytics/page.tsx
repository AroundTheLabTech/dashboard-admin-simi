"use client";

import styles from "@/styles/Dashboard.module.css";
import { Barchart } from "./Barchart";
import Piechart from "./Piechart";


export default function AnalyticsPage() {
  const cardContent = [
    { smallText: "Numero de Usuarios", largeText: "140" },
    { smallText: "Tiempo de juego", largeText: "3:54 hr" },
    { smallText: "Details", largeText: "10" },
    { smallText: "Metrics", largeText: "0" },
  ];

  return (
    <div className={styles.page}>
      <h1>Dashboard</h1>
      <p>Bienvenido al Dashboard!</p>
      <div className={styles.grid}>
        {cardContent.map((content, index) => (
          <div key={index} className={styles.card}>
            <p className={styles.smallText}>{content.smallText}</p>
            <h2 className={styles.largeText}>{content.largeText}</h2>
          </div>
        ))}
      </div>
      <div className={styles.chartGrid}>
        <div className={styles.chart}>
          <Piechart />
        </div>
        <div className={styles.chart}>
          <Barchart />
        </div>
      </div>
    </div>
  );
}
