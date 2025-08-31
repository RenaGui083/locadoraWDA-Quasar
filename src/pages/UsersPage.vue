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
            <q-btn push label="+ Criar" class="addButton" />
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
                            <q-btn flat round dense icon="edit" color="#121F2F" />
                            <q-btn flat round dense icon="visibility" color="#121F2F" />
                            <q-btn flat round dense icon="delete" color="#121F2F" />
                        </td>
                    </tr>

                    <tr>
                        <td class="nome" data-label="Nome:">João Pereira</td>
                        <td data-label="E-mail:">joao.pereira@email.com</td>
                        <td data-label="Nível de acesso:">Administrador</td>
                        <td data-label="Ações:">
                            <q-btn flat round dense icon="edit" color="#121F2F" />
                            <q-btn flat round dense icon="visibility" color="#121F2F" />
                            <q-btn flat round dense icon="delete" color="#121F2F" />
                        </td>
                    </tr>

                    <tr>
                        <td class="nome" data-label="Nome:">Ana Costa</td>
                        <td data-label="E-mail:">ana.costa@email.com</td>
                        <td data-label="Nível de acesso:">Usuário</td>
                        <td data-label="Ações:">
                            <q-btn flat round dense icon="edit" color="#121F2F" />
                            <q-btn flat round dense icon="visibility" color="#121F2F" />
                            <q-btn flat round dense icon="delete" color="#121F2F" />
                        </td>
                    </tr>

                    <tr>
                        <td class="nome" data-label="Nome:">Carlos Mendes</td>
                        <td data-label="E-mail:">carlos.mendes@email.com</td>
                        <td data-label="Nível de acesso:">Administrador</td>
                        <td data-label="Ações:">
                            <q-btn flat round dense icon="edit" color="#121F2F" />
                            <q-btn flat round dense icon="visibility" color="#121F2F" />
                            <q-btn flat round dense icon="delete" color="#121F2F" />
                        </td>
                    </tr>

                    <tr>
                        <td class="nome" data-label="Nome:">Fernanda Lima</td>
                        <td data-label="E-mail:">fernanda.lima@email.com</td>
                        <td data-label="Nível de acesso:">Usuário</td>
                        <td data-label="Ações:">
                            <q-btn flat round dense icon="edit" color="#121F2F" />
                            <q-btn flat round dense icon="visibility" color="#121F2F" />
                            <q-btn flat round dense icon="delete" color="#121F2F" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </q-page>
</template>