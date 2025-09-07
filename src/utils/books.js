import { ref, watch } from 'vue'
import { useQuasar } from 'quasar'

export function useCrud() {
    const author = ref('')
    const name = ref('')
    const publisher = ref('')
    const launchDate = ref('')
    const totalQuantity = ref('')

    const $q = useQuasar()

    // estados dos modais
    const openModalCreate = ref(false)
    const openModalEdit = ref(false)
    const openModalExclude = ref(false)
    const openModalConfirm = ref(false)

    // pesquisa
    const filter = ref("")

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
        { name: "actions", label: "Ações", field: "actions", align: "center" }
    ]

    // mock rows
    const rows = ref([
        { name: "Dom Casmurro", publisher: "Editora Garnier", author: "Machado de Assis", launchDate: "1899-01-01", totalQuantity: 12 },
        { name: "O Alquimista", publisher: "HarperCollins", author: "Paulo Coelho", launchDate: "1988-01-01", totalQuantity: 8 },
        { name: "Capitães da Areia", publisher: "Companhia das Letras", author: "Jorge Amado", launchDate: "1937-01-01", totalQuantity: 6 },
        { name: "Grande Sertão: Veredas", publisher: "Livraria José Olympio Editora", author: "João Guimarães Rosa", launchDate: "1956-01-01", totalQuantity: 4 },
        { name: "Harry Potter e a Pedra Filosofal", publisher: "Rocco", author: "J.K. Rowling", launchDate: "1997-06-26", totalQuantity: 10 },
        { name: "O Senhor dos Anéis: A Sociedade do Anel", publisher: "Martins Fontes", author: "J.R.R. Tolkien", launchDate: "1954-07-29", totalQuantity: 9 },
        { name: "A Revolução dos Bichos", publisher: "Companhia Editora Nacional", author: "George Orwell", launchDate: "1945-08-17", totalQuantity: 7 }
    ])
    return {
        // inputs
        name, publisher, author, launchDate, totalQuantity,

        // quasar e estados
        $q, openModalCreate, openModalEdit, openModalExclude, openModalConfirm,

        // tabela
        filter, pagination, columns, rows
    }
}