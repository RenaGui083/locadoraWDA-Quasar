<template>
    <q-page class="mainContainer">
        <div class="headerTitle">
            <q-icon name="book" />
            <!-- <h5>Biblioteca</h5> -->
            <header class="topTittle">{{ t('library.headerTitle') }}</header>
        </div>

        <div class="searchContainer">
            <div class="search" id="search">
                <label for="searchInput" class="searchInput">
                    <q-icon name="search" class="searchIcon" />
                </label>
                <input type="text" id="searchInput" v-model="filter" :placeholder="t('search.searchBar')">
            </div>
            <q-btn push :label="t('search.createButton')" class="addButton" @click="openModalCreate = true" />
        </div>

        <div class="tableContainer">
            <div class="text-h6 text-center full-width">{{ t('library.table.tableTitle') }}</div>
            <q-table :rows="fetchBooksTable" :columns="columns" row-key="id" v-model:pagination="pagination"
                :rows-per-page-options="$q.screen.lt.md ? [] : [5, 6]" :filter="filter" flat bordered
                :no-data-label="t('tables.noData')" :rows-per-page-label="t('tables.rowsPerPage')"  :loading="loading" :loading-label="t('tables.loading')"
                :pagination-label="paginationLabel" class="my-table shadow-2 rounded-borders"
                :hide-bottom="$q.screen.lt.md">
                <!-- Modo tabela normal (desktop) -->
                <template v-slot:body-cell-actions="props">
                    <q-td :props="props" class="text-center" :data-label="props.col.label">
                        <q-btn flat round dense icon="edit" color="#121f2f" @click="openModalEdit = true" />
                        <q-btn flat round dense icon="delete" color="#121f2f" @click="openModalExclude = true" />
                    </q-td>
                </template>
                <template v-slot:body-cell="props">
                    <q-td :props="props" :data-label="props.col.label">
                        {{ props.value }}
                    </q-td>
                </template>
                <template v-slot:item="props">
                    <div class="q-pa-sm q-mb-sm rounded-borders shadow-1 bg-grey-1">
                        <div v-for="col in props.cols" :key="col.name" class="row q-pb-xs">
                            <div class="col-4 text-weight-bold">{{ col.label }}</div>
                            <div class="col-8">{{ col.value }}</div>
                        </div>
                        <div class="row justify-end q-mt-sm">
                            <q-btn flat round dense icon="edit" color="#121f2f" @click="openModalEdit = true" />
                            <q-btn flat round dense icon="delete" color="#121f2f" @click="openModalExclude = true" />
                        </div>
                    </div>
                </template>
            </q-table>


        </div>


        <!-- Modals -->
        <q-dialog v-model="openModalCreate" persistent :maximized="$q.screen.lt.md">
            <q-card style="min-width: 400px; max-width: 95vw; max-height: 90vh;" class="mainModal">

                <q-card-section class="row items-center">
                    <div class="text-h5">{{ t('library.createModal.title') }}</div>
                    <q-space />
                    <q-btn icon="close" flat round dense v-close-popup class="closeIcon" />
                </q-card-section>

                <q-separator />


                <q-card-section class="scroll">
                    <slot>
                        <q-input filled v-model="name" type="text" :label="t('library.createModal.name')"
                            class="inputModal" />
                        <q-input filled v-model="author" type="text" :label="t('library.createModal.author')"
                            class="inputModal" />
                        <q-input filled v-model="totalQuantity" type="number"
                            :label="t('library.createModal.totalQuantity')" class="inputModal" :min="1" />
                        <q-select filled v-model="publisher" :options="options" type="text"
                            :label="t('library.createModal.publisher')" class="inputModal" />
                        <!-- <q-input filled v-model="launchDate" type="date" :label="t('library.createModal.launchDate')"
                            class="inputModal" /> -->
                        <q-input filled v-model="launchDate" :label="t('library.createModal.launchDate')"
                            :mask="locale === 'en-US' ? '##/##/####' : '##/##/####'"
                            :placeholder="locale === 'en-US' ? 'MM/DD/YYYY' : 'DD/MM/YYYY'" class="inputModal" />
                    </slot>
                </q-card-section>


                <q-separator />
                <q-card-actions align="left">
                    <q-btn unelevated :label="t('library.createModal.registerButton')" color="primary" @click="register" class="buttonRegister" />
                    <q-btn flat :label="t('library.createModal.cancelButton')" color="white" v-close-popup />
                </q-card-actions>

            </q-card>
        </q-dialog>



        <q-dialog v-model="openModalEdit" persistent :maximized="$q.screen.lt.md">
            <q-card style="min-width: 400px; max-width: 95vw; max-height: 90vh;" class="mainModal">

                <q-card-section class="row items-center">
                    <div class="text-h5">{{ t('library.editModal.title') }}</div>
                    <q-space />
                    <q-btn icon="close" flat round dense v-close-popup class="closeIcon" />
                </q-card-section>

                <q-separator />


                <q-card-section class="scroll">
                    <slot>
                        <q-input filled v-model="name" type="text" :label="t('library.editModal.name')" class="inputModal" />
                        <q-input filled v-model="author" type="text" :label="t('library.editModal.author')" class="inputModal" />
                        <q-input filled v-model="totalQuantity" type="number" :label="t('library.editModal.totalQuantity')" class="inputModal"
                            :min="1" />
                        <q-select filled v-model="publisher" :options="options" type="text" :label="t('library.editModal.publisher')"
                            class="inputModal" />
                        <!-- <q-input filled v-model="launchDate" type="date" label="Data de lançamento"
                            class="inputModal" /> -->
                         <q-input filled v-model="launchDate" :label="t('library.editModal.launchDate')"
                            :mask="locale === 'en-US' ? '##/##/####' : '##/##/####'"
                            :placeholder="locale === 'en-US' ? 'MM/DD/YYYY' : 'DD/MM/YYYY'" class="inputModal" />
                    </slot>
                </q-card-section>


                <q-separator />
                <q-card-actions align="left">
                    <q-btn unelevated :label="t('library.editModal.registerButton')" color="primary"
                        @click="openModalConfirm = true, openModalEdit = false" class="buttonRegister" />
                    <q-btn flat :label="t('library.editModal.cancelButton')" color="white" v-close-popup />
                </q-card-actions>

            </q-card>
        </q-dialog>



        <q-dialog v-model="openModalExclude" persistent :maximized="$q.screen.lt.md">
            <q-card style="min-width: 400px; max-width: 95vw; max-height: 90vh;" class="mainModal">

                <q-card-section class="row items-center">
                    <div class="text-h5">{{ t('excludeModal.text') }}</div>
                    <q-space />
                    <!-- <q-btn icon="close" flat round dense v-close-popup class="closeIcon" /> -->
                </q-card-section>

                <q-card-section class="scroll">
                </q-card-section>

                <q-card-actions align="right">
                    <q-btn unelevated :label="t('excludeModal.yesButton')" color="primary" @click="register" class="buttonRegister" />
                    <q-btn flat :label="t('excludeModal.noButton')" color="white" v-close-popup />
                </q-card-actions>

            </q-card>
        </q-dialog>

        <q-dialog v-model="openModalConfirm" persistent :maximized="$q.screen.lt.md">
            <q-card style="min-width: 400px; max-width: 95vw; max-height: 90vh;" class="mainModal">

                <q-card-section class="row items-center">
                    <div class="text-h5">{{ t('confirmModal.text') }}</div>
                    <q-space />
                    <!-- <q-btn icon="close" flat round dense v-close-popup class="closeIcon" /> -->
                </q-card-section>

                <q-card-section class="scroll">
                </q-card-section>

                <q-card-actions align="right">
                    <q-btn unelevated :label="t('confirmModal.yesButton')" color="primary" @click="register" class="buttonRegister" />
                    <q-btn flat :label="t('confirmModal.noButton')" color="white" v-close-popup />
                </q-card-actions>

            </q-card>
        </q-dialog>

    </q-page>
</template>

<script setup>
import { useCrud } from 'src/utils/books.js'

const {
    name, publisher, author, launchDate, totalQuantity, fetchBooksTable,
    $q, openModalCreate, openModalEdit, openModalExclude, openModalConfirm, t, locale,
    filter, pagination, columns, paginationLabel,loading,
} = useCrud()
</script>