import { ref, watch } from 'vue'
import { useQuasar } from 'quasar'
import { useI18n } from 'vue-i18n'
import i18n from 'src/i18n';

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

    const { t } = useI18n()
    const { locale } = useI18n()


    // pesquisa
    const filter = ref("")

    // paginação
    const pagination = ref({
        page: 1,
        rowsPerPage: $q.screen.lt.md ? 0 : 5
    })

    watch(() => $q.screen.lt.md, (isMobile) => {
        pagination.value.rowsPerPage = isMobile ? 0 : 5
    })

    // colunas
    const columns = [
        { name: "name", label: t('library.table.name'), field: "name", align: "left", sortable: true },
        { name: "publisher", label: t('library.table.publisher'), field: "publisher", align: "left", sortable: true },
        { name: "author", label: t('library.table.author'), field: "author", align: "left", sortable: true },
        { name: "launchDate", label: t('library.table.launchDate'), field: "launchDate", align: "left", sortable: true },
        { name: "totalQuantity", label: t('library.table.totalQuantity'), field: "totalQuantity", align: "left", sortable: true },
        { name: "totalInUse", label: t('library.table.totalInUse'), field: "totalInUse", align: "left", sortable: true },
        { name: "actions", label: t('library.table.actions'), field: "actions", align: "center", filter: false }
    ]

    const paginationLabel = (start, end, total) => `${start} - ${end} ${t('tables.of')} ${total}`

    // mock rows
    const rows = ref([
            { name: "Dom Casmurro", publisher: "Editora Garnier", author: "Machado de Assis", launchDate: "1899-01-01", totalQuantity: 12, totalInUse: 3 },
            { name: "O Alquimista", publisher: "HarperCollins", author: "Paulo Coelho", launchDate: "1988-01-01", totalQuantity: 8, totalInUse: 2 },
            { name: "Capitães da Areia", publisher: "Companhia das Letras", author: "Jorge Amado", launchDate: "1937-01-01", totalQuantity: 6, totalInUse: 1 },
            { name: "Grande Sertão: Veredas", publisher: "Livraria José Olympio Editora", author: "João Guimarães Rosa", launchDate: "1956-01-01", totalQuantity: 4, totalInUse: 1 },
            { name: "Harry Potter e a Pedra Filosofal", publisher: "Rocco", author: "J.K. Rowling", launchDate: "1997-06-26", totalQuantity: 10, totalInUse: 4 },
            { name: "O Senhor dos Anéis: A Sociedade do Anel", publisher: "Martins Fontes", author: "J.R.R. Tolkien", launchDate: "1954-07-29", totalQuantity: 9, totalInUse: 3 },
            { name: "A Revolução dos Bichos", publisher: "Companhia Editora Nacional", author: "George Orwell", launchDate: "1945-08-17", totalQuantity: 7, totalInUse: 2 }
    ])
    return {
        // inputs
        name, publisher, author, launchDate, totalQuantity,

        // quasar e estados
        $q, openModalCreate, openModalEdit, openModalExclude, openModalConfirm, t, i18n, locale,

        // tabela
        filter, pagination, columns, rows, paginationLabel
    }
}