<template>
    <q-page class="mainContainer">
        <div class="headerTitle">
            <q-icon name="person" />
            <!-- <h5>Biblioteca</h5> -->
            <header class="topTittle">Locatários</header>
        </div>
        <div class="searchContainer">
            <div class="search" id="search">
                <label for="searchInput" class="searchInput">
                    <q-icon name="search" class="searchIcon" />
                </label>
                <input type="text" id="searchInput" v-model="filter" placeholder="Pesquisar">
            </div>
            <q-btn push label="+ Criar" class="addButton" @click="openModalCreate = true" />
        </div>


        <div class="tableContainer">
            <div class="text-h6 text-center full-width">Relação de Locatários</div>
            <q-table :rows="rows" :columns="columns" row-key="name" v-model:pagination="pagination"
                :rows-per-page-options="$q.screen.lt.md ? [] : [5, 6]" :filter="filter" flat bordered
                class="my-table shadow-2 rounded-borders" :hide-bottom="$q.screen.lt.md">
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
                    <div class="text-h5">Cadastrar Locatário</div>
                    <q-space />
                    <q-btn icon="close" flat round dense v-close-popup class="closeIcon" />
                </q-card-section>

                <q-separator />


                <q-card-section class="scroll">
                    <slot>
                        <q-input filled v-model="name" type="text" label="Nome" class="inputModal" />
                        <q-input filled v-model="email" type="email" label="Email" class="inputModal" />
                        <q-input filled v-model="telephone" type="text" label="Telefone" class="inputModal" />
                        <q-input filled v-model="cpf" type="text" label="CPF" class="inputModal" />
                        <q-input filled v-model="address" type="text" label="Endereço" class="inputModal" />

                    </slot>
                </q-card-section>


                <q-separator />
                <q-card-actions align="left">
                    <q-btn unelevated label="Cadastrar" color="primary" @click="register" class="buttonRegister" />
                    <q-btn flat label="Cancelar" color="white" v-close-popup />
                </q-card-actions>

            </q-card>
        </q-dialog>



        <q-dialog v-model="openModalEdit" persistent :maximized="$q.screen.lt.md">
            <q-card style="min-width: 400px; max-width: 95vw; max-height: 90vh;" class="mainModal">

                <q-card-section class="row items-center">
                    <div class="text-h5">Editar Locatário</div>
                    <q-space />
                    <q-btn icon="close" flat round dense v-close-popup class="closeIcon" />
                </q-card-section>

                <q-separator />


                <q-card-section class="scroll">
                    <slot>
                        <q-input filled v-model="name" type="text" label="Nome" class="inputModal" />
                        <q-input filled v-model="email" type="email" label="Email" class="inputModal" />
                        <q-input filled v-model="telephone" type="text" label="Telefone" class="inputModal" />
                        <q-input filled v-model="cpf" type="text" label="CPF" class="inputModal" />
                        <q-input filled v-model="address" type="text" label="Endereço" class="inputModal" />
                    </slot>
                </q-card-section>


                <q-separator />
                <q-card-actions align="left">
                    <q-btn unelevated label="Atualizar" color="primary" @click="openModalConfirm = true,openModalEdit = false" class="buttonRegister" />
                    <q-btn flat label="Cancelar" color="white" v-close-popup />
                </q-card-actions>

            </q-card>
        </q-dialog>



        <q-dialog v-model="openModalExclude" persistent :maximized="$q.screen.lt.md">
            <q-card style="min-width: 400px; max-width: 95vw; max-height: 90vh;" class="mainModal">

                <q-card-section class="row items-center">
                    <div class="text-h5">Você tem certeza de que deseja realizar a exclusão?</div>
                    <q-space />
                    <!-- <q-btn icon="close" flat round dense v-close-popup class="closeIcon" /> -->
                </q-card-section>

                <q-card-section class="scroll">
                </q-card-section>

                <q-card-actions align="right">
                    <q-btn unelevated label="Sim" color="primary" @click="register" class="buttonRegister" />
                    <q-btn flat label="Não" color="white" v-close-popup />
                </q-card-actions>

            </q-card>
        </q-dialog>



        <q-dialog v-model="openModalView" persistent :maximized="$q.screen.lt.md">
            <q-card style="min-width: 400px; max-width: 95vw; max-height: 90vh;" class="mainModal">

                <q-card-section class="row items-center">
                    <div class="text-h5">Detalhes do Locatário</div>
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
                            <div class="viewFont" tabindex="0">{{ "Id: " + "" }}</div>
                        </template>
                    </q-field>

                    <q-field outlined :dense="dense" class="viewInput">
                        <template v-slot:prepend>
                            <q-icon name="person" class="viewFont" />
                        </template>

                        <template v-slot:control>
                            <div class="viewFont" tabindex="0">{{ "Nome: " + "" }}</div>
                        </template>
                    </q-field>

                    <q-field outlined :dense="dense" class="viewInput">
                        <template v-slot:prepend>
                            <q-icon name="email" class="viewFont" />
                        </template>

                        <template v-slot:control>
                            <div class="viewFont" tabindex="0">{{ "Email: " + "" }}</div>
                        </template>
                    </q-field>

                    <q-field outlined :dense="dense" class="viewInput">
                        <template v-slot:prepend>
                            <q-icon name="phone" class="viewFont" />
                        </template>

                        <template v-slot:control>
                            <div class="viewFont" tabindex="0">{{ "Telefone: " + "" }}</div>
                        </template>
                    </q-field>

                    <q-field outlined :dense="dense" class="viewInput">
                        <template v-slot:prepend>
                            <q-icon name="article" class="viewFont" />
                        </template>

                        <template v-slot:control>
                            <div class="viewFont" tabindex="0">{{ "CPF: " + "" }}</div>
                        </template>
                    </q-field>

                    <q-field outlined :dense="dense" class="viewInput">
                        <template v-slot:prepend>
                            <q-icon name="map" class="viewFont" />
                        </template>

                        <template v-slot:control>
                            <div class="viewFont" tabindex="0">{{ "Endereço: " + "" }}</div>
                        </template>
                    </q-field>

                </q-card-section>

                <q-separator />

                <q-card-section class="left">
                    <q-btn flat label="Fechar" color="white" v-close-popup />
                </q-card-section>

            </q-card>
        </q-dialog>


        <q-dialog v-model="openModalConfirm" persistent :maximized="$q.screen.lt.md">
            <q-card style="min-width: 400px; max-width: 95vw; max-height: 90vh;" class="mainModal">

                <q-card-section class="row items-center">
                    <div class="text-h5">Você tem certeza de que deseja realizar a edição?</div>
                    <q-space />
                    <!-- <q-btn icon="close" flat round dense v-close-popup class="closeIcon" /> -->
                </q-card-section>

                <q-card-section class="scroll">
                </q-card-section>

                <q-card-actions align="right">
                    <q-btn unelevated label="Sim" color="primary" @click="register" class="buttonRegister" />
                    <q-btn flat label="Não" color="white" v-close-popup />
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

        filter, pagination, columns, rows
    } = useCrud()
</script>
