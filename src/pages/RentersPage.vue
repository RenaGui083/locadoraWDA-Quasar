<template>
    <q-page class="mainContainer">
        <div class="headerTitle">
            <q-icon name="person" />
            <!-- <h5>Biblioteca</h5> -->
            <header class="topTittle">Locatários</header>
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
                <header>Relação de locatários</header>
            </div>
            <table class="tableMain">
                <thead class="headerTable">
                    <!-- <td>Id</td> -->
                    <td class="nome">Nome</td>
                    <td>E-mail</td>
                    <td>Telefone</td>
                    <td>CPF</td>
                    <td>Ações</td>
                </thead>
                <tbody id="tbody">
                    <tr>
                        <td class="nome" data-label="Nome:">Marcos Oliveira</td>
                        <td data-label="E-mail:">marcos.oliveira@email.com</td>
                        <td data-label="Telefone:">(11) 99876-1234</td>
                        <td data-label="CPF:">123.456.789-00</td>
                        <td data-label="Ações:">
                            <q-btn flat round dense icon="edit" color="#121F2F" @click="openModalEdit = true" />
                            <q-btn flat round dense icon="visibility" color="#121F2F" @click="openModalView = true" />
                            <q-btn flat round dense icon="delete" color="#121F2F" @click="openModalExclude = true" />
                        </td>
                    </tr>

                    <tr>
                        <td class="nome" data-label="Nome:">Patrícia Gomes</td>
                        <td data-label="E-mail:">patricia.gomes@email.com</td>
                        <td data-label="Telefone:">(85) 91234-5678</td>
                        <td data-label="CPF:">987.654.321-11</td>
                        <td data-label="Ações:">
                            <q-btn flat round dense icon="edit" color="#121F2F" @click="openModalEdit = true" />
                            <q-btn flat round dense icon="visibility" color="#121F2F" @click="openModalView = true" />
                            <q-btn flat round dense icon="delete" color="#121F2F" @click="openModalExclude = true" />
                        </td>
                    </tr>

                    <tr>
                        <td class="nome" data-label="Nome:">Ricardo Santos</td>
                        <td data-label="E-mail:">ricardo.santos@email.com</td>
                        <td data-label="Telefone:">(21) 93456-7890</td>
                        <td data-label="CPF:">456.789.123-22</td>
                        <td data-label="Ações:">
                            <q-btn flat round dense icon="edit" color="#121F2F" @click="openModalEdit = true" />
                            <q-btn flat round dense icon="visibility" color="#121F2F" @click="openModalView = true" />
                            <q-btn flat round dense icon="delete" color="#121F2F" @click="openModalExclude = true" />
                        </td>
                    </tr>

                    <tr>
                        <td class="nome" data-label="Nome:">Juliana Almeida</td>
                        <td data-label="E-mail:">juliana.almeida@email.com</td>
                        <td data-label="Telefone:">(31) 97654-3210</td>
                        <td data-label="CPF:">741.852.963-33</td>
                        <td data-label="Ações:">
                            <q-btn flat round dense icon="edit" color="#121F2F" @click="openModalEdit = true" />
                            <q-btn flat round dense icon="visibility" color="#121F2F" @click="openModalView = true" />
                            <q-btn flat round dense icon="delete" color="#121F2F" @click="openModalExclude = true" />
                        </td>
                    </tr>

                    <tr>
                        <td class="nome" data-label="Nome:">Fernanda Rocha</td>
                        <td data-label="E-mail:">fernanda.rocha@email.com</td>
                        <td data-label="Telefone:">(41) 98765-4321</td>
                        <td data-label="CPF:">852.963.741-44</td>
                        <td data-label="Ações:">
                            <q-btn flat round dense icon="edit" color="#121F2F" @click="openModalEdit = true" />
                            <q-btn flat round dense icon="visibility" color="#121F2F" @click="openModalView = true" />
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

const { email, name, telephone, address, cpf, $q, openModalCreate, openModalEdit, openModalExclude, openModalView,  openModalConfirm } = useCrud()
</script>
