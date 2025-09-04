<template>
    <q-page class="mainContainer">
        <div class="headerTitle">
            <q-icon name="edit" />
            <!-- <h5>Biblioteca</h5> -->
            <header class="topTittle">Editoras</header>
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
                <header>Relação de editoras</header>
            </div>
            <table class="tableMain">
                <thead class="headerTable">
                    <!-- <td>Id</td> -->
                    <td class="nome">Nome</td>
                    <td>E-mail</td>
                    <td>Telefone</td>
                    <td>Site</td>
                    <td>Ações</td>
                </thead>
                <tbody id="tbody">
                    <tr>
                        <td class="nome" data-label="Nome:">Editora Horizonte</td>
                        <td data-label="E-mail:">contato@editorahorizonte.com</td>
                        <td data-label="Telefone:">(11) 3456-7890</td>
                        <td data-label="Site:">www.editorahorizonte.com</td>
                        <td data-label="Ações:">
                            <q-btn flat round dense icon="edit" color="#121F2F" @click="openModalEdit = true" />
                            <q-btn flat round dense icon="delete" color="#121F2F" @click="openModalExclude = true" />
                        </td>
                    </tr>

                    <tr>
                        <td class="nome" data-label="Nome:">Editora Aurora</td>
                        <td data-label="E-mail:">suporte@editoraaurora.com</td>
                        <td data-label="Telefone:">(21) 3344-5566</td>
                        <td data-label="Site:">www.editoraaurora.com</td>
                        <td data-label="Ações:">
                            <q-btn flat round dense icon="edit" color="#121F2F" @click="openModalEdit = true" />
                            <q-btn flat round dense icon="delete" color="#121F2F" @click="openModalExclude = true" />
                        </td>
                    </tr>

                    <tr>
                        <td class="nome" data-label="Nome:">Editora Estrela</td>
                        <td data-label="E-mail:">atendimento@editoraestrela.com</td>
                        <td data-label="Telefone:">(31) 9988-7766</td>
                        <td data-label="Site:">www.editoraestrela.com</td>
                        <td data-label="Ações:">
                            <q-btn flat round dense icon="edit" color="#121F2F" @click="openModalEdit = true" />
                            <q-btn flat round dense icon="delete" color="#121F2F" @click="openModalExclude = true" />
                        </td>
                    </tr>

                    <tr>
                        <td class="nome" data-label="Nome:">Editora Lumina</td>
                        <td data-label="E-mail:">info@editoralumina.com</td>
                        <td data-label="Telefone:">(41) 91234-5678</td>
                        <td data-label="Site:">www.editoralumina.com</td>
                        <td data-label="Ações:">
                            <q-btn flat round dense icon="edit" color="#121F2F" @click="openModalEdit = true" />
                            <q-btn flat round dense icon="delete" color="#121F2F" @click="openModalExclude = true" />
                        </td>
                    </tr>

                    <tr>
                        <td class="nome" data-label="Nome:">Editora Solaris</td>
                        <td data-label="E-mail:">contato@editorasolaris.com</td>
                        <td data-label="Telefone:">(85) 97654-3210</td>
                        <td data-label="Site:">www.editorasolaris.com</td>
                        <td data-label="Ações:">
                            <q-btn flat round dense icon="edit" color="#121F2F" @click="openModalEdit = true" />
                            <q-btn flat round dense icon="delete" color="#121F2F" @click="openModalExclude = true" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>


        <!-- Modals -->
        <q-dialog v-model="openModalCreate" persistent :maximized="$q.screen.lt.md">
            <q-card style="min-width: 400px; max-width: 95vw; max-height: 90vh;" class="mainModal">

                <q-card-section class="row items-center">
                    <div class="text-h5">Cadastrar Editora</div>
                    <q-space />
                    <q-btn icon="close" flat round dense v-close-popup class="closeIcon" />
                </q-card-section>

                <q-separator />


                <q-card-section class="scroll">
                    <slot>
                        <q-input filled v-model="name" type="text" label="Nome" class="inputModal" />
                        <q-input filled v-model="email" type="email" label="Email" class="inputModal" />
                        <q-input filled v-model="telephone" type="text" label="Telefone" class="inputModal" />
                        <q-input filled v-model="site" type="text" label="Site" class="inputModal" />

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
                    <div class="text-h5">Editar Editora</div>
                    <q-space />
                    <q-btn icon="close" flat round dense v-close-popup class="closeIcon" />
                </q-card-section>

                <q-separator />


                <q-card-section class="scroll">
                    <slot>
                        <q-input filled v-model="name" type="text" label="Nome" class="inputModal" />
                        <q-input filled v-model="email" type="email" label="Email" class="inputModal" />
                        <q-input filled v-model="telephone" type="text" label="Telefone" class="inputModal" />
                        <q-input filled v-model="site" type="text" label="Site" class="inputModal" />
                    </slot>
                </q-card-section>


                <q-separator />
                <q-card-actions align="left">
                    <q-btn unelevated label="Atualizar" color="primary"  @click="openModalConfirm = true,openModalEdit = false" class="buttonRegister" />
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
import { useCrud } from 'src/utils/publishers.js'

const { email, name, telephone, site, $q, openModalCreate, openModalEdit, openModalExclude, openModalConfirm } = useCrud()
</script>