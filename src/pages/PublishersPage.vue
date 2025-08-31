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
            <q-btn push label="+ Criar" class="addButton" />
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
                            <q-btn flat round dense icon="edit" color="#121F2F" />
                            <q-btn flat round dense icon="delete" color="#121F2F" />
                        </td>
                    </tr>

                    <tr>
                        <td class="nome" data-label="Nome:">Editora Aurora</td>
                        <td data-label="E-mail:">suporte@editoraaurora.com</td>
                        <td data-label="Telefone:">(21) 3344-5566</td>
                        <td data-label="Site:">www.editoraaurora.com</td>
                        <td data-label="Ações:">
                            <q-btn flat round dense icon="edit" color="#121F2F" />
                            <q-btn flat round dense icon="delete" color="#121F2F" />
                        </td>
                    </tr>

                    <tr>
                        <td class="nome" data-label="Nome:">Editora Estrela</td>
                        <td data-label="E-mail:">atendimento@editoraestrela.com</td>
                        <td data-label="Telefone:">(31) 9988-7766</td>
                        <td data-label="Site:">www.editoraestrela.com</td>
                        <td data-label="Ações:">
                            <q-btn flat round dense icon="edit" color="#121F2F" />
                            <q-btn flat round dense icon="delete" color="#121F2F" />
                        </td>
                    </tr>

                    <tr>
                        <td class="nome" data-label="Nome:">Editora Lumina</td>
                        <td data-label="E-mail:">info@editoralumina.com</td>
                        <td data-label="Telefone:">(41) 91234-5678</td>
                        <td data-label="Site:">www.editoralumina.com</td>
                        <td data-label="Ações:">
                            <q-btn flat round dense icon="edit" color="#121F2F" />
                            <q-btn flat round dense icon="delete" color="#121F2F" />
                        </td>
                    </tr>

                    <tr>
                        <td class="nome" data-label="Nome:">Editora Solaris</td>
                        <td data-label="E-mail:">contato@editorasolaris.com</td>
                        <td data-label="Telefone:">(85) 97654-3210</td>
                        <td data-label="Site:">www.editorasolaris.com</td>
                        <td data-label="Ações:">
                            <q-btn flat round dense icon="edit" color="#121F2F" />
                            <q-btn flat round dense icon="delete" color="#121F2F" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </q-page>
</template>