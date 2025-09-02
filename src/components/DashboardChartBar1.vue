<template>
    <div class="q-pa-md">
        <BarChart :data="chartData" :options="chartOptions" />
    </div>
</template>

<script setup>
import {
    Chart as ChartJS,
    Title, Tooltip, Legend,
    BarElement, CategoryScale, LinearScale
} from "chart.js";
import { Bar } from "vue-chartjs";

// registrar os módulos do Chart.js
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const chartData = {
    labels: ["Alugados", "Atrasados", "Devolvidos no prazo", "Devolvidos com demora"],
    datasets: [
        {
            label: "Vendas",
            data: [40, 20, 60, 12],
            backgroundColor: ['#404668', '#121F2F', '#F7B176', '#4B6B92'],
        },
    ],
};

const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: { position: "none" },
        title: { display: false, text: "Aluguéis (mensal)" },
    },
};

const BarChart = Bar;
</script>