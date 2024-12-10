import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Usuarios activos',
    },
  },
};

const labels = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Usuarios',
      data: [0, 9, 10, 11, 12, 13, 14, 15, 16, 17],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },

  ],
};

export function Barchart() {
  return <Bar options={options} data={data} />;
}
