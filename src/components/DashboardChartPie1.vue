<template>
    <div class="q-pa-md">
        <PieChart :data="chartData" :options="chartOptions" />
    </div>
</template>


<script setup>
import {
    Chart as ChartJS,
    Title, Tooltip, Legend,
    ArcElement
} from "chart.js";
import { Pie } from "vue-chartjs";

// registrar os módulos do Chart.js
ChartJS.register(Title, Tooltip, Legend, ArcElement);

const chartData = {
    labels: ["Livros", "Locatários", "Editoras"],
    datasets: [
        {
            label: "Cadastros",
            data: [40, 20, 60],
            backgroundColor: ['#404668', '#121F2F', '#F7B176'],
        },
    ],
};

const chartOptions = {
    responsive: true,
    plugins: {
        legend: { position: "top" },
        title: { display: false, text: "Aluguéis (mensal)" },
    },


};

const PieChart = Pie;
</script>