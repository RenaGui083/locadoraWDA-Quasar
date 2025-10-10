import { ref, watch, computed, onMounted } from 'vue'
import { useQuasar } from 'quasar'
import { useI18n } from 'vue-i18n'
import i18n from 'src/i18n';
import { storeToRefs } from 'pinia'
import { useBookStore } from 'src/stores/booksStore'

export function useCrud() {
    const booksStore = useBookStore()
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

    const { books, loading, error, fetchBooksTable } = storeToRefs(booksStore)


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
    const columns = computed(() => [
        { name: "name", label: t('library.table.name'), field: "name", align: "left", sortable: true },
        { name: "publisher", label: t('library.table.publisher'), field: "publisher", align: "left", sortable: true },
        { name: "author", label: t('library.table.author'), field: "author", align: "left", sortable: true },
        { name: "launchDate", label: t('library.table.launchDate'), field: "launchDate", align: "left", sortable: true },
        { name: "totalQuantity", label: t('library.table.totalQuantity'), field: "totalQuantity", align: "left", sortable: true },
        { name: "totalInUse", label: t('library.table.totalInUse'), field: "totalInUse", align: "left", sortable: true },
        { name: "actions", label: t('library.table.actions'), field: "actions", align: "center", filter: false }
    ])

    const paginationLabel = (start, end, total) => `${start} - ${end} ${t('tables.of')} ${total}`

    //get publishers on load
    
        onMounted(async () => {
            try {
                await booksStore.fetchBooks()
                console.log('Books fetched on mount')
            } catch (error) {
                console.log(error)('Failed to fetch Books on mount')
            }
        })
    
    return {
        // inputs
        name, publisher, author, launchDate, totalQuantity, fetchBooksTable,

        // quasar e estados
        $q, openModalCreate, openModalEdit, openModalExclude, openModalConfirm, t, i18n, locale,

        // tabela
        filter, pagination, columns, paginationLabel, books, loading, error
    }
}