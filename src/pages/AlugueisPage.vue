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
            <q-btn push label="+ Criar" class="addButton" />
        </div>
        <div class="gridContainer">
            <div class="tableTittle">
                <header>Acervo atual</header>
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
                            <q-btn flat round dense icon="edit" color="#121F2F" />
                            <q-btn flat round dense icon="check" color="#121F2F" />
                        </td>
                    </tr>

                    <tr>
                        <td class="name" data-label="Livro:">O Código Da Vinci</td>
                        <td data-label="Locatário:">Bruno Costa</td>
                        <td data-label="Data de locação:">12/08/2025</td>
                        <td data-label="Data de devolução:">19/08/2025</td>
                        <td data-label="Status:">Em andamento</td>
                        <td data-label="Ações:">
                            <q-btn flat round dense icon="edit" color="#121F2F" />
                            <q-btn flat round dense icon="check" color="#121F2F" />
                        </td>
                    </tr>

                    <tr>
                        <td class="name" data-label="Livro:">O Pequeno Príncipe</td>
                        <td data-label="Locatário:">Carla Mendes</td>
                        <td data-label="Data de locação:">15/08/2025</td>
                        <td data-label="Data de devolução:">22/08/2025</td>
                        <td data-label="Status:">Em andamento</td>
                        <td data-label="Ações:">
                            <q-btn flat round dense icon="edit" color="#121F2F" />
                            <q-btn flat round dense icon="check" color="#121F2F" />
                        </td>
                    </tr>

                    <tr>
                        <td class="name" data-label="Livro:">A Menina que Roubava Livros</td>
                        <td data-label="Locatário:">Diego Ramos</td>
                        <td data-label="Data de locação:">18/08/2025</td>
                        <td data-label="Data de devolução:">25/08/2025</td>
                        <td data-label="Status:">Em andamento</td>
                        <td data-label="Ações:">
                            <q-btn flat round dense icon="edit" color="#121F2F" />
                            <q-btn flat round dense icon="check" color="#121F2F" />
                        </td>
                    </tr>

                    <tr>
                        <td class="name" data-label="Livro:">Cem Anos de Solidão</td>
                        <td data-label="Locatário:">Elisa Martins</td>
                        <td data-label="Data de locação:">20/08/2025</td>
                        <td data-label="Data de devolução:">27/08/2025</td>
                        <td data-label="Status:">Em andamento</td>
                        <td data-label="Ações:">
                            <q-btn flat round dense icon="edit" color="#121F2F" />
                            <q-btn flat round dense icon="check" color="#121F2F" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </q-page>
</template>