<template>
    <q-page class="mainContainer">
        <div class="headerTitle">
            <q-icon name="assignment" />
            <!-- <h5>Biblioteca</h5> -->
            <header class="topTittle">Aluguéis</header>
        </div>
        <div class="searchContainer">
            <div class="search" id="search">
                <label for="" class="searchInput">
                    <q-icon name="search" class="searchIcon" />
                </label>
                <input type="text" id="searchInput" placeholder="Pesquisar">
            </div>
            <q-btn push label="+ Criar" class="addButton" @click="openModalCreate = true" />
        </div>
        <div class="gridContainer">
            <div class="tableTittle">
                <header>Relação de aluguéis</header>
            </div>
            <table class="tableMain">
                <thead class="headerTable">
                    <!-- <td>Id</td> -->
                    <td class="nome">Livro</td>
                    <td>Locatário</td>
                    <td>Data de locação</td>
                    <td>Data de devolução</td>
                    <td>Status</td>
                    <td>Ações</td>
                </thead>
                <tbody id="tbody">
                    <tr>
                        <td class="name" data-label="Livro:">O Hobbit</td>
                        <td data-label="Locatário:">Ana Silva</td>
                        <td data-label="Data de locação:">10/08/2025</td>
                        <td data-label="Data de devolução:">17/08/2025</td>
                        <td data-label="Status:">Em andamento</td>
                        <td data-label="Ações:">
                            <q-btn flat round dense icon="edit" color="#121F2F" @click="openModalEdit = true" />
                            <q-btn flat round dense icon="check" color="#121F2F" @click="openModalDevolution = true" />
                        </td>
                    </tr>

                    <tr>
                        <td class="name" data-label="Livro:">O Código Da Vinci</td>
                        <td data-label="Locatário:">Bruno Costa</td>
                        <td data-label="Data de locação:">12/08/2025</td>
                        <td data-label="Data de devolução:">19/08/2025</td>
                        <td data-label="Status:">Em andamento</td>
                        <td data-label="Ações:">
                            <q-btn flat round dense icon="edit" color="#121F2F" @click="openModalEdit = true" />
                            <q-btn flat round dense icon="check" color="#121F2F" @click="openModalDevolution = true" />
                        </td>
                    </tr>

                    <tr>
                        <td class="name" data-label="Livro:">O Pequeno Príncipe</td>
                        <td data-label="Locatário:">Carla Mendes</td>
                        <td data-label="Data de locação:">15/08/2025</td>
                        <td data-label="Data de devolução:">22/08/2025</td>
                        <td data-label="Status:">Em andamento</td>
                        <td data-label="Ações:">
                            <q-btn flat round dense icon="edit" color="#121F2F" @click="openModalEdit = true" />
                            <q-btn flat round dense icon="check" color="#121F2F" @click="openModalDevolution = true" />
                        </td>
                    </tr>

                    <tr>
                        <td class="name" data-label="Livro:">A Menina que Roubava Livros</td>
                        <td data-label="Locatário:">Diego Ramos</td>
                        <td data-label="Data de locação:">18/08/2025</td>
                        <td data-label="Data de devolução:">25/08/2025</td>
                        <td data-label="Status:">Em andamento</td>
                        <td data-label="Ações:">
                            <q-btn flat round dense icon="edit" color="#121F2F" @click="openModalEdit = true" />
                            <q-btn flat round dense icon="check" color="#121F2F" @click="openModalDevolution = true" />
                        </td>
                    </tr>

                    <tr>
                        <td class="name" data-label="Livro:">Cem Anos de Solidão</td>
                        <td data-label="Locatário:">Elisa Martins</td>
                        <td data-label="Data de locação:">20/08/2025</td>
                        <td data-label="Data de devolução:">27/08/2025</td>
                        <td data-label="Status:">Em andamento</td>
                        <td data-label="Ações:">
                            <q-btn flat round dense icon="edit" color="#121F2F" @click="openModalEdit = true" />
                            <q-btn flat round dense icon="check" color="#121F2F" @click="openModalDevolution = true" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>



        <!-- Modals -->
        <q-dialog v-model="openModalCreate" persistent :maximized="$q.screen.lt.md">
            <q-card style="min-width: 400px; max-width: 95vw; max-height: 90vh;" class="mainModal">

                <q-card-section class="row items-center">
                    <div class="text-h5">Cadastrar Aluguel</div>
                    <q-space />
                    <q-btn icon="close" flat round dense v-close-popup class="closeIcon" />
                </q-card-section>

                <q-separator />

                <q-card-section class="scroll">
                    <slot>
                        <q-select filled v-model="book" :options="options" label="Livro" class="inputModal" />
                        <q-select filled v-model="renter" :options="options" label="Locatário" class="inputModal" />
                        <q-input filled v-model="deadLine" type="date" label="Data de devolução" class="inputModal" />
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
                    <div class="text-h5">Editar Aluguel</div>
                    <q-space />
                    <q-btn icon="close" flat round dense v-close-popup class="closeIcon" />
                </q-card-section>

                <q-separator />


                <q-card-section class="scroll">
                    <slot>
                        <q-select filled v-model="book" :options="options" label="Novo livro" class="inputModal"/>
                        <q-select filled v-model="renter" :options="options" label="Novo locatário"
                            class="inputModal" />
                        <q-input filled v-model="deadLine" type="date" label="Data de devolução" class="inputModal"  />
                        
                    </slot>
                </q-card-section>


                <q-separator />
                <q-card-actions align="left">
                    <q-btn unelevated label="Atualizar" color="primary" @click="openModalConfirm = true,openModalEdit = false" class="buttonRegister" />
                    <q-btn flat label="Cancelar" color="white" v-close-popup />
                </q-card-actions>

            </q-card>
        </q-dialog>



        <q-dialog v-model="openModalDevolution" persistent :maximized="$q.screen.lt.md">
            <q-card style="min-width: 400px; max-width: 95vw; max-height: 90vh;" class="mainModal">

                <q-card-section class="row items-center">
                    <div class="text-h5">Devolver o livro "[livro]" alugado por "[locatário]"?</div>
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
import { useCrud } from 'src/utils/rents.js'

const { renter, book, deadLine, $q, openModalCreate, openModalEdit, openModalDevolution, openModalConfirm } = useCrud()
</script>