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
                        <ChartBar1 />
                    </q-card-section>
                </q-card>

                <q-card class="cardSection">
                    <q-card-section>
                        <div class="headerContainerChart">
                            <header>Top 3 livros mais alugados</header>
                        </div>
                        <ChartBar2 />
                    </q-card-section>
                </q-card>

                <q-card class="cardSection" id="chartPieSection">
                    <q-card-section>
                        <div class="headerContainerChart">
                            <header>Editoras, livros e locatários cadastrados</header>
                        </div>
                        <ChartPie1 id="chartPieBottom" style="height:270px;" />
                    </q-card-section>
                </q-card>

            </div>

            <div class="sectionBottom">

                <div class="gridContainer" id="gridDashboard">
                    <div class="tableTittle">
                        <header>Relação de locatários</header>
                    </div>
                    <table class="tableMain">
                        <thead class="headerTable">
                            <td class="nome">Nome</td>
                            <td>Total de aluguéis</td>
                            <td>Aluguéis ativos</td>
                        </thead>
                        <tbody id="tbody">
                            <tr>
                                <td>Maria Silva</td>
                                <td>12</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>João Pereira</td>
                                <td>8</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>Fernanda Costa</td>
                                <td>15</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>Lucas Almeida</td>
                                <td>5</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>Ana Torres</td>
                                <td>10</td>
                                <td>2</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

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

        </div>
    </q-page>
</template>

<script setup>
import ChartBar1 from "src/components/DashboardChartBar1.vue";
import ChartBar2 from "src/components/DashboardChartBar2.vue";
import ChartPie1 from "src/components/DashboardChartPie1.vue";
</script>