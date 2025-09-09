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

                 <q-card class="cardSection" id="chartPieSection">
                <q-card-section>
                    <div class="headerContainerChart">
                        <header>Editoras, livros e locatários cadastrados</header>
                    </div>
                    <ChartPie1 id="chartPieBottom" />
                </q-card-section>
            </q-card>
            </div>

            <div class="sectionBottom">

                <div class="tableContainer" id="gridDashboard">
                    <div class="text-h6 text-center full-width">Relação de Locatários</div>
                    <q-table :rows="rows" :columns="columns" row-key="name" v-model:pagination="pagination"
                        :filter="filter" flat bordered
                        class="my-table shadow-2 rounded-borders" :hide-bottom="$q.screen.lt.md">
                        <template v-slot:body-cell="props">
                            <q-td :props="props" :data-label="props.col.label">
                                {{ props.value }}
                            </q-td>
                        </template>
                    </q-table>
                </div>
                <q-card class="cardSection" id="dataChart">
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
import { useCrud } from 'src/utils/dashboard.js'

const {
    ChartBar1, ChartBar2, ChartPie1,
    $q,
    pagination, columns, rows
} = useCrud()
</script>