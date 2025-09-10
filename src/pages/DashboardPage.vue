<template>
    <q-page class="mainContainer">
        <div class="headerTitle">
            <q-icon name="insights" />
            <header class="topTittle">{{ t('dashboard.headerTitle') }}</header>
        </div>
        <div class="dashboardContainer">

            <div class="sectionTop">

                <q-card class="cardSection">
                    <q-card-section>
                        <div class="headerContainerChart">
                            <header>{{ t('dashboard.rentsChart') }}</header>
                        </div>
                        <ChartBar1 style="height: 200px;" />
                    </q-card-section>
                </q-card>

                <q-card class="cardSection">
                    <q-card-section>
                        <div class="headerContainerChart">
                            <header>{{ t('dashboard.top3Chart') }}</header>
                        </div>
                        <ChartBar2 style="height: 200px;" />
                    </q-card-section>
                </q-card>

                 <q-card class="cardSection" id="chartPieSection">
                <q-card-section>
                    <div class="headerContainerChart">
                        <header>{{ t('dashboard.publishersBooksRenters') }}</header>
                    </div>
                    <ChartPie1 id="chartPieBottom" />
                </q-card-section>
            </q-card>
            </div>

            <div class="sectionBottom">

                <div class="tableContainer" id="gridDashboard">
                    <div class="text-h6 text-center full-width">{{ t('dashboard.table.tableTitle') }}</div>
                    <q-table :rows="rows" :columns="columns" row-key="name" v-model:pagination="pagination"
                        :filter="filter" flat bordered :no-data-label="t('tables.noData')" :rows-per-page-label="t('tables.rowsPerPage')" :pagination-label="paginationLabel"
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
                            <header class="headerUsers">{{ t('dashboard.numberOfUsers') }}</header>
                            <p>29</p>
                        </div>
                        <div class="headerContainerChart">
                            <header class="headerUsers">{{ t('dashboard.numberOfAdmins') }}</header>
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
    $q, t,
    pagination, columns, rows, paginationLabel
} = useCrud()
</script>