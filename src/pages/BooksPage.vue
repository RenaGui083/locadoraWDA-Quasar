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
                <input type="text" id="searchInput" v-model="filter" placeholder="Pesquisar">
            </div>
            <q-btn push label="+ Criar" class="addButton" @click="openModalCreate = true" />
        </div>

        <div class="tableContainer">
            <div class="text-h6 text-center full-width">Acervo atual</div>
            <q-table :rows="rows" :columns="columns" row-key="name" v-model:pagination="pagination"
                :rows-per-page-options="$q.screen.lt.md ? [] : [5, 6]" :filter="filter" flat bordered
                class="my-table shadow-2 rounded-borders"  :hide-bottom="$q.screen.lt.md">
                <!-- Modo tabela normal (desktop) -->
                <template v-slot:body-cell-actions="props" >
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
import { watch } from 'vue'



// paginação
const pagination = ref({
    page: 1,
    rowsPerPage: 5
})

watch(() => $q.screen.lt.md, (isMobile) => {
    pagination.value.rowsPerPage = isMobile ? 0 : 5
})

// colunas
const columns = [
    { name: "name", label: "Nome", field: "name", align: "left", sortable: true },
    { name: "publisher", label: "Editora", field: "publisher", align: "left", sortable: true },
    { name: "author", label: "Autor", field: "author", align: "left", sortable: true },
    { name: "launchDate", label: "Lançamento", field: "launchDate", align: "left", sortable: true },
    { name: "totalQuantity", label: "Quantidade", field: "totalQuantity", align: "left", sortable: true },
    { name: "actions", label: "Ações", field: "actions", align: "center"}
]

// mock
const rows = ref([
    { name: "Dom Casmurro", publisher: "Editora Garnier", author: "Machado de Assis", launchDate: "1899-01-01", totalQuantity: 12 },
    { name: "O Alquimista", publisher: "HarperCollins", author: "Paulo Coelho", launchDate: "1988-01-01", totalQuantity: 8 },
    { name: "Capitães da Areia", publisher: "Companhia das Letras", author: "Jorge Amado", launchDate: "1937-01-01", totalQuantity: 6 },
    { name: "Grande Sertão: Veredas", publisher: "Livraria José Olympio Editora", author: "João Guimarães Rosa", launchDate: "1956-01-01", totalQuantity: 4 },
    { name: "Harry Potter e a Pedra Filosofal", publisher: "Rocco", author: "J.K. Rowling", launchDate: "1997-06-26", totalQuantity: 10 },
    { name: "O Senhor dos Anéis: A Sociedade do Anel", publisher: "Martins Fontes", author: "J.R.R. Tolkien", launchDate: "1954-07-29", totalQuantity: 9 },
    { name: "A Revolução dos Bichos", publisher: "Companhia Editora Nacional", author: "George Orwell", launchDate: "1945-08-17", totalQuantity: 7 }
])

</script>