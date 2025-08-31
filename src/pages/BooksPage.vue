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
            <q-btn push label="+ Criar" class="addButton" />
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
                            <q-btn flat round dense icon="edit" color="#121F2F" />
                            <q-btn flat round dense icon="delete" color="#121F2F" />
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
                            <q-btn flat round dense icon="edit" color="#121F2F" />
                            <q-btn flat round dense icon="delete" color="#121F2F" />
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
                            <q-btn flat round dense icon="edit" color="#121F2F" />
                            <q-btn flat round dense icon="delete" color="#121F2F" />
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
                            <q-btn flat round dense icon="edit" color="#121F2F" />
                            <q-btn flat round dense icon="delete" color="#121F2F" />
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
                            <q-btn flat round dense icon="edit" color="#121F2F" />
                            <q-btn flat round dense icon="delete" color="#121F2F" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </q-page>
</template>