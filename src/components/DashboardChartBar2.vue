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

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const chartData = {
    labels: ["Cujo", "Harry Potter e a Pedra Filosofal", "Carrie, a estranha"],
    datasets: [
        {
            label: "Distribuição",
            data: [40, 20, 60],
            backgroundColor: ['#88B6EE', '#4B6B92', '#404668'],
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