<template>
    <q-page class="mainContainer">
        <div class="headerTitle">
            <q-icon name="book" />
            <!-- <h5>Biblioteca</h5> -->
            <header class="topTittle">Biblioteca</header>
        </div>

        <div class="searchContainer">
            <div class="search" id="search">
                <label for="searchInput" class="searchInput">
                    <q-icon name="search" class="searchIcon" />
                </label>
                <!-- agora está ligado ao Vue -->
                <input type="text" id="searchInput" v-model="filter" placeholder="Pesquisar">
            </div>
            <q-btn push label="+ Criar" class="addButton" @click="openModalCreate = true" />
        </div>

        <div class="tableContainer">
            <div class="text-h6 text-center full-width">Acervo atual</div>
            <q-table :rows="rows" :columns="columns" row-key="id" v-model:pagination="pagination"
                :rows-per-page-options="[5, 6]" :filter="filter"
                flat
                bordered
                class="my-table shadow-2 rounded-borders"
                rows-per-page-label="Linhas por página"
                no-data-label="Sem dados para exibir"
                />
        </div>


        <!-- Modals -->
        <q-dialog v-model="openModalCreate" persistent :maximized="$q.screen.lt.md">
            <q-card style="min-width: 400px; max-width: 95vw; max-height: 90vh;" class="mainModal">

                <q-card-section class="row items-center">
                    <div class="text-h5">Cadastrar Livro</div>
                    <q-space />
                    <q-btn icon="close" flat round dense v-close-popup class="closeIcon" />
                </q-card-section>

                <q-separator />


                <q-card-section class="scroll">
                    <slot>
                        <q-input filled v-model="name" type="text" label="Nome" class="inputModal" />
                        <q-input filled v-model="author" type="text" label="Autor" class="inputModal" />
                        <q-input filled v-model="totalQuantity" type="number" label="Estoque" class="inputModal"
                            :min="1" />
                        <q-select filled v-model="publisher" :options="options" type="email" label="Editora"
                            class="inputModal" />
                        <q-input filled v-model="launchDate" type="date" label="Data de lançamento"
                            class="inputModal" />
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
                    <div class="text-h5">Editar Livro</div>
                    <q-space />
                    <q-btn icon="close" flat round dense v-close-popup class="closeIcon" />
                </q-card-section>

                <q-separator />


                <q-card-section class="scroll">
                    <slot>
                        <q-input filled v-model="name" type="text" label="Nome" class="inputModal" />
                        <q-input filled v-model="author" type="text" label="Autor" class="inputModal" />
                        <q-input filled v-model="totalQuantity" type="number" label="Estoque" class="inputModal"
                            :min="1" />
                        <q-select filled v-model="publisher" :options="options" type="email" label="Editora"
                            class="inputModal" />
                        <q-input filled v-model="launchDate" type="date" label="Data de lançamento"
                            class="inputModal" />
                    </slot>
                </q-card-section>


                <q-separator />
                <q-card-actions align="left">
                    <q-btn unelevated label="Atualizar" color="primary"
                        @click="openModalConfirm = true, openModalEdit = false" class="buttonRegister" />
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
import { ref } from 'vue'
import { useCrud } from 'src/utils/books.js'

const { name, publisher, author, launchDate, totalQuantity, $q, openModalCreate, openModalEdit, openModalExclude, openModalConfirm } = useCrud()

// pesquisa
const filter = ref("")

// paginação
const pagination = ref({
  page: 1,
  rowsPerPage: 5
})

// colunas
const columns = [
  { name: "name", label: "Nome", field: "name", align: "left", sortable: true },
  { name: "publisher", label: "Editora", field: "publisher", align: "left", sortable: true },
  { name: "author", label: "Autor", field: "author", align: "left", sortable: true },
  { name: "launchDate", label: "Lançamento", field: "launchDate", align: "left", sortable: true },
  { name: "totalQuantity", label: "Quantidade", field: "totalQuantity", align: "left", sortable: true }
]

// mock
const rows = ref([
  { name: "Livro 1", publisher: "Editora A", author: "Autor X", launchDate: "2022-01-01", totalQuantity: 10 },
  { name: "Livro 2", publisher: "Editora B", author: "Autor Y", launchDate: "2023-02-15", totalQuantity: 7 },
  { name: "Livro 3", publisher: "Editora C", author: "Autor Z", launchDate: "2021-05-30", totalQuantity: 3 },
  { name: "Livro 1", publisher: "Editora A", author: "Autor X", launchDate: "2022-01-01", totalQuantity: 10 },
  { name: "Livro 2", publisher: "Editora B", author: "Autor Y", launchDate: "2023-02-15", totalQuantity: 7 },
  { name: "Livro 3", publisher: "Editora C", author: "Autor Z", launchDate: "2021-05-30", totalQuantity: 3 },
  { name: "Livro 4", publisher: "Editora D", author: "Autor W", launchDate: "2020-11-20", totalQuantity: 5 }
])

</script>