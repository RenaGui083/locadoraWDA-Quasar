<template>
    <q-page class="mainContainer">
        <div class="headerTitle">
            <q-icon name="insights" />
            <header class="topTittle">Dashboard</header>
        </div>
        <div class="dashboardContainer">

            <div class="sectionTop">

                <q-card class="cardSection">
                    <q-card-section>
                        <div class="headerContainerChart">
                            <header>Aluguéis (mensal)</header>
                        </div>
                        <ChartBar1 style="height: 200px;" />
                    </q-card-section>
                </q-card>

                <q-card class="cardSection">
                    <q-card-section>
                        <div class="headerContainerChart">
                            <header>Top 3 livros mais alugados</header>
                        </div>
                        <ChartBar2 style="height: 200px;" />
                    </q-card-section>
                </q-card>


                <q-card class="cardSection">
                    <q-card-section>
                        <div class="headerContainerChart">
                            <header class="headerUsers">Número de usuários:</header>
                            <p>29</p>
                        </div>
                        <div class="headerContainerChart">
                            <header class="headerUsers">Número de admins:</header>
                            <p>18</p>
                        </div>
                    </q-card-section>
                </q-card>

            </div>

            <div class="sectionBottom">

                <div class="gridContainer" id="gridDashboard">
                    <div class="tableTittle">
                        <header>Relação de locatários</header>
                    </div>
                    <table class="tableMain" id="tableDashboard">
                        <thead class="headerTable">
                            <td class="nome">Nome</td>
                            <td>Total de aluguéis</td>
                            <td>Aluguéis ativos</td>
                        </thead>
                        <tbody id="tbody">
                            <tr>
                                <td data-label="Nome:">Maria Silva</td>
                                <td data-label="Total de aluguéis:">12</td>
                                <td data-label="Aluguéis ativos:">3</td>
                            </tr>
                            <tr>
                                <td data-label="Nome:">João Pereira</td>
                                <td data-label="Total de aluguéis:">8</td>
                                <td data-label="Aluguéis ativos:">1</td>
                            </tr>
                            <tr>
                                <td data-label="Nome:">Fernanda Costa</td>
                                <td data-label="Total de aluguéis:">15</td>
                                <td data-label="Aluguéis ativos:">5</td>
                            </tr>
                            <tr>
                                <td data-label="Nome:">Lucas Almeida</td>
                                <td data-label="Total de aluguéis:">5</td>
                                <td data-label="Aluguéis ativos:">0</td>
                            </tr>
                            <tr>
                                <td data-label="Nome:">Ana Torres</td>
                                <td data-label="Total de aluguéis:">10</td>
                                <td data-label="Aluguéis ativos:">2</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <q-card class="cardSection" id="chartPieSection">
                    <q-card-section>
                        <div class="headerContainerChart">
                            <header>Editoras, livros e locatários cadastrados</header>
                        </div>
                        <ChartPie1 id="chartPieBottom" />
                    </q-card-section>
                </q-card>

            </div>

        </div>
    </q-page>
</template>

<script setup>
import ChartBar1 from "src/components/DashboardChartBar1.vue";
import ChartBar2 from "src/components/DashboardChartBar2.vue";
import ChartPie1 from "src/components/DashboardChartPie1.vue";
</script>