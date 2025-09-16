<template>
    <q-page class="mainContainer">
        <div class="headerTitle">
            <q-icon name="badge" />
            <!-- <h5>Biblioteca</h5> -->
            <header class="topTittle">{{ t('users.headerTitle') }}</header>
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
            <div class="text-h6 text-center full-width">{{ t('users.table.tableTitle') }}</div>
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
                    <div class="text-h5">{{ t('users.createModal.title') }}</div>
                    <q-space />
                    <q-btn icon="close" flat round dense v-close-popup class="closeIcon" />
                </q-card-section>

                <q-separator />


                <q-card-section class="scroll">
                    <slot>
                        <q-input filled v-model="name" type="text" :label="t('users.createModal.name')" class="inputModal" />
                        <q-input filled v-model="email" type="email" :label="t('users.createModal.email')" class="inputModal" />
                        <q-input filled v-model="password" type="password" :label="t('users.createModal.password')" class="inputModal" />
                        <div class="q-pa-lg radio-container">
                            <q-option-group v-model="role" :options="options" color="primary" inline class="radio" />
                        </div>
                    </slot>
                </q-card-section>


                <q-separator />
                <q-card-actions align="left">
                    <q-btn unelevated :label=" t('users.createModal.registerButton')" color="primary" @click="register" class="buttonRegister" />
                    <q-btn flat :label="t('users.createModal.cancelButton')" color="white" v-close-popup />
                </q-card-actions>

            </q-card>
        </q-dialog>



        <q-dialog v-model="openModalEdit" persistent :maximized="$q.screen.lt.md">
            <q-card style="min-width: 400px; max-width: 95vw; max-height: 90vh;" class="mainModal">

                <q-card-section class="row items-center">
                    <div class="text-h5">{{ t('users.editModal.title') }}</div>
                    <q-space />
                    <q-btn icon="close" flat round dense v-close-popup class="closeIcon" />
                </q-card-section>

                <q-separator />


                <q-card-section class="scroll">
                    <slot>
                        <q-input filled v-model="name" type="text" :label="t('users.editModal.name')" class="inputModal" />
                        <q-input filled v-model="email" type="email" :label="t('users.editModal.email')" class="inputModal" />
                        <q-input filled v-model="password" type="password" :label="t('users.editModal.password')" class="inputModal" />
                        <div class="q-pa-lg radio-container">
                            <q-option-group v-model="role" :options="options" color="primary" inline class="radio" />
                        </div>
                    </slot>
                </q-card-section>


                <q-separator />
                <q-card-actions align="left">
                    <q-btn unelevated :label=" t('users.editModal.registerButton')" color="primary"
                        @click="openModalConfirm = true, openModalEdit = false" class="buttonRegister" />
                    <q-btn flat :label="t('users.editModal.cancelButton')" color="white" v-close-popup />
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
                    <div class="text-h5">{{ t('users.viewModal.title') }}</div>
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
                            <div class="viewFont" tabindex="0">{{ t('users.viewModal.id') + ":" + "" }}</div>
                        </template>
                    </q-field>

                    <q-field outlined :dense="dense" class="viewInput">
                        <template v-slot:prepend>
                            <q-icon name="person" class="viewFont" />
                        </template>

                        <template v-slot:control>
                            <div class="viewFont" tabindex="0">{{ t('users.viewModal.name') + ":" + "" }}</div>
                        </template>
                    </q-field>

                    <q-field outlined :dense="dense" class="viewInput">
                        <template v-slot:prepend>
                            <q-icon name="email" class="viewFont" />
                        </template>

                        <template v-slot:control>
                            <div class="viewFont" tabindex="0">{{ t('users.viewModal.email') + ":" + "" }}</div>
                        </template>
                    </q-field>

                    <q-field outlined :dense="dense" class="viewInput">
                        <template v-slot:prepend>
                            <q-icon name="work" class="viewFont" />
                        </template>

                        <template v-slot:control>
                            <div class="viewFont" tabindex="0">{{ t('users.viewModal.password') + ":" + "" }}</div>
                        </template>
                    </q-field>


                </q-card-section>

                <q-separator />

                <q-card-section class="left">
                    <q-btn flat :label="t('users.viewModal.cancelButton')" color="white" v-close-popup />
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
import { useCrud } from 'src/utils/users.js'


const { email, name, password, role,

    $q, openModalCreate, openModalEdit, openModalExclude, openModalView, options, openModalConfirm,

    filter, pagination, columns, rows, t, paginationLabel } = useCrud()

</script>