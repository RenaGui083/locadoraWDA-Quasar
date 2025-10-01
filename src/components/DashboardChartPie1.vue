<template>
    <div class="q-pa-md">
        <PieChart :data="chartData" :options="chartOptions" />
    </div>
</template>


<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import {
    Chart as ChartJS,
    Title, Tooltip, Legend,
    ArcElement
} from "chart.js";
import { Pie } from "vue-chartjs";

// registrar os módulos do Chart.js
ChartJS.register(Title, Tooltip, Legend, ArcElement);

const chartData = computed(() => ({
    labels: [t('dashboard.chart.publishers'),t('dashboard.chart.books'),t('dashboard.chart.renters')],
    datasets: [
        {
            label: "Cadastros",
            data: [40, 20, 60],
            backgroundColor: ['#404668', '#121F2F', '#F7B176'],
        },
    ],
}));

const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: { position: "bottom" },
        title: { display: false, text: "Aluguéis (mensal)" },
    },


};

const PieChart = Pie;
</script>