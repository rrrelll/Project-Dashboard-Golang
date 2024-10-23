import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import './GrafikPenjualan.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const GrafikPenjualan = ({ salesData }) => {
  const barData = {
    labels: salesData.map(data => data.akun_tujuan),
    datasets: [
      {
        label: 'Jumlah Harga',
        data: salesData.map(data => data.harga),
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
      }
    ],
  };

  const pieData = {
    labels: salesData.map(data => data.akun_tujuan),
    datasets: [
      {
        label: 'Jumlah Order',
        data: salesData.map(data => data.harga),
        backgroundColor: [
          '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'
        ],
        borderColor: 'white',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="chart-container">
      <div className="chart-card">
        <h2>Grafik Harga</h2>
        <Bar data={barData} options={{ 
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true
            }
          }
         }} />
      </div>
      <div className="chart-card">
        <h2>Jumlah Pesanan</h2>
        <Pie data={pieData} options={{ 
          responsive: true,
          maintainAspectRatio: false
        }} />
      </div>
    </div>
  );
};

export default GrafikPenjualan;
