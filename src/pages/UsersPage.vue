<template>
    <q-page class="mainContainer">
        <div class="headerTitle">
            <q-icon name="badge" />
            <!-- <h5>Biblioteca</h5> -->
            <header class="topTittle">Usuários</header>
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
                <header>Relação de usuários</header>
            </div>
            <table class="tableMain">
                <thead class="headerTable">
                    <!-- <td>Id</td> -->
                    <td class="nome">Nome</td>
                    <td>E-mail</td>
                    <td>Nível de acesso</td>
                    <td>Ações</td>
                </thead>
                <tbody id="tbody">
                    <tr>
                        <td class="nome" data-label="Nome:">Maria Silva</td>
                        <td data-label="E-mail:">maria.silva@email.com</td>
                        <td data-label="Nível de acesso:">Usuário</td>
                        <td data-label="Ações:">
                            <q-btn flat round dense icon="edit" color="#121F2F" @click="openModalEdit = true" />
                            <q-btn flat round dense icon="visibility" color="#121F2F" @click="openModalView = true" />
                            <q-btn flat round dense icon="delete" color="#121F2F"  @click="openModalExclude = true"  />
                        </td>
                    </tr>

                    <tr>
                        <td class="nome" data-label="Nome:">João Pereira</td>
                        <td data-label="E-mail:">joao.pereira@email.com</td>
                        <td data-label="Nível de acesso:">Administrador</td>
                        <td data-label="Ações:">
                            <q-btn flat round dense icon="edit" color="#121F2F" @click="openModalEdit = true" />
                            <q-btn flat round dense icon="visibility" color="#121F2F" @click="openModalView = true"/>
                            <q-btn flat round dense icon="delete" color="#121F2F"  @click="openModalExclude = true"  />
                        </td>
                    </tr>

                    <tr>
                        <td class="nome" data-label="Nome:">Ana Costa</td>
                        <td data-label="E-mail:">ana.costa@email.com</td>
                        <td data-label="Nível de acesso:">Usuário</td>
                        <td data-label="Ações:">
                            <q-btn flat round dense icon="edit" color="#121F2F" @click="openModalEdit = true" />
                            <q-btn flat round dense icon="visibility" color="#121F2F" @click="openModalView = true" />
                            <q-btn flat round dense icon="delete" color="#121F2F"  @click="openModalExclude = true" />
                        </td>
                    </tr>

                    <tr>
                        <td class="nome" data-label="Nome:">Carlos Mendes</td>
                        <td data-label="E-mail:">carlos.mendes@email.com</td>
                        <td data-label="Nível de acesso:">Administrador</td>
                        <td data-label="Ações:">
                            <q-btn flat round dense icon="edit" color="#121F2F" @click="openModalEdit = true" />
                            <q-btn flat round dense icon="visibility" color="#121F2F" @click="openModalView = true" />
                            <q-btn flat round dense icon="delete" color="#121F2F"  @click="openModalExclude = true"  />
                        </td>
                    </tr>

                    <tr>
                        <td class="nome" data-label="Nome:">Fernanda Lima</td>
                        <td data-label="E-mail:">fernanda.lima@email.com</td>
                        <td data-label="Nível de acesso:">Usuário</td>
                        <td data-label="Ações:">
                            <q-btn flat round dense icon="edit" color="#121F2F" @click="openModalEdit = true" />
                            <q-btn flat round dense icon="visibility" color="#121F2F" @click="openModalView = true"/>
                            <q-btn flat round dense icon="delete" color="#121F2F"  @click="openModalExclude = true" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>


        <!-- Modals -->
        <q-dialog v-model="openModalCreate" persistent :maximized="$q.screen.lt.md">
            <q-card style="min-width: 400px; max-width: 95vw; max-height: 90vh;" class="mainModal">

                <q-card-section class="row items-center">
                    <div class="text-h5">Cadastrar Usuário</div>
                    <q-space />
                    <q-btn icon="close" flat round dense v-close-popup class="closeIcon" />
                </q-card-section>

                <q-separator />


                <q-card-section class="scroll">
                    <slot>
                        <q-input filled v-model="name" type="text" label="Nome" class="inputModal" />
                        <q-input filled v-model="email" type="email" label="Email" class="inputModal" />
                        <q-input filled v-model="password" type="password" label="Senha" class="inputModal" />
                        <div class="q-pa-lg radio-container">
                            <q-option-group v-model="role" :options="options" color="primary" inline class="radio" />
                        </div>
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
                    <div class="text-h5">Editar Usuário</div>
                    <q-space />
                    <q-btn icon="close" flat round dense v-close-popup class="closeIcon" />
                </q-card-section>

                <q-separator />


                <q-card-section class="scroll">
                    <slot>
                        <q-input filled v-model="name" type="text" label="Nome" class="inputModal" />
                        <q-input filled v-model="email" type="email" label="Email" class="inputModal" />
                        <q-input filled v-model="password" type="password" label="Senha" class="inputModal" />
                        <div class="q-pa-lg radio-container">
                            <q-option-group v-model="role" :options="options" color="primary" inline class="radio" />
                        </div>
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
                    <div class="text-h5">Detalhes do Usuário</div>
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
                            <q-icon name="work" class="viewFont" />
                        </template>

                        <template v-slot:control>
                            <div class="viewFont" tabindex="0">{{ "Nível de acesso: " + "" }}</div>
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
import { useCrud } from 'src/utils/users.js'


const { email, name, password, role, $q, openModalCreate, openModalEdit, openModalExclude, openModalView, options, openModalConfirm} = useCrud()
</script>