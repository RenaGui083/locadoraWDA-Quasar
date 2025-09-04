<template>
    <q-page class="mainContainer">
        <div class="headerTitle">
            <q-icon name="book" />
            <!-- <h5>Biblioteca</h5> -->
            <header class="topTittle">Biblioteca</header>
        </div>
        <div class="searchContainer">
            <div class="search" id="search">
                <label for="" class="searchInput">
                    <q-icon name="search" class="searchIcon" />
                </label>
                <input type="text" id="searchInput" placeholder="Pesquisar">
            </div>
            <q-btn push label="+ Criar" class="addButton"  @click="openModalCreate = true" />
        </div>
        <div class="gridContainer">
            <div class="tableTittle">
                <header>Acervo atual</header>
            </div>
            <table class="tableMain">
                <thead class="headerTable">
                    <!-- <td>Id</td> -->
                    <td class="name">Nome</td>
                    <td>Autor</td>
                    <td>Data de Lançamento</td>
                    <td>Estoque</td>
                    <td>Alugados</td>
                    <td>Editora</td>
                    <td>Ações</td>
                </thead>
                <tbody id="tbody">
                    <tr>
                        <!-- <td data-label = "Id:">1</td> -->
                        <td class="name" data-label = "Nome:">O Senhor dos Anéis</td>
                        <td data-label = "Autor:">J.R.R. Tolkien</td>
                        <td data-label = "Data de Lançamento:">29/07/1954</td>
                        <td data-label = "Estoque:">12</td>
                        <td data-label = "Alugados:">4</td>
                        <td data-label = "Editora:">HarperCollins</td>
                        <td data-label = "Ações:">
                            <q-btn flat round dense icon="edit" color="#121F2F" @click="openModalEdit = true"/>
                            <q-btn flat round dense icon="delete" color="#121F2F"  @click="openModalExclude = true"/>
                        </td>
                    </tr>

                    <tr>
                        <!-- <td data-label = "Id:">2</td> -->
                        <td class="name" data-label = "Nome:">Dom Casmurro</td>
                        <td data-label = "Autor:">Machado de Assis</td>
                        <td data-label = "Data de Lançamento:">01/01/1899</td>
                        <td data-label = "Estoque:">8</td>
                        <td data-label = "Alugados:">2</td>
                        <td data-label = "Editora:">Globo</td>
                        <td data-label = "Ações:">
                            <q-btn flat round dense icon="edit" color="#121F2F" @click="openModalEdit = true"/>
                            <q-btn flat round dense icon="delete" color="#121F2F"  @click="openModalExclude = true"/>
                        </td>
                    </tr>

                    <tr>
                        <!-- <td data-label = "Id:">3</td> -->
                        <td class="name" data-label = "Nome:">1984</td>
                        <td data-label = "Autor:">George Orwell</td>
                        <td data-label = "Data de Lançamento:">08/06/1949</td>
                        <td data-label = "Estoque:">10</td>
                        <td data-label = "Alugados:">5</td>
                        <td data-label = "Editora:">Companhia das Letras</td>
                        <td data-label = "Ações:">
                            <q-btn flat round dense icon="edit" color="#121F2F" @click="openModalEdit = true"/>
                            <q-btn flat round dense icon="delete" color="#121F2F"  @click="openModalExclude = true" />
                        </td>
                    </tr>

                    <tr>
                        <!-- <td data-label = "Id:">4</td> -->
                        <td class="name" data-label = "Nome:">Harry Potter e a Pedra Filosofal</td>
                        <td data-label = "Autor:">J.K. Rowling</td>
                        <td data-label = "Data de Lançamento:">26/06/1997</td>
                        <td data-label = "Estoque:">20</td>
                        <td data-label = "Alugados:">7</td>
                        <td data-label = "Editora:">Rocco</td>
                        <td data-label = "Ações:">
                            <q-btn flat round dense icon="edit" color="#121F2F" @click="openModalEdit = true" />
                            <q-btn flat round dense icon="delete" color="#121F2F"  @click="openModalExclude = true"/>
                        </td>
                    </tr>

                    <tr>
                        <!-- <td data-label = "Id:">5</td> -->
                        <td class="name" data-label = "Nome:">A Revolução dos Bichos</td>
                        <td data-label = "Autor:">George Orwell</td>
                        <td data-label = "Data de Lançamento:">17/08/1945</td>
                        <td data-label = "Estoque:">6</td>
                        <td data-label = "Alugados:">1</td>
                        <td data-label = "Editora:">Companhia Editora Nacional</td>
                        <td data-label = "Ações:">
                            <q-btn flat round dense icon="edit" color="#121F2F" @click="openModalEdit = true"/>
                            <q-btn flat round dense icon="delete" color="#121F2F"  @click="openModalExclude = true"/>
                        </td>
                    </tr>
                </tbody>
            </table>
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
                        <q-input filled v-model="totalQuantity" type="number" label="Estoque" class="inputModal" :min="1"/>
                        <q-select filled v-model="publisher" :options="options" type="email" label="Editora" class="inputModal" />
                        <q-input filled v-model="launchDate" type="date" label="Data de lançamento" class="inputModal" />
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
                        <q-input filled v-model="totalQuantity" type="number" label="Estoque" class="inputModal" :min="1"/>
                        <q-select filled v-model="publisher" :options="options" type="email" label="Editora" class="inputModal" />
                        <q-input filled v-model="launchDate" type="date" label="Data de lançamento" class="inputModal" />
                    </slot>
                </q-card-section>


                <q-separator />
                <q-card-actions align="left">
                    <q-btn unelevated label="Atualizar" color="primary" @click="register" class="buttonRegister" />
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

    </q-page>
</template>

<script setup>
import { useCrud } from 'src/utils/books.js'

const { name, publisher, author, launchDate, totalQuantity, $q, openModalCreate, openModalEdit, openModalExclude } = useCrud()
</script>