<template>
    <q-page class="mainContainer">
        <div class="headerTitle">
            <q-icon name="person" />
            <!-- <h5>Biblioteca</h5> -->
            <header class="topTittle">{{ t('renters.headerTitle') }}</header>
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
            <div class="text-h6 text-center full-width">{{ t('renters.table.tableTitle') }}</div>
            <q-table :rows="rows" :columns="columns" row-key="name" v-model:pagination="pagination"
                :rows-per-page-options="$q.screen.lt.md ? [] : [5, 6]" :filter="filter" flat bordered
                :no-data-label="t('tables.noData')" :rows-per-page-label="t('tables.rowsPerPage')"
                :pagination-label="paginationLabel" class="my-table shadow-2 rounded-borders"
                :hide-bottom="$q.screen.lt.md">
                <!-- Modo tabela normal (desktop) -->
                <template v-slot:body-cell-actions="props">
                    <q-td :props="props" class="text-center" :data-label="props.col.label">
                        <q-btn flat round dense icon="edit" color="#121f2f" @click="openModalEdit = true" />
                        <q-btn flat round dense icon="delete" color="#121f2f" @click="openModalExclude = true" />
                        <q-btn flat round dense icon="visibility" color="#121f2f" @click="openModalView = true" />
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
                            <q-btn flat round dense icon="visibility" color="#121f2f" @click="openModalView = true" />
                        </div>
                    </div>
                </template>
            </q-table>


        </div>

        <!-- Modals -->
        <q-dialog v-model="openModalCreate" persistent :maximized="$q.screen.lt.md">
            <q-card style="min-width: 400px; max-width: 95vw; max-height: 90vh;" class="mainModal">

                <q-card-section class="row items-center">
                    <div class="text-h5">{{ t('renters.createModal.title') }}</div>
                    <q-space />
                    <q-btn icon="close" flat round dense v-close-popup class="closeIcon" />
                </q-card-section>

                <q-separator />


                <q-card-section class="scroll">
                    <slot>
                        <q-input filled v-model="name" type="text" :label="t('renters.createModal.name')" class="inputModal" />
                        <q-input filled v-model="email" type="email" :label="t('renters.createModal.email')" class="inputModal" />
                        <q-input filled v-model="telephone" type="text" :label="t('renters.createModal.telephone')" class="inputModal" />
                        <q-input filled v-model="cpf" type="text" :label="t('renters.createModal.cpf')" class="inputModal" />
                        <q-input filled v-model="address" type="text" :label="t('renters.createModal.address')" class="inputModal" />

                    </slot>
                </q-card-section>


                <q-separator />
                <q-card-actions align="left">
                    <q-btn unelevated :label="t('renters.createModal.registerButton')" color="primary" @click="register" class="buttonRegister" />
                    <q-btn flat :label="t('renters.createModal.cancelButton')" color="white" v-close-popup />
                </q-card-actions>

            </q-card>
        </q-dialog>



        <q-dialog v-model="openModalEdit" persistent :maximized="$q.screen.lt.md">
            <q-card style="min-width: 400px; max-width: 95vw; max-height: 90vh;" class="mainModal">

                <q-card-section class="row items-center">
                    <div class="text-h5">{{ t('renters.editModal.title') }}</div>
                    <q-space />
                    <q-btn icon="close" flat round dense v-close-popup class="closeIcon" />
                </q-card-section>

                <q-separator />


                <q-card-section class="scroll">
                    <slot>
                        <q-input filled v-model="name" type="text" :label="t('renters.editModal.name')" class="inputModal" />
                        <q-input filled v-model="email" type="email" :label="t('renters.editModal.email')" class="inputModal" />
                        <q-input filled v-model="telephone" type="text" :label="t('renters.editModal.telephone')" class="inputModal" />
                        <q-input filled v-model="cpf" type="text" :label="t('renters.editModal.cpf')" class="inputModal" />
                        <q-input filled v-model="address" type="text" :label="t('renters.editModal.address')" class="inputModal" />
                    </slot>
                </q-card-section>


                <q-separator />
                <q-card-actions align="left">
                    <q-btn unelevated :label="t('renters.editModal.registerButton')" color="primary" @click="openModalConfirm = true,openModalEdit = false" class="buttonRegister" />
                    <q-btn flat :label="t('renters.editModal.cancelButton')" color="white" v-close-popup />
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



        <q-dialog v-model="openModalView" persistent :maximized="$q.screen.lt.md">
            <q-card style="min-width: 400px; max-width: 95vw; max-height: 90vh;" class="mainModal">

                <q-card-section class="row items-center">
                    <div class="text-h5">{{ t('renters.viewModal.title') }}</div>
                    <q-space />
                    <q-btn icon="close" flat round dense v-close-popup class="closeIcon" />
                </q-card-section>

                <q-separator />

                <q-card-section class="scroll">



                    <q-field outlined :dense="dense" class="viewInput">
                        <template v-slot:prepend>
                            <q-icon name="key" class="viewFont" />
                        </template>

                        <template v-slot:control>
                            <div class="viewFont" tabindex="0">{{ t('renters.viewModal.id') + ":" + "" }}</div>
                        </template>
                    </q-field>

                    <q-field outlined :dense="dense" class="viewInput">
                        <template v-slot:prepend>
                            <q-icon name="person" class="viewFont" />
                        </template>

                        <template v-slot:control>
                            <div class="viewFont" tabindex="0">{{ t('renters.viewModal.name') + ":" + "" }}</div>
                        </template>
                    </q-field>

                    <q-field outlined :dense="dense" class="viewInput">
                        <template v-slot:prepend>
                            <q-icon name="email" class="viewFont" />
                        </template>

                        <template v-slot:control>
                            <div class="viewFont" tabindex="0">{{ t('renters.viewModal.email') + ":" + "" }}</div>
                        </template>
                    </q-field>

                    <q-field outlined :dense="dense" class="viewInput">
                        <template v-slot:prepend>
                            <q-icon name="phone" class="viewFont" />
                        </template>

                        <template v-slot:control>
                            <div class="viewFont" tabindex="0">{{ t('renters.viewModal.telephone') + ":" + "" }}</div>
                        </template>
                    </q-field>

                    <q-field outlined :dense="dense" class="viewInput">
                        <template v-slot:prepend>
                            <q-icon name="article" class="viewFont" />
                        </template>

                        <template v-slot:control>
                            <div class="viewFont" tabindex="0">{{ t('renters.viewModal.cpf') + ":" + "" }}</div>
                        </template>
                    </q-field>

                    <q-field outlined :dense="dense" class="viewInput">
                        <template v-slot:prepend>
                            <q-icon name="map" class="viewFont" />
                        </template>

                        <template v-slot:control>
                            <div class="viewFont" tabindex="0">{{ t('renters.viewModal.address') + ":" + "" }}</div>
                        </template>
                    </q-field>

                </q-card-section>

                <q-separator />

                <q-card-section class="left">
                    <q-btn flat :label="t('renters.viewModal.cancelButton')" color="white" v-close-popup />
                </q-card-section>

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
import { useCrud } from 'src/utils/renters.js'

const {
        email, name, telephone, address, cpf,

        $q, openModalCreate, openModalEdit, openModalExclude, openModalView, openModalConfirm,

        filter, pagination, columns, rows,
         t, paginationLabel,
    } = useCrud()
</script>
